/*
 * tools.js — 工具箱（零依赖，纯前端）
 * 四个小工具：时间戳转换 / 密码生成 / Base64 编解码 / 哈希（Web Crypto）
 * 主题：依赖 ../theme.js 给 <html> 加 .dark，配色走 main.css 变量
 */
(function () {
  'use strict';

  // ---------- 标签切换 ----------
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.forEach(function (x) { x.classList.remove('active'); });
      t.classList.add('active');
      document.querySelectorAll('.panel').forEach(function (p) { p.classList.add('hidden'); });
      document.getElementById('panel-' + t.dataset.tab).classList.remove('hidden');
    });
  });

  // ---------- 通用复制 ----------
  function copy(text, btn) {
    if (!text) return;
    function done() {
      if (btn) { var o = btn.textContent; btn.textContent = '已复制'; setTimeout(function () { btn.textContent = o; }, 1200); }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () { fallback(text); done(); });
    } else { fallback(text); done(); }
  }
  function fallback(text) {
    var ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }
  function pad(n) { return String(n).padStart(2, '0'); }
  function toLocalInput(d) {
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) +
      'T' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  }

  // ---------- 时间戳 ----------
  var tsUnix = document.getElementById('ts-unix');
  var tsDt = document.getElementById('ts-datetime');
  var tsLocal = document.getElementById('ts-local');
  var tsUtc = document.getElementById('ts-utc');
  var tsIso = document.getElementById('ts-iso');
  function tsUnit() {
    var u = document.querySelector('input[name=ts-unit]:checked');
    return u && u.value === 'ms' ? 1 : 1000;
  }
  function tsRender(date) {
    if (isNaN(date.getTime())) { tsLocal.textContent = tsUtc.textContent = tsIso.textContent = ''; return; }
    tsLocal.textContent = date.toLocaleString();
    tsUtc.textContent = date.toUTCString();
    tsIso.textContent = date.toISOString();
  }
  tsUnix.addEventListener('input', function () {
    var v = parseFloat(tsUnix.value);
    if (isNaN(v)) { tsRender(new Date(NaN)); return; }
    var date = new Date(v * tsUnit());
    tsDt.value = toLocalInput(date);
    tsRender(date);
  });
  tsDt.addEventListener('input', function () {
    if (!tsDt.value) { tsRender(new Date(NaN)); return; }
    var date = new Date(tsDt.value);
    if (isNaN(date.getTime())) { tsRender(new Date(NaN)); return; }
    var ms = date.getTime();
    tsUnix.value = tsUnit() === 1000 ? Math.floor(ms / 1000) : ms;
    tsRender(date);
  });
  document.getElementById('ts-now').addEventListener('click', function () {
    var date = new Date();
    tsDt.value = toLocalInput(date);
    tsUnix.value = tsUnit() === 1000 ? Math.floor(date.getTime() / 1000) : date.getTime();
    tsRender(date);
  });
  document.querySelectorAll('input[name=ts-unit]').forEach(function (r) {
    r.addEventListener('change', function () {
      if (tsDt.value) tsDt.dispatchEvent(new Event('input'));
      else if (tsUnix.value) tsUnix.dispatchEvent(new Event('input'));
    });
  });

  // ---------- 密码生成 ----------
  var pwLen = document.getElementById('pw-len');
  var pwLenVal = document.getElementById('pw-len-val');
  var pwOut = document.getElementById('pw-out');
  var pwStrength = document.getElementById('pw-strength');
  pwLen.addEventListener('input', function () { pwLenVal.textContent = pwLen.value; });
  function randIndex(n) {
    var max = Math.floor(256 / n) * n, a = new Uint8Array(1), x;
    do { crypto.getRandomValues(a); x = a[0]; } while (x >= max);
    return x % n;
  }
  function genPw() {
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', lower = 'abcdefghijklmnopqrstuvwxyz',
      digit = '0123456789', sym = '!@#$%^&*()-_=+[]{};:,.<>?';
    var pool = '';
    if (document.getElementById('pw-upper').checked) pool += upper;
    if (document.getElementById('pw-lower').checked) pool += lower;
    if (document.getElementById('pw-digit').checked) pool += digit;
    if (document.getElementById('pw-sym').checked) pool += sym;
    if (!pool) { pwOut.value = '请至少选择一种字符'; pwStrength.textContent = '—'; return; }
    var len = parseInt(pwLen.value, 10), s = '';
    for (var i = 0; i < len; i++) s += pool[randIndex(pool.length)];
    pwOut.value = s;
    var bits = Math.round(len * Math.log2(pool.length));
    var label = bits < 40 ? '弱' : bits < 60 ? '中' : bits < 80 ? '强' : '很强';
    pwStrength.textContent = label + '（约 ' + bits + ' bit 熵）';
  }
  document.getElementById('pw-gen').addEventListener('click', genPw);
  document.getElementById('pw-copy').addEventListener('click', function () { copy(pwOut.value, this); });
  genPw();

  // ---------- Base64 ----------
  var b64In = document.getElementById('b64-in');
  var b64Out = document.getElementById('b64-out');
  function b64enc(str) {
    var bytes = new TextEncoder().encode(str), bin = '';
    bytes.forEach(function (b) { bin += String.fromCharCode(b); });
    return btoa(bin);
  }
  function b64dec(b64) {
    var bin = atob(b64.trim());
    var bytes = Uint8Array.from(bin, function (c) { return c.charCodeAt(0); });
    return new TextDecoder().decode(bytes);
  }
  document.getElementById('b64-run').addEventListener('click', function () {
    var mode = document.querySelector('input[name=b64-mode]:checked').value;
    try {
      b64Out.value = mode === 'enc' ? b64enc(b64In.value) : b64dec(b64In.value);
    } catch (e) {
      b64Out.value = '转换失败：' + (mode === 'dec' ? '不是合法 Base64' : e.message);
    }
  });
  document.getElementById('b64-copy').addEventListener('click', function () { copy(b64Out.value, this); });

  // ---------- 哈希 ----------
  var hashIn = document.getElementById('hash-in');
  var hashOut = document.getElementById('hash-out');
  var hashAlgo = document.getElementById('hash-algo');
  document.getElementById('hash-run').addEventListener('click', function () {
    if (!crypto || !crypto.subtle) { hashOut.value = '哈希功能需在 https 环境下使用'; return; }
    var text = hashIn.value;
    if (!text) { hashOut.value = ''; return; }
    crypto.subtle.digest(hashAlgo.value, new TextEncoder().encode(text)).then(function (buf) {
      hashOut.value = Array.from(new Uint8Array(buf))
        .map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    }).catch(function (e) { hashOut.value = '计算失败：' + e.message; });
  });
  document.getElementById('hash-copy').addEventListener('click', function () { copy(hashOut.value, this); });

  // ---------- 文本处理 ----------
  var textIn = document.getElementById('text-in');
  var textStats = document.getElementById('text-stats');
  function textUpdateStats() {
    var v = textIn.value;
    var noSpace = v.replace(/\s/g, '').length;
    var words = (v.trim().match(/\S+/g) || []).length;
    var lines = v === '' ? 0 : v.split('\n').length;
    textStats.textContent = '字符 ' + v.length + ' · 去空格 ' + noSpace + ' · 词 ' + words + ' · 行 ' + lines;
  }
  textIn.addEventListener('input', textUpdateStats);
  var TEXT_OPS = {
    upper: function (s) { return s.toUpperCase(); },
    lower: function (s) { return s.toLowerCase(); },
    title: function (s) { return s.replace(/\b\w/g, function (c) { return c.toUpperCase(); }); },
    trim: function (s) { return s.split('\n').map(function (l) { return l.trim(); }).join('\n'); },
    nospace: function (s) { return s.replace(/\s+/g, ''); },
    dedup: function (s) { return s.split('\n').filter(function (l, i, a) { return a.indexOf(l) === i; }).join('\n'); },
    blank: function (s) { return s.split('\n').filter(function (l) { return l.trim() !== ''; }).join('\n'); },
    reverse: function (s) { return s.split('').reverse().join(''); }
  };
  document.querySelectorAll('#panel-text .ops button').forEach(function (b) {
    b.addEventListener('click', function () {
      var fn = TEXT_OPS[b.dataset.op];
      if (fn) { textIn.value = fn(textIn.value); textUpdateStats(); }
    });
  });
  document.getElementById('text-replace').addEventListener('click', function () {
    try {
      var re = new RegExp(textFind.value, 'g');
      textIn.value = textIn.value.replace(re, textRepl.value);
      textUpdateStats();
    } catch (e) { alert('正则无效：' + e.message); }
  });
  var textFind = document.getElementById('text-find');
  var textRepl = document.getElementById('text-repl');
  document.getElementById('text-copy').addEventListener('click', function () { copy(textIn.value, this); });

  // ---------- 进制转换 ----------
  var baseIn = document.getElementById('base-in');
  var baseFrom = document.getElementById('base-from');
  var baseOut = document.getElementById('base-out');
  var BASE_LABELS = { 2: '二进制', 8: '八进制', 10: '十进制', 16: '十六进制' };
  function baseRender() {
    var v = baseIn.value.trim();
    if (v === '') { baseOut.innerHTML = ''; return; }
    var n = parseInt(v, parseInt(baseFrom.value, 10));
    if (isNaN(n)) { baseOut.innerHTML = '<div><span class="k">结果</span><code>无法解析（请检查输入与该进制是否匹配）</code></div>'; return; }
    baseOut.innerHTML = [2, 8, 10, 16].map(function (b) {
      return '<div><span class="k">' + BASE_LABELS[b] + '</span><code>' + n.toString(b) + '</code></div>';
    }).join('');
  }
  baseIn.addEventListener('input', baseRender);
  baseFrom.addEventListener('change', baseRender);

  // ---------- 单位换算 ----------
  var UNIT_DEF = {
    length: { units: { 'm': 1, 'cm': 0.01, 'mm': 0.001, 'km': 1000, 'in': 0.0254, 'ft': 0.3048, 'mi': 1609.344 } },
    time: { units: { 's': 1, 'min': 60, 'h': 3600, 'day': 86400 } },
    temperature: { special: true },
    pixel: { rootDefault: 16, units: { 'rem': 1, 'px': 16 } }
  };
  var unitCat = document.getElementById('unit-cat');
  var unitFields = document.getElementById('unit-fields');
  function buildUnitFields() {
    var cat = unitCat.value;
    unitFields.innerHTML = '';
    if (cat === 'temperature') {
      var keys = ['C', 'F', 'K'];
      var inputs = {};
      keys.forEach(function (k) {
        var row = document.createElement('div'); row.className = 'unit-row';
        var lab = document.createElement('label'); lab.textContent = '°' + k;
        var inp = document.createElement('input'); inp.type = 'text'; inp.placeholder = '0';
        inp.addEventListener('input', function () {
          var v = parseFloat(inp.value);
          if (isNaN(v)) return;
          var c = k === 'C' ? v : k === 'F' ? (v - 32) * 5 / 9 : v - 273.15;
          inputs.C.value = round(c); inputs.F.value = round(c * 9 / 5 + 32); inputs.K.value = round(c + 273.15);
        });
        row.appendChild(lab); row.appendChild(inp); unitFields.appendChild(row); inputs[k] = inp;
      });
      return;
    }
    var def = UNIT_DEF[cat];
    var rootPx = cat === 'pixel' ? def.rootDefault : 1;
    if (cat === 'pixel') {
      var rrow = document.createElement('div'); rrow.className = 'unit-row';
      var rlab = document.createElement('label'); rlab.textContent = '根字号';
      var rinp = document.createElement('input'); rinp.type = 'text'; rinp.value = rootPx;
      rinp.addEventListener('input', function () { def.units.px = parseFloat(rinp.value) || 16; rebuild(); });
      rrow.appendChild(rlab); rrow.appendChild(rinp); unitFields.appendChild(rrow);
    }
    var inputs2 = {};
    function rebuild() {
      unitFields.querySelectorAll('.unit-row').forEach(function (r) { if (r.querySelector('label').textContent !== '根字号') r.remove(); });
      inputs2 = {};
      Object.keys(def.units).forEach(function (u) {
        var row = document.createElement('div'); row.className = 'unit-row';
        var lab = document.createElement('label'); lab.textContent = u;
        var inp = document.createElement('input'); inp.type = 'text'; inp.placeholder = '0';
        inp.addEventListener('input', function () {
          var v = parseFloat(inp.value);
          if (isNaN(v)) return;
          var base = v * def.units[u];
          Object.keys(def.units).forEach(function (o) {
            if (o !== u) inputs2[o].value = round(base / def.units[o]);
          });
        });
        row.appendChild(lab); row.appendChild(inp); unitFields.appendChild(row); inputs2[u] = inp;
      });
    }
    rebuild();
  }
  function round(n) { return Math.round(n * 1e6) / 1e6; }
  unitCat.addEventListener('change', buildUnitFields);
  buildUnitFields();

  // ---------- 科学计算器 ----------
  var calcDisp = document.getElementById('calc-display');
  var calcExpr = '';
  var FUNC_MAP = {
    sin: 'sin', cos: 'cos', tan: 'tan', asin: 'asin', acos: 'acos', atan: 'atan',
    sqrt: 'sqrt', cbrt: 'cbrt', abs: 'abs', exp: 'exp', log: 'log10', ln: 'log'
  };
  function calcPush(k) {
    if (k === 'C') { calcExpr = ''; }
    else if (k === 'back') { calcExpr = calcExpr.slice(0, -1); }
    else if (k === '=') { calcExpr = calcEval(calcExpr); }
    else { calcExpr += k; }
    calcDisp.value = calcExpr;
  }
  document.querySelectorAll('#panel-calc .calc-btn').forEach(function (b) {
    b.addEventListener('click', function () { calcPush(b.dataset.k); });
  });
  function calcEval(src) {
    if (!src) return '';
    try { return String(evalMath(src)); }
    catch (e) { return '错误'; }
  }
  function evalMath(src) {
    var tokens = [];
    var re = /(\d+\.?\d*|\.\d+)|([a-zA-Z]+)|([+\-*/^%(),])/g, m;
    while ((m = re.exec(src))) {
      if (m[1]) tokens.push({ t: 'num', v: parseFloat(m[1]) });
      else if (m[2]) tokens.push({ t: 'id', v: m[2].toLowerCase() });
      else tokens.push({ t: 'op', v: m[3] });
    }
    var proc = [], prev = null;
    tokens.forEach(function (tk) {
      if (tk.t === 'op' && tk.v === '-' && (!prev || prev.t === 'op')) { proc.push({ t: 'op', v: 'u-' }); }
      else proc.push(tk);
      prev = tk;
    });
    var prec = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2, 'u-': 3, '^': 4 };
    var right = { '^': true, 'u-': true };
    var opStack = [], rpn = [];
    proc.forEach(function (tk) {
      if (tk.t === 'num') rpn.push(tk);
      else if (tk.t === 'id') { opStack.push(tk); }
      else if (tk.v === '(') opStack.push(tk);
      else if (tk.v === ')') {
        while (opStack.length && opStack[opStack.length - 1].v !== '(') rpn.push(opStack.pop());
        opStack.pop();
        if (opStack.length && opStack[opStack.length - 1].t === 'id') rpn.push(opStack.pop());
      } else {
        while (opStack.length && opStack[opStack.length - 1].v !== '(') {
          var top = opStack[opStack.length - 1];
          if (prec[top.v] > prec[tk.v] || (prec[top.v] === prec[tk.v] && !right[tk.v])) rpn.push(opStack.pop());
          else break;
        }
        opStack.push(tk);
      }
    });
    while (opStack.length) rpn.push(opStack.pop());
    var st = [];
    rpn.forEach(function (tk) {
      if (tk.t === 'num') st.push(tk.v);
      else if (tk.t === 'id') {
        if (tk.v === 'pi') st.push(Math.PI);
        else if (tk.v === 'e') st.push(Math.E);
        else { var a = st.pop(); if (!(tk.v in FUNC_MAP)) throw new Error('未知函数 ' + tk.v); st.push(Math[FUNC_MAP[tk.v]](a)); }
      } else {
        if (tk.v === 'u-') { st.push(-st.pop()); return; }
        var b = st.pop(), a = st.pop();
        st.push(tk.v === '+' ? a + b : tk.v === '-' ? a - b : tk.v === '*' ? a * b :
          tk.v === '/' ? a / b : tk.v === '%' ? a % b : Math.pow(a, b));
      }
    });
    if (st.length !== 1) throw new Error('表达式无效');
    return st[0];
  }

  // ---------- 二维码 ----------
  var qrIn = document.getElementById('qr-in');
  var qrOut = document.getElementById('qr-out');
  var qrEc = document.getElementById('qr-ec');
  document.getElementById('qr-gen').addEventListener('click', function () {
    if (typeof qrcode === 'undefined') { qrOut.textContent = '二维码库未加载'; return; }
    var text = qrIn.value;
    if (!text) { qrOut.textContent = '请输入内容'; return; }
    try {
      var qr = qrcode(0, qrEc.value);
      qr.addData(text);
      qr.make();
      qrOut.innerHTML = qr.createImgTag(5, 10);
    } catch (e) { qrOut.textContent = '生成失败：' + e.message; }
  });
})();
