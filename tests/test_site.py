from pathlib import Path


ROOT = Path(__file__).parents[1]


def test_site_assets_exist():
    assert (ROOT / "index.html").is_file()
    assert (ROOT / "style.css").is_file()
    assert (ROOT / "script.js").is_file()


def test_contact_form_and_primary_ctas_are_present():
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    script = (ROOT / "script.js").read_text(encoding="utf-8")
    assert 'id="projectForm"' in html
    assert 'href="#contact"' in html
    assert "projectForm?.addEventListener" in script
