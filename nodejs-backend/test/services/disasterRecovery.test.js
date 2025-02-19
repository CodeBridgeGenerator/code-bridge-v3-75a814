const assert = require("assert");
const app = require("../../src/app");

describe("disasterRecovery service", () => {
  let thisService;
  let disasterRecoveryCreated;

  beforeEach(async () => {
    thisService = await app.service("disasterRecovery");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (disasterRecovery)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","drName":"new value","isDefault":true,"username":"new value","password":"new value","port":"new value","url":"new value"};

    beforeEach(async () => {
      disasterRecoveryCreated = await thisService.create(options);
    });

    it("should create a new disasterRecovery", () => {
      assert.strictEqual(disasterRecoveryCreated.projectId, options.projectId);
assert.strictEqual(disasterRecoveryCreated.drName, options.drName);
assert.strictEqual(disasterRecoveryCreated.isDefault, options.isDefault);
assert.strictEqual(disasterRecoveryCreated.username, options.username);
assert.strictEqual(disasterRecoveryCreated.password, options.password);
assert.strictEqual(disasterRecoveryCreated.port, options.port);
assert.strictEqual(disasterRecoveryCreated.url, options.url);
    });
  });

  describe("#get", () => {
    it("should retrieve a disasterRecovery by ID", async () => {
      const retrieved = await thisService.get(disasterRecoveryCreated._id);
      assert.strictEqual(retrieved._id, disasterRecoveryCreated._id);
    });
  });

  describe("#update", () => {
    let disasterRecoveryUpdated;
    const options = {"projectId":"345345345345345345345","drName":"updated value","isDefault":false,"username":"updated value","password":"updated value","port":"updated value","url":"updated value"};

    beforeEach(async () => {
      disasterRecoveryUpdated = await thisService.update(disasterRecoveryCreated._id, options);
    });

    it("should update an existing disasterRecovery ", async () => {
      assert.strictEqual(disasterRecoveryUpdated.projectId, options.projectId);
assert.strictEqual(disasterRecoveryUpdated.drName, options.drName);
assert.strictEqual(disasterRecoveryUpdated.isDefault, options.isDefault);
assert.strictEqual(disasterRecoveryUpdated.username, options.username);
assert.strictEqual(disasterRecoveryUpdated.password, options.password);
assert.strictEqual(disasterRecoveryUpdated.port, options.port);
assert.strictEqual(disasterRecoveryUpdated.url, options.url);
    });
  });

  describe("#delete", () => {
  let disasterRecoveryDeleted;
    beforeEach(async () => {
      disasterRecoveryDeleted = await thisService.remove(disasterRecoveryCreated._id);
    });

    it("should delete a disasterRecovery", async () => {
      assert.strictEqual(disasterRecoveryDeleted._id, disasterRecoveryCreated._id);
    });
  });
});