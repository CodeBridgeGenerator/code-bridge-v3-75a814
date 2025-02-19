const assert = require("assert");
const app = require("../../src/app");

describe("backendApps service", () => {
  let thisService;
  let backendAppCreated;

  beforeEach(async () => {
    thisService = await app.service("backendApps");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (backendApps)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","name":"new value","environment":"aasdfasdfasdfadsfadfa","isDefault":true,"port":"new value","url":"new value"};

    beforeEach(async () => {
      backendAppCreated = await thisService.create(options);
    });

    it("should create a new backendApp", () => {
      assert.strictEqual(backendAppCreated.projectId, options.projectId);
assert.strictEqual(backendAppCreated.name, options.name);
assert.strictEqual(backendAppCreated.environment, options.environment);
assert.strictEqual(backendAppCreated.isDefault, options.isDefault);
assert.strictEqual(backendAppCreated.port, options.port);
assert.strictEqual(backendAppCreated.url, options.url);
    });
  });

  describe("#get", () => {
    it("should retrieve a backendApp by ID", async () => {
      const retrieved = await thisService.get(backendAppCreated._id);
      assert.strictEqual(retrieved._id, backendAppCreated._id);
    });
  });

  describe("#update", () => {
    let backendAppUpdated;
    const options = {"projectId":"345345345345345345345","name":"updated value","environment":"345345345345345345345","isDefault":false,"port":"updated value","url":"updated value"};

    beforeEach(async () => {
      backendAppUpdated = await thisService.update(backendAppCreated._id, options);
    });

    it("should update an existing backendApp ", async () => {
      assert.strictEqual(backendAppUpdated.projectId, options.projectId);
assert.strictEqual(backendAppUpdated.name, options.name);
assert.strictEqual(backendAppUpdated.environment, options.environment);
assert.strictEqual(backendAppUpdated.isDefault, options.isDefault);
assert.strictEqual(backendAppUpdated.port, options.port);
assert.strictEqual(backendAppUpdated.url, options.url);
    });
  });

  describe("#delete", () => {
  let backendAppDeleted;
    beforeEach(async () => {
      backendAppDeleted = await thisService.remove(backendAppCreated._id);
    });

    it("should delete a backendApp", async () => {
      assert.strictEqual(backendAppDeleted._id, backendAppCreated._id);
    });
  });
});