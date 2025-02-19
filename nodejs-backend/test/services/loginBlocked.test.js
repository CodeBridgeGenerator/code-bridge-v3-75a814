const assert = require("assert");
const app = require("../../src/app");

describe("loginBlocked service", () => {
  let thisService;
  let loginBlockedCreated;

  beforeEach(async () => {
    thisService = await app.service("loginBlocked");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (loginBlocked)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","policyName":"new value","blockedIp":"new value","startBlockedIp":"new value","endBlockedIp":"new value"};

    beforeEach(async () => {
      loginBlockedCreated = await thisService.create(options);
    });

    it("should create a new loginBlocked", () => {
      assert.strictEqual(loginBlockedCreated.projectId, options.projectId);
assert.strictEqual(loginBlockedCreated.policyName, options.policyName);
assert.strictEqual(loginBlockedCreated.blockedIp, options.blockedIp);
assert.strictEqual(loginBlockedCreated.startBlockedIp, options.startBlockedIp);
assert.strictEqual(loginBlockedCreated.endBlockedIp, options.endBlockedIp);
    });
  });

  describe("#get", () => {
    it("should retrieve a loginBlocked by ID", async () => {
      const retrieved = await thisService.get(loginBlockedCreated._id);
      assert.strictEqual(retrieved._id, loginBlockedCreated._id);
    });
  });

  describe("#update", () => {
    let loginBlockedUpdated;
    const options = {"projectId":"345345345345345345345","policyName":"updated value","blockedIp":"updated value","startBlockedIp":"updated value","endBlockedIp":"updated value"};

    beforeEach(async () => {
      loginBlockedUpdated = await thisService.update(loginBlockedCreated._id, options);
    });

    it("should update an existing loginBlocked ", async () => {
      assert.strictEqual(loginBlockedUpdated.projectId, options.projectId);
assert.strictEqual(loginBlockedUpdated.policyName, options.policyName);
assert.strictEqual(loginBlockedUpdated.blockedIp, options.blockedIp);
assert.strictEqual(loginBlockedUpdated.startBlockedIp, options.startBlockedIp);
assert.strictEqual(loginBlockedUpdated.endBlockedIp, options.endBlockedIp);
    });
  });

  describe("#delete", () => {
  let loginBlockedDeleted;
    beforeEach(async () => {
      loginBlockedDeleted = await thisService.remove(loginBlockedCreated._id);
    });

    it("should delete a loginBlocked", async () => {
      assert.strictEqual(loginBlockedDeleted._id, loginBlockedCreated._id);
    });
  });
});