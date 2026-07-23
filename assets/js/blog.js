(function () {
  "use strict";

  const site = window.SITE_CONTENT || {};
  const posts = [...(window.BLOG_POSTS || [])].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
  const labels = {
    publication: "Publication",
    project: "Project",
    essay: "Essay",
  };

  document.querySelectorAll('[data-content="name"]').forEach((element) => {
    element.textContent = site.name || "Your Name";
  });
  document.title = `Blog — ${site.name || "Your Name"}`;
  document.getElementById("current-year").textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      timeZone: "UTC",
    }).format(new Date(`${date}T00:00:00Z`));

  const escapeHtml = (value = "") =>
    value.replace(
      /[&<>"']/g,
      (character) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[
          character
        ],
    );

  const destination = (post) =>
    post.url || `blog.html?post=${encodeURIComponent(post.slug)}`;

  const loadPostBody = async (post) => {
    if (!post.contentUrl) return (post.body || []).join("");

    const response = await fetch(post.contentUrl, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`Unable to load essay content (${response.status})`);
    }
    return response.text();
  };

  const renderList = (filter = "all") => {
    const list = document.getElementById("blog-list");
    const visiblePosts = posts.filter((post) => filter === "all" || post.type === filter);

    list.innerHTML = visiblePosts
      .map((post) => {
        const isExternal = Boolean(post.url);
        const tags = (post.tags || [])
          .map((tag) => `<span>${escapeHtml(tag)}</span>`)
          .join("");
        return `
          <article class="blog-item">
            <div class="blog-item-meta">
              <span class="blog-kind">${labels[post.type] || escapeHtml(post.type)}</span>
              <time datetime="${escapeHtml(post.date)}">${formatDate(post.date)}</time>
            </div>
            <h2>
              <a href="${escapeHtml(destination(post))}"${
                isExternal ? ' target="_blank" rel="noopener noreferrer"' : ""
              }>${escapeHtml(post.title)}${isExternal ? '<span aria-hidden="true"> ↗</span>' : ""}</a>
            </h2>
            <p>${escapeHtml(post.summary)}</p>
            ${post.meta ? `<p class="blog-byline">${escapeHtml(post.meta)}</p>` : ""}
            ${tags ? `<div class="blog-tags">${tags}</div>` : ""}
          </article>
        `;
      })
      .join("");

    if (!visiblePosts.length) {
      list.innerHTML = '<p class="empty-state">No posts in this category yet.</p>';
    }
  };

  const showPost = async (slug) => {
    const post = posts.find((item) => item.slug === slug && !item.url);
    if (!post) return false;

    let body;
    try {
      body = await loadPostBody(post);
    } catch (error) {
      console.error(error);
      body =
        '<p class="content-error">The essay could not be loaded. Please return to the blog index and try again.</p>';
    }

    document.getElementById("blog-index").hidden = true;
    const postView = document.getElementById("post-view");
    const tags = (post.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
    document.getElementById("post-content").innerHTML = `
      <header class="post-header">
        <div class="blog-item-meta">
          <span class="blog-kind">${labels[post.type] || escapeHtml(post.type)}</span>
          <time datetime="${escapeHtml(post.date)}">${formatDate(post.date)}</time>
        </div>
        <h1>${escapeHtml(post.title)}</h1>
        <p>${escapeHtml(post.summary)}</p>
        ${post.meta ? `<p class="blog-byline">${escapeHtml(post.meta)}</p>` : ""}
        ${tags ? `<div class="blog-tags">${tags}</div>` : ""}
      </header>
      <div class="post-body">${body}</div>
    `;
    postView.hidden = false;
    document.title = `${post.title} — ${site.name || "Your Name"}`;
    return true;
  };

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
      renderList(button.dataset.filter);
    });
  });

  const initialize = async () => {
    const postSlug = new URLSearchParams(window.location.search).get("post");
    if (!postSlug || !(await showPost(postSlug))) renderList();
  };

  initialize();
})();
