---
version: alpha
slug: mackenzie-ppga
name: Mackenzie PPGA
description: A reusable academic-institution presentation template for university and graduate-program decks. It inherits the current academic design system from the project presentation: deep navy and red accent tones, crisp display-style headings, readable body copy, neutral paper surfaces, and a fixed 16:9 stage for projector-safe rendering.

fonts:
  display: "'Outfit', sans-serif"
  body: "'Inter', sans-serif"
  code: "'JetBrains Mono', monospace"

colors:
  bg: "#f7f8fa"
  primary: "#0f2d59"
  accent: "#da291c"
  support: "#2563eb"
  text: "#0f172a"
  text-muted: "#334155"
  text-light: "#64748b"
  border: "rgba(15, 32, 66, 0.12)"
  card-bg: "rgba(255, 255, 255, 0.9)"
  accent-soft: "rgba(218, 41, 28, 0.08)"
  positive: "#16a34a"
  negative: "#dc2626"

typography:
  h1:
    fontFamily: "'Outfit', sans-serif"
    fontWeight: 800
    fontSize: "clamp(40px, 5vw, 64px)"
    lineHeight: 1.08
    letterSpacing: -0.02em
    color: "{colors.primary}"
  h2:
    fontFamily: "'Outfit', sans-serif"
    fontWeight: 700
    fontSize: "clamp(26px, 3vw, 38px)"
    lineHeight: 1.12
    color: "{colors.primary}"
  h3:
    fontFamily: "'Outfit', sans-serif"
    fontWeight: 600
    fontSize: "clamp(18px, 1.7vw, 24px)"
    lineHeight: 1.2
    color: "{colors.primary}"
  eyebrow:
    fontFamily: "'Outfit', sans-serif"
    fontWeight: 700
    fontSize: 12px
    lineHeight: 1.1
    letterSpacing: 0.14em
    textTransform: uppercase
    color: "{colors.text-light}"
  body:
    fontFamily: "'Inter', sans-serif"
    fontWeight: 400
    fontSize: "clamp(14px, 1.05vw, 17px)"
    lineHeight: 1.55
    color: "{colors.text-muted}"
  code:
    fontFamily: "'JetBrains Mono', monospace"
    fontWeight: 400
    fontSize: 12px
    lineHeight: 1.45
    color: "{colors.text}"
  metric:
    fontFamily: "'Outfit', sans-serif"
    fontWeight: 800
    fontSize: "clamp(30px, 3vw, 46px)"
    lineHeight: 1
    color: "{colors.primary}"
  caption:
    fontFamily: "'Inter', sans-serif"
    fontWeight: 500
    fontSize: 12px
    lineHeight: 1.4
    color: "{colors.text-light}"

spacing:
  pad-slide-x: "4vw"
  pad-slide-y-top: "3vw"
  pad-slide-y-bottom: "7vh"
  pad-card-lg: "1.4rem 1.5rem"
  pad-card-md: "1rem 1.1rem"
  gap-grid-lg: "2.5rem"
  gap-grid-md: "1.5rem"
  gap-cards: "1rem"
  header-margin: "2.2vh"

canvas:
  width: 1920
  height: 1080
  background: "linear-gradient(180deg, #ffffff 0%, {colors.bg} 100%)"

radii:
  card-lg: "16px"
  card-md: "12px"
  card-sm: "10px"
  pill: "999px"

components:
  slide-shell:
    background: "rgba(255, 255, 255, 0.92)"
    border: "1px solid {colors.border}"
    borderRadius: "{radii.card-lg}"
    boxShadow: "0 18px 36px -18px rgba(15, 32, 66, 0.18)"
    description: "Primary slide container for all academic deck pages. Rounded, calm, and projector-safe."
  academic-card:
    background: "{colors.card-bg}"
    border: "1px solid {colors.border}"
    borderRadius: "{radii.card-md}"
    padding: "{spacing.pad-card-lg}"
    description: "Reusable card for content blocks, highlights, notes, and sidebars."
  tag-pill:
    background: "rgba(15, 45, 89, 0.06)"
    color: "{colors.primary}"
    borderRadius: "{radii.pill}"
    padding: "0.35rem 0.75rem"
    description: "Small institutional tag for department, program, or emphasis label."
  accent-rule:
    width: "56px"
    height: "4px"
    background: "{colors.accent}"
    borderRadius: "2px"
    description: "Short red rule that reinforces the institutional accent."
  figure-frame:
    background: "#ffffff"
    border: "1px solid {colors.border}"
    borderRadius: "{radii.card-md}"
    padding: "0.75rem"
    description: "Framed image or diagram area for charts, diagrams, or campus visuals."
  footnote-area:
    color: "{colors.text-light}"
    font: "{typography.caption}"
    description: "Small reference area used for source notes or citation fragments."
  nav-button:
    width: 44px
    height: 44px
    borderRadius: "50%"
    background: "#ffffff"
    border: "1px solid {colors.border}"
    color: "{colors.primary}"
    description: "Subtle circular control for in-deck navigation and preview interactions."

---

## Fixed-Stage Policy

Generate this template on a fixed 1920×1080 stage and scale the whole deck uniformly to the viewport. Keep the slide ratio at 16:9, preserve margins, and avoid mobile-style reflow. The deck should feel like a formal academic presentation, not a responsive web page. This fixed-stage rule is the primary rendering policy for previews and final generation.

## Design Intent

- Institutional but not stiff: deep navy anchors the page, red accents highlight important moments, and neutral paper tones keep the deck readable.
- Reusable across programs: the palette, components, and hierarchy are designed to work for academic reports, lectures, seminars, and graduate-program presentations.
- Strong hierarchy: display-style headings for titles and a crisp sans body for supporting text keeps the deck formal and legible.
- Source-friendly: captions, notes, and small reference blocks are intentionally lightweight so citations and references do not compete with main content.

## Implementation Guidance

- Use the deep navy `primary` for heading hierarchy, chapter labels, and key numbers.
- Reserve red `accent` for focus moments such as chapter markers, alerts, or selected metrics.
- Keep most surfaces in the neutral paper palette; use the white card background only for highlighted blocks.
- Use small cards and framed figures for charts, timelines, and diagrams rather than dense text blocks.
- Prefer short paragraphs, labeled sections, and clean spacing over decorative clutter.
- For institutional logos, allow clear space and do not distort the mark; if a seal is shown, keep it small and aligned to the top-left or footer area.
- CJK text should use an adjusted line-height and avoid uppercase stylization; keep reading rhythm soft and spacious.
- Always preserve the fixed 16:9 stage for preview generation, screenshot output, and projector display.
