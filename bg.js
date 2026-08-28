/*
 * bg.js — 动态交互粒子背景
 * 全屏 canvas，固定在内容层之下（z-index:-1），不拦截鼠标点击。
 * 特性：
 *  - 粒子缓慢漂移，彼此靠近时连线（星座效果）
 *  - 鼠标/触摸附近粒子会连线互动
 *  - 自动适配明暗主题（读取 <html class="dark">，见 theme.js）
 *  - 尊重 prefers-reduced-motion（系统开启“减弱动态”时直接不渲染）
 *  - 零依赖，纯原生 JS
 */
(function () {
  'use strict';

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  var canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  var s = canvas.style;
  s.position = 'fixed';
  s.top = '0';
  s.left = '0';
  s.width = '100%';
  s.height = '100%';
  s.zIndex = '-1';
  s.pointerEvents = 'none';
  (document.documentElement || document.body).appendChild(canvas);

  var ctx = canvas.getContext('2d');
  var w = 0, h = 0, dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  var mouse = { x: -9999, y: -9999 };
  window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseout', function () {
    mouse.x = -9999;
    mouse.y = -9999;
  });
  window.addEventListener('touchmove', function (e) {
    if (e.touches && e.touches[0]) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
  }, { passive: true });
  window.addEventListener('touchend', function () {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  var COUNT = Math.max(40, Math.min(100, Math.floor((w * h) / 14000)));
  var particles = [];
  function init() {
    particles = [];
    for (var i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.6
      });
    }
  }
  init();
  // 屏幕尺寸变化时重新分布
  var lastW = w, lastH = h;
  window.addEventListener('resize', function () {
    if (Math.abs(w - lastW) > 200 || Math.abs(h - lastH) > 200) {
      lastW = w; lastH = h;
      init();
    }
  });

  function palette() {
    var dark = document.documentElement.classList.contains('dark');
    return dark
      ? { dot: [153, 163, 186], line: [153, 163, 186] } // 暗色：#99A3BA 亮星
      : { dot: [110, 110, 110], line: [150, 150, 150] }; // 亮色：灰点
  }

  var LINK = 130;        // 粒子间连线距离
  var MOUSE_LINK = 170;  // 鼠标连线距离

  function frame() {
    ctx.clearRect(0, 0, w, h);
    var c = palette();
    var dot = c.dot, line = c.line;
    var i, j, p, q, dx, dy, d, a;

    for (i = 0; i < particles.length; i++) {
      p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      // 粒子点
      ctx.beginPath();
      ctx.fillStyle = 'rgba(' + dot[0] + ',' + dot[1] + ',' + dot[2] + ',0.85)';
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      // 粒子间连线
      for (j = i + 1; j < particles.length; j++) {
        q = particles[j];
        dx = p.x - q.x;
        dy = p.y - q.y;
        d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK) {
          a = (1 - d / LINK) * 0.45;
          ctx.strokeStyle = 'rgba(' + line[0] + ',' + line[1] + ',' + line[2] + ',' + a + ')';
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      // 鼠标附近连线
      dx = p.x - mouse.x;
      dy = p.y - mouse.y;
      d = Math.sqrt(dx * dx + dy * dy);
      if (d < MOUSE_LINK) {
        a = (1 - d / MOUSE_LINK) * 0.7;
        ctx.strokeStyle = 'rgba(' + line[0] + ',' + line[1] + ',' + line[2] + ',' + a + ')';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
