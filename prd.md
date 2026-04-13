# igquery.com 产品需求文档（PRD）- MVP

## 1. 产品概述

### 产品名称

**igquery.com**

### 产品副标题

**Instagram Search Query Optimizer**

### 一句话定位

**Turn vague ideas into smarter Instagram search queries.**

### 核心价值

将用户模糊的主题词、搜索意图或业务方向，转化为更精准、更可执行的 Instagram 搜索 queries，帮助用户在算法推荐之外，更主动地发现内容、创作者、竞品和本地信息。

---

## 2. 产品目标

### 2.1 业务目标

* 快速上线一个可验证需求的 Instagram 工具型 MVP
* 承接与以下词簇相关的 SEO 流量：

    * instagram search query
    * instagram search queries
    * instagram search query optimization
    * instagram search queries optimization
* 为后续扩展到 Query Builder / Query Planner / Bio SEO Planner 打基础

### 2.2 用户目标

让用户在几秒内完成输入，并获得一组明显优于原始模糊词的 Instagram 搜索 queries，可直接复制并在 Instagram 中使用。

---

## 3. 目标用户

### 3.1 创作者 / 博主

* 想找内容灵感
* 想发现更新鲜的选题方向
* 想找到垂直领域的参考账号

### 3.2 运营 / 市场 / 增长人员

* 想搜索竞品动态
* 想找特定地区的创作者或品牌
* 想做 Instagram 上的定向信息搜集

### 3.3 小商家 / 独立品牌

* 想发现本地相关内容
* 想找到本地创作者、门店、场景内容
* 想找到更接近购买意图的相关帖子或账号

### 3.4 普通重度搜索用户

* 想搜某类细分内容
* 觉得 Instagram 原生搜索结果过于宽泛、过于热门、缺少明确搜索引导

---

## 4. 用户痛点

1. **只会搜一个泛词**

    * 例如只输入 `minimalist decor`
    * 结果太宽泛，难以得到有价值的内容

2. **不会构造更专业的 Instagram 搜索 query**

    * 不知道如何加入意图词、场景词、地点词、格式词、近期信号词

3. **不同目标下不会切换搜索方式**

    * 找灵感、找创作者、找竞品、本地搜索，本质上应该用不同 query

4. **Instagram 原生搜索缺少“查询优化层”**

    * 用户需要一个外部工具帮他把模糊词转化成更好用的 query

---

## 5. MVP 范围

### 5.1 本期必须实现（P0）

* 输入种子词（Seed Keyword）
* 支持选择搜索目标（Search Goal）
* 支持可选 Location
* 支持可选 Content Type
* 调用 LLM 生成 4 组结构化 query
* 支持单条复制
* 支持整组复制
* 支持重新生成
* 支持基础错误状态与加载状态

### 5.2 本期不做

* 不接 Instagram 官方 API
* 不直接展示 Instagram 站内搜索结果
* 不承诺精确的 chronological/recent 搜索能力
* 不做用户登录
* 不做历史项目管理
* 不做实时趋势看板
* 不做 Copy as Hashtags
* 不做 Bio SEO 建议
* 不做内容日历
* 不做多语言版本

### 5.3 P1 可做

* Open on Instagram
* 预设 use-case 模板
* “Use as new seed” 二次扩展
* 首页示例案例
* 结果解释文案增强

---

## 6. 功能定义

## 6.1 核心主功能

### Query Optimization AI

用户输入一个模糊的主题词或种子词，系统输出一组经过优化的 Instagram 搜索 queries，用于不同的搜索目标场景。

本功能本质上是一个：

* Instagram Search Query Optimizer
* Query Builder（轻量版）
* Search Intent Expansion Tool

---

## 7. 输入模块（The Input）

### 7.1 输入字段

#### 1）Seed Keyword / Topic

* 类型：文本输入框
* 必填：是
* 占位文案示例：

    * vintage watches
    * minimalist decor
    * pilates studio
    * wedding makeup
    * coffee shops Paris

#### 2）Search Goal

* 类型：下拉单选
* 必填：否
* 默认值：Any
* 选项：

    * Any
    * Content Inspiration
    * Creator Discovery
    * Competitor Research
    * Local Discovery
    * Buyer Intent

#### 3）Location

* 类型：文本输入框
* 必填：否
* 示例：

    * Tokyo
    * London
    * Hangzhou
    * Los Angeles

#### 4）Content Type

* 类型：下拉单选
* 必填：否
* 默认值：Any
* 选项：

    * Any
    * Reels
    * Posts
    * Accounts
    * Places

---

## 8. 输出模块（The Output）

MVP 固定输出 **4 组结构化 query**。

## 8.1 Core Queries

### 定义

围绕 Seed Keyword 生成最基础、最稳妥、最直接的搜索 query。

### 作用

帮助用户快速覆盖主题核心搜索范围。

### 示例

输入：
`minimalist decor`

输出示例：

* minimalist decor
* minimalist decor ideas
* minimalist decor home

---

## 8.2 Long-tail Queries

### 定义

更具体、更细分、更容易挖到垂直内容的长尾 query。

### 作用

帮助用户缩小范围，提升搜索精度。

### 示例

* minimalist decor small apartment
* minimalist decor bedroom ideas
* minimalist decor neutral home
* minimalist decor budget makeover

---

## 8.3 Goal-based Queries

### 定义

基于用户选择的 Search Goal，生成更具场景针对性的 query。

### 不同 Goal 的逻辑示例

#### 当 Goal = Content Inspiration

* minimalist decor inspo
* minimalist decor reel ideas
* minimalist decor before after

#### 当 Goal = Creator Discovery

* minimalist decor creator
* minimalist decor influencer
* minimalist decor reels
* minimalist decor stylist

#### 当 Goal = Competitor Research

* minimalist decor brand
* minimalist decor shop
* minimalist decor studio
* minimalist decor business

#### 当 Goal = Local Discovery

* minimalist decor Tokyo
* minimalist decor store Tokyo
* minimalist decor showroom Tokyo

#### 当 Goal = Buyer Intent

* minimalist decor shop
* minimalist decor products
* minimalist decor home store
* minimalist decor buy

---

## 8.4 Recency-Oriented Queries

### 定义

生成带有“新、近期、当下”语义信号的 query 变体，用于帮助用户探索更偏近期、更新鲜的话题表达。

### 重要说明

该模块**不承诺** Instagram 会按时间顺序展示结果，也**不承诺**一定能找到最近 24 小时内容。
本模块的作用是通过加入时间锚点和 recency signals，提高用户探索近期内容的概率。

### 常见 recency signals

* new
* latest
* this week
* April 2026
* spring 2026
* today（谨慎使用）

### 示例

* minimalist decor new
* minimalist decor latest
* minimalist decor April 2026
* minimalist decor this week

---

## 9. 输出质量规则

系统生成的 query 必须满足以下规则：

### 9.1 可用性

* 自然可读
* 用户看得懂
* 用户愿意复制使用
* 贴近 Instagram 搜索语境

### 9.2 长度

* 以 **2–5 个词** 为主
* 少量长尾 query 可到 6 个词
* 避免过长 query，降低实际使用意愿

### 9.3 相关性

* 必须紧密围绕 Seed Keyword
* Location、Goal、Content Type 应合理影响输出
* 不允许出现明显跑题内容

### 9.4 去重

* 不输出近似重复词
* 不做机械同义替换堆砌

### 9.5 平台语境

优先引入更符合 Instagram 搜索习惯的修饰词，例如：

* ideas
* inspo
* creator
* reels
* studio
* guide
* outfit
* brand
* local
* shop

### 9.6 禁止问题

* 禁止输出毫无意义的词堆
* 禁止输出明显语法错误
* 禁止虚构“官方高级筛选语法”
* 禁止承诺 Instagram 一定返回特定类型结果

---

## 10. 输出数量规则

MVP 默认每次返回：

* Core Queries：3 条
* Long-tail Queries：4 条
* Goal-based Queries：4 条
* Recency-Oriented Queries：3 条

合计：**14 条左右**

说明：

* 数量足够体现价值
* 又不会过多造成选择困难

---

## 11. 用户流程

## 11.1 主流程

1. 用户进入首页
2. 输入 Seed Keyword
3. 可选填写 Search Goal / Location / Content Type
4. 点击 `Optimize Queries`
5. 系统进入 loading 状态
6. 系统返回 4 组 query 结果
7. 用户复制单条或整组 query
8. 用户前往 Instagram 使用这些 query

## 11.2 典型示例

输入：

* Seed Keyword：`vintage watches`
* Search Goal：`Creator Discovery`
* Location：`Tokyo`
* Content Type：`Reels`

输出：

* Core Queries
* Long-tail Queries
* Creator Discovery Queries
* Recency-Oriented Queries

用户可复制并在 Instagram 搜索框中测试。

---

## 12. 页面结构（仅 MVP 功能页）

## 12.1 首页首屏

### 包含内容

* Logo / 域名品牌
* H1
* 副标题
* Seed Keyword 输入框
* Search Goal 下拉
* Location 输入框
* Content Type 下拉
* CTA 按钮

### H1 推荐

**Optimize Your Instagram Search Queries**

### 副标题推荐

Turn one topic into smarter Instagram search queries for inspiration, creator discovery, competitor research, and local search.

### CTA 推荐

**Optimize Queries**

---

## 12.2 结果区

### 布局方式

卡片式分组展示：

* Core Queries
* Long-tail Queries
* Goal-based Queries
* Recency-Oriented Queries

### 每张卡片包含

* 分组标题
* 简短说明
* query 列表
* 单条 Copy 按钮
* Copy All 按钮

### 每组可附一行说明

例如：

#### Core Queries

Start with broad but useful search phrases.

#### Long-tail Queries

Use these to narrow your search into more specific niches.

#### Goal-based Queries

These are optimized for your selected search intent.

#### Recency-Oriented Queries

These use freshness signals to help you explore newer content angles.

---

## 12.3 底部说明区

### 内容建议

* What makes a good Instagram search query?
* Why broad searches often fail
* How to use these queries on Instagram
* Disclaimer: this tool optimizes search queries and does not return Instagram results directly

---

## 13. 状态设计

## 13.1 初始状态

* 表单可输入
* 结果区域为空
* 展示示例输入或用例提示

## 13.2 Loading 状态

* CTA 按钮置灰
* 显示 loading 文案，例如：

    * Optimizing your queries...
* 可显示骨架屏

## 13.3 Success 状态

* 展示 4 组结果
* 支持复制交互
* 支持重新生成

## 13.4 Error 状态

### 错误场景

* Seed Keyword 为空
* LLM 请求失败
* 服务超时

### 对应提示

* Please enter a keyword or topic.
* Something went wrong. Please try again.
* The request took too long. Please retry.

---

## 14. 交互设计

## 14.1 单条复制

* 每条 query 右侧有 `Copy`
* 点击后反馈：

    * Copied

## 14.2 整组复制

* 每个分组顶部或底部有 `Copy All`
* 复制该组内所有 query，按换行输出

## 14.3 重新生成

* 提供 `Regenerate` 按钮
* 保留当前输入参数，仅重跑生成

---

## 15. 技术实现建议

## 15.1 推荐技术栈

* 前端：Next.js / React / Tailwind CSS
* 后端：FastAPI
* LLM：OpenAI / DeepSeek / 其他可替代模型
* 数据层：MVP 阶段可不落库或仅做轻量日志

## 15.2 后端实现原则

MVP 推荐采用：

**LLM + Prompt Engineering + 规则模板层**

而不是一开始引入复杂 RAG。

### 原因

当前功能核心在于：

* query generation
* search intent expansion
* output formatting
* platform-native modifier control

这些更适合通过：

* Prompt 模板
* 场景规则
* 少量词库增强
  来完成。

---

## 16. 输出数据结构建议（接口层）

可返回如下 JSON 结构：

```json
{
  "seed_keyword": "vintage watches",
  "search_goal": "Creator Discovery",
  "location": "Tokyo",
  "content_type": "Reels",
  "groups": [
    {
      "type": "core",
      "title": "Core Queries",
      "description": "Start with broad but useful search phrases.",
      "queries": [
        "vintage watches",
        "vintage watches reels",
        "vintage watch style"
      ]
    },
    {
      "type": "long_tail",
      "title": "Long-tail Queries",
      "description": "Use these to narrow your search into more specific niches.",
      "queries": [
        "affordable vintage watches",
        "vintage watches Tokyo",
        "vintage watches for men",
        "vintage watch collector reels"
      ]
    },
    {
      "type": "goal_based",
      "title": "Goal-based Queries",
      "description": "These are optimized for your selected search intent.",
      "queries": [
        "vintage watch creator",
        "vintage watch influencer",
        "vintage watch reels",
        "vintage watch stylist"
      ]
    },
    {
      "type": "recency",
      "title": "Recency-Oriented Queries",
      "description": "These use freshness signals to help you explore newer content angles.",
      "queries": [
        "vintage watches latest",
        "vintage watches April 2026",
        "vintage watches new"
      ]
    }
  ]
}
```

---

## 17. SEO 策略（MVP 阶段）

## 17.1 首页目标

首页主要承接以下主题相关词：

* instagram search query
* instagram search queries
* instagram search query optimization
* instagram search queries optimization
* advanced instagram search tool

## 17.2 首页内容建议

除了工具本体，首页底部增加静态 SEO 模块：

* What is an Instagram search query?
* How to improve Instagram search queries
* Example use cases
* FAQ

## 17.3 后续扩展方向

后续可以在 `/queries/` 下生成静态长尾页，例如：

* /queries/how-to-find-minimalist-decor-on-instagram
* /queries/how-to-search-local-creators-on-instagram
* /queries/best-instagram-search-queries-for-vintage-watches

---

## 18. 成功指标

## 18.1 核心行为指标

* 页面访问量
* 工具提交率
* 成功生成率
* 单条复制率
* 分组复制率
* 重新生成率

## 18.2 质量指标

* 用户复制后是否继续二次输入
* 输出 query 是否足够具体
* 用户是否能快速理解分组价值

---

## 19. 风险与注意事项

### 风险 1：用户误以为工具直接抓取 Instagram 数据

**应对：**
在页面说明和 FAQ 中明确：
This tool optimizes Instagram search queries. It does not fetch Instagram results directly.

### 风险 2：Recency 模块承诺过高

**应对：**
明确使用 “Recency-Oriented” 而非 “Recent Results”
避免声称可精确发现最近 24 小时内容。

### 风险 3：输出太空泛

**应对：**
增加 Prompt 约束与规则模板层，优先生成具体、短小、场景化 query。

### 风险 4：输出太发散

**应对：**
要求输出始终围绕 Seed Keyword、Search Goal、Location 和 Content Type。

---

## 20. 路线图

### Phase 1（当前 MVP）

* 输入种子词
* 生成四组 query
* 单条复制
* 整组复制
* 重新生成

### Phase 2

* Open on Instagram
* 预设 use-case 模板
* 更丰富的首页案例
* 二次扩展（Use as new seed）

### Phase 3

* Query Planner
* Bio SEO suggestions
* Content angle suggestions
* 多语言支持
* 更完整的 Instagram SEO 工具矩阵

---

## 21. 开发优先级

### P0

* 输入表单
* Query 生成接口
* 结果分组展示
* Copy / Copy All
* Loading / Error / Success 状态

### P1

* Regenerate
* 示例案例
* Open on Instagram
* FAQ 与 SEO 模块

### P2

* 模板库
* 长尾静态页体系
* Planner 扩展
* SEO 增强内容系统

---

## 22. 一句话总结

**igquery.com MVP 是一个 Instagram Search Query Optimizer。用户输入一个主题词，系统输出 4 组更精准、更可执行的 Instagram 搜索 queries，帮助用户更高效地发现内容、创作者、竞品和本地信息。**
