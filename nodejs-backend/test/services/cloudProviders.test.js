const assert = require("assert");
const app = require("../../src/app");

describe("cloudProviders service", () => {
  let thisService;
  let cloudProviderCreated;

  beforeEach(async () => {
    thisService = await app.service("cloudProviders");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (cloudProviders)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","providers":"new value","isDefault":true};

    beforeEach(async () => {
      cloudProviderCreated = await thisService.create(options);
    });

    it("should create a new cloudProvider", () => {
      assert.strictEqual(cloudProviderCreated.projectId, options.projectId);
assert.strictEqual(cloudProviderCreated.providers, options.providers);
assert.strictEqual(cloudProviderCreated.isDefault, options.isDefault);
    });
  });

  describe("#get", () => {
    it("should retrieve a cloudProvider by ID", async () => {
      const retrieved = await thisService.get(cloudProviderCreated._id);
      assert.strictEqual(retrieved._id, cloudProviderCreated._id);
    });
  });

  describe("#update", () => {
    let cloudProviderUpdated;
    const options = {"projectId":"345345345345345345345","providers":"updated value","isDefault":false};

    beforeEach(async () => {
      cloudProviderUpdated = await thisService.update(cloudProviderCreated._id, options);
    });

    it("should update an existing cloudProvider ", async () => {
      assert.strictEqual(cloudProviderUpdated.projectId, options.projectId);
assert.strictEqual(cloudProviderUpdated.providers, options.providers);
assert.strictEqual(cloudProviderUpdated.isDefault, options.isDefault);
    });
  });

  describe("#delete", () => {
  let cloudProviderDeleted;
    beforeEach(async () => {
      cloudProviderDeleted = await thisService.remove(cloudProviderCreated._id);
    });

    it("should delete a cloudProvider", async () => {
      assert.strictEqual(cloudProviderDeleted._id, cloudProviderCreated._id);
    });
  });
});