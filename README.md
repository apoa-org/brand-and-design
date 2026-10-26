# APOA Brand and Design

Brand and design assets for the **Australian Property Owners Alliance (APOA)**.

## Organizational source of truth

The [approved APOA Organization Master 2027](https://github.com/apoa-org/organization-handbook/blob/main/about/APOA-Organization-Master-2027.md) is authoritative for APOA's profile, mission, values and vision. This repository defines how the brand is expressed visually; it does not create a parallel organization narrative.

- New materials gradually use **澳洲房主联盟**; historic content and already published assets are not retroactively renamed.
- Core message: **连接 · 分享 · 改变 / Connect · Share · Make a Difference**.
- Existing logo files remain as-is until a separately approved design release.

## Visual Brand Manual (GitHub Pages)

The public, mobile-friendly **APOA Brand Manual V1** website is prepared using Jekyll and the approved Markdown standards in this repository.

- **Expected URL after GitHub Pages is enabled:** https://apoa-org.github.io/brand-and-design/
- **Pages source:** branch `main`, folder `/ (root)`.
- **Website entrypoint:** [index.html](index.html).
- **Source of truth:** [Brand Manual V1](brand-guidelines/APOA-Brand-Manual-V1.md) and the three approved specification files in `brand-guidelines/`.
- The rendered manual pages use Jekyll `include_relative` to reuse the approved Markdown without maintaining parallel copies.
- The header uses the existing APOA symbol asset at `logos/current/apoa-symbol-primary.png`, matching the Community Library's compact logo-and-title treatment.
- The design application handbook (social templates, physical promotional items and site UI) is a separate future phase.

**One-time activation:** Repository Settings → Pages → Build and deployment → Deploy from a branch → Branch `main` / `/ (root)` → Save. If an organization policy blocks access to Pages settings, a repository administrator needs to enable it. Check the live URL after GitHub finishes publishing.

## Downloads Centre

The public [APOA Brand Downloads Centre](https://apoa-org.github.io/brand-and-design/downloads/) offers one-click downloads of the **corrected 12-slide PPT template** and **all nine PDF-vector-derived Logo variants** in SVG and transparent PNG, with visual previews and use-case guidance. Sources and production notes: [downloads/README.md](downloads/README.md) and [Logo export provenance](downloads/logos/README.md).

## Contents

- [Brand guidelines](brand-guidelines/README.md) — identity usage, [2026 naming and website transition rules](brand-guidelines/BRAND-NAMING-WEBSITE-TRANSITION-2026-10-12.md), and future design specifications
- [Logos](logos/README.md) — current assets, provenance and editable sources
- [UI](ui/README.md) — interface guidance and approved references
- `events/` — historic and reusable event visual assets
- `media/` — content and social templates
- `releases/` — approved asset release notes

Use versioned filenames; do not overwrite historical assets or introduce unapproved logo variations.
