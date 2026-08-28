/*
 * snake.js — 贪吃蛇小游戏（零图片，纯 canvas 绘制）
 * 交互：方向键 / WASD 控制，空格暂停，Esc 回主页，移动端支持滑动
 * 主题：读 <html class="dark"> 自动切换明暗配色（依赖 theme.js）
 * 最高分存 localStorage
 */
(function () {
  'use strict';

  var canvas = document.getElementById('snake');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  var SIZE = 400, CELL = 20, GRID = SIZE / CELL;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = SIZE * dpr;
  canvas.height = SIZE * dpr;
  canvas.style.width = SIZE + 'px';
  canvas.style.height = SIZE + 'px';
  ctx.scale(dpr, dpr);

  var scoreEl = document.getElementById('score');
  var bestEl = document.getElementById('best');
  var overEl = document.getElementById('over');
  var overMsg = document.getElementById('over-msg');

  var best = 0;
  try { best = parseInt(localStorage.getItem('snake_best') || '0', 10) || 0; } catch (e) {}
  bestEl.textContent = best;

  var snake, dir, nextDir, food, score, timer, running, paused, alive;

  function colors() {
    var dark = document.documentElement.classList.contains('dark');
    return dark
      ? { bg: '#121621', grid: '#242836', snake: '#E4ECFA', head: '#99A3BA', food: '#ff6b6b' }
      : { bg: '#ffffff', grid: '#eee', snake: '#333333', head: '#111111', food: '#e74c3c' };
  }

  function setDir(x, y) {
    // 禁止 180° 反转（基于当前 nextDir 判断，防止快速连按穿身）
    if (nextDir.x === -x && nextDir.y === -y) return;
    nextDir = { x: x, y: y };
  }

  function placeFood() {
    while (true) {
      var f = { x: (Math.random() * GRID) | 0, y: (Math.random() * GRID) | 0 };
      if (!snake.some(function (s) { return s.x === f.x && s.y === f.y; })) { food = f; return; }
    }
  }

  function reset() {
    snake = [{ x: 8, y: 10 }, { x: 7, y: 10 }, { x: 6, y: 10 }];
    dir = { x: 1, y: 0 };
    nextDir = { x: 1, y: 0 };
    score = 0;
    scoreEl.textContent = 0;
    alive = true;
    paused = false;
    running = true;
    document.getElementById('pause').textContent = '暂停';
    placeFood();
    overEl.classList.add('hidden');
    draw();
    if (timer) clearInterval(timer);
    timer = setInterval(tick, 120);
  }

  function tick() {
    if (!running || paused || !alive) return;
    dir = nextDir;
    var head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
    if (head.x < 0 || head.x >= GRID || head.y < 0 || head.y >= GRID) return gameOver();
    if (snake.some(function (s) { return s.x === head.x && s.y === head.y; })) return gameOver();
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      score++;
      scoreEl.textContent = score;
      placeFood();
    } else {
      snake.pop();
    }
    draw();
  }

  function gameOver() {
    alive = false;
    running = false;
    if (score > best) {
      best = score;
      bestEl.textContent = best;
      try { localStorage.setItem('snake_best', String(best)); } catch (e) {}
    }
    overMsg.textContent = '得分 ' + score + (score >= best && score > 0 ? ' · 新纪录！' : '');
    overEl.classList.remove('hidden');
  }

  function draw() {
    var c = colors();
    ctx.fillStyle = c.bg;
    ctx.fillRect(0, 0, SIZE, SIZE);
    ctx.strokeStyle = c.grid;
    ctx.lineWidth = 1;
    for (var i = 1; i < GRID; i++) {
      ctx.beginPath(); ctx.moveTo(i * CELL, 0); ctx.lineTo(i * CELL, SIZE); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i * CELL); ctx.lineTo(SIZE, i * CELL); ctx.stroke();
    }
    ctx.fillStyle = c.food;
    ctx.beginPath();
    ctx.arc(food.x * CELL + CELL / 2, food.y * CELL + CELL / 2, CELL / 2 - 2, 0, Math.PI * 2);
    ctx.fill();
    for (var j = 0; j < snake.length; j++) {
      ctx.fillStyle = j === 0 ? c.head : c.snake;
      var s = snake[j];
      ctx.fillRect(s.x * CELL + 1, s.y * CELL + 1, CELL - 2, CELL - 2);
    }
  }

  function togglePause() {
    if (!alive) return;
    paused = !paused;
    document.getElementById('pause').textContent = paused ? '继续' : '暂停';
  }

  window.addEventListener('keydown', function (e) {
    var k = e.key;
    if (k === 'ArrowUp' || k === 'w' || k === 'W') { setDir(0, -1); e.preventDefault(); }
    else if (k === 'ArrowDown' || k === 's' || k === 'S') { setDir(0, 1); e.preventDefault(); }
    else if (k === 'ArrowLeft' || k === 'a' || k === 'A') { setDir(-1, 0); e.preventDefault(); }
    else if (k === 'ArrowRight' || k === 'd' || k === 'D') { setDir(1, 0); e.preventDefault(); }
    else if (k === ' ') { togglePause(); e.preventDefault(); }
    else if (k === 'Escape') { window.location.href = '../index.html'; }
  });

  // 移动端滑动控制
  var ts = null;
  canvas.addEventListener('touchstart', function (e) {
    ts = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: true });
  canvas.addEventListener('touchend', function (e) {
    if (!ts) return;
    var t = e.changedTouches[0];
    var dx = t.clientX - ts.x, dy = t.clientY - ts.y;
    if (Math.abs(dx) > Math.abs(dy)) setDir(dx > 0 ? 1 : -1, 0);
    else setDir(0, dy > 0 ? 1 : -1);
    ts = null;
  }, { passive: true });

  document.getElementById('restart').onclick = reset;
  document.getElementById('pause').onclick = togglePause;
  document.getElementById('over-btn').onclick = reset;

  reset();
})();
