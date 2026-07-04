# WebScript

> 基于 Vue 3 + Tauri 的跨平台电子笔记应用

[![Version](https://img.shields.io/badge/version-0.1.0-blue)]()
[![License](https://img.shields.io/badge/license-MIT-green)]()
[![Vue](https://img.shields.io/badge/Vue-3.4-4FC08D?logo=vue.js)]()
[![Tauri](https://img.shields.io/badge/Tauri-1.5-FFC131?logo=tauri)]()

WebScript 是一款轻量、本地的电子笔记应用。数据保留在你自己的设备上，无需注册账号，没有云端依赖。支持从浏览器到桌面、再到移动端的渐进式部署。


## 项目路线图

| 语言版本 | 状态 | 说明 |
|---------|------|------|
| Python | ✅ 已完成 | 功能可用，基础版本 |
| JavaScript | 🚧 开发中 | 当前基于 Vue 3 + Tauri 重构 |
| C# | 📋 规划中 | 待后续开发 |



## 快速开始

### 仅 Web 版本（最轻量）

无需安装 Rust 或移动端工具链，适合快速体验功能。

```bash
git clone https://github.com/winter-born-again/webscript
cd webscript
npm install
npm run dev
```

浏览器访问 `http://localhost:5173` 即可使用。

### 桌面端（Tauri）

需要 Rust 工具链：

```bash
# 安装 Tauri CLI
cargo install tauri-cli

# 启动桌面应用
npm run tauri dev
```

### 移动端（iOS / Android）

需要额外的平台工具：

- **Android**: JDK 17+、Android Studio（提供 SDK 和模拟器）
- **iOS**: Xcode（仅 macOS）

```bash
npm run tauri android dev   # Android
npm run tauri ios dev       # iOS
```

---

## 环境要求

| 环境 | 最低版本 | 用途 |
|------|---------|------|
| Node.js | 18.0.0 | 前端构建 |
| npm | 9.0.0 | 包管理 |
| Rust | 1.70.0 | Tauri 后端（桌面/移动端需要） |
| JDK | 17 | Android 构建（仅 Android 需要） |

---

## 特性

- **轻量快速** — 基于 Tauri，前端资源占用小，启动快
- **跨平台** — 支持 Windows、macOS、Linux，以及 iOS / Android
- **本地优先** — 数据存储在你的设备上，不经过第三方服务器
- **现代化 UI** — Vue 3 + Composition API，响应式设计

---

## 技术栈

| 层 | 技术 |
|---|------|
| 前端框架 | Vue 3 (Composition API) |
| 构建工具 | Vite |
| 桌面/移动端 | Tauri 1.5 / 2.0 |
| 语言 | TypeScript, Rust |

---

