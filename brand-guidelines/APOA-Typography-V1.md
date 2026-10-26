# APOA Typography V1｜字体规范

**Australian Property Owners Alliance (APOA) · 澳洲房主联盟**  
**Status / 状态：** Approved baseline — 已确认（2026-10-27）  
**Version / 版本：** V1 · 2026-10-27  
**Scope / 适用：** Logo、PPT、Word、Canva、社媒、网站内容（网站 UI 细则另行定义）

## 1. 原则 / Principles

1. **系统字体优先。** 不要求志愿者购买、下载或安装特殊字体。
2. **易读优先。** 中英文清楚、稳定，不为追求设计感而使用难维护的字体。
3. **品牌 Logo 与日常排版分开。** Logo 采用已确认的固定字形；文件、PPT 和网页使用可编辑的常见字体。
4. **跨平台允许合理替代。** macOS、Windows、手机上的具体中文字形可能不同，以正确显示、不缺字、层级清楚为准。
5. **不拉伸文字。** 调整字号、字重、字距和布局，不横向压扁、纵向拉长或人为变形。

## 2. Logo 专用字形 / Logo Lettering（已确认）

| 项目 | 规则 |
|---|---|
| 英文 APOA 标志文字 | 沿用 `APOA-Logo-Master.af` 中的原始字形；**不重新输入或替换字体** |
| 中文标志名称 | **澳洲房主联盟** |
| 中文 Logo 字体 | **苹方-简（PingFang SC）· 中黑体**，以已确认的矢量字形为准 |
| 中文 Logo 字距与比例 | 使用已经确认的画板组合；不变形 |
| 中文 Logo 工作母稿 | 保留隐藏的 `Chinese-Editable` 可编辑文字层 |
| 中文 Logo 对外文件 | 使用 `Chinese-Curves` 转曲版本，避免跨设备字体替换 |
| Logo 尺寸 | 原 Affinity 画板中的点数/像素只属于制作参数，**不是所有应用场景的固定字号** |

**重要：** `01-Primary`、`02-Chinese`、`03-Bilingual` 等 Logo 的原有字形与图文比例，不因本文件规定的正文排版字体而改变。

## 3. 通用字体 / Everyday Fonts（建议确认）

| 使用环境 | 英文 | 中文 | 说明 |
|---|---|---|---|
| macOS 上的 Word / Keynote / Canva | Arial | 苹方-简（PingFang SC） | 优先使用本机现有字体 |
| Windows 上的 PowerPoint / Word | Arial | 微软雅黑（Microsoft YaHei）或系统默认中文无衬线字体 | 不强制安装苹方 |
| 网站 / 移动端 | 系统无衬线字体栈 | 系统无衬线字体栈 | 随平台回退，不强求完全同形 |
| 已确认的 Logo 文件 | 原始固定字形 | 原始转曲字形 | 不使用日常字体规则重新排 Logo |

**建议的网页系统字体栈（待网站 UI Design System 验证）：**

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial,
             "PingFang SC", "Microsoft YaHei", sans-serif;
```

这是一份兼容性起点，不意味着所有设备显示为同一种字体；正式网站更新时应检查中英文、粗体与手机端渲染。

## 4. 版式层级 / Type Hierarchy（建议值）

### PPT / 16:9 演示文稿

| 元素 | 建议字号 | 建议字重 |
|---|---:|---|
| 封面主标题 | 34–44 pt | Bold |
| 内容页标题 | 28–34 pt | Bold |
| 小标题 | 20–24 pt | Semibold / Bold |
| 正文及要点 | 18–24 pt | Regular |
| 图表注释、来源、页脚 | 12–14 pt | Regular |

- 一页只需清楚的标题、正文、注释三级，不要为了容纳过多文字持续缩小字号。
- 中英文混排优先分别保证可读性，不要求每种字体的字面高度严格相同。
- 现有 `APOA-Presentation-Template-V1.pptx` 作为参考模板；这些字号是今后制作时的参考范围，**不要求追溯修改已完成模板**。

### Word / PDF 文档

- 正文：**11–12 pt** 左右；中文较密集时可适当调整行距。
- 一级标题：**18–22 pt**；二级标题：**14–16 pt**。
- 行距与段间距优先于使用额外装饰字体；整份文件使用一致的标题样式。

### 社媒与网站

- 社媒海报文字按最终手机端尺寸检查：标题优先清楚，避免在图上堆长段正文。
- 网站标题尺寸、断点、行高、按钮和表单文字由后续 **UI Design System** 定义；本文件暂不锁定像素数值。

## 5. 使用限制 / Do & Don't

**推荐：**
- 使用系统已有的无衬线字体，统一版式层级。
- 保留 Office / Canva 中的可编辑文本；正式 Logo 则使用官方 SVG / PNG。
- 交付 PDF 时检查字体嵌入或字形固定；发送可编辑文件时考虑接收人的操作系统。

**避免：**
- 重新用 Arial 或其他字体键入 APOA 标志来替代官方 Wordmark。
- 把 Arial 的中文自动替代字形误当成标准中文 Logo 字体。
- 为了适配版式而拉伸汉字或英文字符。
- 在同一份材料里随意混用多种中文字体、假粗体或装饰字体。

## 6. 版本管理 / File Management

- **本文件位置：** `APOA-Brand-Kit/03-Colors-Typography/APOA-Typography-V1.md`
- **Logo 母文件：** `APOA-Brand-Kit/02-Logo/02-Master/APOA-Logo-Master.af`
- **PPT 模板：** `APOA-Brand-Kit/05-Templates/APOA-Presentation-Template-V1.pptx`
- **颜色规范：** `APOA-Brand-Kit/03-Colors-Typography/APOA-Brand-Colors-V1.md`
- **最终归集：** `04-Brand-Manual/APOA-Brand-Manual-V1`（制作时收录已批准条款）

## 7. 确认记录 / Approval

- [x] 同意日常文件采用 **英文 Arial + 中文系统默认无衬线字体** 的简单规则。
- [x] 同意 macOS 优先苹方、Windows 优先微软雅黑，不要求两端字形完全相同。
- [x] 接受本文件的 PPT / Word 参考字号范围，而不是严格强制值。

**确认：** 2026-10-27。常用字体与字号参考范围均已批准；字号仍为建议值。无须单独字体库。