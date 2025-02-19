const assert = require("assert");
const app = require("../../src/app");

describe("environments service", () => {
  let thisService;
  let environmentCreated;

  beforeEach(async () => {
    thisService = await app.service("environments");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (environments)");
  });

  describe("#create", () => {
    const options = {"environment":"new value"};

    beforeEach(async () => {
      environmentCreated = await thisService.create(options);
    });

    it("should create a new environment", () => {
      assert.strictEqual(environmentCreated.environment, options.environment);
    });
  });

  describe("#get", () => {
    it("should retrieve a environment by ID", async () => {
      const retrieved = await thisService.get(environmentCreated._id);
      assert.strictEqual(retrieved._id, environmentCreated._id);
    });
  });

  describe("#update", () => {
    let environmentUpdated;
    const options = {"environment":"updated value"};

    beforeEach(async () => {
      environmentUpdated = await thisService.update(environmentCreated._id, options);
    });

    it("should update an existing environment ", async () => {
      assert.strictEqual(environmentUpdated.environment, options.environment);
    });
  });

  describe("#delete", () => {
  let environmentDeleted;
    beforeEach(async () => {
      environmentDeleted = await thisService.remove(environmentCreated._id);
    });

    it("should delete a environment", async () => {
      assert.strictEqual(environmentDeleted._id, environmentCreated._id);
    });
  });
});