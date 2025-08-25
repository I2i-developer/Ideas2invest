const comparisonData = {
  dollarInvestment: {
    title: "Dollar Investment vs Traditional Investment",
    leftTitle: "Dollar Investment",
    rightTitle: "Traditional Investment (INR Based)",
    rows: [
      {
        id: 1,
        label: "Market Access",
        left: "Global markets including US stocks, ETFs, and bonds.",
        right: "Limited to Indian stocks, mutual funds, and bonds.",
      },
      {
        id: 2,
        label: "Currency Protection",
        left: "Hedge against INR depreciation with stronger USD returns.",
        right: "Returns are fully dependent on Indian Rupee value.",
      },
      {
        id: 3,
        label: "Diversification",
        left: "Exposure to multiple geographies and international companies.",
        right: "Restricted to domestic economy and sectors.",
      },
      {
        id: 4,
        label: "Taxation",
        left: "Foreign taxation rules apply; subject to DTAA benefits.",
        right: "Indian taxation only; simpler compliance.",
      },
      {
        id: 5,
        label: "Accessibility",
        left: "Requires LRS compliance, remittance costs, and international accounts.",
        right: "Easily accessible via local brokers, mutual funds, and banks.",
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
};

export default comparisonData;
