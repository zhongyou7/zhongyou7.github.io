/*
 * shortcuts.js — 快捷键帮助面板
 * 按 ? 显示/隐藏；按 Esc 或点击遮罩空白处关闭
 * 列出站点所有隐藏快捷键（B / M / W / ?）
 */
(function () {
  'use strict';

  var overlay = document.getElementById('shortcuts-help');
  if (!overlay) return;

  function open() { overlay.classList.remove('hidden'); }
  function close() { overlay.classList.add('hidden'); }
  function toggle() { overlay.classList.toggle('hidden'); }

  document.body.addEventListener('keydown', function (e) {
    if (e.key === '?') {
      e.preventDefault();   // 避免 Firefox 快速查找
      toggle();
    } else if (e.key === 'Escape') {
      close();
    }
  });

  // 点击遮罩（非卡片区域）关闭
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
})();
