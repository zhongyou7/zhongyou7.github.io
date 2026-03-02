let pyodide;
let editor;
let executionSteps = [];
let currentStep = 0;
let isRunning = false;

// 初始化 Pyodide
async function initPyodide() {
    pyodide = await loadPyodide();
    console.log("Pyodide 加载完成");
    
    // 加载自定义追踪模块
    await pyodide.runPythonAsync(`
        import sys
        import json
        import builtins
        
        class ExecutionTracer:
            def __init__(self):
                self.steps = []
                self.current_step = 0
                
            def trace_calls(self, frame, event, arg):
                # 捕获执行状态
                if event == 'line':
                    step_info = {
                        'step': self.current_step,
                        'line': frame.f_lineno,
                        'code': frame.f_code.co_name,
                        'locals': self.serialize_locals(frame.f_locals),
                        'globals': self.serialize_globals(frame.f_globals),
                        'stack_depth': self.get_stack_depth(frame)
                    }
                    self.steps.append(step_info)
                    self.current_step += 1
                return self.trace_calls
            
            def serialize_locals(self, locals_dict):
                """序列化局部变量，处理循环引用"""
                result = {}
                for name, value in locals_dict.items():
                    if not name.startswith('__'):
                        result[name] = self.serialize_value(value)
                return result
            
            def serialize_value(self, value, depth=0):
                """递归序列化值，限制深度"""
                if depth > 3:
                    return {"type": "ellipsis", "repr": "..."}
                
                try:
                    if value is None:
                        return {"type": "None", "repr": "None"}
                    elif isinstance(value, (int, float, str, bool)):
                        return {"type": type(value).__name__, "repr": repr(value)}
                    elif isinstance(value, (list, tuple)):
                        return {
                            "type": "list",
                            "repr": repr(value[:20]) + ("..." if len(value) > 20 else ""),
                            "items": [self.serialize_value(item, depth+1) for item in value[:10]]
                        }
                    elif isinstance(value, dict):
                        return {
                            "type": "dict",
                            "repr": f"dict({len(value)} items)",
                            "items": {k: self.serialize_value(v, depth+1) 
                                     for k, v in list(value.items())[:10]}
                        }
                    elif hasattr(value, '__class__'):
                        return {
                            "type": "object",
                            "class": value.__class__.__name__,
                            "repr": repr(value)[:100]
                        }
                    else:
                        return {"type": "unknown", "repr": str(value)[:100]}
                except:
                    return {"type": "error", "repr": "无法序列化"}
            
            def get_stack_depth(self, frame):
                depth = 0
                current = frame
                while current:
                    depth += 1
                    current = current.f_back
                return depth
            
            def serialize_globals(self, globals_dict):
                # 过滤掉内置模块和追踪器本身
                return {k: self.serialize_value(v) 
                        for k, v in globals_dict.items() 
                        if not k.startswith('__') and k not in ['sys', 'json', 'builtins', 'ExecutionTracer']}
        
        # 创建全局追踪器实例
        tracer = ExecutionTracer()
    `);
}

// 初始化 Monaco Editor
function initEditor() {
    require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }});
    
    require(['vs/editor/editor.main'], function() {
        editor = monaco.editor.create(document.getElementById('editor'), {
            value: `# 在这里编写 Python 代码
x = [1, 2, 3]
y = {"name": "Alice", "age": 25}

def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

result = factorial(3)
print(result)`,
            language: 'python',
            theme: 'vs-light',
            automaticLayout: true,
            minimap: { enabled: false }
        });
    });
}

// 运行代码并捕获执行步骤
async function runCode() {
    const code = editor.getValue();
    executionSteps = [];
    currentStep = 0;
    
    try {
        // 设置追踪器
        await pyodide.runPythonAsync(`
            tracer.steps = []
            tracer.current_step = 0
            sys.settrace(tracer.trace_calls)
        `);
        
        // 运行用户代码
        await pyodide.runPythonAsync(code);
        
        // 关闭追踪
        await pyodide.runPythonAsync(`
            sys.settrace(None)
        `);
        
        // 获取执行步骤
        const steps = await pyodide.runPythonAsync(`json.dumps(tracer.steps)`);
        executionSteps = JSON.parse(steps);
        
        console.log(`捕获了 ${executionSteps.length} 个执行步骤`);
        visualizeStep(0);
        
    } catch (error) {
        console.error("执行错误:", error);
        alert("代码执行错误: " + error.message);
    }
}

// 可视化当前步骤
function visualizeStep(stepIndex) {
    if (stepIndex < 0 || stepIndex >= executionSteps.length) return;
    
    const step = executionSteps[stepIndex];
    const container = d3.select("#visualization");
    container.html(""); // 清空
    
    // 高亮当前行
    if (editor) {
        editor.revealLineInCenter(step.line);
        editor.deltaDecorations([], [{
            range: new monaco.Range(step.line, 1, step.line, 1),
            options: { isWholeLine: true, className: 'currentLine' }
        }]);
    }
    
    // 创建可视化 SVG
    const svg = container.append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", "0 0 800 600");
    
    // 绘制堆栈帧
    drawStackFrame(svg, step, 50, 50);
    
    // 绘制变量
    drawVariables(svg, step.locals, 300, 50);
    
    // 显示步骤信息
    svg.append("text")
        .attr("x", 50)
        .attr("y", 30)
        .text(`步骤 ${step.step + 1}/${executionSteps.length} | 第 ${step.line} 行`)
        .attr("font-size", "14px")
        .attr("fill", "#333");
}

// 绘制堆栈帧
function drawStackFrame(svg, step, x, y) {
    const g = svg.append("g").attr("transform", `translate(${x},${y})`);
    
    // 帧背景
    g.append("rect")
        .attr("width", 200)
        .attr("height", 60)
        .attr("fill", "#e3f2fd")
        .attr("stroke", "#2196f3")
        .attr("rx", 5);
    
    // 函数名
    g.append("text")
        .attr("x", 10)
        .attr("y", 25)
        .text(`函数: ${step.code}`)
        .attr("font-weight", "bold");
    
    // 行号
    g.append("text")
        .attr("x", 10)
        .attr("y", 45)
        .text(`行号: ${step.line}`)
        .attr("fill", "#666");
}

// 绘制变量（递归渲染复杂对象）
function drawVariables(svg, locals, x, y) {
    const g = svg.append("g").attr("transform", `translate(${x},${y})`);
    
    let offsetY = 0;
    for (const [name, info] of Object.entries(locals)) {
        const varG = g.append("g").attr("transform", `translate(0,${offsetY})`);
        
        // 变量名
        varG.append("text")
            .attr("x", 0)
            .attr("y", 15)
            .text(`${name} =`)
            .attr("font-weight", "bold");
        
        // 根据类型绘制不同形状
        drawValue(varG, info, 80, 0);
        
        offsetY += 50;
    }
}

// 递归绘制值
function drawValue(g, info, x, y) {
    const colors = {
        'int': '#c8e6c9',
        'float': '#c8e6c9',
        'str': '#ffccbc',
        'bool': '#fff9c4',
        'list': '#e1bee7',
        'dict': '#b2dfdb',
        'object': '#f5f5f5'
    };
    
    const color = colors[info.type] || '#f5f5f5';
    
    if (info.type === 'list' && info.items) {
        // 绘制数组
        const box = g.append("g").attr("transform", `translate(${x},${y})`);
        
        info.items.forEach((item, i) => {
            const itemG = box.append("g").attr("transform", `translate(${i * 60},0)`);
            itemG.append("rect")
                .attr("width", 50)
                .attr("height", 30)
                .attr("fill", color)
                .attr("stroke", "#666");
            itemG.append("text")
                .attr("x", 25)
                .attr("y", 20)
                .attr("text-anchor", "middle")
                .text(item.repr.substring(0, 8));
        });
    } else {
        // 简单值
        g.append("rect")
            .attr("x", x)
            .attr("y", y)
            .attr("width", 120)
            .attr("height", 30)
            .attr("fill", color)
            .attr("stroke", "#666")
            .attr("rx", 3);
        
        g.append("text")
            .attr("x", x + 60)
            .attr("y", y + 20)
            .attr("text-anchor", "middle")
            .text(info.repr.substring(0, 15));
    }
}

// 控制函数
function stepForward() {
    if (currentStep < executionSteps.length - 1) {
        currentStep++;
        visualizeStep(currentStep);
    }
}

function stepBackward() {
    if (currentStep > 0) {
        currentStep--;
        visualizeStep(currentStep);
    }
}

function reset() {
    currentStep = 0;
    visualizeStep(0);
}

// 初始化
window.onload = async () => {
    await initPyodide();
    initEditor();
};
