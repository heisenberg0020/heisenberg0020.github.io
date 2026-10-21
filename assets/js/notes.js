(function () {
  "use strict";

  const normalize = (data) => {
    if (!data || !Array.isArray(data.notes)) throw new Error("Invalid notes data");
    const ids = new Set();
    return data.notes.flatMap((note) => {
      if (!note || note.visible !== true || typeof note.id !== "string" ||
          !/^[a-zA-Z0-9-]{1,80}$/.test(note.id) || ids.has(note.id) ||
          typeof note.title !== "string" || !note.title.trim() ||
          typeof note.body !== "string" || typeof note.date !== "string" ||
          !/^\d{4}-\d{2}-\d{2}$/.test(note.date) ||
          !Number.isFinite(Date.parse(`${note.date}T00:00:00Z`)) ||
          new Date(`${note.date}T00:00:00Z`).toISOString().slice(0, 10) !== note.date) return [];
      ids.add(note.id);
      return [{
        slug: `note-${note.id}`,
        type: "note",
        date: note.date,
        title: note.title,
        summary: typeof note.summary === "string" ? note.summary : "",
        tags: Array.isArray(note.tags) ? note.tags.filter((tag) => typeof tag === "string") : [],
        url: "",
        markdown: note.body,
      }];
    });
  };

  const load = async () => {
    const response = await fetch(`notes.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Unable to load notes (${response.status})`);
    return normalize(await response.json());
  };

  const renderBody = (markdown) => {
    if (!window.marked || !window.DOMPurify) throw new Error("Notes renderer unavailable");
    return window.DOMPurify.sanitize(window.marked.parse(markdown, { breaks: true }), {
      USE_PROFILES: { html: true },
      FORBID_TAGS: ["form", "input", "button", "textarea", "select", "style"],
      FORBID_ATTR: ["style"],
    });
  };

  window.SITE_NOTES = { normalize, load, renderBody };
})();
