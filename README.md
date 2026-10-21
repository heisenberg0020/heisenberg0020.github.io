# 学术个人主页模板

主页入口：

- **About**：个人简介与联系方式
- **Blog**：统一收录 Publications、Projects 和 Essays（个人随笔）
- **写随记**：登录后的可视化写作入口，随记显示在 Blog 的「随记」分类。

Research 和 Interests 已从主页移除。

## 网页写随记

打开 `/admin/`，首次连接后登录 Decap Turbo，在「我的随记 → 写随记」添加一篇随记，填写标题和正文，点击发布即可。不需要在 GitHub 编辑 Markdown。

### 一次性连接

当前站点已固定 Site ID，新设备可以直接点击「登录并开始写作」。以下步骤用于首次配置或重建连接。

1. 在 [Decap Turbo](https://turbo.decapcms.org/signup) 注册并创建个人组织，使用 Free 方案。
2. 在 Git connection 安装官方 GitHub 应用，只授权 `heisenberg0020.github.io` 仓库。不邀请其他编辑者。
3. 创建站点：Git provider 为 GitHub，Repo 为 `heisenberg0020/heisenberg0020.github.io`，Branch 为 `master`，Config path 为 `admin/config.yml`，Admin interface URL 为 `https://heisenberg0020.github.io/admin/`。
4. 把 Overview 中的 Site ID 填入写作入口。浏览器会记住这个公开标识。要让其他设备也免填，把 ID 填入 `admin/config.yml` 的 `backend.turbo_site_id` 并发布即可；Site ID 不是凭证。

身份验证和每次写入的权限检查由 Turbo 服务完成，入口可见不代表可发布。不要启用公开投稿或邀请其他编辑者。网站、配置中均不存放 GitHub 密码、个人访问令牌或 OAuth 密钥。

随记正文保存在 `notes.json`。正文使用可视化编辑，读取时自动转换为 HTML，并经过 DOMPurify 清理。「在 Blog 中显示」开关可以隐藏原文；关闭开关不是隐私保护，保存的原文仍在公开仓库及历史记录中。请勿在此存放私密笔记。发布后 GitHub Pages 需要短暂部署时间；网页每次加载重新请求随记数据。

### 维护与验证

- `node --test tests/notes.test.cjs`：验证隐藏规则、链接稳定性、读取失败处理和生产登录配置。
- `python3 scripts/preview-notes.py`：预览实际配置。
- `python3 scripts/preview-notes.py --demo --port 8766`：仅在本机用虚拟随记和 Decap 内存后端检查编辑器与安全渲染。此模式不写入 GitHub；关闭服务器即丢弃演示内容，生产页面没有此模式入口。

依赖版本和许可见 `assets/js/vendor/README.md`。写作页首次连接状态不代表已验证真实账号的登录发布；实际链路需要站点所有者完成一次性授权后验证。

## 你需要在哪里填写？

### 1. 修改个人信息

编辑根目录的 **`content.js`**：

- `name`：姓名
- `initials`：没有头像时显示的姓名缩写
- `title`、`tagline`：头衔和一句话介绍
- `location`、`affiliation`：所在地和机构
- `links`：邮箱、GitHub、Google Scholar、ORCID 等
- `about`：个人介绍；数组里每一项是一个自然段

### 2. 新增论文、项目或随笔

只需编辑根目录的 **`blog-data.js`**。复制一个完整条目并修改：

```js
{
  slug: "唯一的英文短名",
  type: "essay",
  date: "2026-01-20",
  title: "文章标题",
  summary: "列表页显示的简介",
  tags: ["标签一", "标签二"],
  meta: "5 min read",
  url: "",
  body: [
    "<p>第一段正文。</p>",
    "<h2>小标题</h2>",
    "<p>第二段正文。</p>",
  ],
},
```

`type` 只能选择：

- `"publication"`：论文
- `"project"`：项目
- `"essay"`：个人随笔

长篇 Essay 可以把正文保存为独立的同源 HTML 片段，并在条目中使用：

```js
contentUrl: "essays/your-essay.html",
```

这样可以同时保留 Markdown 源文件、图表资产和生成后的 Blog 正文，避免把大量 HTML 全部写进 `blog-data.js`。

页面会按 `date` 自动从新到旧排序，并能按类型筛选。

- 如果 `url` 填写网址，点击条目会直接打开论文、代码仓库或项目网站。
- 如果 `url` 留空为 `""`，点击条目会打开站内正文；正文填写在 `body`。

## 如何替换头像？

把竖版照片命名为 `profile.jpg`，放到：

```text
assets/images/profile.jpg
```

推荐比例约 4:5。没有照片时会显示 `content.js` 里的姓名缩写。

## 本地预览

在项目目录运行：

```bash
python3 -m http.server 8000
```

然后打开：

- 主页：`http://localhost:8000/`
- Blog：`http://localhost:8000/blog.html`

## 文件结构

```text
.
├── index.html               # About 页面结构，通常不需要改
├── blog.html                # Blog 页面结构，通常不需要改
├── content.js               # 个人信息与 About 内容
├── blog-data.js             # 论文、项目、随笔都在这里编辑
├── essays/                  # 长篇 Essay、Markdown 源文件和图表
├── assets/
│   ├── css/style.css        # 视觉样式
│   ├── images/profile.jpg   # 头像
│   └── js/
│       ├── main.js          # About 页面逻辑
│       └── blog.js          # Blog 页面逻辑
└── README.md                # 本说明
```
