// Temporary due-diligence controls. Re-enable only after review, then rebuild/deploy.
const siteFeatures = Object.freeze({
  financialRiskMeter: false,
  externalReviews: false,
  aiAssistant: false,
});

const hiddenRoutes = siteFeatures.financialRiskMeter
  ? []
  : ['/calculators/financial-risk-meter'];

function isPublicRoute(value = '') {
  const pathname = value.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  return !hiddenRoutes.some(route => pathname === route || pathname.startsWith(route + '/'));
}

module.exports = { siteFeatures, hiddenRoutes, isPublicRoute };
