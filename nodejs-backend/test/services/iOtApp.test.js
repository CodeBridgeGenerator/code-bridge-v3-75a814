const assert = require("assert");
const app = require("../../src/app");

describe("iOtApp service", () => {
  let thisService;
  let iOtAppCreated;

  beforeEach(async () => {
    thisService = await app.service("iOtApp");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (iOtApp)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","name":"new value","environment":"aasdfasdfasdfadsfadfa","isDefault":true,"port":"new value","url":"new value"};

    beforeEach(async () => {
      iOtAppCreated = await thisService.create(options);
    });

    it("should create a new iOtApp", () => {
      assert.strictEqual(iOtAppCreated.projectId, options.projectId);
assert.strictEqual(iOtAppCreated.name, options.name);
assert.strictEqual(iOtAppCreated.environment, options.environment);
assert.strictEqual(iOtAppCreated.isDefault, options.isDefault);
assert.strictEqual(iOtAppCreated.port, options.port);
assert.strictEqual(iOtAppCreated.url, options.url);
    });
  });

  describe("#get", () => {
    it("should retrieve a iOtApp by ID", async () => {
      const retrieved = await thisService.get(iOtAppCreated._id);
      assert.strictEqual(retrieved._id, iOtAppCreated._id);
    });
  });

  describe("#update", () => {
    let iOtAppUpdated;
    const options = {"projectId":"345345345345345345345","name":"updated value","environment":"345345345345345345345","isDefault":false,"port":"updated value","url":"updated value"};

    beforeEach(async () => {
      iOtAppUpdated = await thisService.update(iOtAppCreated._id, options);
    });

    it("should update an existing iOtApp ", async () => {
      assert.strictEqual(iOtAppUpdated.projectId, options.projectId);
assert.strictEqual(iOtAppUpdated.name, options.name);
assert.strictEqual(iOtAppUpdated.environment, options.environment);
assert.strictEqual(iOtAppUpdated.isDefault, options.isDefault);
assert.strictEqual(iOtAppUpdated.port, options.port);
assert.strictEqual(iOtAppUpdated.url, options.url);
    });
  });

  describe("#delete", () => {
  let iOtAppDeleted;
    beforeEach(async () => {
      iOtAppDeleted = await thisService.remove(iOtAppCreated._id);
    });

    it("should delete a iOtApp", async () => {
      assert.strictEqual(iOtAppDeleted._id, iOtAppCreated._id);
    });
  });
});