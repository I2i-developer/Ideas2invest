export const fundCategories = [
  {
    "id": "sip100",
    "name": "SIPs with 100",
    "icon": "/assets/images/icons/Sip-100.webp"
  },
  {
    "id": "sip500",
    "name": "SIPs with 500",
    "icon": "/assets/images/icons/Sip-500.webp"
  },
  {
    "id": "large_cap",
    "name": "Large Cap",
    "icon": "/assets/images/icons/index.webp"
  },
  {
    "id": "high_returns",
    "name": "High Returns",
    "icon": "/assets/images/icons/high-returns.webp"
  },
  {
    "id": "tax_saving",
    "name": "Tax Saving (ELSS)",
    "icon": "/assets/images/icons/tax-saving.png"
  },
  {
    "id": "debt_funds",
    "name": "Debt Funds",
    "icon": "/assets/images/icons/debt-funds.png"
  },
];

export const mutualFunds = [
  // ========== SIP WITH ₹100 ==========
  {
    id: 1,
    category: "sip100",
    name: "Motilal Oswal Nifty 500 Fund – Regular Growth",
    logo: "/assets/images/icons/motilal.svg",
    fundSize: 2600.5,
    returns: { "1Y": 12.8, "3Y": 18.9, "5Y": 19.7 },
    type: "Equity – Index (Nifty 500)"
  },
  {
    id: 2,
    category: "sip100",
    name: "Invesco India Large & Mid Cap Fund – Regular Growth",
    logo: "/assets/images/icons/invesco.svg",
    fundSize: 6800.2,
    returns: { "1Y": 18.4, "3Y": 24.6, "5Y": 23.9 },
    type: "Equity – Large & Mid Cap"
  },
  {
    id: 3,
    category: "sip100",
    name: "PPFAS Flexi Cap Fund – Regular Growth",
    logo: "/assets/images/icons/ppfas.svg",
    fundSize: 3800.0,
    returns: { "1Y": 22.1, "3Y": 21.5, "5Y": 20.2 },
    type: "Equity – Flexi Cap"
  },
  {
    id: 4,
    category: "sip100",
    name: "JM Flexicap Fund – Regular Growth",
    logo: "/assets/images/icons/jmfinance.svg",
    fundSize: 2100.8,
    returns: { "1Y": 14.9, "3Y": 17.8, "5Y": 16.5 },
    type: "Equity – Flexi Cap"
  },
  {
    id: 5,
    category: "sip100",
    name: "Quant Active Fund – Regular Growth",
    logo: "/assets/images/icons/quant.svg",
    fundSize: 12600.4,
    returns: { "1Y": 20.6, "3Y": 25.0, "5Y": 22.8 },
    type: "Equity – Multi Cap"
  },
  {
    id: 6,
    category: "sip100",
    name: "Mirae Asset Emerging Bluechip Fund – Regular Growth",
    logo: "/assets/images/icons/mirae.svg",
    fundSize: 34500.0,
    returns: { "1Y": 16.8, "3Y": 18.0, "5Y": 15.9 },
    type: "Equity – Large & Mid Cap"
  },
  {
    id: 7,
    category: "sip100",
    name: "Nippon India Index Sensex Fund – Regular Growth",
    logo: "/assets/images/icons/nippon.svg",
    fundSize: 4600.2,
    returns: { "1Y": 13.2, "3Y": 15.0, "5Y": 16.7 },
    type: "Equity – Index (Sensex)"
  },

  // ========== SIP WITH ₹500 ==========
  {
    id: 8,
    category: "sip500",
    name: "Motilal Oswal Midcap Fund – Regular Growth",
    logo: "/assets/images/icons/motilal.svg",
    fundSize: 34900.6,
    returns: { "1Y": 27.5, "3Y": 28.1, "5Y": 34.5 },
    type: "Equity – Mid Cap"
  },
  {
    id: 9,
    category: "sip500",
    name: "Invesco India Mid Cap Fund – Regular Growth",
    logo: "/assets/images/icons/invesco.svg",
    fundSize: 3050.0,
    returns: { "1Y": 22.0, "3Y": 26.0, "5Y": 24.0 },
    type: "Equity – Mid Cap"
  },
  {
    id: 10,
    category: "sip500",
    name: "PPFAS Flexi Cap Fund – Regular Growth",
    logo: "/assets/images/icons/ppfas.svg",
    fundSize: 3750.4,
    returns: { "1Y": 21.0, "3Y": 20.8, "5Y": 19.6 },
    type: "Equity – Flexi Cap"
  },
  {
    id: 11,
    category: "sip500",
    name: "JM Midcap Fund – Regular Growth",
    logo: "/assets/images/icons/jmfinance.svg",
    fundSize: 900.3,
    returns: { "1Y": 24.6, "3Y": 23.0, "5Y": 21.3 },
    type: "Equity – Mid Cap"
  },
  {
    id: 12,
    category: "sip500",
    name: "Quant Mid Cap Fund – Regular Growth",
    logo: "/assets/images/icons/quant.svg",
    fundSize: 5250.6,
    returns: { "1Y": 29.9, "3Y": 30.8, "5Y": 27.4 },
    type: "Equity – Mid Cap"
  },
  {
    id: 13,
    category: "sip500",
    name: "Mirae Asset Small Cap Fund – Regular Growth",
    logo: "/assets/images/icons/mirae.svg",
    fundSize: 11200.0,
    returns: { "1Y": 35.1, "3Y": 28.6, "5Y": 26.0 },
    type: "Equity – Small Cap"
  },
  {
    id: 14,
    category: "sip500",
    name: "Nippon India Small Cap Fund – Regular Growth",
    logo: "/assets/images/icons/nippon.svg",
    fundSize: 46800.0,
    returns: { "1Y": 36.9, "3Y": 32.0, "5Y": 29.1 },
    type: "Equity – Small Cap"
  },

  // ========== TAX SAVING (ELSS) ==========
  {
    id: 15,
    category: "tax_saving",
    name: "Motilal Oswal ELSS Tax Saver Fund – Regular Growth",
    logo: "/assets/images/icons/motilal.svg",
    fundSize: 4500.0,
    returns: { "1Y": 18.6, "3Y": 26.8, "5Y": 25.6 },
    type: "Equity – ELSS (3-year lock-in)"
  },
  {
    id: 16,
    category: "tax_saving",
    name: "Invesco India ELSS Tax Saver Fund – Regular Growth",
    logo: "/assets/images/icons/invesco.svg",
    fundSize: 1250.5,
    returns: { "1Y": 15.8, "3Y": 20.5, "5Y": 18.7 },
    type: "Equity – ELSS (3-year lock-in)"
  },
  {
    id: 17,
    category: "tax_saving",
    name: "PPFAS Tax Saver Fund – Regular Growth",
    logo: "/assets/images/icons/ppfas.svg",
    fundSize: 1300.0,
    returns: { "1Y": 17.9, "3Y": 19.2, "5Y": 18.4 },
    type: "Equity – ELSS / Balanced Hybrid"
  },
  {
    id: 18,
    category: "tax_saving",
    name: "JM ELSS Fund – Regular Growth",
    logo: "/assets/images/icons/jmfinance.svg",
    fundSize: 980.0,
    returns: { "1Y": 16.5, "3Y": 18.9, "5Y": 17.4 },
    type: "Equity – ELSS (3-year lock-in)"
  },
  {
    id: 19,
    category: "tax_saving",
    name: "Quant ELSS Tax Saver Fund – Regular Growth",
    logo: "/assets/images/icons/quant.svg",
    fundSize: 2000.0,
    returns: { "1Y": 19.2, "3Y": 24.1, "5Y": 21.7 },
    type: "Equity – ELSS (3-year lock-in)"
  },
  {
    id: 20,
    category: "tax_saving",
    name: "Mirae Asset Tax Saver Fund – Regular Growth",
    logo: "/assets/images/icons/mirae.svg",
    fundSize: 1700.6,
    returns: { "1Y": 14.8, "3Y": 16.4, "5Y": 15.0 },
    type: "Equity – ELSS (3-year lock-in)"
  },
  {
    id: 21,
    category: "tax_saving",
    name: "Nippon India Tax Saver Fund – Regular Growth",
    logo: "/assets/images/icons/nippon.svg",
    fundSize: 1550.2,
    returns: { "1Y": 15.6, "3Y": 18.0, "5Y": 16.9 },
    type: "Equity – ELSS (3-year lock-in)"
  },

  // ========== DEBT FUNDS ==========
  {
    id: 22,
    category: "debt_funds",
    name: "Motilal Oswal Ultra Short Term Fund – Regular Growth",
    logo: "/assets/images/icons/motilal.svg",
    fundSize: 620.0,
    returns: { "1Y": 6.3, "3Y": 6.1, "5Y": 6.0 },
    type: "Debt – Ultra Short Duration"
  },
  {
    id: 23,
    category: "debt_funds",
    name: "Invesco India Credit Risk Fund – Regular Growth",
    logo: "/assets/images/icons/invesco.svg",
    fundSize: 2050.0,
    returns: { "1Y": 7.5, "3Y": 7.1, "5Y": 7.9 },
    type: "Debt – Credit Risk"
  },
  {
    id: 24,
    category: "debt_funds",
    name: "PPFAS Debt Allocation (Conservative) – Regular Growth",
    logo: "/assets/images/icons/ppfas.svg",
    fundSize: 900.0,
    returns: { "1Y": 5.8, "3Y": 6.2, "5Y": 6.6 },
    type: "Hybrid – Conservative Debt Allocation"
  },
  {
    id: 25,
    category: "debt_funds",
    name: "JM Dynamic Debt Fund – Regular Growth",
    logo: "/assets/images/icons/jmfinance.svg",
    fundSize: 1600.0,
    returns: { "1Y": 6.9, "3Y": 6.8, "5Y": 7.0 },
    type: "Debt – Dynamic Bond"
  },
  {
    id: 26,
    category: "debt_funds",
    name: "Quant Short Term Debt Fund – Regular Growth",
    logo: "/assets/images/icons/quant.svg",
    fundSize: 1850.0,
    returns: { "1Y": 5.7, "3Y": 5.6, "5Y": 6.0 },
    type: "Debt – Short Duration"
  },
  {
    id: 27,
    category: "debt_funds",
    name: "Mirae Asset Savings Fund – Regular Growth",
    logo: "/assets/images/icons/mirae.svg",
    fundSize: 6800.0,
    returns: { "1Y": 6.5, "3Y": 6.3, "5Y": 6.7 },
    type: "Debt – Low Duration"
  },
  {
    id: 28,
    category: "debt_funds",
    name: "Nippon India Corporate Bond Fund – Regular Growth",
    logo: "/assets/images/icons/nippon.svg",
    fundSize: 9700.0,
    returns: { "1Y": 6.9, "3Y": 6.6, "5Y": 7.1 },
    type: "Debt – Corporate Bond"
  },

  // ========== HIGH RETURNS ==========
  {
    id: 29,
    category: "high_returns",
    name: "Motilal Oswal Small Cap Fund – Regular Growth",
    logo: "/assets/images/icons/motilal.svg",
    fundSize: 5450.0,
    returns: { "1Y": 2.0, "3Y": 21.0, "5Y": 20.5 },
    type: "Equity – Small Cap"
  },
  {
    id: 30,
    category: "high_returns",
    name: "Invesco India Infrastructure Fund – Regular Growth",
    logo: "/assets/images/icons/invesco.svg",
    fundSize: 1520.0,
    returns: { "1Y": -4.5, "3Y": 27.5, "5Y": 31.0 },
    type: "Equity – Sectoral (Infrastructure)"
  },
  {
    id: 31,
    category: "high_returns",
    name: "PPFAS Small / Mid Opportunities – Regular Growth",
    logo: "/assets/images/icons/ppfas.svg",
    fundSize: 2800.0,
    returns: { "1Y": 25.0, "3Y": 23.5, "5Y": 22.8 },
    type: "Equity – Small & Mid Cap"
  },
  {
    id: 32,
    category: "high_returns",
    name: "JM Midcap Opportunities Fund – Regular Growth",
    logo: "/assets/images/icons/jmfinance.svg",
    fundSize: 920.0,
    returns: { "1Y": 27.8, "3Y": 24.0, "5Y": 22.5 },
    type: "Equity – Mid Cap"
  },
  {
    id: 33,
    category: "high_returns",
    name: "Quant Small Cap Fund – Regular Growth",
    logo: "/assets/images/icons/quant.svg",
    fundSize: 9250.0,
    returns: { "1Y": 33.5, "3Y": 30.2, "5Y": 29.0 },
    type: "Equity – Small Cap"
  },
  {
    id: 34,
    category: "high_returns",
    name: "Mirae Asset Midcap Fund – Regular Growth",
    logo: "/assets/images/icons/mirae.svg",
    fundSize: 11200.0,
    returns: { "1Y": 31.5, "3Y": 28.0, "5Y": 24.9 },
    type: "Equity – Mid Cap"
  },
  {
    id: 35,
    category: "high_returns",
    name: "Nippon India Small & Mid Cap Fund – Regular Growth",
    logo: "/assets/images/icons/nippon.svg",
    fundSize: 4800.0,
    returns: { "1Y": 30.2, "3Y": 26.9, "5Y": 25.7 },
    type: "Equity – Small & Mid Cap"
  },

  // ========== LARGE CAP ==========
  {
    id: 36,
    category: "large_cap",
    name: "Motilal Oswal Large & Midcap Fund – Regular Growth",
    logo: "/assets/images/icons/motilal.svg",
    fundSize: 13800.0,
    returns: { "1Y": 26.4, "3Y": 24.8, "5Y": 23.9 },
    type: "Equity – Large & Mid Cap"
  },
  {
    id: 37,
    category: "large_cap",
    name: "Invesco India Largecap Fund – Regular Growth",
    logo: "/assets/images/icons/invesco.svg",
    fundSize: 1650.0,
    returns: { "1Y": 19.8, "3Y": 20.0, "5Y": 20.5 },
    type: "Equity – Large Cap"
  },
  {
    id: 38,
    category: "large_cap",
    name: "PPFAS Flexi Cap Fund – Regular Growth",
    logo: "/assets/images/icons/ppfas.svg",
    fundSize: 3725.0,
    returns: { "1Y": 21.8, "3Y": 21.7, "5Y": 20.1 },
    type: "Equity – Flexi Cap"
  },
  {
    id: 39,
    category: "large_cap",
    name: "JM Large Cap Core Fund – Regular Growth",
    logo: "/assets/images/icons/jmfinance.svg",
    fundSize: 1200.0,
    returns: { "1Y": 18.6, "3Y": 17.9, "5Y": 17.2 },
    type: "Equity – Large Cap"
  },
  {
    id: 40,
    category: "large_cap",
    name: "Quant Large & Mid Cap Fund – Regular Growth",
    logo: "/assets/images/icons/quant.svg",
    fundSize: 3500.0,
    returns: { "1Y": 16.9, "3Y": 17.4, "5Y": 22.8 },
    type: "Equity – Large & Mid Cap"
  },
  {
    id: 41,
    category: "large_cap",
    name: "Mirae Asset Large Cap Fund – Regular Growth",
    logo: "/assets/images/icons/mirae.svg",
    fundSize: 47650.0,
    returns: { "1Y": 20.9, "3Y": 19.4, "5Y": 18.6 },
    type: "Equity – Large Cap"
  },
  {
    id: 42,
    category: "large_cap",
    name: "Nippon India Large Cap Fund – Regular Growth",
    logo: "/assets/images/icons/nippon.svg",
    fundSize: 44000.0,
    returns: { "1Y": 19.4, "3Y": 20.2, "5Y": 19.1 },
    type: "Equity – Large Cap"
  }
];


// export const mutualFunds = [
//   {
//     "id": 1,
//     "category": "sip100",
//     "name": "ICICI Prudential Infrastructure Fund",
//     "logo": "/assets/images/icons/icici.svg",
//     "fundSize": 6989.56,
//     "returns": {
//       "1Y": 40.77,
//       "3Y": 35.45,
//       "5Y": 32.74
//     },
//     "type": "Equity - Sectoral / Thematic"
//   },
//   {
//     "id": 2,
//     "category": "sip100",
//     "name": "Aditya Birla Sun Life PSU Equity Fund",
//     "logo": "/assets/images/icons/birla.svg",
//     "fundSize": 5531.87,
//     "returns": {
//       "1Y": 31.88,
//       "3Y": 36.33,
//       "5Y": 0
//     },
//     "type": "Equity - Sectoral / Thematic"
//   },
//   {
//     "id": 3,
//     "category": "tax_saving",
//     "name": "SBI ELSS Tax Saver Fund Regular Plan Growth",
//     "logo": "/assets/images/icons/sbi.svg",
//     "fundSize": 30271.16,
//     "returns": {
//       "1Y": -1.47,
//       "3Y": 24.04,
//       "5Y": 24.65
//     },
//     "type": "Equity – ELSS (tax-saving, 3-year lock-in) – Open-ended"
//   },
//   {
//     "id": 4,
//     "category": "high_returns",
//     "name": "ICICI Prudential Infrastructure Fund Growth",
//     "logo": "/assets/images/icons/icici.svg",
//     "fundSize": 7941.2,
//     "returns": {
//       "1Y": 2.99,
//       "3Y": 30.28,
//       "5Y": 34.96
//     },
//     "type": "Equity – Sectoral (Infrastructure)"
//   },
//   {
//     "id": 5,
//     "category": "debt_funds",
//     "name": "HDFC Corporate Bond Fund",
//     "logo": "/assets/images/icons/hdfc.svg",
//     "fundSize": 993.0,
//     "returns": {
//       "1Y": 0.61,
//       "3Y": 14.71,
//       "5Y": 16.99
//     },
//     "type": "Hybrid Fund of Funds (Debt + Arbitrage)"
//   },
//   {
//     "id": 6,
//     "category": "large_cap",
//     "name": "Motilal Oswal Large Cap Fund Regular Plan Growth",
//     "logo": "/assets/images/icons/icici.svg",
//     "fundSize": 2636.51,
//     "returns": {
//       "1Y": 13.9,
//       "3Y": 24.31,
//       "5Y": 0
//     },
//     "type": "Equity – Large Cap (Regular, Growth)"
//   },
//   {
//     "id": 7,
//     "category": "high_returns",
//     "name": "SBI PSU Fund Regular Plan Growth",
//     "logo": "/assets/images/icons/sbi.svg",
//     "fundSize": 8030.75,
//     "returns": {
//       "1Y": -7.13,
//       "3Y": 33.13,
//       "5Y": 30.7
//     },
//     "type": "Equity – Thematic (PSU)"
//   },
//   {
//     "id": 8,
//     "category": "sip500",
//     "name": "SBI PSU Fund",
//     "logo": "/assets/images/icons/sbi.svg",
//     "fundSize": 4686.10,
//     "returns": {
//       "1Y": 44.98,
//       "3Y": 37.73,
//       "5Y": 27.32
//     },
//     "type": "Equity - Sectoral / Thematic"
//   },
//   {
//     "id": 9,
//     "category": "tax_saving",
//     "name": "Motilal Oswal ELSS Tax Saver Fund Regular Plan Growth",
//     "logo": "/assets/images/icons/motilal.svg",
//     "fundSize": 4401.97,
//     "returns": {
//       "1Y": 0.62,
//       "3Y": 25.87,
//       "5Y": 27.05
//     },
//     "type": "Equity - Large and Mid Cap | Open-ended"
//   },
//   {
//     "id": 10,
//     "category": "tax_saving",
//     "name": "HDFC ELSS Tax Saver Fund Growth",
//     "logo": "/assets/images/icons/hdfc.svg",
//     "fundSize": 16908,
//     "returns": {
//       "1Y": 7.27,
//       "3Y": 23.96,
//       "5Y": 24.45
//     },
//     "type": "Equity - 3year lock-in | Open-ended"
//   },
//   {
//     "id": 11,
//     "category": "tax_saving",
//     "name": "DSP ELSS Tax Saver Fund Regular Plan Growth",
//     "logo": "/assets/images/icons/dsp.svg",
//     "fundSize": 16977.81,
//     "returns": {
//       "1Y": 2.32,
//       "3Y": 21.25,
//       "5Y": 23.89
//     },
//     "type": "Equity - 3year lock-in | Open-ended"
//   },
//   {
//     "id": 12,
//     "category": "tax_saving",
//     "name": "Quant ELSS Tax Saver Growth",
//     "logo": "/assets/images/icons/quant.svg",
//     "fundSize": 1190.94,
//     "returns": {
//       "1Y": -11.93,
//       "3Y": 17.21,
//       "5Y": 26.90
//     },
//     "type": "Equity - 3year lock-in | Linked Savings Scheme"
//   },
//   {
//     "id": 13,
//     "category": "large_cap",
//     "name": "Nippon India Large Cap Fund - Growth",
//     "logo": "/assets/images/icons/nippon.svg",
//     "fundSize": 43829.0,
//     "returns": {
//       "1Y": 4.42,
//       "3Y": 19.67,
//       "5Y": 23.99
//     },
//     "type": "Large Cap Equity (Active)"
//   },
//   {
//     "id": 14,
//     "category": "large_cap",
//     "name": "Invesco India largecap Fund Growth",
//     "logo": "/assets/images/icons/invesco.svg",
//     "fundSize": 1528.0,
//     "returns": {
//       "1Y": 4.42,
//       "3Y": 19.67,
//       "5Y": 23.99
//     },
//     "type": "Large Cap Equity (Active)"
//   },
//   {
//     "id": 15,
//     "category": "large_cap",
//     "name": "Bandhan Large Cap Fund Regular Plan Growth",
//     "logo": "/assets/images/icons/bandhan.svg",
//     "fundSize": 1917.47,
//     "returns": {
//       "1Y": 0.74,
//       "3Y": 16.42,
//       "5Y": 17.96
//     },
//     "type": "Equity – Large Cap (Active)"
//   },
//   {
//     "id": 16,
//     "category": "large_cap",
//     "name": "DSP Large Cap Fund Regular Plan Growth",
//     "logo": "/assets/images/icons/dsp.svg",
//     "fundSize": 6323.0,
//     "returns": {
//       "1Y": 2.74,
//       "3Y": 18.85,
//       "5Y": 19.09
//     },
//     "type": "Equity – Large Cap (Active)"
//   },
//   {
//     "id": 17,
//     "category": "debt_funds",
//     "name": "Bank of India Credit Risk Fund Regular Growth",
//     "logo": "/assets/images/icons/boi.svg",
//     "fundSize": 105.6,
//     "returns": {
//       "1Y": 5.9,
//       "3Y": 5.7,
//       "5Y": 25.9
//     },
//     "type": "Debt – Credit Risk"
//   },
//   {
//     "id": 18,
//     "category": "debt_funds",
//     "name": "Baroda BNP Paribas Credit Risk Fund Regular Growth",
//     "logo": "/assets/images/icons/bnp_paribas.svg",
//     "fundSize": 189.7,
//     "returns": {
//       "1Y": 9.1,
//       "3Y": 7.9,
//       "5Y": 9.9
//     },
//     "type": "Debt – Credit Risk"
//   },
//   {
//     "id": 19,
//     "category": "debt_funds",
//     "name": "Aditya Birla Sun Life Medium Term Plan Regular Plan Growth",
//     "logo": "/assets/images/icons/birla.svg",
//     "fundSize": 1892.2,
//     "returns": {
//       "1Y": 13.76,
//       "3Y": 9.54,
//       "5Y": 12.26
//     },
//     "type": "Debt – Medium Duration"
//   },
//   {
//     "id": 20,
//     "category": "debt_funds",
//     "name": "ICICI Prudential Income Plus Arbitrage Active FoF – Growth",
//     "logo": "/assets/images/icons/icici.svg",
//     "fundSize": 1387,
//     "returns": {
//       "1Y": 7.4,
//       "3Y": 11.7,
//       "5Y": 11.3
//     },
//     "type": "Hybrid FoF (Arbitrage + Debt)"
//   },
//   {
//     "id": 21,
//     "category": "high_returns",
//     "name": "Invesco India PSU Equity Fund Growth",
//     "logo": "/assets/images/icons/invesco.svg",
//     "fundSize": 1390.5,
//     "returns": {
//       "1Y": -6.63,
//       "3Y": 32.66,
//       "5Y": 29.16
//     },
//     "type": "Equity – Sectoral (PSU)"
//   },
//   {
//     "id": 22,
//     "category": "high_returns",
//     "name": "Motilal Oswal Midcap Regular Growth",
//     "logo": "/assets/images/icons/motilal.svg",
//     "fundSize": 33608.53,
//     "returns": {
//       "1Y": 3.41,
//       "3Y": 29.72,
//       "5Y": 34.67
//     },
//     "type": "Equity – Mid Cap"
//   },
//   {
//     "id": 23,
//     "category": "high_returns",
//     "name": "Invesco India Infrastructure Fund Growth",
//     "logo": "/assets/images/icons/invesco.svg",
//     "fundSize": 1569.37,
//     "returns": {
//       "1Y": -2.27,
//       "3Y": 27.96,
//       "5Y": 30.75
//     },
//     "type": "Equity – Sectoral (Infrastructure)"
//   },
//   {
//     "id": 24,
//     "category": "sip100",
//     "name": "ICICI Prudential Infrastructure Fund Direct Plan IDCW Payout",
//     "logo": "/assets/images/icons/icici.svg",
//     "fundSize": 6989.56,
//     "returns": {
//       "1Y": 40.76,
//       "3Y": 35.44,
//       "5Y": 32.73
//     },
//     "type": "Equity - Sectoral / Thematic"
//   },
//   {
//     "id": 25,
//     "category": "sip100",
//     "name": "Aditya Birla Sun Life PSU Equity Fund Direct Payout of IDCW Payout",
//     "logo": "/assets/images/icons/birla.svg",
//     "fundSize": 5531.87,
//     "returns": {
//       "1Y": 31.83,
//       "3Y": 36.30,
//       "5Y": 0
//     },
//     "type": "Equity - Sectoral / Thematic"
//   },
//   {
//     "id": 26,
//     "category": "sip100",
//     "name": "ICICI Prudential Infrastructure Fund Direct Plan IDCW Reinvestment",
//     "logo": "/assets/images/icons/icici.svg",
//     "fundSize": 6989.56,
//     "returns": {
//       "1Y": 40.76,
//       "3Y": 35.44,
//       "5Y": 32.73
//     },
//     "type": "Equity - Sectoral / Thematic"
//   },
//   {
//     "id": 27,
//     "category": "sip500",
//     "name": "Motilal Oswal Midcap Fund Direct IDCW Reinvestment/Reinvestment Reinvestment",
//     "logo": "/assets/images/icons/motilal.svg",
//     "fundSize": 22897.62,
//     "returns": {
//       "1Y": 64.91,
//       "3Y": 37.27,
//       "5Y": 34.45
//     },
//     "type": "Equity - Mid Cap Fund"
//   },
//   {
//     "id": 28,
//     "category": "sip500",
//     "name": "SBI PSU Fund Direct Plan IDCW Payout",
//     "logo": "/assets/images/icons/sbi.svg",
//     "fundSize": 4686.10,
//     "returns": {
//       "1Y": 44.97,
//       "3Y": 37.73,
//       "5Y": 27.33
//     },
//     "type": "Equity - Sectoral / Thematic"
//   },
//   {
//     "id": 29,
//     "category": "sip500",
//     "name": "Motilal Oswal Midcap Fund Direct IDCW Payout/Payout Payout",
//     "logo": "/assets/images/icons/motilal.svg",
//     "fundSize": 22897.62,
//     "returns": {
//       "1Y": 64.91,
//       "3Y": 37.27,
//       "5Y": 34.45
//     },
//     "type": "Equity - Mid Cap Fund"
//   },
//   {
//     "id": 30,
//     "category": "sip500",
//     "name": "SBI PSU Fund Direct Plan IDCW Reinvestment",
//     "logo": "/assets/images/icons/sbi.svg",
//     "fundSize": 4686.10,
//     "returns": {
//       "1Y": 44.97,
//       "3Y": 37.73,
//       "5Y": 27.33
//     },
//     "type": "Equity - Sectoral / Thematic"
//   },
// ];