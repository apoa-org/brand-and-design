---
layout: default
title: 品牌基础手册 V1
nav: manual
lede: 机构名称、Logo、颜色、字体和资产管理的统一基础规范。
source_path: brand-guidelines/APOA-Brand-Manual-V1.md
permalink: /manual/
---
<div class="article-sheet">
{% capture manual_text %}{% include_relative brand-guidelines/APOA-Brand-Manual-V1.md %}{% endcapture %}
{% assign manual_text = manual_text | replace: '(APOA-Logo-Usage-Guidelines-V1.md)', '(/brand-and-design/logo/)' | replace: '(APOA-Brand-Colors-V1.md)', '(/brand-and-design/colors/)' | replace: '(APOA-Typography-V1.md)', '(/brand-and-design/typography/)' %}
{{ manual_text | markdownify }}
</div>