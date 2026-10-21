Pinned browser dependencies for public note rendering:

- marked 18.1.1, `lib/marked.umd.js` from its official npm release. MIT; see marked.LICENSE.
- DOMPurify 3.4.17, `dist/purify.min.js` from its official npm release. See dompurify.LICENSE.

Decap CMS 3.17.1 is loaded only on demand in the author page from jsDelivr,
with an SHA-384 integrity check in admin/writer.js. No CMS scripts run on public reading pages.
