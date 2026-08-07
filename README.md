# WebScript

> 基于 Vue 3 + TypeScript + Tauri 2.11 的跨平台电子笔记应用

[![Version](https://img.shields.io/badge/version-0.1.0-blue)]()
[![License](https://img.shields.io/badge/license-MIT-green)]()
[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?logo=vue.js)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript)]()
[![Tauri](https://img.shields.io/badge/Tauri-2.11-FFC131?logo=tauri)]()

WebScript 是一款轻量、本地化的电子笔记应用。数据保留在你自己的设备上，无需注册账号，没有云端依赖。支持从浏览器到桌面、再到移动端的渐进式部署。

---

## 📋 项目路线图

| 语言版本 | 状态 | 说明 |
|---------|------|------|
| Python | ✅ 已完成 | 功能可用，基础版本 |
| TypeScript | 🚧 开发中 | 当前基于 Vue 3 + Tauri 2.11 + TypeScript 重构 |
| C# | 📋 规划中 | 待后续开发 |

---

## 🚀 快速开始

### Web 版本（最轻量）

无需安装 Rust 或移动端工具链，适合快速体验功能。

```bash
git clone https://github.com/winter-born-again/webscript
cd webscript
npm install
npm run dev
```

浏览器访问 `http://localhost:5173` 即可使用。

### 桌面端（Tauri 2.11）

需要 Rust 工具链：

```bash
# 安装 Tauri CLI v2
cargo install tauri-cli@^2.0.0

# 启动桌面应用
npm run tauri dev
```

### 移动端（Android）

Tauri 2.0 原生支持移动端，需要 JDK 17+ 和 Android Studio。

```bash
# 初始化 Android 项目（仅首次需要）
npm run tauri android init

# 启动 Android 开发调试
npm run tauri android dev
```

---

## 🔐 Android 签名配置

Tauri 2.0 打包 Android 发行版 APK 时需要数字签名，否则无法安装或发布。

### 第一步：生成签名密钥

使用 `keytool` 命令生成密钥库文件：

```bash
keytool -genkey -v -keystore /path/to/your/app.keystore -alias your_alias -keyalg RSA -keysize 2048 -validity 10000
```

参数说明：

| 参数 | 说明 | 示例 |
|------|------|------|
| `-keystore` | 密钥库文件路径 | `D:/webscript/webscript.keystore` |
| `-alias` | 别名（需与 `tauri.conf.json` 中一致） | `webscript` |
| `-keyalg` | 加密算法 | `RSA` |
| `-keysize` | 密钥长度 | `2048` |
| `-validity` | 有效期（天） | `10000` |

### 第二步：创建签名配置文件

在 `src-tauri/gen/android/` 目录下创建 `keystore.properties` 文件：

```properties
storePassword=你的密钥库密码
keyPassword=你的密钥别名密码
keyAlias=你的别名（与 tauri.conf.json 中一致）
storeFile=你的密钥库文件路径（如 D:/webscript/webscript.keystore）
```

### 第三步：构建发行版 APK

```bash
npm run tauri android build
```

### ⚠️ 安全警告

> **请勿将签名文件上传至 GitHub！**

- `*.keystore` 文件——**严禁提交**
- `keystore.properties` 文件——**严禁提交**
- 签名密码——**严禁明文保存或上传**

#### 建议的 `.gitignore` 配置

```gitignore
# Android 签名相关
*.keystore
keystore.properties
src-tauri/gen/android/keystore.properties
```

---

## 📦 环境要求

| 环境 | 最低版本 | 用途 |
|------|---------|------|
| Node.js | 18.0.0 | 前端构建 |
| npm | 9.0.0 | 包管理 |
| Rust | 1.70.0 | Tauri 后端 |
| Tauri CLI | 2.0.0 | 构建工具 |
| JDK | 17 | Android 构建 |

---

## ✨ 特性

- **轻量快速** — 基于 Tauri 2.11，前端资源占用小，启动快
- **跨平台** — 支持 Windows、Android
- **本地优先** — 数据存储在你的设备上，不经过第三方服务器
- **现代化 UI** — Vue 3.5 + Composition API + TypeScript 6.0，类型安全的响应式设计
- **流程图可视化** — 基于 AntV X6 和 G6 的图编辑引擎
- **代码高亮** — 基于 Highlight.js 的代码块渲染

---

## 🛠 技术栈

| 层 | 技术 | 版本 |
|---|------|------|
| 前端框架 | Vue 3 (Composition API) | 3.5.41 |
| 类型系统 | TypeScript | 6.0.3 |
| 构建工具 | Vite | 8.2.1 |
| 桌面/移动端 | Tauri | 2.11.2 |
| 路由 | Vue Router | 4.6.4 |
| UI 组件库 | Element Plus | 2.14.1 |
| 图标库 | Element Plus Icons Vue | 2.3.2 |
| 图标集 | Iconify Vue | 5.0.1 |
| 流程图引擎 | AntV X6 | 3.1.7 |
| 图可视化 | AntV G6 | 5.1.1 |
| G6 Vue 扩展 | G6 Extension Vue | 0.1.0 |
| 代码高亮 | Highlight.js | 11.11.1 |
| Vue 高亮插件 | @highlightjs/vue-plugin | 2.1.0 |
| Tauri 对话框插件 | @tauri-apps/plugin-dialog | 2.7.1 |

---

## 📁 项目结构

```
webscript/
├── src/
│   ├── components/
│   │   ├── python/
│   │   │   └── antvx6.vue          # AntV X6 流程图组件
│   │   ├── blockModel.vue          # 块模型组件
│   │   ├── codeComponent.vue       # 代码高亮组件
│   │   ├── siderComponent.vue      # 侧边栏组件
│   │   ├── title.vue               # 标题组件
│   │   ├── treenode.vue            # 树节点组件
│   │   └── windowComponent.vue     # 窗口组件
│   ├── views/
│   │   ├── Python/
│   │   │   ├── PythonPage.vue      # Python 笔记主页
│   │   │   ├── dataType.vue        # 数据类型
│   │   │   ├── flowControl.vue     # 流程控制
│   │   │   ├── func.vue            # 函数
│   │   │   ├── oopPage.vue         # 面向对象
│   │   │   └── varPage.vue         # 变量
│   │   ├── JavaScript/
│   │   │   └── JavaScriptPage.vue  # JavaScript 笔记主页（开发中）
│   │   ├── Csharp/
│   │   │   ├── CsharpPage.vue      # C# 笔记主页（开发中）
│   │   │   └── dataType.vue        # 数据类型（开发中）
│   │   ├── beginAll.vue            # 开始页
│   │   ├── text.vue                # 文本笔记页（开发中）
│   │   ├── textGraph.vue           # 图文笔记页（开发中）
│   │   ├── thinkStudy.vue          # 思维学习页（开发中）
│   │   └── algorithmPage.vue       # 算法页面（开发中）
│   ├── router/
│   │   └── index.ts                # 路由配置
│   ├── script/
│   │   ├── data.ts                 # 数据脚本
│   │   ├── tool.ts                 # 工具函数
│   │   └── tool.txt                # 工具说明
│   ├── App.vue                     # 根组件
│   ├── main.ts                     # 应用入口
│   └── env.d.ts                    # 环境类型声明
├── src-tauri/
│   ├── src/                        # Rust 源码
│   ├── capabilities/               # Tauri 权限配置
│   ├── icons/                      # 应用图标
│   ├── gen/                        # 生成代码
│   ├── target/                     # 构建输出
│   ├── build.rs                    # 构建脚本
│   ├── Cargo.toml                  # Rust 依赖
│   ├── Cargo.lock                  # Rust 锁文件
│   └── tauri.conf.json             # Tauri 配置
├── public/                         # 静态资源
├── dist/                           # 构建输出
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── .gitignore
└── README.md
```

---

## 🔌 Tauri 插件

| 插件 | 版本 | 用途 |
|------|------|------|
| `@tauri-apps/plugin-dialog` | 2.7.1 | 系统对话框 |

---

## 📝 开发规范

### TypeScript 配置

项目使用 TypeScript 6.0.3，配置基于 `@vue/tsconfig`：

```json
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "compilerOptions": {
    "strict": true,
    "types": ["vite/client", "@tauri-apps/api"]
  }
}
```

---

## 📜 可用脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动 Web 开发服务器 |
| `npm run build` | 构建 Web 版本 |
| `npm run tauri dev` | 启动 Tauri 桌面应用 |
| `npm run tauri build` | 构建 Tauri 桌面应用 |
| `npm run tauri android dev` | 启动 Android 开发 |
| `npm run tauri android build` | 构建 Android APK |
| `npm run type-check` | TypeScript 类型检查 |

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request。
## 📄 许可证

[MIT](LICENSE)