const assert = require("assert");
const app = require("../../src/app");

describe("loginTime service", () => {
  let thisService;
  let loginTimeCreated;

  beforeEach(async () => {
    thisService = await app.service("loginTime");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (loginTime)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","policyName":"new value","startTime":1739962177962,"endTime":1739962177962,"holidays":1739962177962};

    beforeEach(async () => {
      loginTimeCreated = await thisService.create(options);
    });

    it("should create a new loginTime", () => {
      assert.strictEqual(loginTimeCreated.projectId, options.projectId);
assert.strictEqual(loginTimeCreated.policyName, options.policyName);
assert.strictEqual(loginTimeCreated.startTime, options.startTime);
assert.strictEqual(loginTimeCreated.endTime, options.endTime);
assert.strictEqual(loginTimeCreated.holidays, options.holidays);
    });
  });

  describe("#get", () => {
    it("should retrieve a loginTime by ID", async () => {
      const retrieved = await thisService.get(loginTimeCreated._id);
      assert.strictEqual(retrieved._id, loginTimeCreated._id);
    });
  });

  describe("#update", () => {
    let loginTimeUpdated;
    const options = {"projectId":"345345345345345345345","policyName":"updated value","startTime":null,"endTime":null,"holidays":null};

    beforeEach(async () => {
      loginTimeUpdated = await thisService.update(loginTimeCreated._id, options);
    });

    it("should update an existing loginTime ", async () => {
      assert.strictEqual(loginTimeUpdated.projectId, options.projectId);
assert.strictEqual(loginTimeUpdated.policyName, options.policyName);
assert.strictEqual(loginTimeUpdated.startTime, options.startTime);
assert.strictEqual(loginTimeUpdated.endTime, options.endTime);
assert.strictEqual(loginTimeUpdated.holidays, options.holidays);
    });
  });

  describe("#delete", () => {
  let loginTimeDeleted;
    beforeEach(async () => {
      loginTimeDeleted = await thisService.remove(loginTimeCreated._id);
    });

    it("should delete a loginTime", async () => {
      assert.strictEqual(loginTimeDeleted._id, loginTimeCreated._id);
    });
  });
});