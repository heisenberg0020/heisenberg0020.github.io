/*
 * ================================================================
 *  EDIT THIS FILE — Blog 的全部内容都在这里
 * ================================================================
 *
 * 新增内容：复制任意一个从 { 到 }, 的完整条目，粘贴到数组最上方。
 * type 只能填："publication"、"project" 或 "essay"。
 * date 使用 YYYY-MM-DD，页面会自动按日期从新到旧排序。
 *
 * 两种打开方式：
 * 1. url 有网址：点击后打开论文、项目或其他外部页面。
 * 2. url 留空为 ""：点击后显示 body 中的正文，适合个人随笔。
 *
 * body 的每一项是一段 HTML；可以使用 <h2>、<p>、<a>、<ul> 等标签。
 */

window.BLOG_POSTS = [
  {
    slug: "human-agent-research-engineering-workflow",
    type: "essay",
    date: "2026-07-23",
    title: "Human–Agent Research Engineering: A Practical Workflow",
    summary: "A concise bilingual workflow for turning a research idea into auditable experiment code with coding agents—from a frozen protocol to the final Claim Gate.",
    tags: ["AI Agents", "Research Engineering", "Code Audit", "Bilingual"],
    meta: "Bilingual essay · 中文 / English · 10 min per language",
    url: "",
    contentUrl: "essays/human-agent-research-engineering-workflow.html",
    body: [],
  },
  {
    slug: "research-code-stewardship-lab",
    type: "project",
    date: "2026-07-21",
    title: "Research Code Stewardship Lab",
    summary: "A four-level training lab for auditing whether AI-built research code remains faithful to papers, experimental protocols, and scientific claims.",
    tags: ["Research Code", "Code Audit", "AI Agents"],
    meta: "Open-source training framework · GitHub",
    url: "https://github.com/heisenberg0020/research-code-stewardship-lab",
    body: [],
  },

  /*
   * BLOG 创建模板（默认隐藏，不会显示在网页上）
   * ---------------------------------------------------------------
   * 下面三个条目分别是 Publication、Project 和 Essay 的填写示例。
   * 以后新增内容时，复制所需类型的完整 { ... } 条目，粘贴到本注释
   * 上方并修改字段即可。不要直接删除这些模板，方便后续参考编辑。
   *
  {
    slug: "your-latest-publication",
    type: "publication",
    date: "2026-01-20",
    title: "Title of Your Latest Publication",
    summary: "Use one or two sentences to explain the question, contribution, and result.",
    tags: ["Paper", "Research topic"],
    meta: "Your Name, Coauthor One · Conference or Journal",
    url: "https://example.com/your-paper",
    body: [],
  },
  {
    slug: "your-project",
    type: "project",
    date: "2025-10-08",
    title: "A Project You Built",
    summary: "Briefly describe what you built, why it matters, and what you learned.",
    tags: ["Project", "Open source"],
    meta: "Code and demo",
    url: "https://github.com/your-username/your-project",
    body: [],
  },
  {
    slug: "your-first-essay",
    type: "essay",
    date: "2025-06-15",
    title: "Your First Personal Essay",
    summary: "A short subtitle or opening thought that invites readers into the piece.",
    tags: ["Reflection", "Life"],
    meta: "4 min read",
    url: "",
    body: [
      "<p>Write the opening paragraph of your essay here.</p>",
      "<h2>A section heading</h2>",
      "<p>Continue your story, reflection, or technical note here. Add as many body items as you need.</p>",
      "<p>You can also add a <a href=\"https://example.com\">link inside a paragraph</a>.</p>",
    ],
  },
   */
];
