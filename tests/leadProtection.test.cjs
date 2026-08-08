const assert = require("assert");
const {
  getLeadSubject,
  processLeadSubmission,
  resetLeadProtectionState,
} = require("../src/utils/leadProtection");

function mockReq(ip = "203.0.113.10") {
  return {
    headers: {
      "x-forwarded-for": ip,
      "user-agent": "node-test-agent",
    },
    socket: {
      remoteAddress: ip,
    },
  };
}

function validLead(overrides = {}) {
  return {
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    phone: "9876543210",
    serviceInterest: "Mutual Funds",
    message: "I want to start SIP investments and review mutual fund options for long-term goals.",
    submittedPage: "https://www.ideas2invest.com/contact",
    renderedAt: Date.now() - 5000,
    companyWebsite: "",
    ...overrides,
  };
}

function processLead(input, ip) {
  return processLeadSubmission({
    input,
    req: mockReq(ip),
    source: "test",
  });
}

resetLeadProtectionState();
let result = processLead(validLead(), "203.0.113.11");
assert.equal(result.analysis.category, "relevant", "valid investment lead should be relevant");
assert.equal(result.validationErrors.length, 0, "valid lead should pass validation");

resetLeadProtectionState();
result = processLead(validLead({ companyWebsite: "https://spam.example" }), "203.0.113.12");
assert.equal(result.analysis.category, "spam", "honeypot lead should be spam");

resetLeadProtectionState();
result = processLead(validLead({ renderedAt: Date.now() - 500 }), "203.0.113.13");
assert.equal(result.analysis.category, "spam", "too-fast lead should be spam");

resetLeadProtectionState();
result = processLead(
  validLead({
    message: "See https://one.example.com https://two.example.com https://three.example.com",
  }),
  "203.0.113.14"
);
assert.equal(result.analysis.category, "spam", "excessive links should be spam");

resetLeadProtectionState();
result = processLead(
  validLead({
    message: "We sell casino betting traffic and backlink packages.",
  }),
  "203.0.113.15"
);
assert.equal(result.analysis.category, "spam", "spam keyword lead should be spam");

resetLeadProtectionState();
result = processLead(
  validLead({
    name: "Amit",
    serviceInterest: "General Enquiry",
    message: "Please call me back regarding my savings options.",
  }),
  "203.0.113.16"
);
assert.equal(result.analysis.category, "review", "generic but plausible lead should need review");

resetLeadProtectionState();
result = processLead(validLead(), "203.0.113.17");
assert.match(
  getLeadSubject(result.lead, result.analysis),
  /^New Relevant Lead: Mutual Funds - Rahul Sharma$/,
  "relevant lead subject should include service and name"
);

resetLeadProtectionState();
result = processLead(validLead({ phone: "12345" }), "203.0.113.18");
assert.ok(result.validationErrors.length > 0, "invalid phone should fail validation");

console.log("Lead protection tests passed.");
