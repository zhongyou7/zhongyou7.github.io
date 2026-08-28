# 项目长期记忆 (MEMORY.md)

## 站点概况
- 个人主页，GitHub Pages 托管，域名 asamo.top，git 分支 `site`
- 根：`index.html`(主页) + `main.css` + `theme.js`(日出日落主题) + `bg.js`(动态粒子背景)
- `Book/`：电子书阅读器（B 键入口），`epub-ts-bundle.js` + `book.epub` + `index.html`
- 主页彩蛋：按 B → Book/，按 M → Music/

## 用户约定（重要）
- **永远不要修改 `Music/` 目录下的任何文件**（用户明确指令，2026-08-28）。即使被要求改动整站也要跳过该目录。
- 用户偏好：纯静态 GitHub Pages，不想用 git 命令行提交（曾想做网页内上传后台绕过）。

## 设计约束
- 背景 `bg.js`：canvas 固定全屏、z-index:-1、pointer-events:none；读 `<html class="dark">` 适配明暗；prefers-reduced-motion 时跳过。
- 子页面引用根脚本用 `../` 前缀（如 Book 用 `../bg.js`）。
