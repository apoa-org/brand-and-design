---
layout: default
title: 品牌颜色 / Colours
nav: colors
lede: 简单实用的四色品牌系统，兼顾数字屏幕与常规印刷。
source_path: brand-guidelines/APOA-Brand-Colors-V1.md
permalink: /colors/
---
<div class="palette-showcase" aria-label="APOA 四种品牌颜色">
  <div class="palette-item"><div class="palette-chip" style="background:#2B2C55"></div><div class="palette-label"><strong>APOA Navy</strong><code>#2B2C55</code><br><button class="copy-color" type="button" data-copy-color="#2B2C55">复制色值</button></div></div>
  <div class="palette-item"><div class="palette-chip" style="background:#DA2D2A"></div><div class="palette-label"><strong>APOA Red</strong><code>#DA2D2A</code><br><button class="copy-color" type="button" data-copy-color="#DA2D2A">复制色值</button></div></div>
  <div class="palette-item"><div class="palette-chip" style="background:#000000"></div><div class="palette-label"><strong>APOA Black</strong><code>#000000</code><br><button class="copy-color" type="button" data-copy-color="#000000">复制色值</button></div></div>
  <div class="palette-item"><div class="palette-chip" style="background:#FFFFFF"></div><div class="palette-label"><strong>APOA White</strong><code>#FFFFFF</code><br><button class="copy-color" type="button" data-copy-color="#FFFFFF">复制色值</button></div></div>
</div>
<div class="article-sheet">
{% capture colors_text %}{% include_relative brand-guidelines/APOA-Brand-Colors-V1.md %}{% endcapture %}
{{ colors_text | markdownify }}
</div>