const assert = require("assert");
const app = require("../../src/app");

describe("sharing service", () => {
  let thisService;
  let sharingCreated;

  beforeEach(async () => {
    thisService = await app.service("sharing");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (sharing)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","policyName":"new value"};

    beforeEach(async () => {
      sharingCreated = await thisService.create(options);
    });

    it("should create a new sharing", () => {
      assert.strictEqual(sharingCreated.projectId, options.projectId);
assert.strictEqual(sharingCreated.policyName, options.policyName);
    });
  });

  describe("#get", () => {
    it("should retrieve a sharing by ID", async () => {
      const retrieved = await thisService.get(sharingCreated._id);
      assert.strictEqual(retrieved._id, sharingCreated._id);
    });
  });

  describe("#update", () => {
    let sharingUpdated;
    const options = {"projectId":"345345345345345345345","policyName":"updated value"};

    beforeEach(async () => {
      sharingUpdated = await thisService.update(sharingCreated._id, options);
    });

    it("should update an existing sharing ", async () => {
      assert.strictEqual(sharingUpdated.projectId, options.projectId);
assert.strictEqual(sharingUpdated.policyName, options.policyName);
    });
  });

  describe("#delete", () => {
  let sharingDeleted;
    beforeEach(async () => {
      sharingDeleted = await thisService.remove(sharingCreated._id);
    });

    it("should delete a sharing", async () => {
      assert.strictEqual(sharingDeleted._id, sharingCreated._id);
    });
  });
});