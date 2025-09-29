const comparisonData = {
  dollarInvestment: {
    title: "Dollar Investment via GIFT City vs Traditional Foreign Investment in India",
    leftTitle: "Dollar Investment (via GIFT City)",
    rightTitle: "Traditional Investment Routes",
    rows: [
      {
        id: 1,
        label: "Market Access",
        left: "Direct access to Indian equities, mutual funds, bonds, and AIFs through IFSC in USD.",
        right: "Complex approvals and registrations required to access Indian markets.",
      },
      {
        id: 2,
        label: "Currency Efficiency",
        left: "Invest seamlessly in Indian assets using USD without repeated currency conversions.",
        right: "Requires conversion into INR, exposing investors to forex risk and conversion costs.",
      },
      {
        id: 3,
        label: "Diversification",
        left: "Wide choice of equities, debt, REITs, and alternatives within India’s growing economy.",
        right: "Limited product availability; not all asset classes are easily accessible.",
      },
      {
        id: 4,
        label: "Taxation",
        left: "Tax-efficient regime with concessions under GIFT City regulations.",
        right: "Subject to standard Indian taxation, often with less favorable treatment.",
      },
      {
        id: 5,
        label: "Ease of Investment",
        left: "No prior Indian connection needed; simplified compliance under IFSC framework.",
        right: "High entry barriers, paperwork, and regulatory hurdles for foreign nationals.",
      },
    ],
  },
  nriServices: {
    title: "NRI Services vs Traditional NRI Investment Approaches",
    leftTitle: "Ideas2Invest NRI Services",
    rightTitle: "Traditional NRI Investment Methods",
    rows: [
      {
        id: 1,
        label: "Market Access",
        left: "Comprehensive access to Indian equities, mutual funds, bonds, AIFs, and GIFT City opportunities through expert guidance.",
        right: "Limited access; investors often need multiple approvals and intermediaries to enter Indian markets.",
      },
      {
        id: 2,
        label: "Tax Efficiency",
        left: "Optimized taxation using DTAA benefits, GIFT City frameworks, and professional NRI taxation advisory.",
        right: "Standard Indian tax rules apply; higher risk of double taxation and missed exemptions.",
      },
      {
        id: 3,
        label: "Investment Guidance",
        left: "Personalized advisory for portfolio selection, risk management, and cross-border compliance.",
        right: "Minimal or generic guidance; investors rely on local contacts or self-managed strategies.",
      },
      {
        id: 4,
        label: "Ease of Compliance",
        left: "Streamlined processes, regulatory support, and repatriation guidance under FEMA regulations.",
        right: "High paperwork, complex compliance, and manual repatriation procedures.",
      },
      {
        id: 5,
        label: "Diversification",
        left: "Wide choice across asset classes—equities, debt, AIFs, REITs, and fixed-income products tailored for NRIs.",
        right: "Limited investment options and exposure to only a few asset classes due to regulatory and logistical constraints.",
      },
    ],
  },
  mutualFunds: {
    title: "Mutual Funds vs Direct Stock Investment",
    leftTitle: "Mutual Funds",
    rightTitle: "Direct Stocks",
    rows: [
      {
        id: 1,
        label: "Management",
        left: "Managed by professional fund managers with expertise.",
        right: "Requires individual research and self-management.",
      },
      {
        id: 2,
        label: "Diversification",
        left: "Built-in diversification across multiple securities.",
        right: "Limited to the specific stocks you choose.",
      },
      {
        id: 3,
        label: "Accessibility",
        left: "Can start with small SIP amounts, easy for beginners.",
        right: "Higher capital needed for meaningful diversification.",
      },
      {
        id: 4,
        label: "Risk",
        left: "Risk is distributed, lower volatility.",
        right: "High volatility depending on chosen stocks.",
      },
      {
        id: 5,
        label: "Monitoring",
        left: "Fund manager monitors and rebalances portfolio.",
        right: "You need to actively track and rebalance yourself.",
      },
    ],
  },

  lifeInsurance: {
    title: "Term Insurance vs Traditional Life Insurance",
    leftTitle: "Term Insurance",
    rightTitle: "Traditional Plans",
    rows: [
      {
        id: 1,
        label: "Premium",
        left: "Very affordable; pure protection plan.",
        right: "Higher premium as it includes investment + insurance.",
      },
      {
        id: 2,
        label: "Maturity Benefit",
        left: "No maturity benefit; only death benefit.",
        right: "Maturity/survival benefit in addition to death benefit.",
      },
      {
        id: 3,
        label: "Coverage",
        left: "High coverage amount (up to several crores).",
        right: "Lower coverage compared to term insurance.",
      },
      {
        id: 4,
        label: "Best For",
        left: "Those who want pure risk cover & affordability.",
        right: "Those who want savings + protection in one plan.",
      },
    ],
  },

  healthInsurance: {
    title: "Individual Health Insurance vs Family Floater Health Insurance",
    leftTitle: "Individual Plan",
    rightTitle: "Family Floater Plan",
    rows: [
      {
        id: 1,
        label: "Coverage",
        left: "Each member gets a separate sum insured.",
        right: "Entire family shares a single sum insured.",
      },
      {
        id: 2,
        label: "Premium",
        left: "Premium depends on the individual’s age and health condition.",
        right: "Generally more affordable as one premium covers all members.",
      },
      {
        id: 3,
        label: "Best For",
        left: "Ideal for individuals or elderly persons with higher health risks.",
        right: "Best suited for young families with multiple members.",
      },
      {
        id: 4,
        label: "Renewal",
        left: "Premium increases individually with age.",
        right: "Premium is based on the eldest member of the family.",
      },
      {
        id: 5,
        label: "Flexibility",
        left: "Coverage amount remains unaffected by other family members’ claims.",
        right: "If one family member makes a large claim, coverage reduces for others.",
      },
    ],
  },

  healthInsuranceTopUp: {
    title: "Top-up Plans vs Regular Health Insurance",
    leftTitle: "Regular Health Insurance",
    rightTitle: "Top-up Health Insurance",
    rows: [
      {
        id: 1,
        label: "Coverage",
        left: "Covers hospitalization expenses up to the sum insured from day one.",
        right: "Provides additional coverage beyond a certain deductible limit.",
      },
      {
        id: 2,
        label: "Premium",
        left: "Higher premium as it covers expenses without threshold conditions.",
        right: "Lower premium since it only activates after deductible is crossed.",
      },
      {
        id: 3,
        label: "Best For",
        left: "Individuals and families who want comprehensive protection.",
        right: "People who already have base health insurance but want higher coverage at low cost.",
      },
      {
        id: 4,
        label: "Claim Process",
        left: "Direct claim without any deductible requirement.",
        right: "Claim only applicable after base deductible is met.",
      },
      {
        id: 5,
        label: "Use Case",
        left: "Good for covering routine and medium medical expenses.",
        right: "Best for covering large, unexpected hospital bills.",
      },
    ],
  },

  generalInsurance: {
    title: "Comprehensive vs Third-Party Car Insurance",
    leftTitle: "Comprehensive Car Insurance",
    rightTitle: "Third-Party Car Insurance",
    rows: [
      {
        id: 1,
        label: "Coverage",
        left: "Covers both third-party liabilities and own vehicle damage due to accidents, theft, fire, or natural calamities.",
        right: "Covers only third-party liabilities; no protection for your own vehicle.",
      },
      {
        id: 2,
        label: "Premium",
        left: "Higher premium due to wider coverage and additional features.",
        right: "Lowest premium since coverage is minimal and mandated by law.",
      },
      {
        id: 3,
        label: "Add-ons",
        left: "Allows add-ons like zero depreciation, roadside assistance, engine cover, etc.",
        right: "No add-ons available; only covers legal liabilities.",
      },
      {
        id: 4,
        label: "Financial Protection",
        left: "Provides complete financial protection against accidents and disasters.",
        right: "Limited financial support; you must bear own vehicle repair costs.",
      },
      {
        id: 5,
        label: "Best For",
        left: "Car owners who want maximum coverage and peace of mind.",
        right: "Those looking for only basic, legally required coverage at minimum cost.",
      },
    ],
  },

  pms: {
    title: "Portfolio Management Services (PMS) vs Direct Stock Investing",
    leftTitle: "Portfolio Management Services (PMS)",
    rightTitle: "Direct Stock Investing",
    rows: [
      {
        id: 1,
        label: "Expertise",
        left: "Managed by professional portfolio managers with in-depth research and active monitoring.",
        right: "Investor makes buy/sell decisions independently, requiring market knowledge and time.",
      },
      {
        id: 2,
        label: "Personalization",
        left: "Customized portfolios based on individual risk appetite, financial goals, and investment horizon.",
        right: "One-size-fits-all approach; personalization depends solely on the investor’s decisions.",
      },
      {
        id: 3,
        label: "Diversification",
        left: "Strategically diversified across sectors and asset classes to reduce risk.",
        right: "Diversification often limited, as individual investors may focus on select stocks.",
      },
      {
        id: 4,
        label: "Monitoring",
        left: "Continuous monitoring and rebalancing by dedicated professionals.",
        right: "Investors must actively track and rebalance portfolios on their own.",
      },
      {
        id: 5,
        label: "Reporting & Transparency",
        left: "Regular, detailed reports with performance tracking, compliance, and tax efficiency.",
        right: "Investors track performance themselves, with limited professional reporting.",
      },
      {
        id: 6,
        label: "Minimum Investment",
        left: "SEBI-regulated PMS requires a minimum investment of ₹50 lakhs.",
        right: "No minimum; investors can start with any amount when buying stocks directly.",
      },
    ],
  },

  aif: {
    title: "AIFs via GIFT City vs Traditional AIF Investments in India",
    leftTitle: "AIFs through GIFT City (IFSC Route)",
    rightTitle: "Traditional Domestic AIF Investments",
    rows: [
      {
        id: 1,
        label: "Investor Eligibility",
        left: "Accessible to foreign investors, NRIs, and domestic HNIs through globally compliant IFSC framework.",
        right: "Primarily restricted to resident Indian investors and NRIs with limited international access.",
      },
      {
        id: 2,
        label: "Currency & Settlement",
        left: "Investments and returns managed in foreign currency (USD), reducing forex volatility and conversion costs.",
        right: "Requires INR funding; investors face currency risk and higher transaction costs.",
      },
      {
        id: 3,
        label: "Regulatory Framework",
        left: "Regulated by IFSCA under GIFT City with globally benchmarked norms, tax incentives, and simplified compliance.",
        right: "Regulated by SEBI; while robust, it involves more complex compliance and limited global investor participation.",
      },
      {
        id: 4,
        label: "Investment Opportunities",
        left: "Access to a wider range of cross-border funds, private equity, venture capital, real estate, and infrastructure opportunities.",
        right: "Focused on domestic opportunities; limited exposure to global AIF strategies.",
      },
      {
        id: 5,
        label: "Taxation Benefits",
        left: "Preferential tax regime under IFSC, exemptions on certain capital gains, and pass-through status for specific categories.",
        right: "Standard domestic taxation applies; tax efficiency may be lower compared to IFSC route.",
      },
      {
        id: 6,
        label: "Ease of Participation",
        left: "Streamlined onboarding, lower entry barriers for foreign investors, and simplified fund structuring.",
        right: "Higher entry thresholds, more paperwork, and time-consuming compliance requirements.",
      },
    ],
  },

  corporateFD: {
    title: "Corporate Fixed Deposits vs Bank Fixed Deposits",
    leftTitle: "Corporate Fixed Deposits (Corporate FD)",
    rightTitle: "Bank Fixed Deposits (Bank FD)",
    rows: [
      {
        id: 1,
        label: "Rate of Interest",
        left: "Higher interest rates compared to traditional bank FDs, offering better returns for the same tenure.",
        right: "Relatively lower interest rates, often regulated by RBI and linked to bank policies.",
      },
      {
        id: 2,
        label: "Issuer",
        left: "Issued by corporates, NBFCs, or housing finance companies to raise capital.",
        right: "Issued by commercial banks including public, private, and cooperative banks.",
      },
      {
        id: 3,
        label: "Risk & Safety",
        left: "Carries higher credit risk compared to banks; safety depends on issuer’s credit rating (AAA, AA, etc.).",
        right: "Considered safer, especially deposits with government or large private banks, backed by RBI-regulated framework.",
      },
      {
        id: 4,
        label: "Liquidity",
        left: "Premature withdrawals may involve penalties and depend on issuer policies.",
        right: "Relatively easier liquidity; banks usually allow partial withdrawals or loans against deposits.",
      },
      {
        id: 5,
        label: "Insurance Cover",
        left: "Not covered by deposit insurance (DICGC); entirely dependent on company’s financial health.",
        right: "Covered under DICGC insurance up to ₹5 lakh per depositor across all accounts in one bank.",
      },
      {
        id: 6,
        label: "Tenure Flexibility",
        left: "Varies by issuer, usually ranging from 1 year to 5 years with multiple payout options (monthly, quarterly, annually).",
        right: "Tenure flexibility available, but options are standard and limited compared to corporate FDs.",
      },
      {
        id: 7,
        label: "Tax Treatment",
        left: "Interest income is fully taxable as per the investor’s income tax slab, TDS applicable if threshold crossed.",
        right: "Same tax treatment as corporate FDs, with TDS deduction if interest exceeds prescribed limit.",
      },
    ],
  },

  nriInvestment: {
    title: "Dollar Investment via GIFT City vs Traditional Foreign Investment in India",
    leftTitle: "Dollar Investment (via GIFT City)",
    rightTitle: "Traditional Investment Routes",
    rows: [
      {
        id: 1,
        label: "Market Access",
        left: "Seamless entry into Indian markets via IFSC platforms, offering equities, mutual funds, bonds, REITs, and AIFs in USD.",
        right: "Lengthy approvals and restricted access; often limited to specific instruments like FDI or portfolio investments.",
      },
      {
        id: 2,
        label: "Currency Efficiency",
        left: "Direct USD investments with no need for INR conversion, reducing forex exposure and transaction costs.",
        right: "Mandatory INR conversion leads to multiple forex risks, higher charges, and reduced net returns.",
      },
      {
        id: 3,
        label: "Diversification",
        left: "Broader asset class coverage—equities, debt, ETFs, REITs, and alternatives—under one unified framework.",
        right: "Narrower access; certain instruments like AIFs or REITs are harder to invest in through traditional routes.",
      },
      {
        id: 4,
        label: "Taxation",
        left: "Preferential tax regime with exemptions and concessions under GIFT City’s globally aligned framework.",
        right: "Standard Indian taxation applies, with potential double taxation unless DTAA treaties are applicable.",
      },
      {
        id: 5,
        label: "Ease of Investment",
        left: "Low entry barriers—no need for prior Indian residency or business connection; simplified compliance with global standards.",
        right: "High entry barriers, heavy documentation, and stricter regulatory procedures make access cumbersome.",
      },
      {
        id: 6,
        label: "Regulatory Environment",
        left: "Globally benchmarked, transparent, and investor-friendly IFSC regulations tailored for NRIs and foreign nationals.",
        right: "Traditional routes are often fragmented across multiple Indian regulators, causing delays and complexity.",
      },
    ],
  },

  nriTaxation: {
    title: "NRI Taxation vs Resident Indian Taxation",
    leftTitle: "NRI Taxation",
    rightTitle: "Resident Indian Taxation",
    rows: [
      {
        id: 1,
        label: "Tax Residency Rules",
        left: "Tax liability determined by number of days spent in India (≤182 days generally treated as NRI).",
        right: "Tax liability on global income as long as resident in India.",
      },
      {
        id: 2,
        label: "Scope of Income Taxed",
        left: "Only income earned or accrued in India (salary, rent, investments, business) is taxable.",
        right: "Worldwide income is taxable, including foreign salary, assets, and capital gains.",
      },
      {
        id: 3,
        label: "TDS (Tax Deducted at Source)",
        left: "Higher TDS rates apply (e.g., on interest, dividends, property sales). Refunds possible after filing returns.",
        right: "Standard TDS rates apply; generally lower than NRI rates.",
      },
      {
        id: 4,
        label: "Capital Gains Tax",
        left: "Taxed at flat rates (e.g., 20% with indexation for long-term, as per asset class).",
        right: "Taxed as per income tax slab for short-term and concessional rates for long-term.",
      },
      {
        id: 5,
        label: "DTAA Benefits",
        left: "Eligible for relief under Double Taxation Avoidance Agreements (DTAAs) between India and other countries.",
        right: "DTAA relief not applicable, as residents already taxed on global income in India.",
      },
      {
        id: 6,
        label: "Filing Requirements",
        left: "ITR filing required if Indian income exceeds ₹2.5 lakh; specific disclosure rules for foreign assets not applicable.",
        right: "Mandatory disclosure of all foreign assets and income in ITR (Schedule FA).",
      },
    ],
  },

};

export default comparisonData;
