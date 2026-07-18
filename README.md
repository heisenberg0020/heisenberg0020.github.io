# 学术个人主页模板

这是一个参考 AcademicPages 类型信息架构制作的轻量个人主页，包含：

- About
- Research
- Publications
- Interests

按要求没有 Outreaching、Teaching、Talks 和 CV。

## 你只需要修改哪里？

绝大部分情况下，只需修改根目录的 **`content.js`**。文件里已经用中文注释标明：

1. `name`：姓名
2. `initials`：没有头像时显示的姓名缩写
3. `title`、`tagline`：头衔与一句话介绍
4. `location`、`affiliation`：所在地与机构
5. `links`：邮箱、GitHub、Google Scholar、ORCID 等链接
6. `about`：个人介绍，每一项是一段
7. `research`：研究方向
8. `publications`：论文列表
9. `interests`：兴趣列表

修改时保留引号、逗号和括号。新增内容时，复制相邻的一整段 `{ ... }` 再修改。

## 如何替换头像？

把照片命名为 **`profile.jpg`**，放到：

```text
assets/images/profile.jpg
```

建议使用竖版照片，宽高比例约为 4:5。没有照片时，网站会自动显示 `content.js` 里的姓名缩写。

## 如何本地预览？

在项目目录运行：

```bash
python3 -m http.server 8000
```

然后在浏览器打开 `http://localhost:8000`。

## GitHub Pages 部署

推荐的仓库名称是：

```text
你的GitHub用户名.github.io
```

将这些文件放在仓库的 `main` 分支根目录后，在仓库 **Settings → Pages** 中选择 **Deploy from a branch**，分支选择 `main`、目录选择 `/ (root)`。几分钟后即可通过：

```text
https://你的GitHub用户名.github.io/
```

访问。

## 文件结构

```text
.
├── index.html              # 页面结构，通常不需要改
├── content.js              # 你的所有内容，主要修改这里
├── assets/
│   ├── css/style.css       # 视觉样式
│   ├── images/profile.jpg  # 你要添加的头像
│   └── js/main.js          # 页面逻辑，通常不需要改
└── README.md               # 使用说明
```
