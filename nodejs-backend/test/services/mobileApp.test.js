const assert = require("assert");
const app = require("../../src/app");

describe("mobileApp service", () => {
  let thisService;
  let mobileAppCreated;

  beforeEach(async () => {
    thisService = await app.service("mobileApp");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (mobileApp)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","name":"new value","environment":"aasdfasdfasdfadsfadfa","isDefault":true,"port":"new value","url":"new value"};

    beforeEach(async () => {
      mobileAppCreated = await thisService.create(options);
    });

    it("should create a new mobileApp", () => {
      assert.strictEqual(mobileAppCreated.projectId, options.projectId);
assert.strictEqual(mobileAppCreated.name, options.name);
assert.strictEqual(mobileAppCreated.environment, options.environment);
assert.strictEqual(mobileAppCreated.isDefault, options.isDefault);
assert.strictEqual(mobileAppCreated.port, options.port);
assert.strictEqual(mobileAppCreated.url, options.url);
    });
  });

  describe("#get", () => {
    it("should retrieve a mobileApp by ID", async () => {
      const retrieved = await thisService.get(mobileAppCreated._id);
      assert.strictEqual(retrieved._id, mobileAppCreated._id);
    });
  });

  describe("#update", () => {
    let mobileAppUpdated;
    const options = {"projectId":"345345345345345345345","name":"updated value","environment":"345345345345345345345","isDefault":false,"port":"updated value","url":"updated value"};

    beforeEach(async () => {
      mobileAppUpdated = await thisService.update(mobileAppCreated._id, options);
    });

    it("should update an existing mobileApp ", async () => {
      assert.strictEqual(mobileAppUpdated.projectId, options.projectId);
assert.strictEqual(mobileAppUpdated.name, options.name);
assert.strictEqual(mobileAppUpdated.environment, options.environment);
assert.strictEqual(mobileAppUpdated.isDefault, options.isDefault);
assert.strictEqual(mobileAppUpdated.port, options.port);
assert.strictEqual(mobileAppUpdated.url, options.url);
    });
  });

  describe("#delete", () => {
  let mobileAppDeleted;
    beforeEach(async () => {
      mobileAppDeleted = await thisService.remove(mobileAppCreated._id);
    });

    it("should delete a mobileApp", async () => {
      assert.strictEqual(mobileAppDeleted._id, mobileAppCreated._id);
    });
  });
});