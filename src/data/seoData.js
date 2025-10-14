// data/seoData.js
const BASE_URL = "https://www.ideas2invest.com";

const seoData = {
  // Default fallback
  default: {
    title: "Ideas2Invest – Your Trusted Investment & Wealth Partner",
    description:
      "Explore smart investment options with Ideas2Invest. From mutual funds to insurance and portfolio management, we help you achieve financial freedom.",
    keywords:
      "investment, mutual funds, financial planning, wealth management, SIP, insurance, portfolio management",
    canonical: `${BASE_URL}`,
    openGraph: {
      title: "Ideas2Invest – Investment Made Easy",
      description:
        "Empowering you to invest smarter and achieve your financial goals with expert guidance and smart tools.",
      url: `${BASE_URL}`,
      type: "website",
      images: [`${BASE_URL}/assets/images/og-image.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ideas2Invest – Smart Investment Solutions",
      description:
        "Your trusted partner in mutual funds, insurance, and wealth management.",
      image: `${BASE_URL}/assets/images/og-image.jpg`,
    },
  },

  // ---------------- HOME ----------------
  "/": {
    title: "Ideas2Invest – Your All-in-One Investment Partner",
    description:
      "Invest confidently with Ideas2Invest. Explore mutual funds, insurance, and portfolio management tailored for your goals.",
    keywords:
      "investment advisor, wealth management, mutual fund investment, insurance plans, SIP calculator",
    canonical: `${BASE_URL}/`,
  },

  // ---------------- ABOUT ----------------
  "/about": {
    title: "About Ideas2Invest – Investment & Wealth Management Experts",
    description:
      "Learn about Ideas2Invest, a trusted investment advisory firm helping individuals and NRIs achieve financial independence.",
    keywords:
      "about Ideas2Invest, financial advisors India, investment company, wealth management experts",
    canonical: `${BASE_URL}/about`,
  },

  // ---------------- CONTACT ----------------
  "/contact": {
    title: "Contact Ideas2Invest – Let’s Talk About Your Financial Goals",
    description:
      "Reach out to Ideas2Invest for personalized investment and financial planning advice. Your future, our priority.",
    keywords: "contact Ideas2Invest, investment help, financial advice, wealth management support",
    canonical: `${BASE_URL}/contact`,
  },

  // ---------------- SERVICES ----------------
  "/services": {
    title: "Our Services – Comprehensive Investment Solutions | Ideas2Invest",
    description:
      "Discover a full range of investment and wealth management services, from mutual funds to insurance and portfolio management.",
    keywords:
      "investment services, mutual fund services, portfolio management, insurance plans, AIF, PMS",
    canonical: `${BASE_URL}/services`,
  },

  "/services/life-insurance": {
    title: "Life Insurance Plans – Secure Your Family’s Future | Ideas2Invest",
    description:
      "Choose the right life insurance policy for long-term financial security. Compare and invest with expert guidance.",
    keywords: "life insurance, term insurance, investment protection, family security",
    canonical: `${BASE_URL}/services/life-insurance`,
  },

  "/services/health-insurance": {
    title: "Health Insurance – Protect Your Health & Wealth | Ideas2Invest",
    description:
      "Find affordable and comprehensive health insurance plans. Secure your family’s health and peace of mind.",
    keywords: "health insurance, medical cover, family health plans, insurance India",
    canonical: `${BASE_URL}/services/health-insurance`,
  },

  "/services/general-insurance": {
    title: "General Insurance – Cover for Every Need | Ideas2Invest",
    description:
      "Explore general insurance options including motor, travel, and property coverage. Protect what matters most.",
    keywords: "general insurance, motor insurance, travel insurance, property insurance",
    canonical: `${BASE_URL}/services/general-insurance`,
  },

  "/services/portfolio-management": {
    title: "Portfolio Management Services (PMS) | Ideas2Invest",
    description:
      "Professional portfolio management designed to maximize returns while balancing risk. Explore PMS solutions today.",
    keywords: "PMS, portfolio management services, wealth growth, investment portfolio",
    canonical: `${BASE_URL}/services/portfolio-management`,
  },

  "/services/alternative-investment-funds": {
    title: "Alternative Investment Funds (AIF) | Ideas2Invest",
    description:
      "Invest beyond traditional markets with AIFs. Access alternative opportunities for wealth diversification.",
    keywords: "AIF, alternative investments, hedge funds, private equity, venture capital",
    canonical: `${BASE_URL}/services/alternative-investment-funds`,
  },

  "/services/corporate-fixed-deposits": {
    title: "Corporate Fixed Deposits – Safe & Steady Returns | Ideas2Invest",
    description:
      "Earn stable returns with corporate FDs. Compare top-rated companies and invest securely.",
    keywords: "corporate FD, fixed deposit, safe investments, steady returns",
    canonical: `${BASE_URL}/services/corporate-fixed-deposits`,
  },

  "/services/dollar-investment": {
    title: "Dollar Investment – Invest Globally with Ease | Ideas2Invest",
    description:
      "Explore global investment opportunities in USD. Diversify your portfolio with Dollar Investments.",
    keywords: "dollar investment, global investing, foreign portfolio, international funds",
    canonical: `${BASE_URL}/services/dollar-investment`,
  },

  // ---------------- MUTUAL FUNDS ----------------
  "/mutual-funds": {
    title: "Mutual Funds – Grow Wealth with Expert Guidance | Ideas2Invest",
    description:
      "Invest smartly in mutual funds. Choose from SIPs, ELSS, and retirement funds to achieve your goals.",
    keywords:
      "mutual funds, SIP, ELSS, tax saving, mutual fund advisor, investment plans",
    canonical: `${BASE_URL}/mutual-funds`,
  },

  "/mutual-funds/sip": {
    title: "SIP – Systematic Investment Plans for Smart Growth | Ideas2Invest",
    description:
      "Start your SIP today and grow your wealth steadily. Ideal for disciplined long-term investors.",
    keywords: "SIP, systematic investment plan, mutual funds, long term investment",
    canonical: `${BASE_URL}/mutual-funds/sip`,
  },

  "/mutual-funds/elss-tax-saving": {
    title: "ELSS Tax Saving Mutual Funds | Ideas2Invest",
    description:
      "Save tax and build wealth with ELSS mutual funds. Learn how to invest smartly and reduce taxable income.",
    keywords: "ELSS, tax saving mutual funds, 80C investment, best ELSS funds",
    canonical: `${BASE_URL}/mutual-funds/elss-tax-saving`,
  },

  "/mutual-funds/foreign-investors": {
    title: "Mutual Fund Investments for Foreign Nationals | Ideas2Invest",
    description:
      "NRIs and foreign nationals can invest in Indian mutual funds with ease. Start global wealth building today.",
    keywords: "NRI investment, foreign investor, mutual funds India, overseas investing",
    canonical: `${BASE_URL}/mutual-funds/foreign-investors`,
  },

  "/mutual-funds/retirement-income": {
    title: "Retirement Planning with Mutual Funds | Ideas2Invest",
    description:
      "Build your retirement corpus with mutual funds. Secure your post-retirement lifestyle today.",
    keywords: "retirement planning, mutual fund investment, pension funds, financial security",
    canonical: `${BASE_URL}/mutual-funds/retirement-income`,
  },

  "/mutual-funds/women-investors": {
    title: "Empowering Women Investors through Mutual Funds | Ideas2Invest",
    description:
      "Financial empowerment for women through mutual funds. Start your journey towards independence.",
    keywords: "women investment, mutual funds for women, financial empowerment, SIP for women",
    canonical: `${BASE_URL}/mutual-funds/women-investors`,
  },

  "/mutual-funds/change-mutual-fund-distributor": {
    title: "Change Your Mutual Fund Distributor Easily | Ideas2Invest",
    description:
      "Switch to Ideas2Invest as your mutual fund distributor and enjoy transparent, expert-driven guidance.",
    keywords: "change mutual fund distributor, switch mutual funds, mutual fund advisor India",
    canonical: `${BASE_URL}/mutual-funds/change-mutual-fund-distributor`,
  },

  // ---------------- NRI SERVICES ----------------
  "/nri-services/gift-city": {
    title: "GIFT City Investments for NRIs | Ideas2Invest",
    description:
      "Invest in India through GIFT City – the gateway for NRIs to participate in global financial opportunities.",
    keywords: "NRI investment India, GIFT City, NRI wealth management, offshore funds",
    canonical: `${BASE_URL}/nri-services/gift-city`,
  },

  "/nri-services/investment": {
    title: "Exclusive Wealth-Building Solutions for NRIs | Ideas2Invest",
    description:
      "Tailored investment and advisory services for NRIs. Explore high-return, compliant financial opportunities.",
    keywords: "NRI investment, overseas investors, India mutual funds NRI",
    canonical: `${BASE_URL}/nri-services/investment`,
  },

  "/nri-services/taxation": {
    title: "NRI Taxation & Financial Planning | Ideas2Invest",
    description:
      "Understand NRI taxation and compliance with expert guidance. Simplify your financial life with us.",
    keywords: "NRI taxation, financial planning, income tax India, tax help for NRIs",
    canonical: `${BASE_URL}/nri-services/taxation`,
  },

  // ---------------- CALCULATORS ----------------
  "/calculators": {
    title: "Investment Calculators | SIP, Lumpsum, EMI & More | Ideas2Invest",
    description:
      "Access 15+ smart investment calculators by Ideas2Invest to plan your SIP, Lumpsum, EMI, and future goals effectively.",
    keywords:
      "investment calculators, SIP calculator, lumpsum calculator, EMI calculator, financial planning, mutual fund calculators",
    canonical: `${BASE_URL}/calculators`,
  },

  "/calculators/sip": {
    title: "SIP Calculator | Systematic Investment Plan Returns | Ideas2Invest",
    description:
      "Calculate your SIP returns instantly. Plan your monthly investments with our accurate SIP Calculator by Ideas2Invest.",
    keywords:
      "sip calculator, systematic investment plan, mutual fund sip, sip returns calculator, monthly investment calculator",
    canonical: `${BASE_URL}/calculators/sip`,
  },

  "/calculators/sip-topup": {
    title: "SIP Top-Up Calculator | Grow Your Investments | Ideas2Invest",
    description:
      "Estimate the future value of your SIP with annual top-ups. Use the SIP Top-Up Calculator by Ideas2Invest for smarter investing.",
    keywords:
      "sip top up calculator, step up sip calculator, increasing sip, investment growth calculator",
    canonical: `${BASE_URL}/calculators/sip-topup`,
  },

  "/calculators/limited-sip": {
    title: "Limited SIP Calculator | Short-Term SIP Planning | Ideas2Invest",
    description:
      "Find out how much you can accumulate with a Limited SIP. Perfect for short-term financial goals.",
    keywords:
      "limited sip calculator, short term sip, sip maturity value, mutual fund sip planning",
    canonical: `${BASE_URL}/calculators/limited-sip`,
  },

  "/calculators/swp": {
    title: "SWP Calculator | Systematic Withdrawal Plan | Ideas2Invest",
    description:
      "Plan your monthly withdrawals using our SWP Calculator. Ideal for retirement and regular income planning.",
    keywords:
      "swp calculator, systematic withdrawal plan, mutual fund withdrawal calculator, retirement income",
    canonical: `${BASE_URL}/calculators/swp`,
  },

  "/calculators/lumpsum": {
    title: "Lumpsum Calculator | Mutual Fund Investment Returns | Ideas2Invest",
    description:
      "Calculate potential returns on one-time mutual fund investments using our Lumpsum Calculator.",
    keywords:
      "lumpsum calculator, mutual fund calculator, one time investment calculator, investment return calculator",
    canonical: `${BASE_URL}/calculators/lumpsum`,
  },

  "/calculators/emi": {
    title: "EMI Calculator | Loan Repayment Planner | Ideas2Invest",
    description:
      "Plan your monthly EMIs for loans easily. Use our EMI Calculator for accurate repayment planning.",
    keywords:
      "emi calculator, loan calculator, home loan emi, car loan emi, loan repayment calculator",
    canonical: `${BASE_URL}/calculators/emi`,
  },

  "/calculators/inflation": {
    title: "Inflation Calculator | Future Value Estimator | Ideas2Invest",
    description:
      "Understand how inflation affects your money’s value. Use the Inflation Calculator to plan your future goals wisely.",
    keywords:
      "inflation calculator, future value, purchasing power calculator, inflation impact",
    canonical: `${BASE_URL}/calculators/inflation`,
  },

  "/calculators/life-insurance-need": {
    title: "Life Insurance Need Calculator | Protect Your Family | Ideas2Invest",
    description:
      "Find the right life insurance coverage for your family’s future using the Life Insurance Need Calculator.",
    keywords:
      "life insurance calculator, insurance coverage, family protection, term insurance calculator",
    canonical: `${BASE_URL}/calculators/life-insurance-need`,
  },

  "/calculators/child-education": {
    title: "Child Education Calculator | Plan Your Child’s Future | Ideas2Invest",
    description:
      "Estimate the amount needed for your child’s higher education. Start planning early with the Child Education Calculator.",
    keywords:
      "child education calculator, education planning, child investment plan, college fund calculator",
    canonical: `${BASE_URL}/calculators/child-education`,
  },

  "/calculators/dream-retirement": {
    title: "Retirement Calculator | Plan Your Dream Retirement | Ideas2Invest",
    description:
      "Plan your retirement corpus and monthly savings using the Dream Retirement Calculator by Ideas2Invest.",
    keywords:
      "retirement calculator, pension planning, retirement corpus, future savings calculator",
    canonical: `${BASE_URL}/calculators/dream-retirement`,
  },

  "/calculators/grand-wedding": {
    title: "Wedding Goal Calculator | Plan a Grand Wedding | Ideas2Invest",
    description:
      "Plan your dream wedding budget efficiently. Use the Grand Wedding Calculator to achieve your goal stress-free.",
    keywords:
      "wedding calculator, goal planning, wedding savings, grand wedding budget calculator",
    canonical: `${BASE_URL}/calculators/grand-wedding`,
  },

  "/calculators/dream-car": {
    title: "Dream Car Calculator | Plan Your Car Purchase | Ideas2Invest",
    description:
      "Want to buy your dream car? Use the Dream Car Calculator to plan and save smartly for your future purchase.",
    keywords:
      "car calculator, car savings calculator, dream car planning, vehicle purchase calculator",
    canonical: `${BASE_URL}/calculators/dream-car`,
  },

  "/calculators/dream-vacation": {
    title: "Dream Vacation Calculator | Plan Your Travel Goals | Ideas2Invest",
    description:
      "Turn your travel dreams into reality. Use the Dream Vacation Calculator to plan your ideal vacation budget.",
    keywords:
      "vacation calculator, travel goal calculator, holiday budget planner, dream trip savings",
    canonical: `${BASE_URL}/calculators/dream-vacation`,
  },

  "/calculators/birthday-sip": {
    title: "Birthday SIP Calculator | Build Wealth Gift by Gift | Ideas2Invest",
    description:
      "Gift your loved ones a future of financial growth. Use the Birthday SIP Calculator for long-term investment gifting.",
    keywords:
      "birthday sip calculator, gift investment, kids birthday savings, sip for children",
    canonical: `${BASE_URL}/calculators/birthday-sip`,
  },

  "/calculators/cost-of-delay": {
    title: "Cost of Delay Calculator | Start Early, Invest Smart | Ideas2Invest",
    description:
      "Understand how delaying your investment impacts your returns. Use the Cost of Delay Calculator to invest smarter.",
    keywords:
      "cost of delay calculator, sip delay, investment timing, compounding calculator",
    canonical: `${BASE_URL}/calculators/cost-of-delay`,
  },

  "/calculators/home-loan-vs-sip": {
    title: "Home Loan vs SIP Calculator | Compare Investment Options | Ideas2Invest",
    description:
      "Should you prepay your home loan or invest via SIP? Find out using our Home Loan vs SIP Calculator.",
    keywords:
      "home loan vs sip calculator, prepay vs invest, sip comparison, financial planning",
    canonical: `${BASE_URL}/calculators/home-loan-vs-sip`,
  },

  "/calculators/financial-risk-meter": {
    title: "Financial Risk Meter | Assess Your Investment Risk | Ideas2Invest",
    description:
      "Measure your investment risk profile with the Financial Risk Meter by Ideas2Invest to make informed decisions.",
    keywords:
      "financial risk meter, risk profile calculator, investment risk assessment, investor profiling",
    canonical: `${BASE_URL}/calculators/financial-risk-meter`,
  },

  // ---------------- BLOGS ----------------
  "/blogs": {
    title: "Ideas2Invest Blog – Financial Insights & Investment Tips",
    description:
      "Read the latest blogs on investing, insurance, and wealth management to make smarter financial decisions.",
    keywords: "investment blog, financial tips, mutual fund news, Ideas2Invest blog",
    canonical: `${BASE_URL}/blogs`,
  },

  // ---------------- LEGAL ----------------
  "/legal/privacy-policy": {
    title: "Privacy Policy | Ideas2Invest",
    description:
      "Read Ideas2Invest’s privacy policy to understand how we protect your personal data and maintain transparency.",
    keywords: "privacy policy, Ideas2Invest privacy, data protection, user privacy",
    canonical: `${BASE_URL}/legal/privacy-policy`,
  },

  "/legal/terms-conditions": {
    title: "Terms & Conditions | Ideas2Invest",
    description:
      "Understand the terms and conditions of using Ideas2Invest’s services and website.",
    keywords: "terms of service, Ideas2Invest terms, investment policy",
    canonical: `${BASE_URL}/legal/terms-conditions`,
  },

  "/legal/code-of-conduct": {
    title: "Code of Conduct | Ideas2Invest",
    description:
      "Read the Ideas2Invest Code of Conduct to understand our commitment to ethical practices, transparency, and investor trust.",
    keywords:
      "code of conduct, Ideas2Invest ethics, business integrity, investment transparency, corporate responsibility",
    canonical: `${BASE_URL}/legal/code-of-conduct`,
  },

  "/legal/disclaimer": {
    title: "Disclaimer | Ideas2Invest",
    description:
      "Important information regarding investments, market risks, and financial disclaimers from Ideas2Invest.",
    keywords: "investment disclaimer, risk disclosure, Ideas2Invest disclaimer",
    canonical: `${BASE_URL}/legal/disclaimer`,
  },

  "/legal/investor-grievance": {
    title: "Investor Grievance Redressal | Ideas2Invest",
    description:
      "Submit investor complaints and know your rights. Ideas2Invest ensures fair and transparent resolutions.",
    keywords: "investor grievance, complaint redressal, SEBI grievance",
    canonical: `${BASE_URL}/legal/investor-grievance`,
  },
};

export default seoData;
