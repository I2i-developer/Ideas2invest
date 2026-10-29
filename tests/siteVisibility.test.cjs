const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { pathToFileURL } = require('node:url');
const visibility = require('../src/config/siteFeatures.cjs');

(async () => {
  assert.equal(visibility.siteFeatures.financialRiskMeter, false);
  for (const suffix of ['', '/', '?source=old-link', '#results', '/results']) {
    assert.equal(visibility.isPublicRoute('/calculators/financial-risk-meter' + suffix), false);
  }
  for (const route of ['/', '/calculators', '/calculators/goal-sip', '/calculators/sip', '/blogs', '/calculators/financial-risk-meter-other']) {
    assert.equal(visibility.isPublicRoute(route), true);
  }
  const config = (await import(pathToFileURL(path.resolve('next.config.mjs')).href)).default;
  const redirects = await config.redirects();
  assert.deepEqual(redirects, [{ source: '/calculators/financial-risk-meter/:path*', destination: '/calculators', permanent: false }]);
  assert.ok(require('../next-sitemap.config.js').exclude.includes('/calculators/financial-risk-meter'));

  // Exercise restoration using an isolated copy; never alter the real visibility control.
  const restored = { module: { exports: {} } };
  vm.runInNewContext(fs.readFileSync(path.resolve('src/config/siteFeatures.cjs'), 'utf8').replace('financialRiskMeter: false', 'financialRiskMeter: true'), restored);
  assert.equal(restored.module.exports.hiddenRoutes.length, 0);
  assert.equal(restored.module.exports.isPublicRoute('/calculators/financial-risk-meter'), true);
  console.log('Visibility checks passed: hidden routes, temporary redirects, sitemap exclusion and reversible restoration.');
})().catch(error => { console.error(error); process.exitCode = 1; });
