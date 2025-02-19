const assert = require("assert");
const app = require("../../src/app");

describe("databaseApps service", () => {
  let thisService;
  let databaseAppCreated;

  beforeEach(async () => {
    thisService = await app.service("databaseApps");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (databaseApps)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","name":"new value","environment":"aasdfasdfasdfadsfadfa","username":"new value","password":"new value","port":"new value","url":"new value","database":"new value"};

    beforeEach(async () => {
      databaseAppCreated = await thisService.create(options);
    });

    it("should create a new databaseApp", () => {
      assert.strictEqual(databaseAppCreated.projectId, options.projectId);
assert.strictEqual(databaseAppCreated.name, options.name);
assert.strictEqual(databaseAppCreated.environment, options.environment);
assert.strictEqual(databaseAppCreated.username, options.username);
assert.strictEqual(databaseAppCreated.password, options.password);
assert.strictEqual(databaseAppCreated.port, options.port);
assert.strictEqual(databaseAppCreated.url, options.url);
assert.strictEqual(databaseAppCreated.database, options.database);
    });
  });

  describe("#get", () => {
    it("should retrieve a databaseApp by ID", async () => {
      const retrieved = await thisService.get(databaseAppCreated._id);
      assert.strictEqual(retrieved._id, databaseAppCreated._id);
    });
  });

  describe("#update", () => {
    let databaseAppUpdated;
    const options = {"projectId":"345345345345345345345","name":"updated value","environment":"345345345345345345345","username":"updated value","password":"updated value","port":"updated value","url":"updated value","database":"updated value"};

    beforeEach(async () => {
      databaseAppUpdated = await thisService.update(databaseAppCreated._id, options);
    });

    it("should update an existing databaseApp ", async () => {
      assert.strictEqual(databaseAppUpdated.projectId, options.projectId);
assert.strictEqual(databaseAppUpdated.name, options.name);
assert.strictEqual(databaseAppUpdated.environment, options.environment);
assert.strictEqual(databaseAppUpdated.username, options.username);
assert.strictEqual(databaseAppUpdated.password, options.password);
assert.strictEqual(databaseAppUpdated.port, options.port);
assert.strictEqual(databaseAppUpdated.url, options.url);
assert.strictEqual(databaseAppUpdated.database, options.database);
    });
  });

  describe("#delete", () => {
  let databaseAppDeleted;
    beforeEach(async () => {
      databaseAppDeleted = await thisService.remove(databaseAppCreated._id);
    });

    it("should delete a databaseApp", async () => {
      assert.strictEqual(databaseAppDeleted._id, databaseAppCreated._id);
    });
  });
});