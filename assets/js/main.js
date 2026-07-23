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

})();
