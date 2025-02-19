const assert = require("assert");
const app = require("../../src/app");

describe("locale service", () => {
  let thisService;
  let localeCreated;

  beforeEach(async () => {
    thisService = await app.service("locale");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (locale)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","localeName":"new value","dateFormat":"new value","timeFormat":"new value","timeZone":"new value","currencyFormat":"new value","currencyIndex":"new value","currencySymbol":"new value","country":"new value","language":"new value","languages":"new value","intlDialing":23,"isDefault":true};

    beforeEach(async () => {
      localeCreated = await thisService.create(options);
    });

    it("should create a new locale", () => {
      assert.strictEqual(localeCreated.projectId, options.projectId);
assert.strictEqual(localeCreated.localeName, options.localeName);
assert.strictEqual(localeCreated.dateFormat, options.dateFormat);
assert.strictEqual(localeCreated.timeFormat, options.timeFormat);
assert.strictEqual(localeCreated.timeZone, options.timeZone);
assert.strictEqual(localeCreated.currencyFormat, options.currencyFormat);
assert.strictEqual(localeCreated.currencyIndex, options.currencyIndex);
assert.strictEqual(localeCreated.currencySymbol, options.currencySymbol);
assert.strictEqual(localeCreated.country, options.country);
assert.strictEqual(localeCreated.language, options.language);
assert.strictEqual(localeCreated.languages, options.languages);
assert.strictEqual(localeCreated.intlDialing, options.intlDialing);
assert.strictEqual(localeCreated.isDefault, options.isDefault);
    });
  });

  describe("#get", () => {
    it("should retrieve a locale by ID", async () => {
      const retrieved = await thisService.get(localeCreated._id);
      assert.strictEqual(retrieved._id, localeCreated._id);
    });
  });

  describe("#update", () => {
    let localeUpdated;
    const options = {"projectId":"345345345345345345345","localeName":"updated value","dateFormat":"updated value","timeFormat":"updated value","timeZone":"updated value","currencyFormat":"updated value","currencyIndex":"updated value","currencySymbol":"updated value","country":"updated value","language":"updated value","languages":"updated value","intlDialing":100,"isDefault":false};

    beforeEach(async () => {
      localeUpdated = await thisService.update(localeCreated._id, options);
    });

    it("should update an existing locale ", async () => {
      assert.strictEqual(localeUpdated.projectId, options.projectId);
assert.strictEqual(localeUpdated.localeName, options.localeName);
assert.strictEqual(localeUpdated.dateFormat, options.dateFormat);
assert.strictEqual(localeUpdated.timeFormat, options.timeFormat);
assert.strictEqual(localeUpdated.timeZone, options.timeZone);
assert.strictEqual(localeUpdated.currencyFormat, options.currencyFormat);
assert.strictEqual(localeUpdated.currencyIndex, options.currencyIndex);
assert.strictEqual(localeUpdated.currencySymbol, options.currencySymbol);
assert.strictEqual(localeUpdated.country, options.country);
assert.strictEqual(localeUpdated.language, options.language);
assert.strictEqual(localeUpdated.languages, options.languages);
assert.strictEqual(localeUpdated.intlDialing, options.intlDialing);
assert.strictEqual(localeUpdated.isDefault, options.isDefault);
    });
  });

  describe("#delete", () => {
  let localeDeleted;
    beforeEach(async () => {
      localeDeleted = await thisService.remove(localeCreated._id);
    });

    it("should delete a locale", async () => {
      assert.strictEqual(localeDeleted._id, localeCreated._id);
    });
  });
});