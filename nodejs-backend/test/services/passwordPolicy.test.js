const assert = require("assert");
const app = require("../../src/app");

describe("passwordPolicy service", () => {
  let thisService;
  let passwordPolicyCreated;

  beforeEach(async () => {
    thisService = await app.service("passwordPolicy");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (passwordPolicy)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","policyName":"new value","passwordLength":23,"capitalLetters":23,"specialCharacters":23,"numbers":23,"allowOldPasswordReuse":23,"isDefault":true,"passwordRenewalTimeline":23};

    beforeEach(async () => {
      passwordPolicyCreated = await thisService.create(options);
    });

    it("should create a new passwordPolicy", () => {
      assert.strictEqual(passwordPolicyCreated.projectId, options.projectId);
assert.strictEqual(passwordPolicyCreated.policyName, options.policyName);
assert.strictEqual(passwordPolicyCreated.passwordLength, options.passwordLength);
assert.strictEqual(passwordPolicyCreated.capitalLetters, options.capitalLetters);
assert.strictEqual(passwordPolicyCreated.specialCharacters, options.specialCharacters);
assert.strictEqual(passwordPolicyCreated.numbers, options.numbers);
assert.strictEqual(passwordPolicyCreated.allowOldPasswordReuse, options.allowOldPasswordReuse);
assert.strictEqual(passwordPolicyCreated.isDefault, options.isDefault);
assert.strictEqual(passwordPolicyCreated.passwordRenewalTimeline, options.passwordRenewalTimeline);
    });
  });

  describe("#get", () => {
    it("should retrieve a passwordPolicy by ID", async () => {
      const retrieved = await thisService.get(passwordPolicyCreated._id);
      assert.strictEqual(retrieved._id, passwordPolicyCreated._id);
    });
  });

  describe("#update", () => {
    let passwordPolicyUpdated;
    const options = {"projectId":"345345345345345345345","policyName":"updated value","passwordLength":100,"capitalLetters":100,"specialCharacters":100,"numbers":100,"allowOldPasswordReuse":100,"isDefault":false,"passwordRenewalTimeline":100};

    beforeEach(async () => {
      passwordPolicyUpdated = await thisService.update(passwordPolicyCreated._id, options);
    });

    it("should update an existing passwordPolicy ", async () => {
      assert.strictEqual(passwordPolicyUpdated.projectId, options.projectId);
assert.strictEqual(passwordPolicyUpdated.policyName, options.policyName);
assert.strictEqual(passwordPolicyUpdated.passwordLength, options.passwordLength);
assert.strictEqual(passwordPolicyUpdated.capitalLetters, options.capitalLetters);
assert.strictEqual(passwordPolicyUpdated.specialCharacters, options.specialCharacters);
assert.strictEqual(passwordPolicyUpdated.numbers, options.numbers);
assert.strictEqual(passwordPolicyUpdated.allowOldPasswordReuse, options.allowOldPasswordReuse);
assert.strictEqual(passwordPolicyUpdated.isDefault, options.isDefault);
assert.strictEqual(passwordPolicyUpdated.passwordRenewalTimeline, options.passwordRenewalTimeline);
    });
  });

  describe("#delete", () => {
  let passwordPolicyDeleted;
    beforeEach(async () => {
      passwordPolicyDeleted = await thisService.remove(passwordPolicyCreated._id);
    });

    it("should delete a passwordPolicy", async () => {
      assert.strictEqual(passwordPolicyDeleted._id, passwordPolicyCreated._id);
    });
  });
});