const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");
const root = path.join(__dirname, "..");
const source = fs.readFileSync(path.join(root, "assets/js/notes.js"), "utf8");
const note = (overrides = {}) => ({ id: "stable-id", visible: true, title: "随记", date: "2026-10-21", body: "正文", ...overrides });
const setup = (fetch) => {
  const context = { window: {}, fetch };
  vm.runInNewContext(source, context);
  return context.window.SITE_NOTES;
};

test("only explicitly visible, valid notes reach the public list", () => {
  const api = setup();
  const data = { notes: [note(), note({ id: "hidden", visible: false }), note({ id: "implicit", visible: undefined }), note({ id: "string", visible: "true" }), note({ id: "bad-date", date: "2026-02-30" }), note({ id: "bad-id/path" }), note({ id: "bad-body", body: null }), null] };
  assert.deepEqual(JSON.parse(JSON.stringify(api.normalize(data))).map((p) => p.slug), ["note-stable-id"]);
});

test("permalink survives title changes and optional fields remain safe", () => {
  const api = setup();
  const first = api.normalize({ notes: [note()] })[0];
  const renamed = api.normalize({ notes: [note({ title: "换个标题", tags: ["生活", null, 42] })] })[0];
  assert.equal(first.slug, renamed.slug);
  assert.equal(renamed.type, "note");
  assert.equal(renamed.summary, "");
  assert.equal(renamed.tags.length, 1);
  assert.equal(api.normalize({ notes: [note(), note()] }).length, 1);
});

test("reading always revalidates notes and surfaces bad responses", async () => {
  const api = setup(async (url, options) => {
    assert.match(url, /^notes\.json\?v=\d+$/);
    assert.equal(options.cache, "no-store");
    return { ok: true, json: async () => ({ notes: [note()] }) };
  });
  assert.equal((await api.load()).length, 1);
  await assert.rejects(setup(async () => ({ ok: false, status: 503 })).load(), /503/);
  assert.throws(() => api.normalize({ notes: "invalid" }), /Invalid notes/);
});

test("CMS cannot use an anonymous or test backend in production", () => {
  const config = JSON.parse(fs.readFileSync(path.join(root, "admin/config.yml"), "utf8"));
  assert.equal(config.backend.name, "turbo-github");
  assert.equal(config.backend.branch, "master");
  assert.equal(config.local_backend, undefined);
  assert.equal(config.publish_mode, undefined);
  assert.equal(config.collections.length, 1);
  const file = config.collections[0].files[0];
  assert.equal(file.file, "notes.json");
  const fields = file.fields[0].fields;
  assert.deepEqual(fields.find((f) => f.name === "body").modes, ["rich_text"]);
  assert.equal(fields.find((f) => f.name === "visible").widget, "boolean");
});

test("original three entries remain hidden without removing their source", () => {
  const context = { window: {} };
  const originalSource = fs.readFileSync(path.join(root, "blog-data.js"), "utf8");
  vm.runInNewContext(originalSource, context);
  for (const slug of ["cumcm-autonomous-harness", "human-agent-research-engineering-workflow", "research-code-stewardship-lab"]) {
    assert.ok(originalSource.includes(slug));
    assert.ok(!context.window.BLOG_POSTS.some((post) => post.slug === slug));
  }
});
