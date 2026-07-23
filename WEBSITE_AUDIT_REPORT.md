# Website Audit Report

Audit date: 2026-07-22

## 1. Executive Summary

Completion update: a follow-up clickability pass found that the full-screen logo intro overlay could remain mounted over the page and make navigation feel blocked, especially before or during hydration. The global intro overlay was removed from `ClientLayout`, stale internal links were corrected, placeholder social links were replaced with configured social URLs, invalid nested interactive markup in the AI assistant CTA was fixed, and a `/undefined` hero background request was eliminated. Desktop and mobile browser checks now confirm navigation links are clickable.

The site is a broad Next.js company website for Ideas2Invest with many public marketing, service, mutual-fund, calculator, blog, legal, contact, and resource routes. It has useful content depth, visible compliance-oriented footer copy, many dedicated SEO metadata exports, Vercel Analytics/Speed Insights, and a practical App Router page structure.

The weakest launch areas at the start of the audit were production validation, dependency security, root rendering architecture, form/API hardening, accessibility polish, and maintainability. Remediation restored clean lint/build validation, improved the root rendering model, hardened several form APIs, added security/SEO/accessibility quick wins, and resolved all npm audit advisories currently reported by the dependency tree.

Remaining major risks:

- Public APIs still need rate limiting, spam protection, and payload limits.
- AI-assisted fund suggestion behavior still needs financial-compliance review.
- No automated tests exist yet.
- Real production analytics, Search Console, Lighthouse field data, DNS redirects, and form delivery still require manual verification.

Biggest opportunities:

- Keep deterministic build/lint/audit validation in CI.
- Continue reducing client-side JavaScript and hydration cost.
- Harden all lead-generation APIs with shared validation, escaping, method guards, payload limits, rate limiting, and safer errors.
- Add security headers and conservative runtime configuration in `next.config.mjs`.
- Improve SEO consistency with generated `sitemap.js`/`robots.js`, canonical normalization, JSON-LD coverage, and metadata cleanup.
- Improve performance by reducing global client rendering, replacing raw `<img>` where appropriate, and reviewing carousel/PDF dependencies.

## 2. Concise Architecture Summary

- Next.js version: `15.5.20`.
- React version: package range `^18.0.0`; installed from lockfile after `npm ci`.
- Router: App Router for public pages in `src/app`; legacy Pages Router API routes in `src/pages/api`.
- Language/config: JavaScript, not TypeScript. `jsconfig.json` defines `@/* -> ./src/*`.
- Styling: global CSS in `src/app/globals.css`, CSS Modules per component, imported Swiper/Katex CSS.
- State management: local React state only; no Redux/Zustand/context store identified.
- Data fetching: mostly static data modules under `src/data`; client fetches to internal APIs; API routes call Google Forms, Gmail/Nodemailer, Groq, NewsData.io, RSS feeds, and MFAPI.
- API routes: `ai-chat`, `ai-chat-old`, `contact-page`, `financial-news`, `home-contact`, `send-app-link`, `sendReviewEmail`, `subscribe`.
- Server actions: none identified.
- Authentication: none identified.
- Database: none identified. Lead storage uses Google Forms in production; some development/local JSON write code remains.
- Analytics/tracking: Vercel Analytics, Vercel Speed Insights, Google Analytics `G-TTWMS72K7P`.
- Deployment: Vercel-compatible Next app; no `vercel.json`; `next.config.mjs` is empty.
- Environment variables referenced: `EMAIL_USER`, `EMAIL_PASS`, `ADMIN_EMAIL`, `EMAIL_USER_NEW`, `EMAIL_PASS_NEW`, `NEXT_PUBLIC_SITE_URL`, `GROQ_API_KEY`, `NEWSDATA_API_KEY`.
- Package manager: npm with `package-lock.json`. Scripts: `dev`, `build`, `start`, `lint`, `postbuild`.
- Testing setup: no unit, integration, E2E, accessibility, or visual regression tests found.
- Linting/formatting: `npm run lint` exists but no ESLint config is present; no Prettier config found.
- Sitemap/robots: `next-sitemap.config.js`, generated `public/sitemap.xml`, generated/custom `public/robots.txt`, and an HTML sitemap page at `/sitemap`.
- Images/fonts: `next/font/google` Manrope in `ClientLayout`; mixed `next/image` and raw `<img>`; many public images/PDFs.
- Public routes: `/`, `/about`, `/blogs`, `/blogs/[slug]`, `/calculators`, 18 calculator routes, `/contact`, `/faq`, `/google-review`, 5 legal routes, `/media-center`, `/mutual-funds`, 6 mutual-fund routes, `/news-updates`, `/nri-services`, 3 NRI child routes, `/resources`, `/services`, 7 service child routes, `/signup`, `/sitemap`.

## Architecture and Dependency Analysis

Graphify was run from the project root. Full semantic extraction could not be performed because no LLM API key was configured and 321 non-code files needed semantic extraction. A safe code-only graph was generated instead:

- Command: `graphify . --mode deep --code-only`
- Follow-up: `graphify cluster-only .`
- Outputs: `graphify-out/graph.json`, `graphify-out/GRAPH_REPORT.md`, `graphify-out/graph.html`
- Initial graph: 617 nodes, 515 edges, 194 communities, 100% extracted edges, no import cycles detected.
- Latest refreshed graph after remediation: 639 nodes, 531 edges, 199 communities.

Main architectural communities:

- Blog data/index community around `src/data/blogs/index.js`.
- Calculator UI and utility community around `CalculatorSidebar.jsx` and `ComprehensiveCalculator.jsx`.
- AI chat/API communities around `ai-chat-old.js`, `ai-chat.js`, and fund data.
- News API community around `financial-news.js`.
- Root layout/client-shell community around `layout.js` and `ClientLayout.js`.
- Many thin route/component communities, reflecting broad page count and shallow static page composition.

Important entry points:

- `src/app/layout.js`
- `src/app/ClientLayout.js`
- `src/app/page.js`
- `src/pages/api/*.js`
- `src/components/Navbar/Navbar.jsx`
- `src/components/Footer/Footer.jsx`
- Calculator pages and `src/components/MainCalculator/*`

Most highly connected modules from Graphify:

- `CalculatorSidebar()` - 17 edges.
- API `handler()` nodes - 8 edges.
- `ComprehensiveCalculator()` - 5 edges.
- `tokenize()` in AI chat old flow - 5 edges.
- `ReportExport()` references `jspdf`.

Circular dependencies:

- None detected by Graphify.

Orphaned/dead-code candidates:

- `src/pages/api/ai-chat-old.js` appears retained alongside `ai-chat.js`.
- `src/components/AiAssistant/AiAssistantOld.jsx` and `.module-old.css` appear retained alongside current assistant code.
- Several files contain large commented-out previous implementations.
- Graphify reported several JSON data files produced zero nodes: lead/fund JSON files should be reviewed for current use.

High blast-radius files:

- `src/app/ClientLayout.js`: affects every route and controls document shell, intro overlay, analytics, floating widgets, and content rendering.
- `src/components/Navbar/Navbar.jsx`: imported by most routes.
- `src/components/Footer/Footer.jsx`: imported by most routes and contains newsletter conversion form.
- `src/pages/api/home-contact.js`, `contact-page.js`, `subscribe.js`, `send-app-link.js`: shared lead-generation/email behavior.
- `src/components/MainCalculator/*` and `ComprehensiveCalculator/*`: many repeated calculator patterns.

Unexpected relationships and coupling:

- Global document structure is in a client component, which couples every route to client state (`showMain`) and animation timing.
- Header/footer are manually imported into nearly every page instead of a nested app layout, increasing duplication and route consistency risk.
- Email delivery, Google Form submission, validation, and HTML templates are repeated across multiple API routes.
- `ReportExport()` couples the comprehensive calculator to `jspdf`, a high-risk dependency from `npm audit`.

Architectural strengths:

- Clear route inventory in App Router.
- Static content is mostly centralized in `src/data`.
- No import cycles detected.
- Dedicated page-level metadata exists for many important SEO pages.
- Separation of many visual sections into reusable components.

Recommended architectural improvements:

- Move document shell and global metadata to server `layout.js`; make only interactive widgets client components.
- Create shared API utilities for validation, HTML escaping, rate limiting, email transport, and safe error responses.
- Consolidate repeated page chrome with app layouts instead of importing `Topbar`, `Navbar`, and `Footer` everywhere.
- Review and remove old duplicate components/routes after confirming no traffic or references.
- Isolate PDF export behind dynamic client-only imports and consider replacing vulnerable export dependencies.

## 3. Issue Register

| ID | Category | File or route | Description | Evidence | Impact | Severity | Recommended fix | Effort | Safe to automate |
|---|---|---|---|---|---|---|---|---|---|
| AUD-001 | Build/release | Repository | Production build did not complete within 5 minutes. | `npm run build` timed out twice. | Cannot confidently deploy or validate release. | Critical | Diagnose build hang; reduce root client shell; run build with clean output. | Medium | Partly |
| AUD-002 | Tooling | `package.json` | Lint command is interactive and not CI-safe. | `next lint` prompts to configure ESLint. | Regressions can ship unnoticed. | High | Add ESLint config/script compatible with Next 15. | Low | Yes |
| AUD-003 | Security | `package-lock.json` | Initially 21 dependency advisories; resolved with safe audit fixes, controlled upgrades, and a scoped PostCSS override for Next. | `npm audit --audit-level=moderate` now reports 0 vulnerabilities. | Known dependency vulnerability exposure reduced. | Fixed | Keep dependency audit in CI. | Done | Yes |
| AUD-004 | Architecture/performance | `src/app/ClientLayout.js` | Root HTML/body rendered in `"use client"` component and gates all content behind `LogoIntro` state. | `ClientLayout` returns `<html>` and `showMain && children`. | Delays content, increases hydration, risks SEO/crawl rendering and blank initial content. | High | Move `<html>/<body>` to server layout; keep intro as non-blocking client overlay. | Medium | Partly |
| AUD-005 | SEO | `public/robots.txt` | Blocks `/_next/` assets. | `Disallow: /_next/`. | Crawlers may not render pages correctly. | High | Allow Next static assets; only block API/error/private paths. | Low | Yes |
| AUD-006 | Security/forms | API form routes | User input interpolated directly into HTML emails. | `${name}`, `${message}`, `${firstName}`, etc. in email HTML. | Stored/reflected HTML injection in admin/user emails. | High | Escape HTML and validate/sanitize inputs server-side. | Low | Yes |
| AUD-007 | Security/forms | API form routes | No rate limiting or spam protection. | No IP throttling/CAPTCHA/honeypot checks. | Spam, email abuse, quota exhaustion. | High | Add lightweight server-side rate limit/honeypot; consider CAPTCHA. | Medium | Partly |
| AUD-008 | Security/API | API routes | Missing payload size and content-type guards. | Routes trust `req.body`. | Abuse and unexpected input handling. | Medium | Add shared method/content-type/body validation. | Low | Yes |
| AUD-009 | Security | `next.config.mjs` | No security headers configured. | Empty config. | Missing clickjacking/referrer/permissions hardening. | Medium | Add headers for frame, content type, referrer, permissions. | Low | Yes |
| AUD-010 | Privacy | Analytics | GA and Vercel Analytics both run globally; no consent assessment. | `ClientLayout.js`. | Privacy/compliance risk depending jurisdictions. | Medium | Confirm cookie/consent requirements and tracking purpose. | Manual | No |
| AUD-011 | SEO | Metadata | Root canonical hardcoded to homepage in `ClientLayout` head. | `<link rel="canonical" href="https://www.ideas2invest.com" />`. | Duplicate/conflicting canonicals on non-home pages. | High | Remove hardcoded global canonical; use Metadata API per route. | Low | Yes |
| AUD-012 | SEO/metadata | `src/components/SEO/SEO.js` | Uses `next/head`, which is not App Router best practice. | `import Head from "next/head"`. | Metadata inconsistency if used. | Medium | Remove if unused or replace with Metadata API. | Low | Yes |
| AUD-013 | Accessibility | `src/components/Navbar/Navbar.jsx` | Mobile menu buttons lack explicit accessible names/ARIA expanded states. | Toggle buttons render icons only. | Screen-reader users lack context. | Medium | Add `aria-label`, `aria-expanded`, `aria-controls`. | Low | Yes |
| AUD-014 | Accessibility | Global layout | No skip-to-content link found. | Root layout and pages omit skip link. | Keyboard users must tab through repeated nav. | Medium | Add skip link and target main content. | Low | Yes |
| AUD-015 | Accessibility/forms | Contact/newsletter/app forms | Status messages are not consistently announced. | Plain `<p>` status output. | Screen-reader users may miss errors/success. | Medium | Add `aria-live`, labels, disabled states. | Low | Yes |
| AUD-016 | Performance/images | Components | Many raw `<img>` tags for public assets. | `rg "<img|<Image"` shows broad mixed usage. | Missed optimization, sizing, CLS risk. | Medium | Convert important above-fold/large images to `next/image`; add dimensions/sizes. | Medium | Partly |
| AUD-017 | Performance | `ClientLayout.js` | All pages wait for logo intro before main content renders. | `!showMain` then `showMain && children`. | LCP/FCP and crawlability risk. | High | Render content immediately and overlay intro decoratively. | Low/Medium | Yes |
| AUD-018 | Code quality | Multiple files | Large commented-out production code remains. | API/component files contain old implementations. | Noise, maintenance risk, false audit findings. | Low | Remove after verification. | Medium | Partly |
| AUD-019 | Code quality | Header/footer | `Topbar`, `Navbar`, `Footer` duplicated in nearly every page. | Route grep shows repeated imports. | Inconsistent page chrome and refactor cost. | Medium | Introduce route/layout composition. | Medium | No |
| AUD-020 | Forms | `Footer.jsx`, `DownloadAppSection.jsx` | Validation early returns can leave loading true. | `setLoading(true)` then return before `finally`. | User may see stuck loading/disabled state. | Medium | Validate before setting loading or reset before return. | Low | Yes |
| AUD-021 | API/privacy | `ai-chat.js`, `financial-news.js`, `TickerStrip.jsx` | Production console logging of external responses/errors. | `console.log` in API/client paths. | Potential PII/log noise/performance. | Medium | Remove or guard logs. | Low | Yes |
| AUD-022 | AI/financial compliance | `ai-chat.js` | AI assistant may provide fund suggestions from static top-return sorting. | Suggestion logic sorts by 3Y returns. | Regulated financial advice/compliance risk. | High | Add disclaimers, avoid personalized recommendations without suitability checks, legal review. | Medium | No |
| AUD-023 | API reliability | `financial-news.js` | External RSS/API fetches lack timeout and response validation. | Plain `fetch`/`parseURL`. | Slow or hanging requests; poor UX. | Medium | Add timeout, cache headers, graceful fallback. | Medium | Partly |
| AUD-024 | SEO | Sitemap strategy | Both generated public sitemap and `/sitemap` page exist; no App Router `sitemap.js`. | `next-sitemap.config.js`, `public/sitemap.xml`, `src/app/sitemap/page.js`. | Drift risk. | Medium | Prefer generated sitemap or App Router metadata route, not both unmanaged. | Medium | Partly |
| AUD-025 | Testing | Repository | No tests found. | No test scripts/config. | Critical journeys unprotected. | High | Add practical tests for forms, metadata, APIs, navigation. | Medium | Partly |
| AUD-026 | Browser compatibility | Components/CSS | Swiper, sticky/floating widgets, raw SVG waves need mobile/Safari QA. | Multiple carousel/floating components. | Layout or interaction issues on iOS/Safari. | Medium | Browser QA with Playwright and real devices. | Manual/Medium | Partly |
| AUD-027 | Deployment | `.env.local` | Local env keys exist; values not printed. | Key names include email/Groq/NewsData. | Vercel env parity must be confirmed. | Medium | Verify all required env vars in Vercel; do not commit secrets. | Manual | No |
| AUD-028 | SEO/content | Financial claims | Many pages contain financial-service claims. | Service/CTA/blog content. | Requires compliance/legal approval. | High | Legal review before launch. | Manual | No |

## 4. Priority Plan

P0: Build failures, security vulnerabilities, broken functionality

- AUD-001: Diagnose and fix production build hang.
- AUD-003: Address dependency vulnerabilities and validate compatibility.
- AUD-006: Escape user input in email templates.
- AUD-020: Fix stuck loading states in forms.

P1: Major performance, SEO, accessibility, conversion

- AUD-004/AUD-017: Refactor root client shell so content is not blocked by intro state.
- AUD-005/AUD-011: Fix robots and global canonical.
- AUD-007/AUD-008/AUD-009: Add API abuse controls, payload guards, and security headers.
- AUD-013/AUD-014/AUD-015: Improve keyboard/screen-reader support.
- AUD-022: Reduce compliance risk in AI assistant.

P2: Code quality, UX and maintainability

- AUD-002: Add CI-safe linting.
- AUD-018/AUD-019: Remove dead/commented code and consolidate page chrome.
- AUD-016: Improve image optimization.
- AUD-021/AUD-023: Remove noisy logs and harden external fetches.

P3: Optional enhancements

- AUD-024: Rationalize sitemap implementation.
- AUD-025: Add broader tests and E2E coverage.
- AUD-026: Cross-browser/device QA.
- AUD-010: Consent and analytics policy review.

## 5. Quick Wins

- Fix `robots.txt` so `/_next/` assets are crawlable.
- Remove hardcoded global canonical from the client layout.
- Render page content immediately instead of waiting for the logo intro state.
- Add `aria-label`/`aria-expanded` to nav menu controls.
- Fix early-return loading bugs in newsletter/app forms.
- Escape user-submitted values in email HTML.
- Remove production `console.log` calls from API and ticker/news paths.
- Add basic security headers in `next.config.mjs`.
- Add a non-interactive lint config/script.

## 6. Manual Checks Required

- Real Vercel production build logs and deployment status.
- Google Search Console ownership, sitemap submission, indexing, and crawl errors.
- Bing Webmaster Tools configuration.
- Real Lighthouse/Core Web Vitals field data.
- Production analytics and conversion event validity.
- Form delivery to Gmail, Google Forms/Sheets, and admin inboxes.
- DNS, HTTPS, `www`/non-`www`, and redirect canonicalization.
- Legal/compliance approval for financial claims, AI suggestions, testimonials, and disclosures.
- Cookie/consent requirements for GA/Vercel Analytics.
- Production API quotas for Groq, NewsData.io, Google Forms, Gmail/Nodemailer.
- Mobile-device testing on iOS Safari and Android Chrome.

## 7. Changes Implemented

Implemented in the first controlled remediation phase:

- Restored a server-first App Router root shell in `src/app/layout.js`.
- Moved font loading, global metadata, verification metadata, icons, and Organization/FinancialService JSON-LD into the server layout.
- Simplified `src/app/ClientLayout.js` so it no longer renders `<html>`, `<head>`, or `<body>`.
- Changed the logo intro from a content gate into a non-blocking overlay, then removed the global full-screen intro from `ClientLayout` after browser testing showed it could still visually cover the page during hydration.
- Added a keyboard skip link and `#main-content` target.
- Added security headers in `next.config.mjs`: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy`.
- Fixed generated robots configuration so `/_next/` assets are crawlable while `/api/`, `/404`, and `/500` are disallowed.
- Added ESLint 9 and `eslint-config-next`, plus `eslint.config.mjs`, and changed `npm run lint` to a non-interactive command.
- Added `src/utils/security.js` with shared text normalization and HTML escaping helpers.
- Escaped user-submitted values before inserting them into outbound email HTML in contact, home-contact, subscribe, app-link, and review-email APIs.
- Added missing review-email server-side validation.
- Fixed newsletter and app-link forms so validation failures no longer leave loading state active.
- Added `role="alert"` / `aria-live` to key form status messages.
- Added accessible names and expanded states to mobile navigation/menu controls.
- Removed noisy production `console.log` calls from AI/news/ticker flows.
- Replaced `start` flex alignment values with `flex-start` to remove autoprefixer compatibility warnings.
- Ran safe `npm audit fix` without `--force`, then completed controlled upgrades for the remaining vulnerable packages.
- Upgraded `next` and `eslint-config-next` to `15.5.20`.
- Upgraded `nodemailer` to `9.0.3`.
- Upgraded `swiper` to `14.0.6`.
- Upgraded `jspdf` to `4.2.1` and `html2pdf.js` to `0.14.0`.
- Added a targeted npm override so Next uses patched `postcss@8.5.21`.
- Added patched `sharp@0.35.3` and override to resolve the 2026 libvips advisory surfaced through Next image optimization without downgrading Next.
- Fixed clickability/navigation issues: removed the blocking global intro overlay, repaired the AI assistant's invalid nested anchor/button CTA, normalized external CTA `target`/`rel`, fixed NRI service card slugs, fixed the social ELSS route, replaced placeholder social `#` links, converted internal blog links back to Next `Link`, and eliminated the home hero's `/undefined` background request.
- Updated Graphify code graph after meaningful code changes.

## 8. Validation Results

- `graphify . --mode deep`: failed because no LLM API key was configured for semantic extraction of docs/images/PDFs.
- `graphify . --mode deep --code-only`: succeeded; generated initial code graph.
- `graphify cluster-only .`: succeeded; generated `GRAPH_REPORT.md`, `graph.json`, `graph.html`.
- `graphify . --update`: failed for the same missing semantic-extraction key reason.
- `graphify . --update --code-only; graphify cluster-only .`: succeeded; latest graph has 639 nodes, 531 edges, 199 communities.
- `npm ci`: succeeded.
- `npm run lint`: now succeeds.
- `Remove-Item Env:ELECTRON_RUN_AS_NODE -ErrorAction SilentlyContinue; npm run build`: succeeds; production build and `next-sitemap` complete.
- `npx next-sitemap`: succeeds; regenerated `public/sitemap.xml`, `public/sitemap-0.xml`, and `public/robots.txt`.
- `npm audit fix`: completed safe non-forcing updates.
- `npm audit --audit-level=moderate`: succeeds; 0 vulnerabilities found.
- Browser click smoke test with Chromium at 1280x900: no `LogoIntro` overlay present; the top element at the desktop `Blogs` link is the anchor; click navigates to `http://localhost:3001/blogs`.
- Browser click smoke test with Chromium at 390x844: mobile menu opens and `Blogs` click navigates to `http://localhost:3001/blogs`.
- Browser network smoke test on `/`: no 4xx/5xx resource responses after removing the `url(undefined)` hero background.
- Tests: no test script/config found.

Build note: inside this Codex shell, `ELECTRON_RUN_AS_NODE=1` caused `next build` to hang silently. Removing that session variable allowed the same build to complete. This appears to be a local tool-shell environment issue, not an application build failure, but Vercel should still be checked.

## 9. Remaining Recommendations

1. Add rate limiting/spam protection to public lead APIs.
2. Add browser QA and accessibility checks with Playwright or equivalent tooling.
3. Add practical tests for forms, API validation, metadata, and critical navigation.
4. Consider consolidating repeated `Topbar`/`Navbar`/`Footer` imports into App Router layouts.
5. Review AI assistant behavior with compliance/legal stakeholders before production promotion.

## 10. Deployment Checklist

- `npm ci` succeeds.
- `npm run lint` is non-interactive and succeeds.
- `npm run build` completes successfully.
- `npm audit --audit-level=moderate` passes.
- Required Vercel env vars are configured.
- Sitemap and robots are reachable.
- Metadata/canonicals are correct on major routes.
- Lead forms submit successfully and duplicate submissions are controlled.
- API errors do not leak sensitive detail.
- Security headers are present.
- Main pages pass mobile smoke tests.
- Legal/compliance approvals are complete.
