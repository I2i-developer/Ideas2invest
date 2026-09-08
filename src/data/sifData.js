export const sifQuickFacts = [
  {
    value: "₹10 lakh",
    label: "Aggregate threshold",
    description:
      "Measured at PAN level across all strategies offered by the same SIF. Regular mutual fund holdings do not count toward it.",
  },
  {
    value: "SEBI framework",
    label: "Regulated structure",
    description:
      "SIFs operate within the mutual fund regulatory framework and are offered only by eligible asset management companies.",
  },
  {
    value: "Long-short",
    label: "Permitted flexibility",
    description:
      "Certain strategies may use permitted derivative positions for limited long and short exposure.",
  },
  {
    value: "3 categories",
    label: "Strategy range",
    description:
      "The framework provides for equity-oriented, debt-oriented, and hybrid investment strategies.",
  },
  {
    value: "Professional",
    label: "Fund management",
    description:
      "The pooled portfolio is managed by an eligible AMC and its appointed investment team under a defined mandate.",
  },
  {
    value: "Higher complexity",
    label: "Investor suitability",
    description:
      "SIFs require a clear understanding of market, derivative, liquidity, and strategy-specific risks.",
  },
];

export const sifSpectrum = [
  {
    title: "Mutual Funds",
    description: "Broad pooled strategies, usually with lower entry amounts and conventional mandates.",
  },
  {
    title: "SIF",
    description: "Pooled specialised strategies with additional flexibility and a ₹10 lakh aggregate threshold.",
    featured: true,
  },
  {
    title: "PMS",
    description: "A separately managed client portfolio with a regulatory minimum of ₹50 lakh.",
  },
  {
    title: "AIF",
    description: "A privately pooled vehicle for alternative strategies, generally with a ₹1 crore minimum, subject to exceptions.",
  },
];

export const sifHowItWorks = [
  {
    title: "Choose a defined strategy",
    description: "Review the strategy objective, portfolio approach, benchmark, and eligible investor terms.",
  },
  {
    title: "Complete KYC and eligibility checks",
    description: "Meet applicable KYC, PAN-level threshold, and documentation requirements before investing.",
  },
  {
    title: "Invest with an eligible AMC",
    description: "Money is pooled in the selected SIF strategy and managed by the AMC's professional investment team.",
  },
  {
    title: "Strategy is actively managed",
    description: "The fund manager follows the disclosed mandate and may use permitted derivatives and short positions.",
  },
  {
    title: "Monitor disclosures and suitability",
    description: "Track the risk-band, portfolio disclosures, performance, and whether the strategy still suits your objectives.",
  },
];

export const sifStrategyGroups = [
  {
    title: "Equity-oriented strategies",
    description: "Strategies focused primarily on listed equity and equity-related instruments.",
    strategies: [
      {
        name: "Equity Long-Short Fund",
        detail: "An equity strategy that may combine long holdings with limited short exposure through derivatives.",
      },
      {
        name: "Equity Ex-Top 100 Long-Short Fund",
        detail: "Focuses on stocks outside the top 100 by market capitalisation and may use permitted short exposure.",
      },
      {
        name: "Sector Rotation Long-Short Fund",
        detail: "Allocates across a limited number of sectors and may take permitted long and short positions as views change.",
      },
    ],
  },
  {
    title: "Debt-oriented strategies",
    description: "Strategies investing in debt instruments across duration or selected sectors.",
    strategies: [
      {
        name: "Debt Long-Short Fund",
        detail: "Invests across debt instruments and may use limited short exposure through exchange-traded debt derivatives.",
      },
      {
        name: "Sectoral Debt Long-Short Fund",
        detail: "Builds debt exposure across selected sectors while allowing limited strategy-specific short positions.",
      },
    ],
  },
  {
    title: "Hybrid strategies",
    description: "Strategies combining multiple asset classes under a stated allocation framework.",
    strategies: [
      {
        name: "Active Asset Allocator Long-Short Fund",
        detail: "Dynamically allocates across permitted equity, debt, derivatives, InvITs, and commodity derivatives.",
      },
      {
        name: "Hybrid Long-Short Fund",
        detail: "Combines equity and debt exposure and may use permitted derivatives for limited short positions.",
      },
    ],
  },
];

export const sifComparisonRows = [
  ["Regulatory framework", "SEBI mutual fund framework", "SEBI mutual fund framework with SIF provisions", "SEBI Portfolio Managers Regulations", "SEBI AIF Regulations"],
  ["Structure", "Pooled scheme", "Pooled investment strategy", "Segregated client portfolio", "Privately pooled fund"],
  ["Minimum investment", "Scheme-specific; often accessible at lower amounts", "₹10 lakh aggregate across strategies of the same SIF at PAN level", "₹50 lakh", "Generally ₹1 crore, subject to regulatory exceptions"],
  ["Portfolio flexibility", "Conventional scheme mandate", "Greater strategy flexibility within prescribed limits", "Mandate-specific and potentially customised", "Category and fund-document specific"],
  ["Derivative use", "Permitted within mutual fund rules", "Permitted long-short use within strategy-specific limits", "As permitted by the client mandate and regulations", "Depends on AIF category and fund documents"],
  ["Portfolio ownership", "Units in a pooled scheme", "Units in a pooled SIF strategy", "Client owns securities in a segregated account", "Units or interest in a pooled fund"],
  ["Liquidity", "Depends on scheme type", "Varies by strategy and may include a notice period", "Depends on portfolio mandate and holdings", "Often limited and fund-specific"],
  ["Complexity", "Low to high, depending on scheme", "Higher than conventional mutual funds", "High", "High"],
  ["Typical fit", "A broad range of investors", "Experienced investors who meet the threshold and understand added risk", "Investors seeking a separately managed portfolio", "Investors able to assess alternative and often illiquid strategies"],
];

export const sifBenefits = [
  "Access to differentiated investment strategies within a regulated framework",
  "Greater flexibility in portfolio construction than conventional mutual fund schemes",
  "Permitted long-short capability for relevant strategies",
  "Professional management by eligible AMCs and investment teams",
  "Choice across equity-oriented, debt-oriented, and hybrid strategies",
  "Potential portfolio diversification beyond traditional long-only approaches",
];

export const sifRisks = [
  { title: "Market risk", description: "The value of investments can fall because of market movements and economic events." },
  { title: "Derivative risk", description: "Derivatives can amplify gains and losses and introduce basis, counterparty, and execution risk." },
  { title: "Short-position risk", description: "A short position can lose value when the underlying asset rises instead of falling." },
  { title: "Liquidity risk", description: "Redemption frequency and notice periods vary, and some holdings may be harder to exit." },
  { title: "Strategy risk", description: "A specialised approach may not work as expected in every market environment." },
  { title: "Concentration risk", description: "Some mandates may focus on a narrower set of sectors, issuers, or opportunities." },
  { title: "Debt-related risk", description: "Debt strategies may face credit, interest-rate, spread, and reinvestment risks." },
  { title: "Capital-loss risk", description: "SIFs do not assure returns, and investors may lose part or all of their invested capital." },
];

export const sifAudiences = [
  { title: "Experienced investors", description: "People already comfortable with market-linked products and changing portfolio values." },
  { title: "Affluent investors", description: "Investors who meet the threshold without compromising emergency funds or near-term goals." },
  { title: "Long-term investors", description: "Those able to remain invested through market cycles and strategy-specific volatility." },
  { title: "Diversification seekers", description: "Investors evaluating differentiated approaches beyond conventional long-only portfolios." },
  { title: "Higher risk-tolerance investors", description: "People who understand derivatives, liquidity constraints, and the possibility of capital loss." },
];

export const sifSupport = [
  { title: "Understand before you invest", description: "We help you understand SIF structures, terminology, strategy documents, and key risks." },
  { title: "Suitability discussion", description: "Review objectives, time horizon, liquidity needs, and risk tolerance before considering a strategy." },
  { title: "Research-led evaluation", description: "Compare available disclosures, portfolio approach, investment process, and fund-management framework." },
  { title: "Process assistance", description: "Receive help with documentation and the investment process where legally and operationally applicable." },
  { title: "Ongoing review", description: "Periodically reassess whether the chosen approach remains aligned with your financial objectives." },
];

export const sifInvestmentSteps = [
  { id: 1, title: "Define your objective", description: "Clarify the role SIF may play in your portfolio, your time horizon, and your liquidity needs.", icon: "/assets/images/icons/define-goal.svg" },
  { id: 2, title: "Assess risk and suitability", description: "Evaluate whether you can understand and tolerate the strategy's complexity and potential losses.", icon: "/assets/images/icons/risk.png" },
  { id: 3, title: "Evaluate available strategies", description: "Compare only strategies actually offered by eligible AMCs; not every AMC offers every category.", icon: "/assets/images/icons/discovery.png" },
  { id: 4, title: "Read the strategy documents", description: "Review the ISID, offer documents, risk-band, fees, portfolio limits, liquidity, and notice period.", icon: "/assets/images/icons/review.png" },
  { id: 5, title: "Complete KYC and documentation", description: "Meet PAN-level threshold, KYC, and any investor eligibility requirements that apply.", icon: "/assets/images/icons/kyc.png" },
  { id: 6, title: "Invest and monitor", description: "Proceed through an eligible channel and keep reviewing disclosures and continued suitability.", icon: "/assets/images/icons/implementation.png" },
];

export const sifFaqs = [
  { question: "What is a Specialized Investment Fund (SIF)?", answer: "A Specialized Investment Fund is a pooled, strategy-driven investment offered by an eligible AMC under SEBI's mutual fund regulatory framework. It allows more flexible investment approaches than conventional mutual fund schemes, including permitted long-short strategies." },
  { question: "Why did SEBI introduce SIF?", answer: "SEBI introduced the framework to widen the range of regulated investment solutions and bridge the space between conventional mutual funds and products such as Portfolio Management Services." },
  { question: "What is the minimum investment required for SIF?", answer: "The AMC must ensure an investor has at least ₹10 lakh in aggregate across all investment strategies offered by the same SIF at PAN level. Regular mutual fund holdings with that AMC are not included in this threshold." },
  { question: "Is SIF the same as a mutual fund?", answer: "No. SIF operates within the mutual fund regulatory framework, but it is a separate product category with a higher entry threshold, distinct branding, and specialised strategies that may use additional portfolio flexibility." },
  { question: "What is the difference between SIF and PMS?", answer: "SIF is a pooled structure in which investors hold units. PMS generally manages a segregated portfolio in the client's name and currently has a ₹50 lakh regulatory minimum. The investment approach, ownership, fees, and liquidity can also differ." },
  { question: "What is the difference between SIF and AIF?", answer: "SIF operates under the mutual fund framework and has a ₹10 lakh aggregate threshold. AIF is a privately pooled vehicle governed by separate AIF regulations and generally has a ₹1 crore minimum for investors, subject to specified exceptions." },
  { question: "Who can invest in SIF?", answer: "An investor must meet the applicable PAN-level investment threshold and the eligibility, KYC, and documentation conditions stated by the AMC and relevant strategy documents. Meeting the threshold alone does not make a strategy suitable." },
  { question: "Are SIFs risky?", answer: "Yes. SIFs are market-linked and can involve relatively higher complexity, derivatives, short positions, concentration, liquidity constraints, and possible capital loss. Risk differs by strategy." },
  { question: "Can SIFs take short positions?", answer: "Certain permitted SIF strategies may take limited unhedged short exposure through derivatives within SEBI's prescribed strategy-specific limits. This does not guarantee protection when markets fall." },
  { question: "What types of SIF strategies are available?", answer: "SEBI's framework permits equity long-short, equity ex-Top 100 long-short, sector rotation long-short, debt long-short, sectoral debt long-short, active asset allocator long-short, and hybrid long-short categories. Actual availability depends on AMC launches." },
  { question: "Are SIFs regulated by SEBI?", answer: "Yes. SIFs operate under SEBI's mutual fund regulatory framework and must follow specific rules on AMC eligibility, investment limits, disclosures, risk management, and investor thresholds." },
  { question: "Can NRIs invest in SIFs?", answer: "NRIs may be able to invest where the AMC and strategy permit it, subject to KYC, FEMA, country-specific, banking, tax, and other applicable conditions. Check the current ISID and AMC documents before applying." },
  { question: "How can Ideas2Invest help me evaluate SIF?", answer: "Ideas2Invest can help you understand the product, compare disclosed strategies, discuss suitability, and assist with the process where applicable. Distribution or transaction support is subject to all required certifications, registrations, and product availability." },
  { question: "Is SIF suitable for every investor?", answer: "No. SIF may be unsuitable for investors who do not understand complex strategies, cannot tolerate capital loss, need frequent liquidity, or would have to compromise essential financial goals to meet the threshold." },
  { question: "How are SIF investments taxed?", answer: "Tax treatment depends on the nature and classification of the relevant investment strategy and the tax law in force at the time. Review the strategy documents and consult a qualified tax professional for advice specific to your circumstances." },
];

export const sifRelatedServices = [
  { title: "Mutual Funds", href: "/mutual-funds", description: "Explore conventional pooled investment options for a broad range of goals." },
  { title: "Portfolio Management Services", href: "/services/portfolio-management", description: "Understand separately managed portfolios for eligible investors." },
  { title: "Alternative Investment Funds", href: "/services/alternative-investment-funds", description: "Learn about privately pooled alternative investment structures." },
];

