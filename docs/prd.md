---

# IGQuery.com 重构产品文档

## Image Search Techniques & Query Generator

版本：V1.0
项目域名：igquery.com
当前定位：Instagram Search Query Optimization
新定位：Image Search Techniques / Image Search Query Generator / Visual Search Workflow Toolkit

---

## 1. 项目背景

### 1.1 当前问题

IGQuery.com 当前是一个围绕 **Instagram Search Query Optimization** 的轻量工具站，核心功能是用户输入 seed keyword，然后生成适合 Instagram 搜索的 query。

当前站点存在几个问题：

1. **定位过窄**
   只围绕 Instagram 搜索查询，搜索需求有限，关键词池较小。

2. **流量天花板低**
   Instagram search query optimization 这类关键词搜索量有限，且用户需求不够强。

3. **产品感弱**
   当前工具只生成少量关键词，无法形成强记忆点，也缺少复杂场景下的实用价值。

4. **内容矩阵不足**
   现有页面难以承接更大的 SEO topic cluster。

5. **站点信任感不够集中**
   当前 footer 和 FAQ 中存在其他 Instagram / TikTok 工具推荐，容易让主站定位显得分散。

---

## 2. 市场机会

### 2.1 发现的大词

目标关键词：

> image search techniques

该词搜索量高，关键词难度相对可做。用户搜索该词时，常见意图包括：

* 想学习如何更好地搜索图片
* 想知道 reverse image search 怎么用
* 想找到图片来源
* 想找相似图片
* 想找图里的产品
* 想验证图片真假
* 想知道 Google Images / Google Lens / TinEye / Pinterest / Bing 等工具如何选择
* 想学习高级图片搜索语法

### 2.2 竞品观察

目前 SERP 中存在三类页面：

#### 1. 泛 SEO 科普页

典型页面结构：

* What is image search
* Types of image search techniques
* Best tools
* Applications
* FAQ

优点：

* 覆盖大众搜索意图
* 标题和正文命中主词
* SEO 结构完整

缺点：

* 内容偏泛
* 没有互动工具
* 没有可执行 workflow
* 没有 copy-paste query templates

#### 2. 技术型文章

典型内容：

* image embeddings
* SIFT / SURF
* CNN / ResNet
* ViT
* CLIP
* vector search

优点：

* 技术深度强
* 专业度高
* 能覆盖技术长尾

缺点：

* 太开发者向
* 普通用户不易理解
* 不解决实际搜索任务

#### 3. 学术/图书馆搜索技巧页

典型内容：

* search terms
* metadata
* alternate terms
* authority vocabularies
* database search tips

优点：

* 方法论强
* 权威性强
* 强调搜索词质量和数据库 metadata

缺点：

* 不够现代
* 缺少 Google Lens / Pinterest / visual similarity / reverse search 等现代视觉搜索场景
* 没有工具化

---

## 3. 新产品定位

### 3.1 核心定位

IGQuery.com 从原来的：

> Instagram Search Query Optimization

升级为：

> Image Search Techniques & Query Generator

进一步解释为：

> A practical toolkit for smarter image searching — from reverse image search to visual discovery, source finding, product search, and advanced search queries.

中文理解：

> 帮用户把“我想找某种图 / 某张图 / 图里的东西”翻译成正确的搜索方法、关键词和平台步骤。

---

### 3.2 品牌解释

域名 **igquery.com** 不再强绑定 Instagram Query。

新的品牌解释：

> IGQuery = Image Query Toolkit

或者更自然地：

> IGQuery helps you search images smarter.

前端页面不需要强行解释 IG 的缩写，只需要把品牌和 image query / image search 绑定起来即可。

---

## 4. 产品目标

### 4.1 SEO 目标

第一阶段主攻关键词：

* image search techniques
* image search query generator
* visual search query generator
* reverse image search techniques
* google image search techniques
* find original image source
* find similar images online
* find product from image
* advanced image search operators

### 4.2 用户目标

用户来到网站后，应能快速完成：

1. 知道自己应该使用哪种 image search technique
2. 生成可复制的搜索 query
3. 获得对应平台的搜索建议
4. 获得 step-by-step workflow
5. 知道下一步应该去哪个工具或平台搜索

### 4.3 产品目标

V1 阶段需要实现：

* 首页工具化
* 支柱内容页 SEO 化
* 生成结果结构化
* 支持多种搜索目标
* 支持多平台 query 输出
* 建立后续长尾页扩展基础

---

# 5. 首页产品方案

## 5.1 首页名称

页面 Title 建议：

> Image Search Techniques & Query Generator | IGQuery

Meta Description：

> Generate smarter image search queries, reverse image search workflows, and platform-specific search tactics for Google Images, Lens, Pinterest, Instagram, Reddit, TinEye, and more.

H1：

> Image Search Techniques & Query Generator

Subtitle：

> Turn vague visual ideas into advanced search queries, reverse image search workflows, and platform-specific discovery tactics.

---

## 5.2 首页首屏结构

首屏由左侧文案 + 右侧工具组成，移动端上下排列。

### Hero 文案

主标题：

> Image Search Techniques & Query Generator

副标题：

> Find image sources, similar visuals, products, creators, and visual inspiration faster with smarter search queries and step-by-step workflows.

CTA：

> Generate Search Strategy

辅助文案：

> Works for Google Images, Google Lens, TinEye, Pinterest, Instagram, Reddit, Bing Visual Search, and more.

---

## 5.3 主工具名称

工具名：

> Image Search Strategy Generator

说明文案：

> Tell us what you want to find. We’ll generate the best search technique, query templates, tools, and workflow to try.

---

# 6. 工具输入字段

## 6.1 字段 1：Search Topic / Visual Goal

字段类型：文本输入框
字段名称：

> What are you trying to find?

Placeholder 示例：

> e.g. find the original source of a fashion photo
> e.g. minimalist kitchen with oak cabinets
> e.g. product from an image
> e.g. similar Instagram creators in this style

是否必填：是

前端校验：

* 不能为空
* 最少 2 个字符
* 最大建议 120 个字符

---

## 6.2 字段 2：Search Goal

字段类型：下拉选择
字段名称：

> Search Goal

选项：

1. Any
2. Find original image source
3. Find similar images
4. Find product from image
5. Verify an image
6. Find visual inspiration
7. Find creator / photographer
8. Search social media images
9. Academic / archive image search
10. Competitor visual research

默认值：

> Any

---

## 6.3 字段 3：Search Mode

字段类型：下拉选择 / 卡片选择
字段名称：

> Search Mode

选项：

### Any

自动判断。

### Arrow Mode

说明：

> For specific targets, sources, names, products, or exact images.

适合：

* 找原图来源
* 找某个具体产品
* 找某个作者
* 找某个图片出处

### Net Mode

说明：

> For broad discovery, inspiration, styles, and similar visuals.

适合：

* 找灵感
* 找类似风格
* 找更多案例
* 找趋势

### Verify Mode

说明：

> For checking authenticity, source history, copyright, or misinformation.

适合：

* 验证图片真假
* 找最早来源
* 查重复使用
* 查版权风险

### Shop Mode

说明：

> For finding products, alternatives, shopping pages, or similar items.

适合：

* 找图中商品
* 找同款
* 找相似商品
* 找购买链接

默认值：

> Any

---

## 6.4 字段 4：Platform

字段类型：下拉选择 / 多选
字段名称：

> Target Platform

选项：

1. Any
2. Google Images
3. Google Lens
4. TinEye
5. Bing Visual Search
6. Pinterest
7. Instagram
8. Reddit
9. Yandex Images
10. Academic / Archives
11. Shopping Platforms

默认值：

> Any

V1 建议先做单选，V2 再支持多选。

---

## 6.5 字段 5：Location，可选

字段类型：文本输入
字段名称：

> Location

Placeholder：

> e.g. Tokyo, Paris, New York, Italy

是否必填：否

用于生成本地化 query，例如：

* `minimalist cafe Tokyo`
* `site:instagram.com "wedding makeup" "Paris"`
* `"vintage furniture" "Brooklyn"`

---

## 6.6 字段 6：Content Type，可选

字段类型：下拉选择
字段名称：

> Content Type

选项：

1. Any
2. Photos
3. Products
4. Creators
5. Places
6. Artworks
7. Design inspiration
8. Social media posts
9. Stock images
10. Academic images

默认值：

> Any

---

# 7. 工具输出结构

用户点击按钮后，生成一个结果卡片区域。

按钮文案：

> Generate Search Strategy

Loading 文案：

> Building your image search strategy...

---

## 7.1 输出模块 1：Recommended Technique

模块标题：

> Recommended Technique

输出内容包括：

* technique name
* short explanation
* best use case

示例：

用户输入：

> find original source of a fashion photo

输出：

> Best technique: Reverse image search + context keyword search
> Why: You are trying to find where an image first appeared, not just visually similar images. Start with exact or near-duplicate matching, then use visible clues and metadata to search deeper.

---

## 7.2 输出模块 2：Step-by-Step Workflow

模块标题：

> Step-by-Step Workflow

根据不同 Search Goal 生成不同步骤。

### Find original image source

输出示例：

1. Upload the image to Google Lens and check exact matches.
2. Run the same image through TinEye to look for older indexed copies.
3. Search for visible text, logos, location clues, or product names in the image.
4. Use site-specific queries to search likely platforms.
5. Compare publication dates to identify the earliest credible source.

### Find similar images

输出示例：

1. Start with a descriptive keyword query.
2. Use Google Lens or Pinterest Lens to discover visually similar images.
3. Add style, color, material, location, or era modifiers.
4. Save strong result terms and reuse them as new queries.
5. Try Pinterest, Instagram, and stock sites for broader inspiration.

### Find product from image

输出示例：

1. Crop the image around the product if possible.
2. Search with Google Lens or Bing Visual Search.
3. Describe the product using material, color, shape, and category.
4. Search shopping platforms with product-specific query templates.
5. Compare results by visual details before buying.

### Verify an image

输出示例：

1. Reverse search the image across Google Lens, TinEye, Bing, and Yandex.
2. Look for older versions of the same image.
3. Search visible text or names from the image.
4. Check whether the image appears in news, forums, or debunking sites.
5. Compare dates, context, and source credibility.

---

## 7.3 输出模块 3：Copy-Paste Search Queries

模块标题：

> Copy-Paste Search Queries

生成 6-12 条 query。

每条 query 旁边有 Copy 按钮。

Query 类型：

1. Core query
2. Long-tail query
3. Exact phrase query
4. Site-specific query
5. Platform query
6. Intent query
7. Location query
8. Recency query

### 示例

输入：

> minimalist kitchen with oak cabinets

输出：

* `minimalist kitchen oak cabinets`
* `"minimalist kitchen" "oak cabinets"`
* `"oak cabinet kitchen" "white countertop"`
* `site:pinterest.com "minimalist kitchen" "oak cabinets"`
* `site:instagram.com "oak cabinets" "kitchen design"`
* `"minimalist kitchen" "before after"`
* `"oak cabinets" "kitchen remodel"`
* `"minimalist kitchen" "where to buy"`
* `"oak cabinet kitchen" "2026"`

---

## 7.4 输出模块 4：Platform-Specific Tips

模块标题：

> Platform-Specific Tips

根据用户选择的平台输出建议。

### Google Images

> Use descriptive keywords, exact phrases, and Google’s image filters. Add terms for color, material, object type, location, and usage intent.

### Google Lens

> Best for visually similar images, product identification, landmarks, and objects. Crop the image to focus on the most important object.

### TinEye

> Best for finding duplicates, older copies, and source history. Use it when you care about where an image first appeared.

### Pinterest

> Best for visual inspiration, fashion, decor, recipes, and aesthetic discovery. Start broad, then refine using style and object terms.

### Instagram

> Best for creator discovery, social trends, location-based visuals, and niche aesthetics. Use creator, reels, location, and style modifiers.

### Reddit

> Best for context, community discussion, product identification, and image origin clues. Use site-specific Google queries.

### Yandex Images

> Useful as a cross-check for reverse image search, especially when Google or Bing results are weak.

### Academic / Archives

> Best for artworks, historical images, teaching materials, museum collections, and scholarly image databases. Use controlled vocabulary, artist names, periods, and locations.

---

## 7.5 输出模块 5：Search Term Expansion

模块标题：

> Search Term Expansion

该模块用于增强搜索词，体现产品差异化。

输出类型：

* Core terms
* Synonyms
* Specific modifiers
* Style modifiers
* Object modifiers
* Platform modifiers
* Location modifiers
* Professional terms
* Recency modifiers

### 示例

输入：

> vintage watches

输出：

**Core terms**

* vintage watches
* vintage watch
* old watches
* classic watches

**Style modifiers**

* luxury
* affordable
* mechanical
* dress watch
* military watch
* retro style

**Platform modifiers**

* creator
* review
* collection
* reels
* forum
* marketplace

**Query modifiers**

* `for men`
* `under 500`
* `Tokyo`
* `2026`
* `collector`
* `where to buy`

---

## 7.6 输出模块 6：Recommended Tools

模块标题：

> Recommended Tools

输出工具卡片：

* Tool name
* Best for
* When to use
* Optional external link

示例：

| Tool               | Best for                    | Use when                                    |
| ------------------ | --------------------------- | ------------------------------------------- |
| Google Lens        | Similar images and products | You want fast visual matches                |
| TinEye             | Source and duplicates       | You need older copies                       |
| Pinterest Lens     | Inspiration                 | You want similar aesthetics                 |
| Bing Visual Search | Products and objects        | You want shopping-style results             |
| Reddit search      | Context                     | You want discussions or identification help |

---

# 8. 生成逻辑说明

V1 可以不接 AI API，使用规则模板生成。
后续 V2 再接 AI，提升自然语言理解和 query 质量。

---

## 8.1 基础变量

前端或后端根据用户输入生成以下变量：

```text
seed = 用户输入关键词
goal = Search Goal
mode = Search Mode
platform = Target Platform
location = Location
contentType = Content Type
```

---

## 8.2 Query 模板规则

### 通用模板

```text
{seed}
"{seed}"
{seed} images
{seed} ideas
{seed} inspiration
{seed} examples
{seed} visual reference
```

### Source Finding 模板

```text
"{seed}" source
"{seed}" original image
"{seed}" photographer
"{seed}" credit
"{seed}" first appeared
"{seed}" image source
```

### Reverse Image Search 模板

```text
"{seed}" reverse image search
"{seed}" duplicate image
"{seed}" original photo
"{seed}" earliest source
"{seed}" copied image
```

### Similar Images 模板

```text
"{seed}" similar images
"{seed}" aesthetic
"{seed}" style
"{seed}" inspiration
"{seed}" moodboard
"{seed}" visual reference
```

### Product Search 模板

```text
"{seed}" where to buy
"{seed}" similar product
"{seed}" product name
"{seed}" shopping
"{seed}" review
"{seed}" alternative
```

### Verification 模板

```text
"{seed}" fake
"{seed}" real or fake
"{seed}" debunked
"{seed}" fact check
"{seed}" original source
"{seed}" before after
```

### Social Search 模板

```text
site:instagram.com "{seed}"
site:pinterest.com "{seed}"
site:reddit.com "{seed}"
site:tiktok.com "{seed}"
site:x.com "{seed}"
```

### Location 模板

如果 location 不为空：

```text
"{seed}" "{location}"
"{seed}" near "{location}"
site:instagram.com "{seed}" "{location}"
site:pinterest.com "{seed}" "{location}"
```

### Recency 模板

```text
"{seed}" 2026
"{seed}" latest
"{seed}" recent
"{seed}" this year
"{seed}" trend
```

---

## 8.3 Technique 推荐规则

### 如果 goal = Find original image source

推荐：

> Reverse image search + context keyword search

工具优先级：

1. Google Lens
2. TinEye
3. Bing Visual Search
4. Yandex Images
5. Google site operators

---

### 如果 goal = Find similar images

推荐：

> Visual similarity search + descriptive keyword expansion

工具优先级：

1. Google Lens
2. Pinterest Lens
3. Google Images
4. Instagram
5. Stock sites

---

### 如果 goal = Find product from image

推荐：

> Object-based visual search + shopping query refinement

工具优先级：

1. Google Lens
2. Bing Visual Search
3. Pinterest Lens
4. Amazon / Etsy / shopping platforms
5. Google Images

---

### 如果 goal = Verify an image

推荐：

> Reverse image search + date/context verification

工具优先级：

1. TinEye
2. Google Lens
3. Google Search
4. Bing
5. Yandex
6. Fact-checking sites

---

### 如果 goal = Academic / archive image search

推荐：

> Metadata-based image search + authority term expansion

工具优先级：

1. JSTOR
2. Museum collections
3. Google Advanced Image Search
4. Wikidata
5. Getty Vocabularies
6. Library of Congress

---

### 如果 goal = Search social media images

推荐：

> Platform-specific keyword search + site operators

工具优先级：

1. Instagram
2. Pinterest
3. Reddit
4. TikTok
5. Google site search

---

# 9. 页面 SEO 内容结构

首页工具下方需要有支柱内容，建议结构如下。

---

## 9.1 Section 1：What Are Image Search Techniques?

标题：

> What Are Image Search Techniques?

内容方向：

Image search techniques are methods used to find, identify, compare, verify, or discover images online. They include keyword-based image search, reverse image search, visual similarity search, product search, metadata search, and platform-specific search operators.

重点：

* 不要写太长
* 直接解释概念
* 自然包含主关键词
* 引导用户使用工具

---

## 9.2 Section 2：Which Image Search Technique Should You Use?

标题：

> Which Image Search Technique Should You Use?

建议做成表格。

| Goal                 | Best Technique           | Best Tools                |
| -------------------- | ------------------------ | ------------------------- |
| Find original source | Reverse image search     | TinEye, Google Lens       |
| Find similar images  | Visual similarity search | Google Lens, Pinterest    |
| Find product         | Object search            | Google Lens, Bing         |
| Verify image         | Reverse + context search | TinEye, Google            |
| Find inspiration     | Keyword + visual search  | Pinterest, Instagram      |
| Search archives      | Metadata search          | JSTOR, museum collections |

---

## 9.3 Section 3：Core Image Search Techniques

标题：

> Core Image Search Techniques

内容模块：

1. Keyword-based image search
2. Reverse image search
3. Visual similarity search
4. Object-based visual search
5. Product image search
6. Metadata and context search
7. Site-specific image search
8. Academic and archive image search

每个模块包含：

* What it is
* Best for
* Example query

---

## 9.4 Section 4：Advanced Image Search Query Templates

标题：

> Advanced Image Search Query Templates

展示可复制模板。

示例：

```text
site:pinterest.com "{topic}"
site:instagram.com "{topic}" creator
"{topic}" "where to buy"
"{topic}" "original source"
"{topic}" "photographer"
"{topic}" "before after"
"{topic}" "2026"
intitle:"{topic}" image
```

前端建议：

* 每条模板带 Copy 按钮
* 模板可以根据用户输入动态替换 `{topic}`

---

## 9.5 Section 5：Best Tools for Image Search

标题：

> Best Tools for Image Search

工具列表：

1. Google Lens
2. Google Images
3. TinEye
4. Bing Visual Search
5. Pinterest Lens
6. Yandex Images
7. Reddit
8. JSTOR / museum archives

每个工具说明：

* Best for
* Strength
* Limitation
* When to use

---

## 9.6 Section 6：How Image Search Works

标题：

> How Image Search Works

内容方向：

用普通用户能懂的方式解释：

* keyword search 看标题、alt text、caption、页面上下文
* reverse image search 找完全相同或接近相同的图
* visual similarity search 比较颜色、构图、物体、纹理
* embedding-based search 把图片转换成数字向量，再计算相似度
* metadata search 依赖图片周围的描述、作者、时间、地点、数据库标签

注意：
这里不要写代码，不做开发者教程。

---

## 9.7 Section 7：Image Search Workflows

标题：

> Practical Image Search Workflows

四个 workflow：

1. How to find the original source of an image
2. How to find similar images online
3. How to find a product from an image
4. How to verify whether an image is real

每个 workflow 用有序列表。

---

## 9.8 Section 8：FAQ

建议 FAQ：

1. What is the best image search technique?
2. How do I find the original source of an image?
3. What is the difference between reverse image search and visual similarity search?
4. How do I find similar images online?
5. Which tool is best for reverse image search?
6. Can I search Instagram by image?
7. How do I find a product from an image?
8. How do I verify if an image is real?
9. What are advanced image search operators?
10. Why do different image search tools show different results?

---

# 10. 页面信息架构

## 10.1 顶部导航

建议导航：

* Image Search Generator
* Techniques
* Reverse Search
* Google Images
* Templates
* FAQ

移动端折叠菜单。

---

## 10.2 Footer

Footer 分组：

### Product

* Image Search Generator
* Visual Search Query Generator
* Reverse Image Search Workflow
* Instagram Search Queries

### Guides

* Image Search Techniques
* Reverse Image Search Techniques
* Google Image Search Techniques
* Find Original Image Source
* Find Product from Image

### Related Tools

* IGRecent
* RecentFollowed
* TTAnonViewer

### Legal

* Privacy
* Terms

注意：
Related Tools 放 footer 即可，不建议放在 FAQ 中强推。

---

# 11. 第一批页面规划

## 11.1 首页

URL：

> `/`

主攻：

* image search techniques
* image search query generator

页面类型：

* 工具首页 + SEO 支柱内容

---

## 11.2 支柱页

URL：

> `/image-search-techniques`

标题：

> Image Search Techniques: Find Sources, Similar Images, Products, and Visual Inspiration

用途：

* 主攻大词
* 可以和首页内容部分重叠，但不要完全重复
* 页面内嵌工具

---

## 11.3 Reverse Search 页面

URL：

> `/reverse-image-search-techniques`

标题：

> Reverse Image Search Techniques: Find Image Sources, Duplicates, and Older Copies

模块：

* What is reverse image search
* When to use it
* Step-by-step workflow
* Best tools
* Query templates
* FAQ

---

## 11.4 Google Images 页面

URL：

> `/google-image-search-techniques`

标题：

> Google Image Search Techniques: Operators, Filters, Lens, and Advanced Queries

模块：

* Google Images basics
* Google Lens workflow
* Advanced operators
* Search filters
* Query examples
* Common mistakes

---

## 11.5 Find Original Source 页面

URL：

> `/find-original-image-source`

标题：

> How to Find the Original Source of an Image

模块：

* Reverse search workflow
* TinEye usage
* Google Lens usage
* Context search
* Date comparison
* Source verification checklist

---

## 11.6 Find Product 页面

URL：

> `/find-product-from-image`

标题：

> How to Find a Product from an Image

模块：

* Crop image
* Use Google Lens
* Use Bing Visual Search
* Describe product details
* Shopping query templates
* Alternative product search

---

# 12. 前端组件拆分建议

## 12.1 组件列表

### Layout

* `Header`
* `Footer`
* `PageContainer`
* `Section`
* `Breadcrumb`

### Tool

* `SearchStrategyGenerator`
* `SearchInput`
* `GoalSelect`
* `ModeSelect`
* `PlatformSelect`
* `LocationInput`
* `ContentTypeSelect`
* `GenerateButton`
* `ResultPanel`

### Results

* `RecommendedTechniqueCard`
* `WorkflowSteps`
* `QueryList`
* `CopyButton`
* `PlatformTips`
* `TermExpansion`
* `RecommendedTools`
* `EmptyState`
* `LoadingState`

### SEO Content

* `TechniqueMatrix`
* `TechniqueCardGrid`
* `QueryTemplateTable`
* `ToolComparisonTable`
* `FAQAccordion`
* `HowItWorksSection`

---

## 12.2 交互细节

### Copy 按钮

每条 query 右侧有 Copy 按钮。

点击后：

* 按钮文案变成 `Copied`
* 1.5 秒后恢复 `Copy`

### Generate 按钮

点击后：

* 校验输入
* loading 300-800ms
* 平滑滚动到结果区域
* 展示结果卡片

### Empty state

如果用户没有输入：

> Enter a topic or visual search goal to generate your image search strategy.

### Error state

如果生成失败：

> Something went wrong. Please try again with a shorter or clearer search topic.

---

# 13. UI 风格建议

整体风格：

* 干净
* 工具感
* 轻量 SaaS
* 不要太像博客
* 不要太像黑帽 SEO 工具

视觉关键词：

* white / off-white 背景
* 蓝紫色或蓝绿色 accent
* 大圆角卡片
* 轻阴影
* 清晰表格
* copyable query chips

建议首屏布局：

桌面端：

* 左侧：H1 + subtitle + trust points
* 右侧：generator card

移动端：

* 上方：H1 + subtitle
* 下方：generator card

---

# 14. SEO 技术要求

## 14.1 Meta

首页：

```text
Title:
Image Search Techniques & Query Generator | IGQuery

Description:
Generate smarter image search queries, reverse image search workflows, and platform-specific search tactics for Google Images, Lens, TinEye, Pinterest, Instagram, Reddit, and more.
```

---

## 14.2 Schema

建议添加：

### WebApplication Schema

用于首页工具。

字段：

* name
* applicationCategory
* operatingSystem
* description
* url

### FAQPage Schema

用于 FAQ。

### HowTo Schema

用于 workflow sections，例如：

* how to find original image source
* how to find product from image
* how to verify image online

### BreadcrumbList Schema

用于所有内页。

---

## 14.3 内链策略

首页链接到：

* `/image-search-techniques`
* `/reverse-image-search-techniques`
* `/google-image-search-techniques`
* `/find-original-image-source`
* `/find-product-from-image`
* `/instagram-image-search-techniques`

每个内页都链接回：

* 首页工具
* 主支柱页
* 相关长尾页

---

# 15. V1 规则生成实现建议

V1 可以使用纯前端规则生成。

## 15.1 数据结构示例

```js
const goals = {
  source: {
    technique: "Reverse image search + context keyword search",
    tools: ["Google Lens", "TinEye", "Bing Visual Search", "Yandex Images"],
    queryTemplates: [
      '"{seed}" original source',
      '"{seed}" photographer',
      '"{seed}" image credit',
      '"{seed}" first appeared',
      'site:pinterest.com "{seed}"',
      'site:reddit.com "{seed}"'
    ],
    workflow: [
      "Upload the image to Google Lens and check exact matches.",
      "Run the same image through TinEye to find older indexed copies.",
      "Search visible text, logos, locations, or product names.",
      "Use site-specific queries to search likely platforms.",
      "Compare dates and source credibility."
    ]
  }
}
```

---

## 15.2 Template Replace

```js
function applyTemplate(template, seed, location) {
  return template
    .replaceAll("{seed}", seed)
    .replaceAll("{location}", location || "");
}
```

---

## 15.3 Query 去重

需要对生成的 query 做去重和空值清理。

```js
const uniqueQueries = [...new Set(queries)]
  .map(q => q.trim())
  .filter(Boolean);
```

---

# 16. V2 增强方向

V2 可以接 AI API 或后端规则引擎。

增强功能：

1. 根据用户输入自动判断 goal
2. 自动生成同义词
3. 自动生成平台 query
4. 自动生成更自然的 workflow
5. 支持批量生成 query
6. 支持导出 CSV
7. 支持保存 query pack
8. 支持用户选择语言
9. 支持专业领域模板：

   * fashion
   * interior design
   * product research
   * art history
   * architecture
   * e-commerce
   * social media research

---

# 17. MVP 开发排期建议

## Day 1：页面重构

* Header / Footer
* Hero
* Generator card
* 基础表单

## Day 2：规则生成器

* 根据 goal 输出 technique
* 输出 workflow
* 输出 query list
* 输出 platform tips

## Day 3：结果组件优化

* Copy 按钮
* Result cards
* Term expansion
* Recommended tools

## Day 4：SEO 内容区

* What are image search techniques
* Technique matrix
* Tool comparison
* Query templates
* FAQ

## Day 5：内页模板

先做 2 个页面：

* `/reverse-image-search-techniques`
* `/find-original-image-source`

## Day 6：Schema + Sitemap

* FAQ schema
* WebApplication schema
* Breadcrumb schema
* sitemap.xml
* robots.txt

## Day 7：测试和上线

* 移动端检查
* Core Web Vitals
* 表单边界测试
* copy 功能测试
* GSC 提交

---

# 18. 第一版验收标准

## 功能验收

* 用户输入 topic 后可生成结果
* 不同 goal 输出不同 technique
* 不同 platform 输出不同 tips
* query 可复制
* 空输入有提示
* 移动端可正常使用
* 页面加载速度快

## SEO 验收

* 首页 title / description 正确
* H1 只有一个
* FAQ 可展开
* schema 无报错
* sitemap 包含主要页面
* 页面可被搜索引擎抓取
* 内链清晰

## 内容验收

* 页面首屏明确表达新定位
* “Instagram” 不再作为主定位
* 主关键词 image search techniques 自然出现
* 内容覆盖 reverse search、visual similarity、tools、query templates、workflow
* FAQ 不再强推无关 sister tools

---

# 19. 最终产品一句话

IGQuery.com 新版要做的不是一个普通 SEO 文章站，而是：

> **A practical image search techniques generator that helps users choose the right search method, generate better image search queries, and follow platform-specific workflows.**

中文：

> 一个帮用户生成图片搜索策略、搜索词和操作步骤的工具站。

核心差异化：

> 竞品告诉用户“有哪些图片搜索技巧”，IGQuery 直接告诉用户“你现在该怎么搜”。
