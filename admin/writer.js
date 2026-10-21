(function () {
  "use strict";

  const storageKey = "homepage-turbo-site-id";
  const isSiteId = (value) => typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
  const status = document.getElementById("writer-status");
  const connectCard = document.getElementById("connection-card");
  const readyCard = document.getElementById("ready-card");
  const siteInput = document.getElementById("site-id");
  const openButton = document.getElementById("open-editor");
  let config;
  let siteId;

  const showConnection = () => {
    connectCard.hidden = false;
    readyCard.hidden = true;
  };

  const selectSite = (id) => {
    siteId = id;
    siteInput.value = id;
    connectCard.hidden = true;
    readyCard.hidden = false;
    status.textContent = "";
  };

  const startEditor = async () => {
    if (!config || !isSiteId(siteId)) return;
    openButton.disabled = true;
    status.textContent = "正在打开编辑器…";
    try {
      window.CMS_MANUAL_INIT = true;
      if (!window.CMS) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/npm/decap-cms@3.17.1/dist/decap-cms.js";
          script.integrity = "sha384-d2pbrhjc5asvSK35gKkrgRIk0Wq+2CQynWnXtSsYWQawXCgBXhcAK737jBAKXT4T";
          script.crossOrigin = "anonymous";
          script.onload = resolve;
          script.onerror = () => { script.remove(); reject(new Error("Editor unavailable")); };
          document.head.appendChild(script);
        });
      }
      // IDs stay stable when the title, date or ordering changes.
      window.CMS.registerEventListener({
        name: "preSave",
        handler: ({ entry }) => {
          const data = entry.get("data");
          return data.set("notes", data.get("notes").map((note) =>
            note.set("id", note.get("id") || crypto.randomUUID())));
        },
      });
      window.CMS.registerPreviewStyle("../assets/css/style.css");
      window.CMS.registerPreviewTemplate("notes", ({ entry }) => {
        const h = window.h;
        const notes = entry.getIn(["data", "notes"]);
        return h("main", { className: "blog-shell", style: { padding: "2rem" } },
          ...(notes ? notes.toJS() : []).map((note, index) => h("article", { key: note.id || index, style: { marginBottom: "3rem" } },
            h("p", { className: "eyebrow" }, `${note.date || ""} · ${note.visible ? "将显示在 Blog" : "已隐藏"}`),
            h("h1", {}, note.title || "无标题"),
            h("div", { className: "post-body", dangerouslySetInnerHTML: { __html: window.SITE_NOTES.renderBody(note.body || "") } }))));
      });
      window.CMS.init({ config: { ...config, load_config_file: false, backend: { ...config.backend, turbo_site_id: siteId } } });
      document.getElementById("writer-shell").hidden = true;
    } catch (error) {
      console.error(error);
      status.textContent = "编辑器暂时无法打开，请检查网络后重试。你的随记没有被修改。";
      openButton.disabled = false;
    }
  };

  openButton.addEventListener("click", startEditor);
  document.getElementById("change-connection").addEventListener("click", () => {
    showConnection();
    siteInput.focus();
  });
  document.getElementById("connect-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const id = siteInput.value.trim();
    if (!config || !isSiteId(id)) {
      status.textContent = config ? "请填写完整的 Site ID。" : "配置尚未读取成功，请刷新后重试。";
      return;
    }
    // This public identifier is only a convenience preference, never an access credential.
    try { localStorage.setItem(storageKey, id); } catch (_) { /* Login still works without local storage. */ }
    selectSite(id);
    startEditor();
  });

  (async () => {
    try {
      const response = await fetch("config.yml", { cache: "no-store" });
      if (!response.ok) throw new Error("Config unavailable");
      config = await response.json(); // JSON is valid YAML; Turbo reads this same collections config.
      let storedId;
      try { storedId = localStorage.getItem(storageKey); } catch (_) { /* Optional preference. */ }
      const id = config.backend.turbo_site_id || storedId;
      if (isSiteId(id)) selectSite(id);
      else { showConnection(); status.textContent = ""; }
    } catch (error) {
      console.error(error);
      status.textContent = "暂时无法读取写作配置，请刷新后重试。";
    }
  })();
})();
