# -*- coding: utf-8 -*-
"""
Генератор изображений культур для сайта «Мир биотехнологий».

Создаёт два набора векторных ассетов в assets/img/:
  culture-<slug>.svg   — вид чашки Петри сверху (морфология колоний)
  micro-<slug>.svg     — вид под микроскопом (клеточная морфология)

Изображения детерминированы: один и тот же seed даёт один и тот же файл,
поэтому пересборка не «дёргает» вёрстку. Запуск:  python tools/gen_cultures.py
"""

import math
import os
import random

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "img")

W = 440           # размер холста чашки
C = W / 2         # центр
R_GLASS = 208     # внешний радиус борта
R_AGAR = 190      # радиус питательной среды


# --------------------------------------------------------------------------
# описание культур
# --------------------------------------------------------------------------
CULTURES = [
    dict(
        slug="saccharomyces", seed=101, name="Saccharomyces cerevisiae",
        agar=("#e6d7b4", "#cdb98d", "#a8956b"),      # среда: центр, край, тень
        colony=("#fbf3de", "#e7d5ac", "#b99f6d"),    # колония: блик, тело, край
        pattern="punctate", n=46, r=(7, 17),
        micro=dict(bg=("#f3ead6", "#d8c69c"), cell=("#fdf8ea", "#d9c48f", "#9d854f"),
                   kind="budding", n=26, scale="10 мкм"),
    ),
    dict(
        slug="rhodosporidium", seed=202, name="Rhodosporidium toruloides",
        agar=("#f0e3c8", "#dcc79f", "#b09a72"),
        colony=("#f6b39b", "#e0765a", "#a8442f"),
        pattern="mucoid", n=17, r=(16, 34),
        micro=dict(bg=("#f7e6df", "#e0bdb0"), cell=("#ffd9cb", "#e07d61", "#a0402c"),
                   kind="budding", n=22, scale="10 мкм"),
    ),
    dict(
        slug="chlorella", seed=303, name="Chlorella vulgaris",
        agar=("#e3e9cd", "#c6d2a6", "#95a377"),
        colony=("#8fbe73", "#4a8741", "#255127"),
        pattern="lawn", n=190, r=(7, 20),
        micro=dict(bg=("#e8f0dc", "#bccfa6"), cell=("#c7e3a6", "#4f9147", "#20502a"),
                   kind="algae", n=30, scale="5 мкм"),
    ),
    dict(
        slug="pseudomonas", seed=404, name="Pseudomonas fluorescens",
        agar=("#dfe0a4", "#c2c477", "#8e9150"),
        colony=("#fffef0", "#efeab6", "#8f8a44"),
        pattern="diffuse", n=26, r=(10, 22),
        micro=dict(bg=("#eef0d8", "#c9cd9c"), cell=("#f7f6dd", "#c3c477", "#7f8144"),
                   kind="rods", n=34, scale="2 мкм"),
    ),
    dict(
        slug="rhodococcus", seed=505, name="Rhodococcus erythropolis",
        agar=("#ecdfc4", "#d3c096", "#a5926a"),
        colony=("#f4a878", "#d4622f", "#8f3717"),
        pattern="punctate", n=34, r=(9, 21),
        micro=dict(bg=("#f4e6d6", "#dcbfa4"), cell=("#ffc79c", "#d2662f", "#8b3616"),
                   kind="rods", n=30, scale="2 мкм"),
    ),
    dict(
        slug="fusarium", seed=606, name="Fusarium oxysporum",
        agar=("#e4dcc6", "#c8bfa3", "#948e78"),
        colony=("#fdfbfc", "#ddcde4", "#8a6a99"),
        pattern="mycelium", n=3, r=(30, 62),
        micro=dict(bg=("#f1ecf2", "#cfc0d6"), cell=("#fdfbfd", "#c9b2d3", "#7e6390"),
                   kind="hyphae", n=14, scale="20 мкм"),
    ),
]


# --------------------------------------------------------------------------
# помощники
# --------------------------------------------------------------------------
def polar(rng, rmax, bias=0.5):
    """Случайная точка в круге. bias=0.5 — равномерно по площади, меньше — к краю."""
    a = rng.uniform(0, math.tau)
    r = rmax * (rng.random() ** bias)
    return C + r * math.cos(a), C + r * math.sin(a)


def f(x):
    return f"{x:.1f}"


def defs_block(cu):
    a0, a1, a2 = cu["agar"]
    c0, c1, c2 = cu["colony"]
    s = cu["slug"]
    return f"""  <defs>
    <radialGradient id="agar-{s}" cx="38%" cy="32%" r="78%">
      <stop offset="0" stop-color="{a0}"/>
      <stop offset=".62" stop-color="{a1}"/>
      <stop offset="1" stop-color="{a2}"/>
    </radialGradient>
    <radialGradient id="rim-{s}" cx="34%" cy="28%" r="76%">
      <stop offset=".82" stop-color="#ffffff" stop-opacity=".10"/>
      <stop offset=".93" stop-color="#ffffff" stop-opacity=".55"/>
      <stop offset="1" stop-color="#8e9a90" stop-opacity=".45"/>
    </radialGradient>
    <radialGradient id="col-{s}" cx="34%" cy="30%" r="72%">
      <stop offset="0" stop-color="{c0}"/>
      <stop offset=".55" stop-color="{c1}"/>
      <stop offset="1" stop-color="{c2}"/>
    </radialGradient>
    <radialGradient id="halo-{s}" cx="50%" cy="50%" r="50%">
      <stop offset=".35" stop-color="{c1}" stop-opacity=".55"/>
      <stop offset="1" stop-color="{c1}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vig-{s}" cx="50%" cy="50%" r="50%">
      <stop offset=".62" stop-color="#000000" stop-opacity="0"/>
      <stop offset="1" stop-color="#2b2416" stop-opacity=".34"/>
    </radialGradient>
    <linearGradient id="gloss-{s}" x1="0" y1="0" x2=".7" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity=".55"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <filter id="organic-{s}" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" seed="{cu['seed']}" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="9" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="grain-{s}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="{cu['seed'] + 7}"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope=".38"/></feComponentTransfer>
    </filter>
    <filter id="soft-{s}" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="7"/>
    </filter>
    <clipPath id="clip-{s}"><circle cx="{C}" cy="{C}" r="{R_AGAR - 4}"/></clipPath>
  </defs>"""


# --------------------------------------------------------------------------
# морфология колоний
# --------------------------------------------------------------------------
def colonies(cu):
    rng = random.Random(cu["seed"])
    s, p = cu["slug"], cu["pattern"]
    rmin, rmax = cu["r"]
    out = []

    if p == "punctate":
        for _ in range(cu["n"]):
            x, y = polar(rng, R_AGAR - 34)
            r = rng.uniform(rmin, rmax)
            out.append(f'<circle cx="{f(x)}" cy="{f(y)}" r="{f(r * 1.7)}" fill="url(#halo-{s})" opacity=".4"/>')
            out.append(f'<circle cx="{f(x)}" cy="{f(y)}" r="{f(r)}" fill="url(#col-{s})"/>')
            out.append(f'<ellipse cx="{f(x - r * .3)}" cy="{f(y - r * .34)}" rx="{f(r * .34)}" ry="{f(r * .24)}" '
                       f'fill="#fff" opacity=".38"/>')

    elif p == "mucoid":
        for _ in range(cu["n"]):
            x, y = polar(rng, R_AGAR - 52)
            r = rng.uniform(rmin, rmax)
            k = rng.uniform(.86, 1.14)
            out.append(f'<ellipse cx="{f(x)}" cy="{f(y)}" rx="{f(r * k)}" ry="{f(r / k)}" fill="url(#col-{s})"/>')
            out.append(f'<ellipse cx="{f(x - r * .28)}" cy="{f(y - r * .3)}" rx="{f(r * .4)}" ry="{f(r * .27)}" '
                       f'fill="#fff" opacity=".34"/>')

    elif p == "lawn":
        # сплошной газон: слитная биомасса с неровным краем и живой текстурой
        out.append(f'<circle cx="{C}" cy="{C}" r="{R_AGAR - 26}" fill="{cu["colony"][1]}" opacity=".92"/>')
        out.append(f'<circle cx="{C}" cy="{C}" r="{R_AGAR - 26}" fill="url(#col-{s})" opacity=".55"/>')
        for _ in range(cu["n"]):
            x, y = polar(rng, R_AGAR - 30)
            r = rng.uniform(rmin, rmax)
            tone = cu["colony"][0] if rng.random() < .45 else cu["colony"][2]
            out.append(f'<circle cx="{f(x)}" cy="{f(y)}" r="{f(r)}" fill="{tone}" '
                       f'opacity="{rng.uniform(.14, .42):.2f}"/>')
        for _ in range(18):                              # уплотнения и проплешины
            x, y = polar(rng, R_AGAR - 60)
            out.append(f'<circle cx="{f(x)}" cy="{f(y)}" r="{f(rng.uniform(24, 52))}" '
                       f'fill="{cu["colony"][2]}" opacity=".16" filter="url(#soft-{s})"/>')
        out.append(f'<circle cx="{C}" cy="{C}" r="{R_AGAR - 26}" fill="none" stroke="{cu["colony"][2]}" '
                   f'stroke-width="6" opacity=".35"/>')

    elif p == "diffuse":
        # флуоресцентный пигмент, диффундирующий в толщу среды
        for _ in range(9):
            x, y = polar(rng, R_AGAR - 70)
            out.append(f'<circle cx="{f(x)}" cy="{f(y)}" r="{f(rng.uniform(64, 112))}" '
                       f'fill="url(#halo-{s})" opacity=".85" filter="url(#soft-{s})"/>')
        for _ in range(cu["n"]):
            x, y = polar(rng, R_AGAR - 44)
            r = rng.uniform(rmin, rmax)
            out.append(f'<circle cx="{f(x)}" cy="{f(y)}" r="{f(r * 1.8)}" fill="url(#halo-{s})" opacity=".6"/>')
            out.append(f'<circle cx="{f(x)}" cy="{f(y)}" r="{f(r)}" fill="url(#col-{s})" '
                       f'stroke="{cu["colony"][2]}" stroke-opacity=".45" stroke-width="1.2"/>')
            out.append(f'<ellipse cx="{f(x - r * .3)}" cy="{f(y - r * .32)}" rx="{f(r * .36)}" ry="{f(r * .24)}" '
                       f'fill="#fff" opacity=".5"/>')

    elif p == "mycelium":
        # войлочный мицелий: пушистая масса, радиальные гифы и зоны суточного роста
        for idx in range(cu["n"]):
            cx, cy = polar(rng, 108)
            big = rng.uniform(*cu["r"])
            # воздушный войлок: мягкая белая масса, к краю переходящая в тонкие гифы
            out.append(f'<circle cx="{f(cx)}" cy="{f(cy)}" r="{f(big * 2.6)}" fill="{cu["colony"][2]}" '
                       f'opacity=".16" filter="url(#soft-{s})"/>')
            out.append(f'<circle cx="{f(cx)}" cy="{f(cy)}" r="{f(big * 1.9)}" fill="{cu["colony"][0]}" '
                       f'opacity=".62" filter="url(#soft-{s})"/>')
            out.append(f'<circle cx="{f(cx)}" cy="{f(cy)}" r="{f(big * 1.15)}" fill="{cu["colony"][0]}" '
                       f'opacity=".8" filter="url(#soft-{s})"/>')
            for _ in range(130):
                a = rng.uniform(0, math.tau)
                start = big * rng.uniform(.15, 1.0)
                L = start + big * rng.uniform(.5, 1.9)
                bend = rng.uniform(-.5, .5)
                x1, y1 = cx + start * math.cos(a), cy + start * math.sin(a)
                x2, y2 = cx + L * math.cos(a + bend * .3), cy + L * math.sin(a + bend * .3)
                mx = (x1 + x2) / 2 + math.cos(a + 1.57) * L * bend * .3
                my = (y1 + y2) / 2 + math.sin(a + 1.57) * L * bend * .3
                if rng.random() < .78:
                    col, op = cu["colony"][0], rng.uniform(.45, .9)
                else:
                    col, op = cu["colony"][2], rng.uniform(.12, .3)
                out.append(f'<path d="M{f(x1)} {f(y1)} Q{f(mx)} {f(my)} {f(x2)} {f(y2)}" fill="none" '
                           f'stroke="{col}" stroke-width="{f(rng.uniform(.8, 1.9))}" opacity="{op:.2f}"/>')
            for ring, op in ((1.05, .22), (1.55, .16), (2.1, .11)):
                out.append(f'<circle cx="{f(cx)}" cy="{f(cy)}" r="{f(big * ring)}" fill="none" '
                           f'stroke="{cu["colony"][2]}" stroke-width="1.4" opacity="{op}"/>')
            out.append(f'<circle cx="{f(cx)}" cy="{f(cy)}" r="{f(big * .5)}" fill="{cu["colony"][1]}" '
                       f'opacity=".5" filter="url(#soft-{s})"/>')

    return "\n      ".join(out)


def render_dish(cu):
    s = cu["slug"]
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {W}" width="{W}" height="{W}" role="img" aria-label="Чашка Петри с культурой {cu['name']}">
{defs_block(cu)}
  <circle cx="{C}" cy="{C}" r="{R_GLASS}" fill="#dfe4dc" opacity=".55"/>
  <circle cx="{C}" cy="{C}" r="{R_AGAR}" fill="url(#agar-{s})"/>
  <g clip-path="url(#clip-{s})">
    <g filter="url(#organic-{s})">
      {colonies(cu)}
    </g>
    <circle cx="{C}" cy="{C}" r="{R_AGAR}" fill="url(#vig-{s})"/>
    <rect x="0" y="0" width="{W}" height="{W}" filter="url(#grain-{s})" opacity=".16" style="mix-blend-mode:overlay"/>
  </g>
  <circle cx="{C}" cy="{C}" r="{R_AGAR + 1}" fill="none" stroke="#7d8b80" stroke-opacity=".35" stroke-width="2"/>
  <circle cx="{C}" cy="{C}" r="{R_GLASS}" fill="url(#rim-{s})"/>
  <circle cx="{C}" cy="{C}" r="{R_GLASS}" fill="none" stroke="#ffffff" stroke-opacity=".7" stroke-width="1.5"/>
  <circle cx="{C}" cy="{C}" r="{R_GLASS - 9}" fill="none" stroke="#5f6d63" stroke-opacity=".18" stroke-width="1"/>
  <path d="M{C - 150} {C - 96} A 185 185 0 0 1 {C - 34} {C - 182}" fill="none" stroke="url(#gloss-{s})" stroke-width="26" stroke-linecap="round" opacity=".5"/>
  <path d="M{C + 116} {C + 122} A 178 178 0 0 0 {C + 165} {C + 56}" fill="none" stroke="#ffffff" stroke-opacity=".28" stroke-width="9" stroke-linecap="round"/>
</svg>
"""


# --------------------------------------------------------------------------
# вид под микроскопом
# --------------------------------------------------------------------------
def micro_cells(cu):
    m = cu["micro"]
    rng = random.Random(cu["seed"] + 31)
    s = cu["slug"]
    hi, body, edge = m["cell"]
    out = []
    kind = m["kind"]

    if kind == "budding":
        for _ in range(m["n"]):
            x, y = polar(rng, R_AGAR - 40, bias=.62)
            r = rng.uniform(20, 34)
            a = rng.uniform(0, 360)
            out.append(f'<g transform="translate({f(x)} {f(y)}) rotate({a:.0f})">'
                       f'<ellipse rx="{f(r)}" ry="{f(r * .74)}" fill="url(#cell-{s})" stroke="{edge}" stroke-opacity=".55"/>'
                       f'<ellipse cx="{f(r * .92)}" cy="{f(-r * .34)}" rx="{f(r * .42)}" ry="{f(r * .38)}" '
                       f'fill="url(#cell-{s})" stroke="{edge}" stroke-opacity=".45"/>'
                       f'<ellipse cx="{f(-r * .22)}" cy="{f(-r * .2)}" rx="{f(r * .3)}" ry="{f(r * .2)}" fill="#fff" opacity=".5"/>'
                       f'</g>')

    elif kind == "algae":
        for _ in range(m["n"]):
            x, y = polar(rng, R_AGAR - 40, bias=.62)
            r = rng.uniform(14, 26)
            out.append(f'<g transform="translate({f(x)} {f(y)})">'
                       f'<circle r="{f(r)}" fill="url(#cell-{s})" stroke="{edge}" stroke-opacity=".6"/>'
                       f'<path d="M{f(-r * .72)} {f(r * .1)} A {f(r * .8)} {f(r * .8)} 0 0 0 {f(r * .6)} {f(r * .5)}" '
                       f'fill="none" stroke="{edge}" stroke-width="{f(r * .42)}" stroke-linecap="round" opacity=".75"/>'
                       f'<circle cx="{f(-r * .3)}" cy="{f(-r * .34)}" r="{f(r * .22)}" fill="#fff" opacity=".55"/>'
                       f'</g>')

    elif kind == "rods":
        for _ in range(m["n"]):
            x, y = polar(rng, R_AGAR - 40, bias=.62)
            L = rng.uniform(34, 62)
            h = rng.uniform(13, 19)
            a = rng.uniform(0, 360)
            out.append(f'<g transform="translate({f(x)} {f(y)}) rotate({a:.0f})">'
                       f'<rect x="{f(-L / 2)}" y="{f(-h / 2)}" width="{f(L)}" height="{f(h)}" rx="{f(h / 2)}" '
                       f'fill="url(#cell-{s})" stroke="{edge}" stroke-opacity=".55"/>'
                       f'<rect x="{f(-L / 2 + h * .3)}" y="{f(-h * .28)}" width="{f(L * .42)}" height="{f(h * .26)}" '
                       f'rx="{f(h * .13)}" fill="#fff" opacity=".45"/>'
                       f'</g>')

    elif kind == "hyphae":
        # переплетение гиф: ветвящиеся нити с перегородками (септами)
        for i in range(m["n"]):
            x, y = polar(rng, R_AGAR - 40)
            a = rng.uniform(0, math.tau)
            w = rng.uniform(8, 13)
            for seg in range(rng.randint(3, 6)):        # нить растёт сегментами
                L = rng.uniform(70, 130)
                a += rng.uniform(-.55, .55)
                x2, y2 = x + math.cos(a) * L, y + math.sin(a) * L
                mx = (x + x2) / 2 + math.cos(a + 1.57) * rng.uniform(-26, 26)
                my = (y + y2) / 2 + math.sin(a + 1.57) * rng.uniform(-26, 26)
                d = f'M{f(x)} {f(y)} Q{f(mx)} {f(my)} {f(x2)} {f(y2)}'
                out.append(f'<path d="{d}" fill="none" stroke="url(#cell-{s})" stroke-width="{f(w)}" '
                           f'stroke-linecap="round" opacity=".95"/>')
                out.append(f'<path d="{d}" fill="none" stroke="{edge}" stroke-width="1" opacity=".3"/>')
                out.append(f'<line x1="{f(x2 - math.cos(a + 1.57) * w / 2)}" y1="{f(y2 - math.sin(a + 1.57) * w / 2)}" '
                           f'x2="{f(x2 + math.cos(a + 1.57) * w / 2)}" y2="{f(y2 + math.sin(a + 1.57) * w / 2)}" '
                           f'stroke="{edge}" stroke-width="1.6" stroke-opacity=".45"/>')
                x, y = x2, y2
        for _ in range(10):  # макроконидии — серповидные споры
            x, y = polar(rng, R_AGAR - 70)
            a = rng.uniform(0, 360)
            out.append(f'<g transform="translate({f(x)} {f(y)}) rotate({a:.0f})">'
                       f'<path d="M-36 9 Q0 -22 36 9 Q0 1 -36 9Z" fill="{hi}" stroke="{edge}" '
                       f'stroke-opacity=".65" stroke-width="1.4"/>'
                       f'<path d="M-18 5 V0 M0 -6 V-1 M18 5 V0" stroke="{edge}" stroke-opacity=".4" stroke-width="1.2"/>'
                       f'</g>')
    return "\n      ".join(out)


def render_micro(cu):
    m = cu["micro"]
    s = cu["slug"]
    b0, b1 = m["bg"]
    hi, body, edge = m["cell"]
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {W}" width="{W}" height="{W}" role="img" aria-label="{cu['name']} под микроскопом">
  <defs>
    <radialGradient id="fld-{s}" cx="42%" cy="38%" r="72%">
      <stop offset="0" stop-color="{b0}"/><stop offset="1" stop-color="{b1}"/>
    </radialGradient>
    <radialGradient id="cell-{s}" cx="36%" cy="32%" r="70%">
      <stop offset="0" stop-color="{hi}"/><stop offset=".6" stop-color="{body}"/><stop offset="1" stop-color="{edge}"/>
    </radialGradient>
    <radialGradient id="mvig-{s}" cx="50%" cy="50%" r="50%">
      <stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#1d2a22" stop-opacity=".5"/>
    </radialGradient>
    <filter id="mgrain-{s}"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="{cu['seed']}"/>
      <feColorMatrix type="saturate" values="0"/></filter>
    <clipPath id="mclip-{s}"><circle cx="{C}" cy="{C}" r="{R_AGAR}"/></clipPath>
  </defs>
  <circle cx="{C}" cy="{C}" r="{R_AGAR}" fill="url(#fld-{s})"/>
  <g clip-path="url(#mclip-{s})">
    <g opacity=".95">
      {micro_cells(cu)}
    </g>
    <circle cx="{C}" cy="{C}" r="{R_AGAR}" fill="url(#mvig-{s})"/>
    <rect width="{W}" height="{W}" filter="url(#mgrain-{s})" opacity=".12" style="mix-blend-mode:multiply"/>
    <g stroke="#1c2b23" stroke-opacity=".28" stroke-width="1.4">
      <path d="M{C} {C - 44} V{C - 14} M{C} {C + 14} V{C + 44} M{C - 44} {C} H{C - 14} M{C + 14} {C} H{C + 44}"/>
    </g>
    <g transform="translate({C - 116} {C + 148})" fill="#1c2b23" fill-opacity=".72">
      <rect width="112" height="5" rx="2.5"/>
      <text x="0" y="-11" font-family="ui-monospace, 'JetBrains Mono', monospace" font-size="17" letter-spacing="1">{m['scale']}</text>
    </g>
  </g>
  <circle cx="{C}" cy="{C}" r="{R_AGAR}" fill="none" stroke="#20302708" stroke-width="10"/>
</svg>
"""


def main():
    os.makedirs(OUT, exist_ok=True)
    for cu in CULTURES:
        for prefix, render in (("culture", render_dish), ("micro", render_micro)):
            path = os.path.join(OUT, f"{prefix}-{cu['slug']}.svg")
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(render(cu))
            print(f"  ✓ {os.path.relpath(path, os.path.dirname(OUT))}  {os.path.getsize(path) // 1024} КБ")


if __name__ == "__main__":
    print("Генерация изображений культур…")
    main()
    print("Готово.")
