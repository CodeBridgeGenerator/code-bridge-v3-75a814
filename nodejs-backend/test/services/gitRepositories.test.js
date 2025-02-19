const assert = require("assert");
const app = require("../../src/app");

describe("gitRepositories service", () => {
  let thisService;
  let gitRepositoryCreated;

  beforeEach(async () => {
    thisService = await app.service("gitRepositories");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (gitRepositories)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","name":"new value","environment":"aasdfasdfasdfadsfadfa","isDefault":true};

    beforeEach(async () => {
      gitRepositoryCreated = await thisService.create(options);
    });

    it("should create a new gitRepository", () => {
      assert.strictEqual(gitRepositoryCreated.projectId, options.projectId);
assert.strictEqual(gitRepositoryCreated.name, options.name);
assert.strictEqual(gitRepositoryCreated.environment, options.environment);
assert.strictEqual(gitRepositoryCreated.isDefault, options.isDefault);
    });
  });

  describe("#get", () => {
    it("should retrieve a gitRepository by ID", async () => {
      const retrieved = await thisService.get(gitRepositoryCreated._id);
      assert.strictEqual(retrieved._id, gitRepositoryCreated._id);
    });
  });

  describe("#update", () => {
    let gitRepositoryUpdated;
    const options = {"projectId":"345345345345345345345","name":"updated value","environment":"345345345345345345345","isDefault":false};

    beforeEach(async () => {
      gitRepositoryUpdated = await thisService.update(gitRepositoryCreated._id, options);
    });

    it("should update an existing gitRepository ", async () => {
      assert.strictEqual(gitRepositoryUpdated.projectId, options.projectId);
assert.strictEqual(gitRepositoryUpdated.name, options.name);
assert.strictEqual(gitRepositoryUpdated.environment, options.environment);
assert.strictEqual(gitRepositoryUpdated.isDefault, options.isDefault);
    });
  });

  describe("#delete", () => {
  let gitRepositoryDeleted;
    beforeEach(async () => {
      gitRepositoryDeleted = await thisService.remove(gitRepositoryCreated._id);
    });

    it("should delete a gitRepository", async () => {
      assert.strictEqual(gitRepositoryDeleted._id, gitRepositoryCreated._id);
    });
  });
});