---
layout: default
title: 字体规范 / Typography
nav: typography
lede: 系统字体优先，保证跨设备可读、易编辑，志愿者不必安装特殊字体。
source_path: brand-guidelines/APOA-Typography-V1.md
permalink: /typography/
---
<div class="font-demo" aria-label="中英文排版示例">
  <p class="label">ENGLISH / ARIAL</p>
  <p class="sample-en">Connect · Share · Make a Difference</p>
  <p class="label">中文 / 系统无衬线字体</p>
  <p class="sample-cn">连接 · 分享 · 改变</p>
  <p class="sample-note">这是日常排版示例，不是用于重画 Logo 的字形。</p>
</div>
<div class="article-sheet">
{% capture type_text %}{% include_relative brand-guidelines/APOA-Typography-V1.md %}{% endcapture %}
{{ type_text | markdownify }}
</div>