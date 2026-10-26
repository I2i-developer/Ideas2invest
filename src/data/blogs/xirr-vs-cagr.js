export const blog = {
  slug: "xirr-vs-cagr",
  title: "XIRR vs CAGR: Key Differences, Formulas & SIP Examples",
  category: ["Mutual Funds", "Investment Planning", "SIP", "XIRR", "CAGR", "Returns"],
  tags: ["XIRR vs CAGR", "Difference Between XIRR and CAGR", "XIRR", "CAGR", "SIP Returns", "Annualised Returns", "Mutual Fund Returns"],
  poster: "/assets/images/blogs/xirr-vs-cagr.png",
  author: "Ideas2Invest Team",
  date: "19-10-2026",
  readTime: "4 min read",
  description: "Compare XIRR vs CAGR in mutual funds with clear formulas and examples. Learn the key differences, how SIP returns work, and which measure fits your investment.",
  content: [
    {
      type: "paragraph",
      text: "The <b>difference between XIRR and CAGR</b> comes down to cash flows: did you invest once, or add and withdraw money along the way? Knowing that distinction helps you read your <a href='/mutual-funds'><b>mutual fund statement</b></a> without confusing total profit with yearly growth."
    },
    {
      type: "highlight",
      text: "<b>Quick answer:</b> Use <b>XIRR</b> for SIPs or investments with multiple deposits and withdrawals. Use <b>CAGR</b> for one investment held without additional cash flows. Both express an annualised return."
    },
    { type: "heading", text: "Extended Internal Rate of Return (XIRR)" },
    {
      type: "paragraph",
      text: "<b>XIRR measures the annualised return on a series of dated investments and withdrawals.</b> It accounts for both the amount invested and how long that money was invested. That makes it useful for a <a href='/mutual-funds/sip'><b>Systematic Investment Plan (SIP)</b></a>."
    },
    {
      type: "paragraph",
      text: "Think of it this way: money invested in January gets more time in the market than money invested in December. XIRR brings those different holding periods into one annual return."
    },
    { type: "heading", text: "Importance of XIRR" },
    {
      type: "paragraph",
      text: "Your actual transaction dates can change your personal return, even if someone else owns the same fund. XIRR helps you review a portfolio with SIP instalments, extra purchases or redemptions using one annualised measure."
    },
    { type: "subheading", text: "XIRR Calculation: A Simple Example" },
    {
      type: "paragraph",
      text: "<b>Example:</b> You invest ₹10,000, add another ₹10,000 a year later, and then check the portfolio value. Each deposit has had a different amount of time to grow."
    },
    {
      type: "table",
      data: {
        headers: ["Date", "Cash flow", "Meaning"],
        rows: [
          ["1 January 2023", "−₹10,000", "First investment"],
          ["1 January 2024", "−₹10,000", "Additional investment"],
          ["31 December 2024", "+₹23,100", "Portfolio value on the valuation date"]
        ]
      }
    },
    {
      type: "paragraph",
      text: "For these dates, the XIRR is <b>10% annualised</b>. At that equivalent rate, the first ₹10,000 accounts for ₹12,100 and the second for ₹11,000: a total of ₹23,100."
    },
    {
      type: "tip",
      text: "To check your own XIRR, use the actual investment and withdrawal dates from your statement. In Excel, enter investments as negative amounts and withdrawals or the final portfolio value as positive amounts, then use <code>=XIRR(values, dates)</code>."
    },
    {
      type: "warning",
      text: "Do not treat the full ₹20,000 as invested from day one: half arrived a year later. The 15.5% total gain in this example is also not an annual return. These are hypothetical calculations, not fund performance or return forecasts."
    },
    { type: "heading", text: "Compound Annual Growth Rate (CAGR)" },
    {
      type: "paragraph",
      text: "<b>CAGR expresses growth between a starting value and an ending value as an equivalent annual rate.</b> It assumes a smooth growth path for comparison, even though markets rarely move smoothly. Read our <a href='/blogs/magic-of-compounding'><b>guide to compounding</b></a> for the idea behind growth on growth."
    },
    {
      type: "formula",
      latex: "\\text{CAGR} = \\left(\\frac{\\text{Ending value}}{\\text{Starting value}}\\right)^{1/n} - 1",
      description: "Here, n is the holding period in years. Multiply the result by 100 to express it as a percentage."
    },
    {
      type: "paragraph",
      text: "<b>Example:</b> You invest ₹1,00,000 once, and it becomes ₹1,21,000 after two years. That is a 21% total gain, or a <b>10% CAGR</b>. The annual figure makes the growth easier to understand."
    },
    { type: "heading", text: "Importance of CAGR" },
    {
      type: "paragraph",
      text: "A total gain means little without a holding period: doubling money in five years is different from doubling it in fifteen. CAGR puts growth on an annual basis. For fund comparisons, still check the same dates, plan and option, alongside risk."
    },
    { type: "heading", text: "Differences Between XIRR and CAGR" },
    {
      type: "table",
      data: {
        headers: ["Factor", "XIRR", "CAGR"],
        rows: [
          ["<b>Inputs</b>", "Each cash flow and its date", "Starting value, ending value and years"],
          ["<b>Cash flows</b>", "Handles multiple deposits and withdrawals", "Does not account for interim cash flows"],
          ["<b>Useful for</b>", "SIPs, top-ups and partial redemptions", "A lump sum with no interim cash flows"],
          ["<b>Perspective</b>", "Return on your dated investments", "Smoothed growth between two values"],
          ["<b>Limitation</b>", "Needs complete transaction records", "Hides fluctuations along the way"]
        ]
      }
    },
    { type: "heading", text: "XIRR or CAGR: Which Should You Use?" },
    {
      type: "paragraph",
      text: "For your SIP statement, check XIRR. For an untouched lump sum, CAGR is simpler. When comparing funds, align the dates, plan, option and return method. A fund's published CAGR and your personal XIRR may differ because your transaction history differs."
    },
    {
      type: "paragraph",
      text: "Planning a future goal? Try our <a href='/calculators/sip'><b>SIP calculator</b></a> or <a href='/calculators/lumpsum'><b>lump sum calculator</b></a>. Their assumed returns are planning inputs; they do not measure your actual transaction history."
    },
    {
      type: "tip",
      text: "NAV-based returns already reflect ongoing scheme expenses. Our <a href='/blogs/total-expense-ratio-in-mutual-funds'><b>Total Expense Ratio (TER) guide</b></a> explains those costs and why you should not subtract them again."
    },
    { type: "heading", text: "Frequently Asked Questions" },
    {
      type: "faq",
      question: "Is XIRR better than CAGR for SIP returns?",
      answer: "Yes, XIRR is more appropriate for SIPs because each instalment has its own investment date. CAGR applied to total contributions misses that timing."
    },
    {
      type: "faq",
      question: "Can XIRR and CAGR be the same?",
      answer: "Yes. For one investment and one ending value, they agree when the elapsed-year convention is the same. Leap years or different day-count conventions can cause small differences."
    },
    {
      type: "faq",
      question: "Is XIRR always higher than CAGR?",
      answer: "No. There is no fixed ordering. Check the cash flows, dates and calculation basis before comparing the numbers."
    },
    {
      type: "faq",
      question: "Does a 10% CAGR mean I earned 10% every year?",
      answer: "No. CAGR shows an equivalent steady growth rate between the starting and ending values. Actual yearly returns can be higher, lower or negative."
    },
    {
      type: "faq",
      question: "Why is my SIP XIRR different from the fund's CAGR?",
      answer: "The fund's CAGR tracks growth between two values over a stated period. Your SIP XIRR also reflects when each instalment was invested and any withdrawals. They describe different investment histories, so they need not match."
    },
    {
      type: "faq",
      question: "Is XIRR the same as absolute return?",
      answer: "No. Absolute return describes the overall percentage gain or loss without annualising it. XIRR accounts for dated cash flows and expresses the result as an annual rate."
    },
    {
      type: "conclusion",
      text: "Use XIRR to understand returns when money moves in or out on different dates. Use CAGR for growth from one starting amount to one ending value. Read the number alongside your goals, holding period and risk, rather than judging an investment by return alone."
    },
    {
      type: "cta",
      text: "Need help understanding your mutual fund statement? Speak with Ideas2Invest, an AMFI Registered Mutual Fund Distributor, ARN-113588.",
      buttonText: "Discuss My Mutual Fund Statement",
      href: "/contact"
    },
  ],
  actions: {
    primary: { label: "EXPLORE MUTUAL FUNDS", href: "/mutual-funds" },
    secondary: { label: "PLAN MY SIP", href: "/calculators/sip" }
  }
};
