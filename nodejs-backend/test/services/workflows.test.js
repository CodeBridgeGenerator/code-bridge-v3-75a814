const assert = require("assert");
const app = require("../../src/app");

describe("workflows service", () => {
  let thisService;
  let workflowCreated;

  beforeEach(async () => {
    thisService = await app.service("workflows");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (workflows)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","pageName":"new value","route":"new value","fields":{"name":"John Doe Many","age":20,"dateofbirth":"1999-01-01T00:00:00.000Z"}};

    beforeEach(async () => {
      workflowCreated = await thisService.create(options);
    });

    it("should create a new workflow", () => {
      assert.strictEqual(workflowCreated.projectId, options.projectId);
assert.strictEqual(workflowCreated.pageName, options.pageName);
assert.strictEqual(workflowCreated.route, options.route);
assert.strictEqual(workflowCreated.fields, options.fields);
    });
  });

  describe("#get", () => {
    it("should retrieve a workflow by ID", async () => {
      const retrieved = await thisService.get(workflowCreated._id);
      assert.strictEqual(retrieved._id, workflowCreated._id);
    });
  });

  describe("#update", () => {
    let workflowUpdated;
    const options = {"projectId":"345345345345345345345","pageName":"updated value","route":"updated value","fields":{"name":"John Doe","age":200,"dateofbirth":"2025-01-31T00:00:00.000Z"}};

    beforeEach(async () => {
      workflowUpdated = await thisService.update(workflowCreated._id, options);
    });

    it("should update an existing workflow ", async () => {
      assert.strictEqual(workflowUpdated.projectId, options.projectId);
assert.strictEqual(workflowUpdated.pageName, options.pageName);
assert.strictEqual(workflowUpdated.route, options.route);
assert.strictEqual(workflowUpdated.fields, options.fields);
    });
  });

  describe("#delete", () => {
  let workflowDeleted;
    beforeEach(async () => {
      workflowDeleted = await thisService.remove(workflowCreated._id);
    });

    it("should delete a workflow", async () => {
      assert.strictEqual(workflowDeleted._id, workflowCreated._id);
    });
  });
});