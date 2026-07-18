/*
 * ================================================================
 *  EDIT THIS FILE — 你的主页内容都在这里修改
 * ================================================================
 *
 * 说明：
 * 1. 修改引号里的文字即可；不要删除逗号、引号或括号。
 * 2. 不想展示的链接或条目，可以删掉对应的 {...} 整段。
 * 3. 头像：把照片命名为 profile.jpg，放到 assets/images/ 文件夹。
 * 4. 所有网址都要以 https:// 或 mailto: 开头。
 */

window.SITE_CONTENT = {
  // ---------- 基本信息 ----------
  name: "Your Name",
  initials: "YN",
  title: "Your title or short bio",
  tagline: "A one-sentence introduction to your work and what you care about.",
  location: "City, Country",
  affiliation: "Your University or Organization",
  profilePhoto: "assets/images/profile.jpg",

  // ---------- 左侧联系方式 ----------
  links: [
    { label: "Email", url: "mailto:you@example.com" },
    { label: "GitHub", url: "https://github.com/your-username" },
    { label: "Google Scholar", url: "https://scholar.google.com/" },
    { label: "ORCID", url: "https://orcid.org/" },
  ],

  // ---------- About ----------
  // 每一个引号中的段落会自动显示为一个自然段。
  about: [
    "Write a short introduction here. Explain who you are, what you currently do, and the broad questions that motivate your work.",
    "Use a second paragraph for your background, education, previous experience, or collaborators. You may add or remove paragraphs freely.",
    "You can include links inside a paragraph by using simple HTML, for example: I work at <a href=\"https://example.com\">Example Lab</a>.",
  ],

  // ---------- Research ----------
  researchIntro: "A short overview of your research vision and the problems you are working on.",
  research: [
    {
      number: "01",
      title: "Research Direction One",
      description: "Describe the core question, your approach, and why this direction matters.",
      keywords: ["Keyword", "Method", "Application"],
    },
    {
      number: "02",
      title: "Research Direction Two",
      description: "Add a second research direction. Keep each description to two or three sentences.",
      keywords: ["Keyword", "Method", "Application"],
    },
    {
      number: "03",
      title: "Research Direction Three",
      description: "Add a third direction, or delete this entire block if you only need two.",
      keywords: ["Keyword", "Method", "Application"],
    },
  ],

  // ---------- Publications ----------
  publications: [
    {
      year: "2026",
      title: "Title of Your Paper",
      authors: "Your Name, Coauthor One, and Coauthor Two",
      venue: "Journal or Conference Name",
      links: [
        { label: "Paper", url: "https://example.com" },
        { label: "Code", url: "https://github.com/your-username" },
      ],
    },
    {
      year: "2025",
      title: "Another Publication Title",
      authors: "Coauthor One, Your Name, and Coauthor Two",
      venue: "Journal or Conference Name",
      links: [{ label: "Paper", url: "https://example.com" }],
    },
    {
      year: "2024",
      title: "A Representative Earlier Work",
      authors: "Your Name and Coauthor One",
      venue: "Journal or Conference Name",
      links: [{ label: "Paper", url: "https://example.com" }],
    },
  ],

  // ---------- Interests（新增栏目） ----------
  interestsIntro: "A few subjects, practices, and curiosities that shape how you see the world beyond your primary work.",
  interests: [
    { title: "Interest One", description: "A short note about why this matters to you." },
    { title: "Interest Two", description: "This can be academic, creative, technical, or personal." },
    { title: "Interest Three", description: "Add as many interests as you like." },
    { title: "Interest Four", description: "Or delete any item you do not need." },
  ],
};
