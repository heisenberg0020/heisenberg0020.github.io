"""Loopback-only browser QA; --demo uses Decap's in-memory backend, never GitHub."""
import argparse
import json
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--port", type=int, default=8765)
parser.add_argument("--demo", action="store_true")
args = parser.parse_args()


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        pathname = urlsplit(self.path).path
        if pathname == "/qa/mobile.html":
            body = b'<!doctype html><html><head><meta charset="utf-8"><title>390px responsive QA</title></head><body style="margin:0;background:#ddd;display:flex;justify-content:center"><iframe title="390px writer viewport" src="/admin/" style="border:0;width:390px;height:844px;background:white"></iframe></body></html>'
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        payload = None
        if args.demo and pathname == "/admin/config.yml":
            payload = json.loads((ROOT / "admin/config.yml").read_text())
            payload["backend"] = {"name": "test-repo", "turbo_site_id": "00000000-0000-4000-8000-000000000001"}
        elif args.demo and pathname == "/notes.json":
            payload = {"notes": [
                {"id": "browser-test", "visible": True, "title": "浏览器测试：今天的小发现", "date": "2026-10-21", "summary": "仅在本地测试显示，不会发布到个人主页。", "tags": ["生活", "随记"], "body": "## 今天的小发现\n\n直接写下一个念头，**不需要编辑代码**。\n\n- 阳光很好\n- 留一点时间给自己\n\n[返回主页](index.html)\n\n<script>alert('unsafe')</script><img src=x onerror=alert('unsafe')>\n\n[不安全链接](javascript:alert('unsafe'))"},
                {"id": "older-test", "visible": True, "title": "更早的一篇随记", "date": "2026-10-20", "body": "这篇应该排在后面。"},
                {"id": "hidden-test", "visible": False, "title": "此条必须保持隐藏", "date": "2026-10-22", "body": "隐藏原文仍保留。"},
            ]}
        if payload is None:
            return super().do_GET()
        body = json.dumps(payload, ensure_ascii=False).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


print(f"Local: http://127.0.0.1:{args.port}/ {'(in-memory demo)' if args.demo else ''}", flush=True)
ThreadingHTTPServer(("127.0.0.1", args.port), partial(Handler, directory=str(ROOT))).serve_forever()
