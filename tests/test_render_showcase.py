import importlib.util
import json
import tempfile
import unittest
from pathlib import Path


SCRIPT = Path(__file__).parents[1] / "scripts" / "render_showcase.py"
SPEC = importlib.util.spec_from_file_location("render_showcase", SCRIPT)
renderer = importlib.util.module_from_spec(SPEC)
assert SPEC.loader
SPEC.loader.exec_module(renderer)


def payload(update=""):
    return {
        "schema_version": 1,
        "project_id": "lernava",
        "display_name": "LearnAva / Zabanyar",
        "status": "Active development",
        "current_milestone": "Validated learning workflows",
        "public_summary": "Cross-stack learning product.",
        "highlights": ["Flutter and FastAPI"],
        "verification": ["Tested workflow"],
        "public_update": update,
    }


class RendererTests(unittest.TestCase):
    def test_empty_update_changes_status_without_creating_achievement(self):
        validated = renderer.validate(payload())
        self.assertEqual(renderer.next_updates(validated, []), [])

    def test_explicit_update_is_deduplicated_and_capped_at_eight(self):
        validated = renderer.validate(payload("Validated protected audio delivery"))
        existing = [
            {"date": f"2026-10-{day:02}", "text": f"Achievement {day}"}
            for day in range(31, 22, -1)
        ]
        first = renderer.next_updates(validated, existing)
        self.assertEqual(first[0]["text"], "Validated protected audio delivery")
        self.assertEqual(len(first), 8)
        self.assertEqual(renderer.next_updates(validated, first), first)

    def test_unknown_keys_and_secret_patterns_are_rejected(self):
        with self.assertRaises(SystemExit):
            renderer.validate({**payload(), "private_notes": "not public"})
        with self.assertRaises(SystemExit):
            renderer.validate(payload("auth_token=not-safe-to-publish"))

    def test_rendered_file_preserves_only_validated_public_fields(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "projects").mkdir()
            (root / "projects" / "LEARNAva.md").write_text(
                "# LearnAva\n", encoding="utf-8"
            )
            source = root / "payload.json"
            source.write_text(json.dumps(payload("Shipped a safe milestone")), encoding="utf-8")
            renderer.publish(source, root)
            stored = json.loads((root / "data" / "lernava.json").read_text(encoding="utf-8"))
            self.assertEqual(stored["recent_updates"][0]["text"], "Shipped a safe milestone")
            self.assertNotIn("private_notes", stored)


if __name__ == "__main__":
    unittest.main()
