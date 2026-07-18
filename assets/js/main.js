(function () {
  "use strict";

  const content = window.SITE_CONTENT;
  if (!content) {
    console.error("SITE_CONTENT is missing. Check content.js.");
    return;
  }

  const textFields = [
    "name",
    "initials",
    "title",
    "tagline",
    "location",
    "affiliation",
    "researchIntro",
    "interestsIntro",
  ];

  textFields.forEach((field) => {
    document.querySelectorAll(`[data-content="${field}"]`).forEach((element) => {
      element.textContent = content[field] || "";
    });
  });

  document.title = `${content.name} — Academic Homepage`;
  document.querySelector('meta[name="description"]').content = content.tagline;

  const photo = document.getElementById("profile-photo");
  const photoPlaceholder = document.getElementById("profile-placeholder");
  if (content.profilePhoto) {
    photo.src = content.profilePhoto;
    photo.alt = `${content.name} portrait`;
    photo.addEventListener("load", () => {
      photo.hidden = false;
      photoPlaceholder.hidden = true;
    });
    photo.addEventListener("error", () => {
      photo.hidden = true;
      photoPlaceholder.hidden = false;
    });
  }

  const createExternalLink = (item) => {
    const anchor = document.createElement("a");
    anchor.href = item.url;
    anchor.textContent = item.label;
    if (!item.url.startsWith("mailto:")) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }
    return anchor;
  };

  const profileLinks = document.getElementById("profile-links");
  (content.links || []).forEach((item) => profileLinks.appendChild(createExternalLink(item)));

  const aboutContent = document.getElementById("about-content");
  (content.about || []).forEach((paragraph) => {
    const element = document.createElement("p");
    element.innerHTML = paragraph;
    aboutContent.appendChild(element);
  });

  const researchList = document.getElementById("research-list");
  (content.research || []).forEach((item) => {
    const article = document.createElement("article");
    article.className = "research-card";

    const keywords = (item.keywords || [])
      .map((keyword) => `<li>${keyword}</li>`)
      .join("");

    article.innerHTML = `
      <span class="card-number">${item.number || ""}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${keywords ? `<ul class="keyword-list">${keywords}</ul>` : ""}
    `;
    researchList.appendChild(article);
  });

  const publicationsList = document.getElementById("publications-list");
  (content.publications || []).forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "publication-item";

    const links = (item.links || [])
      .map((link) => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`)
      .join("");

    listItem.innerHTML = `
      <div class="publication-year">${item.year}</div>
      <article>
        <h3>${item.title}</h3>
        <p class="publication-authors">${item.authors}</p>
        <p class="publication-venue">${item.venue}</p>
        ${links ? `<div class="publication-links">${links}</div>` : ""}
      </article>
    `;
    publicationsList.appendChild(listItem);
  });

  const interestsList = document.getElementById("interests-list");
  (content.interests || []).forEach((item, index) => {
    const article = document.createElement("article");
    article.className = "interest-item";
    article.innerHTML = `
      <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    interestsList.appendChild(article);
  });

  document.getElementById("current-year").textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...nav.querySelectorAll("a")];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-25% 0px -65%", threshold: 0 },
  );
  sections.forEach((section) => observer.observe(section));
})();
