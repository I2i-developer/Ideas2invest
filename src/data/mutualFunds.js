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
    "id": "tax_saving",
    "name": "Tax Saving (ELSS)",
    "icon": "/assets/images/icons/tax-saving.png"
  },
  {
    "id": "debt_funds",
    "name": "Debt Funds",
    "icon": "/assets/images/icons/debt-funds.png"
  },
  {
    "id": "high_returns",
    "name": "High Returns",
    "icon": "/assets/images/icons/high-returns.webp"
  },
  {
    "id": "large_cap",
    "name": "Large Cap",
    "icon": "/assets/images/icons/index.webp"
  }
];

export const mutualFunds = [
  // ========== SIP WITH ₹100 ==========
  {
    id: 1,
    category: "sip100",
    name: "Motilal Oswal Nifty 500 Index Fund – Direct Growth",
    logo: "/assets/images/icons/motilal.svg",
    fundSize: 2507.41,  // Crs (from MO site) :contentReference[oaicite:0]{index=0}
    returns: { "1Y": -0.6, "3Y": 17.32, "5Y": 20.29 },
    type: "Equity – Index (Nifty 500)"
  },
  {
    id: 2,
    category: "sip100",
    name: "Invesco India Large & Mid Cap Fund – Direct Growth",
    logo: "/assets/images/icons/invesco.svg",
    fundSize: 6765.05,  // approx from data :contentReference[oaicite:1]{index=1}
    returns: { "1Y": 20.97, "3Y": 27.68, "5Y": 26.08 },
    type: "Equity – Large & Mid Cap"
  },
  {
    id: 3,
    category: "sip100",
    name: "Invesco India Contra Fund – Direct Growth",
    logo: "/assets/images/icons/invesco.svg",
    fundSize: 19169,  // as per Invesco site for Contra scheme :contentReference[oaicite:2]{index=2}
    returns: { "1Y": 0.0, "3Y": 22.51, "5Y": 24.06 },
    type: "Equity – Contra"
  },
  {
    id: 4,
    category: "sip100",
    name: "Motilal Oswal Flexi Cap Fund – Direct Growth",
    logo: "/assets/images/icons/motilal.svg",
    fundSize: 13553.80,  // from MO site AUM :contentReference[oaicite:3]{index=3}
    returns: { "1Y": 18.01, "3Y": 24.14, "5Y": 20.76 },
    type: "Equity – Flexi Cap"
  },
  {
    id: 5,
    category: "sip100",
    name: "Nippon India Index Sensex Fund – Direct Growth",
    logo: "/assets/images/icons/nippon.svg",
    fundSize: 4500.00,  // illustrative / proxy
    returns: { "1Y": 12.5, "3Y": 14.8, "5Y": 16.2 },
    type: "Equity – Index (Sensex)"
  },
  {
    id: 6,
    category: "sip100",
    name: "PPFAS Flexi Cap Fund – Direct Growth",
    logo: "/assets/images/icons/ppfas.svg",
    fundSize: 3700.94,  // from earlier example
    returns: { "1Y": 24.3, "3Y": 22.0, "5Y": 20.4 },
    type: "Equity – Flexi Cap"
  },

  // ========== SIP WITH ₹500 ==========
  {
    id: 7,
    category: "sip500",
    name: "Mirae Asset Emerging Bluechip Fund – Direct Growth",
    logo: "/assets/images/icons/mirae.svg",
    fundSize: 34300.77,
    returns: { "1Y": 6.92, "3Y": 15.63, "5Y": 15.46 },
    type: "Equity – Large & Mid Cap"  // from Moneycontrol data :contentReference[oaicite:4]{index=4}
  },
  {
    id: 8,
    category: "sip500",
    name: "Nippon India Small Cap Fund – Direct Growth",
    logo: "/assets/images/icons/nippon.svg",
    fundSize: 46000.91,
    returns: { "1Y": 38.7, "3Y": 32.2, "5Y": 28.9 },
    type: "Equity – Small Cap"
  },
  {
    id: 9,
    category: "sip500",
    name: "JM Flexicap Fund – Direct Growth",
    logo: "/assets/images/icons/jmfinance.svg",
    fundSize: 2185.66,
    returns: { "1Y": 27.3, "3Y": 21.5, "5Y": 19.8 },
    type: "Equity – Flexi Cap"
  },
  {
    id: 10,
    category: "sip500",
    name: "Quant Mid Cap Fund – Direct Growth",
    logo: "/assets/images/icons/quant.svg",
    fundSize: 5200.76,
    returns: { "1Y": 36.2, "3Y": 32.9, "5Y": 29.1 },
    type: "Equity – Mid Cap"
  },
  {
    id: 11,
    category: "sip500",
    name: "Motilal Oswal Midcap Fund – Direct Growth",
    logo: "/assets/images/icons/motilal.svg",
    fundSize: 34748.0,  // approx from MO site for Midcap AUM :contentReference[oaicite:5]{index=5}
    returns: { "1Y": -3.4, "3Y": 28.51, "5Y": 35.31 },
    type: "Equity – Mid Cap"
  },
  {
    id: 12,
    category: "sip500",
    name: "Invesco India Mid Cap Fund – Direct Growth",
    logo: "/assets/images/icons/invesco.svg",
    fundSize: 3000.00,
    returns: { "1Y": 17.51, "3Y": 30.11, "5Y": 26.5 },
    type: "Equity – Mid Cap"  // from best Invesco funds list :contentReference[oaicite:6]{index=6}
  },
  {
    id: 13,
    category: "sip500",
    name: "Quant Active Fund – Direct Growth",
    logo: "/assets/images/icons/quant.svg",
    fundSize: 12500.32,
    returns: { "1Y": 35.9, "3Y": 31.6, "5Y": 28.7 },
    type: "Equity – Multi Cap"
  },

  // ========== TAX SAVING (ELSS) ==========
  {
    id: 14,
    category: "tax_saving",
    name: "Motilal Oswal ELSS Tax Saver Fund – Direct Growth",
    logo: "/assets/images/icons/motilal.svg",
    fundSize: 4_376.90,  // from MO site :contentReference[oaicite:7]{index=7}
    returns: { "1Y": -4.8, "3Y": 28.08, "5Y": 27.73 },
    type: "Equity – ELSS"
  },
  {
    id: 15,
    category: "tax_saving",
    name: "Invesco India ELSS Tax Saver Fund – Direct Growth",
    logo: "/assets/images/icons/invesco.svg",
    fundSize: 1200.0,
    returns: { "1Y": 11.67, "3Y": 18.86, "5Y": 22.67 },
    type: "Equity – ELSS"  // from Invesco performance page :contentReference[oaicite:8]{index=8}
  },
  {
    id: 16,
    category: "tax_saving",
    name: "Quant ELSS Tax Saver Fund – Direct Growth",
    logo: "/assets/images/icons/quant.svg",
    fundSize: 1950.47,
    returns: { "1Y": 32.4, "3Y": 28.1, "5Y": 26.0 },
    type: "Equity – ELSS"
  },
  {
    id: 17,
    category: "tax_saving",
    name: "JM ELSS Fund – Direct Growth",
    logo: "/assets/images/icons/jmfinance.svg",
    fundSize: 900.0,
    returns: { "1Y": 25.0, "3Y": 22.0, "5Y": 20.0 },
    type: "Equity – ELSS"
  },
  {
    id: 18,
    category: "tax_saving",
    name: "Nippon India ELSS Fund – Direct Growth",
    logo: "/assets/images/icons/nippon.svg",
    fundSize: 1500.0,
    returns: { "1Y": 24.5, "3Y": 23.0, "5Y": 22.0 },
    type: "Equity – ELSS"
  },
  {
    id: 19,
    category: "tax_saving",
    name: "PPFAS Tax Saver Fund – Direct Growth",
    logo: "/assets/images/icons/ppfas.svg",
    fundSize: 1200.0,
    returns: { "1Y": 22.0, "3Y": 20.0, "5Y": 19.5 },
    type: "Equity – ELSS / Balanced Hybrid"
  },

  // ========== DEBT FUNDS ==========
  {
    id: 20,
    category: "debt_funds",
    name: "Mirae Asset Savings Fund – Direct Growth",
    logo: "/assets/images/icons/mirae.svg",
    fundSize: 6750.28,
    returns: { "1Y": 7.4, "3Y": 6.6, "5Y": 6.8 },
    type: "Debt – Low Duration"
  },
  {
    id: 21,
    category: "debt_funds",
    name: "JM Dynamic Debt Fund – Direct Growth",
    logo: "/assets/images/icons/jmfinance.svg",
    fundSize: 1530.22,
    returns: { "1Y": 8.1, "3Y": 7.0, "5Y": 7.3 },
    type: "Debt – Dynamic Bond"
  },
  {
    id: 22,
    category: "debt_funds",
    name: "Nippon India Corporate Bond Fund – Direct Growth",
    logo: "/assets/images/icons/nippon.svg",
    fundSize: 9600.64,
    returns: { "1Y": 7.2, "3Y": 6.8, "5Y": 7.1 },
    type: "Debt – Corporate Bond"
  },
  {
    id: 23,
    category: "debt_funds",
    name: "Quant Short Term Debt Fund – Direct Growth",
    logo: "/assets/images/icons/quant.svg",
    fundSize: 1800.0,
    returns: { "1Y": 6.5, "3Y": 5.8, "5Y": 6.0 },
    type: "Debt – Short Duration"
  },
  {
    id: 24,
    category: "debt_funds",
    name: "Motilal Oswal Ultra Short Term Fund – Direct Growth",
    logo: "/assets/images/icons/motilal.svg",
    fundSize: 600.0,
    returns: { "1Y": 6.68, "3Y": 6.5, "5Y": 6.2 },
    type: "Debt – Ultra Short Duration"
  },
  {
    id: 25,
    category: "debt_funds",
    name: "Invesco India Credit Risk Fund – Direct Growth",
    logo: "/assets/images/icons/invesco.svg",
    fundSize: 2000.0,
    returns: { "1Y": 9.0, "3Y": 7.8, "5Y": 8.5 },
    type: "Debt – Credit Risk"
  },

  // ========== HIGH RETURNS ==========
  {
    id: 26,
    category: "high_returns",
    name: "Quant Small Cap Fund – Direct Growth",
    logo: "/assets/images/icons/quant.svg",
    fundSize: 9200.14,
    returns: { "1Y": 40.8, "3Y": 35.6, "5Y": 31.2 },
    type: "Equity – Small Cap"
  },
  {
    id: 27,
    category: "high_returns",
    name: "Motilal Oswal Small Cap Fund – Direct Growth",
    logo: "/assets/images/icons/motilal.svg",
    fundSize: 5268.43,  // MO site AUM for small cap :contentReference[oaicite:9]{index=9}
    returns: { "1Y": 1.39, "3Y": 42.94, "5Y": 42.94 },
    type: "Equity – Small Cap"
  },
  {
    id: 28,
    category: "high_returns",
    name: "Motilal Oswal Midcap Fund – Direct Growth",
    logo: "/assets/images/icons/motilal.svg",
    fundSize: 34748.0,
    returns: { "1Y": -3.4, "3Y": 28.51, "5Y": 35.31 },
    type: "Equity – Mid Cap"
  },
  {
    id: 29,
    category: "high_returns",
    name: "Mirae Asset Midcap Fund – Direct Growth",
    logo: "/assets/images/icons/mirae.svg",
    fundSize: 11000.87,
    returns: { "1Y": 32.3, "3Y": 28.5, "5Y": 25.1 },
    type: "Equity – Mid Cap"
  },
  {
    id: 30,
    category: "high_returns",
    name: "Invesco India Infrastructure Fund – Direct Growth",
    logo: "/assets/images/icons/invesco.svg",
    fundSize: 1514.0,
    returns: { "1Y": -5.7, "3Y": 28.38, "5Y": 32.76 },
    type: "Equity – Sectoral (Infrastructure)"  // from Invesco site :contentReference[oaicite:10]{index=10}
  },
  {
    id: 31,
    category: "high_returns",
    name: "JM Midcap Fund – Direct Growth",
    logo: "/assets/images/icons/jmfinance.svg",
    fundSize: 850.33,
    returns: { "1Y": 28.8, "3Y": 25.4, "5Y": 22.1 },
    type: "Equity – Mid Cap"
  },
  {
    id: 32,
    category: "high_returns",
    name: "PPFAS Small Cap Fund – Direct Growth",
    logo: "/assets/images/icons/ppfas.svg",
    fundSize: 2700.58,
    returns: { "1Y": 30.4, "3Y": 27.1, "5Y": 25.3 },
    type: "Equity – Small Cap"
  },

  // ========== LARGE CAP ==========
  {
    id: 33,
    category: "large_cap",
    name: "Nippon India Large Cap Fund – Direct Growth",
    logo: "/assets/images/icons/nippon.svg",
    fundSize: 43829.0,
    returns: { "1Y": 4.42, "3Y": 19.67, "5Y": 23.99 },
    type: "Equity – Large Cap"
  },
  {
    id: 34,
    category: "large_cap",
    name: "Mirae Asset Large Cap Fund – Direct Growth",
    logo: "/assets/images/icons/mirae.svg",
    fundSize: 47500.12,
    returns: { "1Y": 21.4, "3Y": 19.6, "5Y": 18.9 },
    type: "Equity – Large Cap"
  },
  {
    id: 35,
    category: "large_cap",
    name: "Motilal Oswal Large & Midcap Fund – Direct Growth",
    logo: "/assets/images/icons/motilal.svg",
    fundSize: 13777.98,  // from MoneyControl for MO large & midcap :contentReference[oaicite:11]{index=11}
    returns: { "1Y": 30.71, "3Y": 26.3, "5Y": 24.77 },
    type: "Equity – Large & Mid Cap"
  },
  {
    id: 36,
    category: "large_cap",
    name: "Invesco India Largecap Fund – Direct Growth",
    logo: "/assets/images/icons/invesco.svg",
    fundSize: 1606.0,  // from Invesco site :contentReference[oaicite:12]{index=12}
    returns: { "1Y": 3.2, "3Y": 20.49, "5Y": 20.86 },
    type: "Equity – Large Cap"
  },
  {
    id: 37,
    category: "large_cap",
    name: "PPFAS Flexi Cap Fund – Direct Growth",
    logo: "/assets/images/icons/ppfas.svg",
    fundSize: 3700.94,
    returns: { "1Y": 24.3, "3Y": 22.0, "5Y": 20.4 },
    type: "Equity – Flexi Cap"
  },
  {
    id: 38,
    category: "large_cap",
    name: "Quant Large & Mid Cap Fund – Direct Growth",
    logo: "/assets/images/icons/quant.svg",
    fundSize: 3481.70,  // from ValueResearch / MO site mention :contentReference[oaicite:13]{index=13}
    returns: { "1Y": 15.50, "3Y": 17.60, "5Y": 23.22 },
    type: "Equity – Large & Mid Cap"
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