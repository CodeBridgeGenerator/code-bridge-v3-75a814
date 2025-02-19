const assert = require("assert");
const app = require("../../src/app");

describe("apis service", () => {
  let thisService;
  let apiCreated;

  beforeEach(async () => {
    thisService = await app.service("apis");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (apis)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","apiName":"new value","url":"new value","request":{"name":"John Doe Many","age":20,"dateofbirth":"1999-01-01T00:00:00.000Z"},"params":{"name":"John Doe Many","age":20,"dateofbirth":"1999-01-01T00:00:00.000Z"},"method":"new value","token":"new value","authorization":"new value","response":{"name":"John Doe Many","age":20,"dateofbirth":"1999-01-01T00:00:00.000Z"}};

    beforeEach(async () => {
      apiCreated = await thisService.create(options);
    });

    it("should create a new api", () => {
      assert.strictEqual(apiCreated.projectId, options.projectId);
assert.strictEqual(apiCreated.apiName, options.apiName);
assert.strictEqual(apiCreated.url, options.url);
assert.strictEqual(apiCreated.request, options.request);
assert.strictEqual(apiCreated.params, options.params);
assert.strictEqual(apiCreated.method, options.method);
assert.strictEqual(apiCreated.token, options.token);
assert.strictEqual(apiCreated.authorization, options.authorization);
assert.strictEqual(apiCreated.response, options.response);
    });
  });

  describe("#get", () => {
    it("should retrieve a api by ID", async () => {
      const retrieved = await thisService.get(apiCreated._id);
      assert.strictEqual(retrieved._id, apiCreated._id);
    });
  });

  describe("#update", () => {
    let apiUpdated;
    const options = {"projectId":"345345345345345345345","apiName":"updated value","url":"updated value","request":{"name":"John Doe","age":200,"dateofbirth":"2025-01-31T00:00:00.000Z"},"params":{"name":"John Doe","age":200,"dateofbirth":"2025-01-31T00:00:00.000Z"},"method":"updated value","token":"updated value","authorization":"updated value","response":{"name":"John Doe","age":200,"dateofbirth":"2025-01-31T00:00:00.000Z"}};

    beforeEach(async () => {
      apiUpdated = await thisService.update(apiCreated._id, options);
    });

    it("should update an existing api ", async () => {
      assert.strictEqual(apiUpdated.projectId, options.projectId);
assert.strictEqual(apiUpdated.apiName, options.apiName);
assert.strictEqual(apiUpdated.url, options.url);
assert.strictEqual(apiUpdated.request, options.request);
assert.strictEqual(apiUpdated.params, options.params);
assert.strictEqual(apiUpdated.method, options.method);
assert.strictEqual(apiUpdated.token, options.token);
assert.strictEqual(apiUpdated.authorization, options.authorization);
assert.strictEqual(apiUpdated.response, options.response);
    });
  });

  describe("#delete", () => {
  let apiDeleted;
    beforeEach(async () => {
      apiDeleted = await thisService.remove(apiCreated._id);
    });

    it("should delete a api", async () => {
      assert.strictEqual(apiDeleted._id, apiCreated._id);
    });
  });
});