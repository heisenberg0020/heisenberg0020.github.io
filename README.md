# 学术个人主页模板

主页现在只有两个入口：

- **About**：个人简介与联系方式
- **Blog**：统一收录 Publications、Projects 和 Essays（个人随笔）

Research 和 Interests 已从主页移除。

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
├── assets/
│   ├── css/style.css        # 视觉样式
│   ├── images/profile.jpg   # 头像
│   └── js/
│       ├── main.js          # About 页面逻辑
│       └── blog.js          # Blog 页面逻辑
└── README.md                # 本说明
```
