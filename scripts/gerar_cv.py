# -*- coding: utf-8 -*-
"""Gera public/curriculo-guilherme-jardim.pdf a partir de scripts/cv.json.

O PDF publicado traz apenas LinkedIn e GitHub como contato.
Uso: npm run cv   (exporta os dados e gera o PDF)
"""
import json
import pathlib

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer

RAIZ = pathlib.Path(__file__).resolve().parent.parent
dados = json.loads((RAIZ / "scripts" / "cv.json").read_text(encoding="utf-8"))
p = dados["perfil"]

AZ = colors.HexColor("#1f3a4d")
nome = ParagraphStyle("n", fontName="Helvetica-Bold", fontSize=22, textColor=AZ, leading=26)
sub = ParagraphStyle("s", fontName="Helvetica", fontSize=11, textColor=colors.HexColor("#444444"), leading=15)
h = ParagraphStyle("h", fontName="Helvetica-Bold", fontSize=11, textColor=AZ, spaceBefore=9, spaceAfter=2)
b = ParagraphStyle("b", fontName="Helvetica", fontSize=9.5, leading=13)
bl = ParagraphStyle("bl", parent=b, leftIndent=10)
co = ParagraphStyle("co", fontName="Helvetica-Bold", fontSize=10, leading=13, spaceBefore=5)

S = []


def sec(t):
    S.append(Paragraph(t.upper(), h))
    S.append(HRFlowable(width="100%", thickness=0.6, color=AZ, spaceAfter=3))


S.append(Paragraph(p["nome"].upper(), nome))
S.append(Paragraph(p["titulo"], sub))
S.append(
    Paragraph(
        f'{p["local"]} · <link href="{p["links"]["linkedin"]}">LinkedIn</link> · '
        f'<link href="{p["links"]["github"]}">GitHub</link>',
        b,
    )
)

sec("Resumo profissional")
S.append(Paragraph(p["resumo"], b))

sec("Tecnologias")
for g in dados["tecnologias"]:
    S.append(Paragraph(f'<b>{g["grupo"]}:</b> {", ".join(g["itens"])}', b))

sec("Experiência profissional")
for e in dados["experiencias"]:
    S.append(Paragraph(e["empresa"].upper(), co))
    for c in e["cargos"]:
        S.append(Paragraph(f'<i>{c["cargo"]} · {c["periodo"]}</i>', b))
    for d in e["destaques"]:
        S.append(Paragraph(d, bl, bulletText="•"))

sec("Projetos")
for pr in dados["projetos"]:
    S.append(Paragraph(f'<b>{pr["nome"]}</b> — {pr["descricao"]}', bl, bulletText="•"))

sec("Formação e cursos")
for g in dados["formacao"]["graduacao"]:
    S.append(Paragraph(f'{g["curso"]} — {g["instituicao"]} ({g["periodo"]})', b))
for c in dados["formacao"]["cursos"]:
    S.append(Paragraph(f'{c["nome"]}: {c["detalhe"]}', b))

sec("Idiomas")
S.append(Paragraph(" · ".join(p["idiomas"]), b))

saida = RAIZ / "public" / "curriculo-guilherme-jardim.pdf"
SimpleDocTemplate(
    str(saida), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm, topMargin=14 * mm, bottomMargin=14 * mm,
    title="Guilherme Jardim - Currículo", author="Guilherme Jardim",
).build(S)
print("PDF gerado em", saida)
