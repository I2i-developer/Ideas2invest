const navbarData = {
  logo: {
    src: '/assets/images/logo/logo.png',
    alt: 'Ideas2Invest Logo',
    width: 150,
    height: 80,
  },
  links: [
    // { label: 'Home', path: '/' },
    { label: 'About Us', 
      path: '/about',
      children: [
        { label: 'About Company and Directors', path: '/about' },
        { label: 'News & Updates', path: '/news-updates' },
        { label: 'Resources & Downloads', path: '/resources' },
      ],
    },
    {
      label: 'Services',
      path: '/services',
      children: [
        { label: 'Mutual Funds', path: '/mutual-funds' },
        { label: 'Dollar Investment (Gift City)', path: '/services/dollar-investment' },
        { label: 'Life Insurance', path: '/services/life-insurance' },
        { label: 'Health Insurance', path: '/services/health-insurance' },
        { label: 'General Insurance', path: '/services/general-insurance' },
        { label: 'Portfolio Management Services (PMS)', path: '/services/portfolio-management' },
        { label: 'Alternative Investment Funds (AIF)', path: '/services/alternative-investment-funds' },
        { label: 'Corporate Fixed Deposits', path: '/services/corporate-fixed-deposits' },
      ],
    },
    {
      label: 'Mutual Funds',
      path: '/mutual-funds',
      children: [
        { label: 'SIP (Systematic Investment Plan)', path: '/mutual-funds/sip' },
        { label: 'ELSS (Tax Saving)', path: '/mutual-funds/elss-tax-saving' },
        { label: 'Empowering Women through Mutual Funds', path: '/mutual-funds/women-investors' },
        { label: 'Investment for Foreign Nationals', path: '/mutual-funds/foreign-investors' },
        { label: 'Retirement Income Through Mutual Funds', path: '/mutual-funds/retirement-income' },
        { label: 'Change Your Mutual Fund Distributor', path: '/mutual-funds/change-mutual-fund-distributor' },
      ],
    },
    {
      label: 'NRI Services',
      path: '/nri-services',
      children: [
        { label: 'Gift City', path: '/nri-services/gift-city' },
        { label: 'NRI Taxation', path: '/nri-services/taxation' },
        { label: 'Investment for NRIs', path: '/nri-services/investment' },
      ],
    },
    {
      label: 'Calculators',
      path: '/calculators',
      children: [
        { label: 'All Calculators', path: '/calculators' },
        { label: 'Financial Risk Meter', path: '/calculators/financial-risk-meter' },
        { label: 'SIP Calculator', path: '/calculators/sip' },
        { label: 'Comprehensive Financial Calculator', path: '/calculators/comprehensive' },
        { label: 'Goal Based SIP Calculator', path: '/calculators/goal-sip' },
        { label: 'Lumpsum Calculator', path: '/calculators/lumpsum' },
        { label: 'Inflation Calculator', path: '/calculators/inflation' },
        { label: 'Dream Retirement Calculator', path: '/calculators/dream-retirement' },
        { label: 'Grand Wedding Calculator', path: '/calculators/grand-wedding' },
        { label: 'Dream Vacation Calculator', path: '/calculators/dream-vacation' },
        { label: 'Child Education Calculator', path: '/calculators/child-education' },
        { label: 'SIP Top-up Calculator', path: '/calculators/sip-topup' },
        { label: 'Limited Period SIP Calculator', path: '/calculators/limited-sip' },
        { label: 'Life Insurance Need Calculator', path: '/calculators/life-insurance-need' },
        { label: 'Home Loan vs SIP Calculator', path: '/calculators/home-loan-vs-sip' },
        { label: 'EMI Calculator', path: '/calculators/emi' },
        { label: 'Dream Car Calculator', path: '/calculators/dream-car' },
        { label: 'Cost of Delay Calculator', path: '/calculators/cost-of-delay' },
        { label: 'Birthday SIP Calculator', path: '/calculators/birthday-sip' },
        { label: 'SWP Calculator', path: '/calculators/swp' },
      ],
    },
    { label: 'Blog', path: '/blogs' },
    { label: 'Contact', path: '/contact' },
  ],
  ctas: [
    { label: "Log in", path: "https://ideas2invest.wealthmagic.in/" },
    { label: "Sign up", path: "/signup" }
  ],
  // cta: {
  //   label: 'Login',
  //   path: 'https://ideas2invest.wealthmagic.in/',
  // },
}

export default navbarData
