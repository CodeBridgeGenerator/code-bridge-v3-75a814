const assert = require("assert");
const app = require("../../src/app");

describe("firebase service", () => {
  let thisService;
  let firebaseCreated;

  beforeEach(async () => {
    thisService = await app.service("firebase");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (firebase)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","name":"new value","environment":"aasdfasdfasdfadsfadfa","isDefault":true};

    beforeEach(async () => {
      firebaseCreated = await thisService.create(options);
    });

    it("should create a new firebase", () => {
      assert.strictEqual(firebaseCreated.projectId, options.projectId);
assert.strictEqual(firebaseCreated.name, options.name);
assert.strictEqual(firebaseCreated.environment, options.environment);
assert.strictEqual(firebaseCreated.isDefault, options.isDefault);
    });
  });

  describe("#get", () => {
    it("should retrieve a firebase by ID", async () => {
      const retrieved = await thisService.get(firebaseCreated._id);
      assert.strictEqual(retrieved._id, firebaseCreated._id);
    });
  });

  describe("#update", () => {
    let firebaseUpdated;
    const options = {"projectId":"345345345345345345345","name":"updated value","environment":"345345345345345345345","isDefault":false};

    beforeEach(async () => {
      firebaseUpdated = await thisService.update(firebaseCreated._id, options);
    });

    it("should update an existing firebase ", async () => {
      assert.strictEqual(firebaseUpdated.projectId, options.projectId);
assert.strictEqual(firebaseUpdated.name, options.name);
assert.strictEqual(firebaseUpdated.environment, options.environment);
assert.strictEqual(firebaseUpdated.isDefault, options.isDefault);
    });
  });

  describe("#delete", () => {
  let firebaseDeleted;
    beforeEach(async () => {
      firebaseDeleted = await thisService.remove(firebaseCreated._id);
    });

    it("should delete a firebase", async () => {
      assert.strictEqual(firebaseDeleted._id, firebaseCreated._id);
    });
  });
});