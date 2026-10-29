# Temporary public-site controls for AMFI review

These changes reduce identified public-content risks. They are not a certification of AMFI, SEBI, advertising, tax, insurance or other regulatory compliance. A qualified compliance reviewer should approve the public site and the underlying business practices before due diligence.

## Reversible visibility controls

`src/config/siteFeatures.cjs` is the single control point. All three features are currently paused:

- `financialRiskMeter`: public links are filtered out of the header, footer and HTML sitemap. The optional homepage calculator component uses Goal SIP instead if mounted (that component was already commented out). Two blog buttons lead to the calculators directory. Direct Risk Meter visits temporarily redirect to `/calculators`; the page has a second render guard, noindex metadata, and is excluded from generated XML sitemaps. The implementation, original link records and assets remain available. Redirect responses do not carry a noindex header; the rendered page safeguard and sitemap exclusion are separate controls.
- `externalReviews`: the homepage review section and external review script are paused. Original customer statements are preserved, not rewritten. Future third-party content needs review before re-enabling.
- `aiAssistant`: the global assistant is paused and both current and legacy chat APIs return a temporary-unavailability response before making an external model request. The existing fund-suggestion implementation is preserved for separate suitability, claims and compliance review.

To restore a feature after approval, set its flag to `true`, rebuild and deploy. Restoring the Risk Meter flag automatically restores its original links, page and sitemap eligibility. No source files need to be recovered or rewritten. Pausing the assistant or review widget is independent of the Risk Meter.

## Wording changes

Public first-party copy uses information, distribution support or guidance where it previously presented Ideas2Invest as providing advice. Own-service advisor labels and the broken Wealth Advisory button were changed. Disclaimers still distinguish general information from personalised professional recommendations. Selected claims about guaranteed capital, impossible losses, regulatory protection, blanket direct-plan recommendations and a tax grandfathering assertion were corrected or qualified.

Original unpublished customer quotes and commented historical code remain in source. Image filenames containing `advice` are retained to avoid breaking assets; they are not public service claims. The formal third-party product category **Advisory PMS** remains accurately named and its description attributes the service to the relevant registered portfolio manager. This is not an Ideas2Invest service designation.

## Review required before sign-off

- Verify ARN validity, permitted activities, current disclosures, distributor identity/tagline presentation, commissions, conflicts and product-specific advertising requirements against actual registrations and agreements.
- Review every product page, article, illustration, historical statistic, return ranking and calculator assumption for current accuracy, sourcing, risk disclosures and suitability. This wording pass is not a complete legal or financial fact-check of all historical content.
- Verify PMS/AIF/SIF, insurance, loans, deposits, GIFT City and NRI/tax descriptions against the business's actual authorised role; terminology changes do not authorise a regulated activity.
- Review poster images, embedded media, linked downloads and third-party destinations separately; changing text in this repository does not change text baked into images or content hosted elsewhere.
- Review the updated disclaimer and terms with a qualified professional. Recommendations can remain regulated even when called suggestions.
- Deploy the reviewed build and verify the live domain. Search-engine caches, previously downloaded pages and old screenshots cannot be removed by a site rebuild. Temporary redirects and sitemap exclusion do not guarantee immediate search removal.

Primary reference documents consulted:

- [AMFI guidance on MFD nomenclature](https://www.amfiindia.com/Themes/Theme1/downloads/AMFI_GUIDANCE_ON_MFD_NOMENCLATURE.pdf)
- [AMFI revised code of conduct for mutual fund distributors](https://www.amfiindia.com/Themes/Theme1/downloads/RevisedCodeofConductforMutualFundDistributors-April2022.pdf)
- [SEBI investment adviser FAQs](https://www.sebi.gov.in/sebi_data/faqfiles/sep-2024/1727418139473.pdf)

## Validation completed

- Production build completed, including Next.js lint/type validation and XML sitemap generation.
- Changed JavaScript/JSX files passed targeted ESLint checks with no warnings or errors.
- `npm run test:visibility` passed, including an isolated simulation of restoring the Risk Meter flag. Existing `npm run test:lead` also passed.
- HTTP checks covered 84 public pages: no Risk Meter links and no visible standalone `advice` word. This is a text/link check, not a regulatory certification or OCR of imagery.
- Four direct Risk Meter URL variants returned temporary redirects to `/calculators`. Both chat API endpoints returned the expected unavailable response with no fund suggestions.
- Chrome checks passed at 1440px, 768px and 390px, including the expanded mobile calculator menu: no Risk Meter entry, AI assistant, external review script, horizontal overflow or uncaught runtime exceptions.
- Repository code graph updated. Original implementation and archived quotations preserved.

The build was verified in an isolated copy outside OneDrive to avoid filesystem build-cache issues. No production deployment is included in this change.
