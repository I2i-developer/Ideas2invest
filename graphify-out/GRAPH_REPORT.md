# Graph Report - .  (2026-07-22)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 639 nodes · 531 edges · 199 communities (70 shown, 129 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bb536dc2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- index.js
- CalculatorSidebar.jsx
- ComprehensiveCalculator.jsx
- package.json
- ai-chat-old.js
- financial-news.js
- dependencies
- layout.js
- ServiceSteps.jsx
- eslint.config.mjs
- compilerOptions
- BillionaireClub.jsx
- FinancialRiskInfo.jsx
- SocialMediaPosts.jsx
- page.js
- JourneySection.jsx
- LegalLayout.jsx
- NewsSection.jsx
- OurAssociates.jsx
- Testimonials.jsx
- ServiceBenefits.jsx
- ServiceCaseStudy.jsx
- ServiceComparison.jsx
- ServiceCTA.jsx
- InfoWithTable.jsx
- next.config.mjs
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- page.js
- AboutSection.jsx
- AwardsRecognition.jsx
- Benefits.jsx
- CalculatorSection.jsx
- CeoAndContact.jsx
- ContactCards.jsx
- FaqAndContact.jsx
- Footer.jsx
- GetStarted.jsx
- Hero.jsx
- InvestorPersona.jsx
- ReviewGoogle.jsx
- RiskProfileCalculatorActual.jsx
- SiteMapLinks.jsx
- StrategicPlanningProcess.jsx
- ValuesSection.jsx
- mutualFunds.js
- resources.js
- framer-motion
- katex
- lodash
- lucide-react
- next-sitemap
- node-fetch
- nodemailer
- openai
- prop-types
- react
- react-dom
- react-icons
- react-is
- react-katex
- react-slick
- react-tooltip
- recharts
- rss-parser
- sharp
- swiper
- @tippyjs/react
- twilio
- @vercel/analytics
- @vercel/speed-insights
- Blogs.jsx
- bannerData.js
- breadcrumbData.js
- breadcrumbStripData.js
- calculatorsData.js
- caseStudyData.js
- comparisonData.js
- counterData.js
- directorsData.js
- faqData.js
- footerData.js
- howToInvestData.js
- investmentPartnerData.js
- legalContent.js
- navbarData.js
- seoData.js
- service.js
- serviceInfoData.js
- serviceProcessData.js
- socialPostsData.js
- strategicPlanningSteps.js
- teamData.js
- testimonialData.js
- useCasesData.js

## God Nodes (most connected - your core abstractions)
1. `CalculatorSidebar()` - 17 edges
2. `handler()` - 8 edges
3. `scripts` - 6 edges
4. `ComprehensiveCalculator()` - 5 edges
5. `tokenize()` - 5 edges
6. `BillionaireClub()` - 3 edges
7. `toNumber()` - 3 edges
8. `futureValuePresentAmount()` - 3 edges
9. `monthlySIPForFV()` - 3 edges
10. `ReportExport()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `ReportExport()` --references--> `jspdf`  [EXTRACTED]
  src/components/ComprehensiveCalculator/ReportExport.jsx → package.json

## Import Cycles
- None detected.

## Communities (199 total, 129 thin omitted)

### Community 0 - "index.js"
Cohesion: 0.08
Nodes (18): blog, blog, blog, blog, blog, blogs, blog, blog (+10 more)

### Community 2 - "ComprehensiveCalculator.jsx"
Cohesion: 0.13
Nodes (16): jspdf, jspdf, ChartsSection(), COLORS, ComprehensiveCalculator(), futureValuePresentAmount(), monthlySIPForFV(), monthsFromYears() (+8 more)

### Community 3 - "package.json"
Cohesion: 0.11
Nodes (18): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, name, postcss, overrides (+10 more)

### Community 4 - "ai-chat-old.js"
Cohesion: 0.38
Nodes (10): calcCAGRFromHistory(), fetchFundDetails(), fetchFundList(), GREETINGS, handler(), normalize(), parseNavDate(), scoreMatch() (+2 more)

### Community 5 - "financial-news.js"
Cohesion: 0.32
Nodes (7): CACHE, categoryKeywords, config, handler(), parser, rssFeeds, sendFilteredResults()

### Community 6 - "dependencies"
Cohesion: 0.29
Nodes (7): html2pdf.js, next, dependencies, html2pdf.js, next, react-gauge-chart, react-gauge-chart

### Community 7 - "layout.js"
Cohesion: 0.33
Nodes (4): ClientLayout(), manrope, metadata, organizationSchema

### Community 8 - "ServiceSteps.jsx"
Cohesion: 0.33
Nodes (4): containerVariants, lineVariants, stepVariants, verticalLineVariants

### Community 9 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 10 - "compilerOptions"
Cohesion: 0.40
Nodes (4): compilerOptions, paths, @/*, ./src/*

### Community 11 - "BillionaireClub.jsx"
Cohesion: 0.60
Nodes (3): BillionaireClub(), formatINR(), useCountUp()

### Community 13 - "SocialMediaPosts.jsx"
Cohesion: 0.40
Nodes (3): cardVariants, containerVariants, socialLinks

## Knowledge Gaps
- **175 isolated node(s):** `./src/*`, `metadata`, `metadata`, `metadata`, `metadata` (+170 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **129 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `ComprehensiveCalculator.jsx`, `package.json`, `framer-motion`, `katex`, `lodash`, `lucide-react`, `next-sitemap`, `node-fetch`, `nodemailer`, `openai`, `prop-types`, `react`, `react-dom`, `react-icons`, `react-is`, `react-katex`, `react-slick`, `react-tooltip`, `recharts`, `rss-parser`, `sharp`, `swiper`, `@tippyjs/react`, `twilio`, `@vercel/analytics`, `@vercel/speed-insights`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `jspdf` connect `ComprehensiveCalculator.jsx` to `dependencies`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **What connects `./src/*`, `metadata`, `metadata` to the rest of the system?**
  _175 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.08253968253968254 - nodes in this community are weakly interconnected._
- **Should `CalculatorSidebar.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0873440285204991 - nodes in this community are weakly interconnected._
- **Should `ComprehensiveCalculator.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13438735177865613 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._