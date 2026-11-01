#!/usr/bin/env python3
"""Render strictly allowlisted private-project metadata into public showcase pages."""

from __future__ import annotations

import argparse
import json
import re
from datetime import date
from pathlib import Path
from typing import Any


ALLOWED_KEYS = {
    "schema_version",
    "project_id",
    "display_name",
    "status",
    "current_milestone",
    "public_summary",
    "highlights",
    "verification",
    "public_update",
}
PROJECTS = {
    "lernava": ("lernava.json", "LEARNAva.md"),
    "ai-company": ("ai-company.json", "AI_COMPANY.md"),
}
START_MARKER = "<!-- SHOWCASE-AUTO:START -->"
END_MARKER = "<!-- SHOWCASE-AUTO:END -->"
SECRET_PATTERNS = (
    re.compile(r"gh[pousr]_[A-Za-z0-9_]{20,}"),
    re.compile(r"github_pat_[A-Za-z0-9_]{20,}"),
    re.compile(r"sk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{20,}"),
    re.compile(r"AIza[0-9A-Za-z_-]{30,}"),
    re.compile(r"AKIA[0-9A-Z]{16}"),
    re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----"),
    re.compile(
        r"(?i)\b(?:api_key|secret_key|access_token|auth_token|password)\b\s*[:=]\s*[\"']?[^\s\"']+"
    ),
)


def fail(message: str) -> None:
    raise SystemExit(f"showcase renderer rejected payload: {message}")


def validate(payload: Any) -> dict[str, Any]:
    if not isinstance(payload, dict):
        fail("top level must be an object")
    unknown = set(payload) - ALLOWED_KEYS
    missing = ALLOWED_KEYS - set(payload)
    if unknown:
        fail(f"unknown keys: {', '.join(sorted(unknown))}")
    if missing:
        fail(f"missing keys: {', '.join(sorted(missing))}")
    if payload["schema_version"] != 1:
        fail("schema_version must be 1")
    if payload["project_id"] not in PROJECTS:
        fail("unsupported project_id")
    scalar_keys = ALLOWED_KEYS - {
        "schema_version", "highlights", "verification", "public_update"
    }
    for key in scalar_keys:
        if not isinstance(payload[key], str) or not payload[key].strip():
            fail(f"{key} must be a non-empty string")
    if not isinstance(payload["public_update"], str):
        fail("public_update must be a string")
    for key in ("highlights", "verification"):
        value = payload[key]
        if not isinstance(value, list) or not value or not all(
            isinstance(item, str) and item.strip() for item in value
        ):
            fail(f"{key} must be a non-empty list of strings")
    serialized = json.dumps(payload, ensure_ascii=False)
    for pattern in SECRET_PATTERNS:
        if pattern.search(serialized):
            fail("content resembles a credential or private key")
    return payload


def load_existing(path: Path) -> list[dict[str, str]]:
    if not path.exists():
        return []
    existing = json.loads(path.read_text(encoding="utf-8"))
    updates = existing.get("recent_updates", []) if isinstance(existing, dict) else []
    if not isinstance(updates, list):
        return []
    return [
        item
        for item in updates
        if isinstance(item, dict)
        and set(item) == {"date", "text"}
        and all(isinstance(value, str) for value in item.values())
    ][:8]


def next_updates(
    payload: dict[str, Any], existing: list[dict[str, str]]
) -> list[dict[str, str]]:
    update = payload["public_update"].strip()
    if not update:
        return existing[:8]
    new_update = {"date": date.today().isoformat(), "text": update}
    if not existing or existing[0]["text"] != update:
        existing.insert(0, new_update)
    return existing[:8]


def render_block(payload: dict[str, Any], updates: list[dict[str, str]]) -> str:
    lines = [
        START_MARKER,
        "## Current public status",
        "",
        f"**Status:** {payload['status']}  ",
        f"**Current milestone:** {payload['current_milestone']}",
        "",
        payload["public_summary"],
        "",
        "### Highlights",
        "",
        *[f"- {item}" for item in payload["highlights"]],
        "",
        "### Public verification",
        "",
        *[f"- {item}" for item in payload["verification"]],
        "",
        "### Recent updates",
        "",
        *[f"- {item['date']}: {item['text']}" for item in updates],
        END_MARKER,
    ]
    return "\n".join(lines)


def update_page(path: Path, block: str) -> None:
    current = path.read_text(encoding="utf-8")
    marker_pattern = re.compile(
        re.escape(START_MARKER) + r".*?" + re.escape(END_MARKER), re.DOTALL
    )
    if marker_pattern.search(current):
        updated = marker_pattern.sub(block, current, count=1)
    else:
        updated = current.rstrip() + "\n\n" + block + "\n"
    path.write_text(updated, encoding="utf-8", newline="\n")


def publish(payload_path: Path, repo: Path) -> None:
    payload = validate(json.loads(payload_path.read_text(encoding="utf-8")))
    data_name, page_name = PROJECTS[payload["project_id"]]
    data_path = repo / "data" / data_name
    page_path = repo / "projects" / page_name
    if not page_path.is_file():
        fail(f"expected page does not exist: projects/{page_name}")

    updates = next_updates(payload, load_existing(data_path))

    stored = dict(payload)
    stored["recent_updates"] = updates
    data_path.parent.mkdir(parents=True, exist_ok=True)
    data_path.write_text(
        json.dumps(stored, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
        newline="\n",
    )
    update_page(page_path, render_block(payload, updates))


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("payload", type=Path)
    parser.add_argument("--repo", type=Path, default=Path.cwd())
    args = parser.parse_args()
    publish(args.payload, args.repo)


if __name__ == "__main__":
    main()
