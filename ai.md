## level 1
```python
import api

# 在这里可以处理全局信息定义
my_global_info = {"angle": 225}


def update(context):
    # context 可以获取丰富的帧数据，比如帧数和我的星体位置
    print("step", context.step, context.me.x)

    if context.step % 20 == 3:
        # 可以在某些帧精心设计抛出抛射物的角度
        return api.a2r(my_global_info["angle"])

    # 可以在其它情况下返回 None，保持静止
    return None
```
## level 2
```python
import api


def update(context):
    me = context.me

        # 抛射物也是 monster
        # 需要自行找到你想找的 monster
    m = context.monsters[0]
    c = me.shoot_atom_degree(m)
    r = api.SHOOT_AREA_RATIO
    if m.mass/me.mass<(1-r):
        return api.a2r(c+180)

    # 其它情况下返回 None，保持静止
    return None
```
## level 3
```python
import api


def update(context):
    if context.step % 20 == 3:
        me = context.me

        # 抛射物也是 monster
        # 需要自行找到你想找的 monster
        target = None
        for m in context.monsters:
            target = m
            break

        # 调整你的抛射角度
        if me.mass<target.mass:
            return api.a2r(me.shoot_atom_radian(target)+210)
        else:
            return api.a2r(me.shoot_atom_radian(target)+90)

    # 其它情况下返回 None，保持静止
    return None
```
## level 4
```python
import api
import math


def update(context):
    if context.step % 5 == 3:

        angle = api.relative_radian(context.me.x, context.me.y, context.monsters[0].x, context.monsters[0].y)

        return angle

    else:

        return None
```
## level 5
```python
import api

def update(context):
    me = context.me
    enemies = api.find_neighbors(me, context.enemies)  # 对me周围的星体从近到远进行排序

    if enemies[0].radius > me.radius and me.whether_collide(enemies[0]):  # 距离me最近的星体的半径大于me且与me有碰撞的趋势

        return api.relative_radian(me.x, me.y, enemies[0].x, enemies[0].y)

    return None
```
## level 6
```python
import api


def update(context):
    # 获取 NPC 星体
    sun = context.sun[0]
    ms = context.monsters

    # 计算策略
    if context.step % 20 == 3:
        return 0.5
    return None
```
## level 7
```python
import api


def update(context):
    # 计算自己附近的星体列表
    others = [m for m in context.monsters if not m.is_bullet]
    close_to_far = api.find_neighbors(context.me, others, close_to_far=True)

    # 计算策略
    for m in context.monsters:
        # 你的判断条件
        if context.me.get_atom_surface_dist(m) < 10:
            # 你的策略
            #pass
            angle = api.relative_radian(context.me.x, context.me.y, m.x, m.y)
            return angle
    return None
```
## level 8
```python
import api
import math


flag = {"stage": 0}


def update(context):
    npc = context.npc
    me = context.me
    if flag["stage"] == 0:
        # 某种运动策略
        x, y = 800, 800
        if x + 50 > me.x > x - 50 and y + 50 > me.y > y - 50:
            flag["stage"] = 1
            print("change stage 1")
        return me.shoot_point_radian(x, y) + math.pi
    elif flag["stage"] == 1:
        # 另外一种策略
        if context.step % 10 == 1:
            enemies = api.find_neighbors(me, npc)
            return me.shoot_atom_radian(enemies[0])
                
    return None
```
## level 9
```python
import api
import math
flag = {"stage": 0}


def update(context):
    npc = context.npc
    ms = [m for m in context.monsters if not m.is_bullet]
    me = context.me
    if flag["stage"] == 0:
        # 第一阶段
        if context.step % 50 == 0:
            for m in ms:
                if me.mass > m.mass:
                    return me.shoot_atom_radian(m) + math.pi
        
        if len(ms) == 0:
            # 改变策略
            flag["stage"] = 1
        return None
        
    elif flag["stage"] == 1:
        # 第二阶段
        return me.shoot_atom_radian(npc[0]) + math.pi 
    return None
```
## level 10
```python
import api
import math
flag = {"stage": 0}


def update(context):
    npc = context.npc
    ms = [m for m in context.monsters if not m.is_bullet]
    me = context.me
    big = None
    if flag["stage"] == 0:
        # 第一阶段
        if context.step % 50 == 0: 
            
            for m in ms:
                if m.mass > me.mass:
                    big = m
                if me.x > big.x:
                # 改变策略
                    flag["stage"] = 1
                return me.shoot_point_radian(big.x, big.y-300) + math.pi      
                
        return None
    elif flag["stage"] == 1:
        # 第二阶段
        if context.step % 20 == 0:
            small = None
            for m in ms:
                if m.mass < context.me.mass:
                    small = m
            if small is None:
                return None
            return context.me.shoot_atom_radian(small) + 3.64
        
        
    return None
```
## level 11
```python
import api

flag = {"stage": 0}


def update(context):
    npc = context.npc
    ms = [m for m in context.monsters if not m.is_bullet]
    me = context.me
    if flag["stage"] == 0:
        # 第一阶段
        if True:
            # 改变策略
            flag["stage"] = 1
        return 3.14
    elif flag["stage"] == 1:
        # 第二阶段
        sorted_a = api.find_neighbors(context.me, ms)
        return me.shoot_atom_radian(sorted_a[0]) + 3.14
    return None
```
## level 12
```python
import api

flag = {"stage": 0}


def update(context):
    npc = context.npc
    ms = [m for m in context.monsters if not m.is_bullet]
    me = context.me
    if flag["stage"] == 0:
        # 第一阶段
        large = None
        ms = api.find_neighbors(me, ms)
        for m in ms:
            if m.mass > me.mass:
                large = m
                break
        if me.x > large.x-60:
            # 改变策略
            flag["stage"] = 1
            return update(context)
        if context.step % 150 == 0:
            return me.shoot_point_radian(large.x, large.y + (large.radian + me.radian + 400)) + 3.14
    elif flag["stage"] == 1:
        # 第二阶段
        if context.step % 20 == 0:
            small = None
            ms = api.find_neighbors(me, ms)
            for m in ms:
                if m.mass < me.mass:
                    small = m
                    break
            if len(ms) == 3:
                flag["stage"] = 2
                return update(context)
            if small is None:
                return None
            return context.me.shoot_atom_radian(small) + 3.14
        
    return None
```
## level 13
```python
import api

flag = {"stage": 0}


def update(context):
    npc = context.npc
    ms = [m for m in context.monsters if not m.is_bullet]
    me = context.me
    if flag["stage"] == 0:
        # 第一阶段
        if True:
            # 改变策略
            flag["stage"] = 1
        return 3.14
    elif flag["stage"] == 1:
        # 第二阶段
        sorted_a = api.find_neighbors(context.me, ms)
        return me.shoot_atom_radian(sorted_a[0]) + 3.14
    return None
```
## level 14
```python
import api
import math

def update(context): 
     def big(atom,atomlist):
         for a in atomlist:
             if a.radius>atom.radius:
                 return False
         return True
     atoms=[]
     
     
     for i in context.monsters:
         if not i.is_bullet:
             atoms.append(i)
     atoms.sort(key=lambda x:context.me.distance_to(x)) 
     
     if(context.me.vx== 0 and context.me.vy==0):
         for a in atoms:
             if a.radius<context.me.radius:
                 return context.me.shoot_atom_radian(a)+math.pi
     if not context.me.whether_collide(atoms[0]) and atoms[0].radius>context.me.radius:
         for a in atoms:
             if a.radius<context.me.radius:
                 if context.me.whether_collide(a) and math.sqrt((context.me.vx-a.vx) ** 2 + (context.me.vy-a.vy) ** 2) <20:
                     return context.me.shoot_atom_radian(a)+math.pi
     elif big(context.me,context.atoms):
         for a in atoms:
             if context.me.whether_collide(a) and math.sqrt((context.me.vx-a.vx) ** 2 + (context.me.vy-a.vy) ** 2) <22:
                 return context.me.shoot_atom_radian(a)+math.pi
     return None
```
## level 15
```python
import api
import math


def update(context):

    me = context.me

    radian = None

    # 获取并保存环境中非抛射物星体
    enemies_atom = []
    for atom in context.enemies:
        if not atom.is_bullet:
            enemies_atom.append(atom)
            
    # 根据与我方星体表面直线距离从近到远对enemies_atom进行排序
    enemies_atom.sort(key=lambda x: me.get_atom_surface_dist(x))
    
    # 编写我方星体的移动策略：选择向距离我方星体最近且质量小于我方星体的环境星体移动，同时需要躲避大星体
    for atom in enemies_atom:
        if not atom.is_bullet:
            # 当环境星体的质量小于我方星体，设计吞噬小星体
            if atom.mass < me.mass * (1 - api.SHOOT_AREA_RATIO):
                radian = me.shoot_atom_radian(atom) + math.pi
                # 为了避免我方星体一直发射抛射物浪费质量，当我方星体的速度达到一定值时，停止发射抛射物
                if  math.sqrt(me.vx ** 2 + me.vy ** 2) > 100:
                    radian = None
                break
            # 当环境星体的质量大于我方星体且存在碰撞趋势，设计躲避大星体策略
            elif atom.mass > me.mass and me.whether_collide(atom) and me.get_atom_surface_dist(atom) < 50:
                radian = me.shoot_atom_radian(atom) + api.a2r(35)
                break

    return radian
```
## level 16
```python
import api
import math


def update(context):

    me = context.me

    radian = None

    # 获取并保存环境中非抛射物星体
    enemies_atom = []
    for atom in context.enemies:
        if not atom.is_bullet:
            enemies_atom.append(atom)
            
    # 根据与我方星体表面直线距离从近到远对enemies_atom进行排序
    enemies_atom.sort(key=lambda x: me.get_atom_surface_dist(x))
    
    # 编写我方星体的移动策略：选择向距离我方星体最近且质量小于我方星体的环境星体移动，同时需要躲避大星体
    for atom in enemies_atom:
        if not atom.is_bullet:
            # 当环境星体的质量小于我方星体，设计吞噬小星体
            if atom.mass < me.mass * (1 - api.SHOOT_AREA_RATIO):
                radian = me.shoot_atom_radian(atom) + math.pi
                # 为了避免我方星体一直发射抛射物浪费质量，当我方星体的速度达到一定值时，停止发射抛射物
                if  math.sqrt(me.vx ** 2 + me.vy ** 2) > 100:
                    radian = None
                break
            # 当环境星体的质量大于我方星体且存在碰撞趋势，设计躲避大星体策略
            elif atom.mass > me.mass and me.whether_collide(atom) and me.get_atom_surface_dist(atom) < 50:
                radian = me.shoot_atom_radian(atom)
                break

    return radian
```
