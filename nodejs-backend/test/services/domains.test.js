const assert = require("assert");
const app = require("../../src/app");

describe("domains service", () => {
  let thisService;
  let domainCreated;

  beforeEach(async () => {
    thisService = await app.service("domains");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (domains)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","name":"new value","environment":"aasdfasdfasdfadsfadfa","domain":"new value","appName":"new value","appDir":"new value","appProjectName":"new value","appObjectName":"new value","appPortNumber":23,"isDefault":true};

    beforeEach(async () => {
      domainCreated = await thisService.create(options);
    });

    it("should create a new domain", () => {
      assert.strictEqual(domainCreated.projectId, options.projectId);
assert.strictEqual(domainCreated.name, options.name);
assert.strictEqual(domainCreated.environment, options.environment);
assert.strictEqual(domainCreated.domain, options.domain);
assert.strictEqual(domainCreated.appName, options.appName);
assert.strictEqual(domainCreated.appDir, options.appDir);
assert.strictEqual(domainCreated.appProjectName, options.appProjectName);
assert.strictEqual(domainCreated.appObjectName, options.appObjectName);
assert.strictEqual(domainCreated.appPortNumber, options.appPortNumber);
assert.strictEqual(domainCreated.isDefault, options.isDefault);
    });
  });

  describe("#get", () => {
    it("should retrieve a domain by ID", async () => {
      const retrieved = await thisService.get(domainCreated._id);
      assert.strictEqual(retrieved._id, domainCreated._id);
    });
  });

  describe("#update", () => {
    let domainUpdated;
    const options = {"projectId":"345345345345345345345","name":"updated value","environment":"345345345345345345345","domain":"updated value","appName":"updated value","appDir":"updated value","appProjectName":"updated value","appObjectName":"updated value","appPortNumber":100,"isDefault":false};

    beforeEach(async () => {
      domainUpdated = await thisService.update(domainCreated._id, options);
    });

    it("should update an existing domain ", async () => {
      assert.strictEqual(domainUpdated.projectId, options.projectId);
assert.strictEqual(domainUpdated.name, options.name);
assert.strictEqual(domainUpdated.environment, options.environment);
assert.strictEqual(domainUpdated.domain, options.domain);
assert.strictEqual(domainUpdated.appName, options.appName);
assert.strictEqual(domainUpdated.appDir, options.appDir);
assert.strictEqual(domainUpdated.appProjectName, options.appProjectName);
assert.strictEqual(domainUpdated.appObjectName, options.appObjectName);
assert.strictEqual(domainUpdated.appPortNumber, options.appPortNumber);
assert.strictEqual(domainUpdated.isDefault, options.isDefault);
    });
  });

  describe("#delete", () => {
  let domainDeleted;
    beforeEach(async () => {
      domainDeleted = await thisService.remove(domainCreated._id);
    });

    it("should delete a domain", async () => {
      assert.strictEqual(domainDeleted._id, domainCreated._id);
    });
  });
});