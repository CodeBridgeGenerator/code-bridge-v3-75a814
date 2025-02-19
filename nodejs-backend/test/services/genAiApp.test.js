const assert = require("assert");
const app = require("../../src/app");

describe("genAiApp service", () => {
  let thisService;
  let genAiAppCreated;

  beforeEach(async () => {
    thisService = await app.service("genAiApp");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (genAiApp)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","name":"new value","environment":"aasdfasdfasdfadsfadfa","isDefault":true};

    beforeEach(async () => {
      genAiAppCreated = await thisService.create(options);
    });

    it("should create a new genAiApp", () => {
      assert.strictEqual(genAiAppCreated.projectId, options.projectId);
assert.strictEqual(genAiAppCreated.name, options.name);
assert.strictEqual(genAiAppCreated.environment, options.environment);
assert.strictEqual(genAiAppCreated.isDefault, options.isDefault);
    });
  });

  describe("#get", () => {
    it("should retrieve a genAiApp by ID", async () => {
      const retrieved = await thisService.get(genAiAppCreated._id);
      assert.strictEqual(retrieved._id, genAiAppCreated._id);
    });
  });

  describe("#update", () => {
    let genAiAppUpdated;
    const options = {"projectId":"345345345345345345345","name":"updated value","environment":"345345345345345345345","isDefault":false};

    beforeEach(async () => {
      genAiAppUpdated = await thisService.update(genAiAppCreated._id, options);
    });

    it("should update an existing genAiApp ", async () => {
      assert.strictEqual(genAiAppUpdated.projectId, options.projectId);
assert.strictEqual(genAiAppUpdated.name, options.name);
assert.strictEqual(genAiAppUpdated.environment, options.environment);
assert.strictEqual(genAiAppUpdated.isDefault, options.isDefault);
    });
  });

  describe("#delete", () => {
  let genAiAppDeleted;
    beforeEach(async () => {
      genAiAppDeleted = await thisService.remove(genAiAppCreated._id);
    });

    it("should delete a genAiApp", async () => {
      assert.strictEqual(genAiAppDeleted._id, genAiAppCreated._id);
    });
  });
});