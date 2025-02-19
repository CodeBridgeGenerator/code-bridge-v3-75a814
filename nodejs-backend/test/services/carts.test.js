const assert = require("assert");
const app = require("../../src/app");

describe("carts service", () => {
  let thisService;
  let cartCreated;

  beforeEach(async () => {
    thisService = await app.service("carts");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (carts)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","cartName":"new value","route":"new value","fields":{"name":"John Doe Many","age":20,"dateofbirth":"1999-01-01T00:00:00.000Z"}};

    beforeEach(async () => {
      cartCreated = await thisService.create(options);
    });

    it("should create a new cart", () => {
      assert.strictEqual(cartCreated.projectId, options.projectId);
assert.strictEqual(cartCreated.cartName, options.cartName);
assert.strictEqual(cartCreated.route, options.route);
assert.strictEqual(cartCreated.fields, options.fields);
    });
  });

  describe("#get", () => {
    it("should retrieve a cart by ID", async () => {
      const retrieved = await thisService.get(cartCreated._id);
      assert.strictEqual(retrieved._id, cartCreated._id);
    });
  });

  describe("#update", () => {
    let cartUpdated;
    const options = {"projectId":"345345345345345345345","cartName":"updated value","route":"updated value","fields":{"name":"John Doe","age":200,"dateofbirth":"2025-01-31T00:00:00.000Z"}};

    beforeEach(async () => {
      cartUpdated = await thisService.update(cartCreated._id, options);
    });

    it("should update an existing cart ", async () => {
      assert.strictEqual(cartUpdated.projectId, options.projectId);
assert.strictEqual(cartUpdated.cartName, options.cartName);
assert.strictEqual(cartUpdated.route, options.route);
assert.strictEqual(cartUpdated.fields, options.fields);
    });
  });

  describe("#delete", () => {
  let cartDeleted;
    beforeEach(async () => {
      cartDeleted = await thisService.remove(cartCreated._id);
    });

    it("should delete a cart", async () => {
      assert.strictEqual(cartDeleted._id, cartCreated._id);
    });
  });
});