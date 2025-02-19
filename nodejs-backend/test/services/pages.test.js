const assert = require("assert");
const app = require("../../src/app");

describe("pages service", () => {
  let thisService;
  let pageCreated;

  beforeEach(async () => {
    thisService = await app.service("pages");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (pages)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","pageName":"new value","route":"new value","fields":{"name":"John Doe Many","age":20,"dateofbirth":"1999-01-01T00:00:00.000Z"}};

    beforeEach(async () => {
      pageCreated = await thisService.create(options);
    });

    it("should create a new page", () => {
      assert.strictEqual(pageCreated.projectId, options.projectId);
assert.strictEqual(pageCreated.pageName, options.pageName);
assert.strictEqual(pageCreated.route, options.route);
assert.strictEqual(pageCreated.fields, options.fields);
    });
  });

  describe("#get", () => {
    it("should retrieve a page by ID", async () => {
      const retrieved = await thisService.get(pageCreated._id);
      assert.strictEqual(retrieved._id, pageCreated._id);
    });
  });

  describe("#update", () => {
    let pageUpdated;
    const options = {"projectId":"345345345345345345345","pageName":"updated value","route":"updated value","fields":{"name":"John Doe","age":200,"dateofbirth":"2025-01-31T00:00:00.000Z"}};

    beforeEach(async () => {
      pageUpdated = await thisService.update(pageCreated._id, options);
    });

    it("should update an existing page ", async () => {
      assert.strictEqual(pageUpdated.projectId, options.projectId);
assert.strictEqual(pageUpdated.pageName, options.pageName);
assert.strictEqual(pageUpdated.route, options.route);
assert.strictEqual(pageUpdated.fields, options.fields);
    });
  });

  describe("#delete", () => {
  let pageDeleted;
    beforeEach(async () => {
      pageDeleted = await thisService.remove(pageCreated._id);
    });

    it("should delete a page", async () => {
      assert.strictEqual(pageDeleted._id, pageCreated._id);
    });
  });
});