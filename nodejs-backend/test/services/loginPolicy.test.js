const assert = require("assert");
const app = require("../../src/app");

describe("loginPolicy service", () => {
  let thisService;
  let loginPolicyCreated;

  beforeEach(async () => {
    thisService = await app.service("loginPolicy");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (loginPolicy)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","policyName":"new value","useEmail":true,"useGoogle":true,"useStaffId":true,"useLinkedIn":true,"isDefault":true,"googleAuthenticator":true,"msAuthenticator":true};

    beforeEach(async () => {
      loginPolicyCreated = await thisService.create(options);
    });

    it("should create a new loginPolicy", () => {
      assert.strictEqual(loginPolicyCreated.projectId, options.projectId);
assert.strictEqual(loginPolicyCreated.policyName, options.policyName);
assert.strictEqual(loginPolicyCreated.useEmail, options.useEmail);
assert.strictEqual(loginPolicyCreated.useGoogle, options.useGoogle);
assert.strictEqual(loginPolicyCreated.useStaffId, options.useStaffId);
assert.strictEqual(loginPolicyCreated.useLinkedIn, options.useLinkedIn);
assert.strictEqual(loginPolicyCreated.isDefault, options.isDefault);
assert.strictEqual(loginPolicyCreated.googleAuthenticator, options.googleAuthenticator);
assert.strictEqual(loginPolicyCreated.msAuthenticator, options.msAuthenticator);
    });
  });

  describe("#get", () => {
    it("should retrieve a loginPolicy by ID", async () => {
      const retrieved = await thisService.get(loginPolicyCreated._id);
      assert.strictEqual(retrieved._id, loginPolicyCreated._id);
    });
  });

  describe("#update", () => {
    let loginPolicyUpdated;
    const options = {"projectId":"345345345345345345345","policyName":"updated value","useEmail":false,"useGoogle":false,"useStaffId":false,"useLinkedIn":false,"isDefault":false,"googleAuthenticator":false,"msAuthenticator":false};

    beforeEach(async () => {
      loginPolicyUpdated = await thisService.update(loginPolicyCreated._id, options);
    });

    it("should update an existing loginPolicy ", async () => {
      assert.strictEqual(loginPolicyUpdated.projectId, options.projectId);
assert.strictEqual(loginPolicyUpdated.policyName, options.policyName);
assert.strictEqual(loginPolicyUpdated.useEmail, options.useEmail);
assert.strictEqual(loginPolicyUpdated.useGoogle, options.useGoogle);
assert.strictEqual(loginPolicyUpdated.useStaffId, options.useStaffId);
assert.strictEqual(loginPolicyUpdated.useLinkedIn, options.useLinkedIn);
assert.strictEqual(loginPolicyUpdated.isDefault, options.isDefault);
assert.strictEqual(loginPolicyUpdated.googleAuthenticator, options.googleAuthenticator);
assert.strictEqual(loginPolicyUpdated.msAuthenticator, options.msAuthenticator);
    });
  });

  describe("#delete", () => {
  let loginPolicyDeleted;
    beforeEach(async () => {
      loginPolicyDeleted = await thisService.remove(loginPolicyCreated._id);
    });

    it("should delete a loginPolicy", async () => {
      assert.strictEqual(loginPolicyDeleted._id, loginPolicyCreated._id);
    });
  });
});