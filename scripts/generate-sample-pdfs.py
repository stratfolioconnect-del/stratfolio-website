import json
import re
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src" / "data" / "research-samples.json"
FRAMEWORK = ROOT / "src" / "data" / "sample-report-framework.json"
OUTPUT = ROOT / "public" / "research-samples"
PAGE_WIDTH = 612
PAGE_HEIGHT = 792
LEFT = 58
RIGHT = 554
BODY_WIDTH = RIGHT - LEFT
NAVY = (0.035, 0.078, 0.169)
BLUE = (0.259, 0.388, 0.961)
INK = (0.08, 0.12, 0.2)
MUTED = (0.36, 0.41, 0.5)
LINE = (0.86, 0.88, 0.92)


def ascii_text(value):
    normalized = unicodedata.normalize("NFKD", value)
    return normalized.encode("ascii", "ignore").decode("ascii")


def pdf_escape(value):
    return ascii_text(value).replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def color_command(color, stroke=False):
    operator = "RG" if stroke else "rg"
    return f"{color[0]:.3f} {color[1]:.3f} {color[2]:.3f} {operator}"


def split_lines(text, max_chars=82):
    words = re.sub(r"\s+", " ", ascii_text(text)).split()
    lines = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if len(candidate) > max_chars and current:
            lines.append(current)
            current = word
        else:
            current = candidate
    if current:
        lines.append(current)
    return lines or [""]


class Report:
    def __init__(self, sample):
        self.sample = sample
        self.pages = []
        self.start_page()

    def start_page(self):
        self.commands = []
        self.y = 708
        self.commands.extend([
            color_command(NAVY),
            "0 738 612 54 re f",
            color_command((1, 1, 1)),
            self.text_command(LEFT, 761, "STRATFOLIO INTELLIGENCE", 10, True),
            color_command((0.72, 0.79, 0.91)),
            self.text_command(RIGHT - 165, 761, "ILLUSTRATIVE SAMPLE REPORT", 7, True),
        ])

    def text_command(self, x, y, text, size, bold=False):
        font = "F2" if bold else "F1"
        return f"BT /{font} {size} Tf 1 0 0 1 {x} {y} Tm ({pdf_escape(text)}) Tj ET"

    def ensure_space(self, amount):
        if self.y - amount < 72:
            self.finish_page()
            self.start_page()

    def add_line(self, text, size=11, color=INK, bold=False, leading=None, indent=0):
        leading = leading or size * 1.45
        self.ensure_space(leading)
        self.commands.append(color_command(color))
        self.commands.append(self.text_command(LEFT + indent, self.y, text, size, bold))
        self.y -= leading

    def add_paragraph(self, text):
        for line in split_lines(text, 88):
            self.add_line(line, 10.5, MUTED, leading=15)
        self.y -= 5

    def add_section_heading(self, index, title):
        self.ensure_space(40)
        self.commands.append(color_command(BLUE))
        self.commands.append(self.text_command(LEFT, self.y, f"{index:02d}", 10, True))
        self.commands.append(color_command(INK))
        self.commands.append(self.text_command(LEFT + 35, self.y - 2, ascii_text(title), 18, True))
        self.y -= 30
        self.commands.extend([color_command(LINE, True), f"{LEFT} {self.y} m {RIGHT} {self.y} l S"])
        self.y -= 20

    def finish_page(self):
        page_number = len(self.pages) + 1
        self.commands.extend([
            color_command(LINE, True),
            f"{LEFT} 51 m {RIGHT} 51 l S",
            color_command(MUTED),
            self.text_command(LEFT, 34, "HYPOTHETICAL DEMONSTRATION - NOT CLIENT WORK OR VERIFIED FINDINGS", 7, True),
            self.text_command(RIGHT - 30, 34, str(page_number), 8, True),
        ])
        self.pages.append("\n".join(self.commands))

    def build(self):
        sample = self.sample
        self.commands.append(color_command(BLUE))
        self.commands.append(self.text_command(LEFT, self.y, "RESEARCH FRAMEWORK / " + ascii_text(sample["category"].upper()), 8, True))
        self.y -= 34
        for line in split_lines(sample["title"], 42):
            self.add_line(line, 30, NAVY, True, 36)
        self.y -= 10
        self.add_paragraph(sample["description"])
        summary = sample["sections"][0]
        self.add_section_heading(1, summary["heading"])
        for paragraph in summary["paragraphs"]:
            self.add_paragraph(paragraph)
        for item in summary["bullets"]:
            self.add_line("* " + item, 9.5, INK, leading=14, indent=8)
        self.add_section_heading(2, "Illustrative research question")
        self.add_paragraph(sample["question"])
        self.add_section_heading(3, "Hypothetical context")
        self.add_paragraph(sample["illustrativeContext"])
        self.commands.extend([
            color_command((0.93, 0.95, 1)),
            f"{LEFT} {self.y - 55} {BODY_WIDTH} 55 re f",
            color_command(BLUE),
            self.text_command(LEFT + 13, self.y - 22, "DEMONSTRATION ONLY", 9, True),
            color_command(INK),
            self.text_command(LEFT + 13, self.y - 39, "No actual findings, clients, or sources are presented.", 9, False),
        ])
        self.y -= 78
        self.finish_page()

        for index, section in enumerate(sample["sections"][1:], start=4):
            self.start_page()
            self.add_section_heading(index, section["heading"])
            for paragraph in section["paragraphs"]:
                self.add_paragraph(paragraph)
            for item in section["bullets"]:
                for line_index, line in enumerate(split_lines(item, 82)):
                    prefix = "* " if line_index == 0 else "  "
                    self.add_line(prefix + line, 9.5, INK, leading=14, indent=8)
                self.y -= 3
            self.finish_page()
        return self.pages


def write_pdf(path, page_contents):
    objects = [
        b"<< /Type /Catalog /Pages 4 0 R >>",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
        b"",
    ]
    page_ids = []
    for content in page_contents:
        page_id = len(objects) + 1
        stream_id = page_id + 1
        page_ids.append(page_id)
        encoded = content.encode("ascii")
        objects.extend([
            f"<< /Type /Page /Parent 4 0 R /MediaBox [0 0 {PAGE_WIDTH} {PAGE_HEIGHT}] /Resources << /Font << /F1 2 0 R /F2 3 0 R >> >> /Contents {stream_id} 0 R >>".encode("ascii"),
            f"<< /Length {len(encoded)} >>\nstream\n".encode("ascii") + encoded + b"\nendstream",
        ])
    kids = " ".join(f"{page_id} 0 R" for page_id in page_ids)
    objects[3] = f"<< /Type /Pages /Kids [{kids}] /Count {len(page_ids)} >>".encode("ascii")

    document = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
    offsets = [0]
    for object_id, body in enumerate(objects, start=1):
        offsets.append(len(document))
        document.extend(f"{object_id} 0 obj\n".encode("ascii"))
        document.extend(body)
        document.extend(b"\nendobj\n")
    xref_position = len(document)
    document.extend(f"xref\n0 {len(objects) + 1}\n".encode("ascii"))
    document.extend(b"0000000000 65535 f \n")
    for offset in offsets[1:]:
        document.extend(f"{offset:010d} 00000 n \n".encode("ascii"))
    document.extend(
        f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_position}\n%%EOF\n".encode("ascii")
    )
    path.write_bytes(document)


def main():
    samples = json.loads(SOURCE.read_text(encoding="utf-8"))
    framework = json.loads(FRAMEWORK.read_text(encoding="utf-8"))
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for sample in samples:
        sample["sections"] = framework + sample["sections"]
        target = OUTPUT / f"{sample['slug']}.pdf"
        write_pdf(target, Report(sample).build())
        print(f"Generated {target.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
