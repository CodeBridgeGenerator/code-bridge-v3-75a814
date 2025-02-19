const assert = require("assert");
const app = require("../../src/app");

describe("highAvailability service", () => {
  let thisService;
  let highAvailabilityCreated;

  beforeEach(async () => {
    thisService = await app.service("highAvailability");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (highAvailability)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","ha":"new value","isDefault":true};

    beforeEach(async () => {
      highAvailabilityCreated = await thisService.create(options);
    });

    it("should create a new highAvailability", () => {
      assert.strictEqual(highAvailabilityCreated.projectId, options.projectId);
assert.strictEqual(highAvailabilityCreated.ha, options.ha);
assert.strictEqual(highAvailabilityCreated.isDefault, options.isDefault);
    });
  });

  describe("#get", () => {
    it("should retrieve a highAvailability by ID", async () => {
      const retrieved = await thisService.get(highAvailabilityCreated._id);
      assert.strictEqual(retrieved._id, highAvailabilityCreated._id);
    });
  });

  describe("#update", () => {
    let highAvailabilityUpdated;
    const options = {"projectId":"345345345345345345345","ha":"updated value","isDefault":false};

    beforeEach(async () => {
      highAvailabilityUpdated = await thisService.update(highAvailabilityCreated._id, options);
    });

    it("should update an existing highAvailability ", async () => {
      assert.strictEqual(highAvailabilityUpdated.projectId, options.projectId);
assert.strictEqual(highAvailabilityUpdated.ha, options.ha);
assert.strictEqual(highAvailabilityUpdated.isDefault, options.isDefault);
    });
  });

  describe("#delete", () => {
  let highAvailabilityDeleted;
    beforeEach(async () => {
      highAvailabilityDeleted = await thisService.remove(highAvailabilityCreated._id);
    });

    it("should delete a highAvailability", async () => {
      assert.strictEqual(highAvailabilityDeleted._id, highAvailabilityCreated._id);
    });
  });
});