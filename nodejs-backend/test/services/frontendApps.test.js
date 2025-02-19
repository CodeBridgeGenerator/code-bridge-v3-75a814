const assert = require("assert");
const app = require("../../src/app");

describe("frontendApps service", () => {
  let thisService;
  let frontendAppCreated;

  beforeEach(async () => {
    thisService = await app.service("frontendApps");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (frontendApps)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","name":"new value","environment":"aasdfasdfasdfadsfadfa","isDefault":true,"port":"new value","url":"new value"};

    beforeEach(async () => {
      frontendAppCreated = await thisService.create(options);
    });

    it("should create a new frontendApp", () => {
      assert.strictEqual(frontendAppCreated.projectId, options.projectId);
assert.strictEqual(frontendAppCreated.name, options.name);
assert.strictEqual(frontendAppCreated.environment, options.environment);
assert.strictEqual(frontendAppCreated.isDefault, options.isDefault);
assert.strictEqual(frontendAppCreated.port, options.port);
assert.strictEqual(frontendAppCreated.url, options.url);
    });
  });

  describe("#get", () => {
    it("should retrieve a frontendApp by ID", async () => {
      const retrieved = await thisService.get(frontendAppCreated._id);
      assert.strictEqual(retrieved._id, frontendAppCreated._id);
    });
  });

  describe("#update", () => {
    let frontendAppUpdated;
    const options = {"projectId":"345345345345345345345","name":"updated value","environment":"345345345345345345345","isDefault":false,"port":"updated value","url":"updated value"};

    beforeEach(async () => {
      frontendAppUpdated = await thisService.update(frontendAppCreated._id, options);
    });

    it("should update an existing frontendApp ", async () => {
      assert.strictEqual(frontendAppUpdated.projectId, options.projectId);
assert.strictEqual(frontendAppUpdated.name, options.name);
assert.strictEqual(frontendAppUpdated.environment, options.environment);
assert.strictEqual(frontendAppUpdated.isDefault, options.isDefault);
assert.strictEqual(frontendAppUpdated.port, options.port);
assert.strictEqual(frontendAppUpdated.url, options.url);
    });
  });

  describe("#delete", () => {
  let frontendAppDeleted;
    beforeEach(async () => {
      frontendAppDeleted = await thisService.remove(frontendAppCreated._id);
    });

    it("should delete a frontendApp", async () => {
      assert.strictEqual(frontendAppDeleted._id, frontendAppCreated._id);
    });
  });
});