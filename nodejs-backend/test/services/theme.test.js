const assert = require("assert");
const app = require("../../src/app");

describe("theme service", () => {
  let thisService;
  let themeCreated;

  beforeEach(async () => {
    thisService = await app.service("theme");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (theme)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","themeName":"new value","bodyColor":"new value","emphasisColor":"new value","secondaryColor":"new value","tertiaryColor":"new value","codeColor":"new value","highlightColor":"new value","borderColorTranslucent":"new value","bodyBg":"new value","borderColor":"new value","highlightBg":"new value","secondaryBg":"new value","tertiaryBg":"new value","formInvalidBorderColor":"new value","formInvalidColor":"new value","formValidBorderColor":"new value","formValidColor":"new value","headingColor":"new value","linkColor":"new value","linkHoverColor":"new value","primary":"new value","primaryBgSubtle":"new value","primaryBorderSubtle":"new value","primaryTextEmphasis":"new value","secondary":"new value","secondaryBgSubtle":"new value","secondaryBorderSubtle":"new value","secondaryTextEmphasis":"new value","tertiary":"new value","tertiaryBgSubtle":"new value","tertiaryBorderSubtle":"new value","tertiaryTextEmphasis":"new value","success":"new value","successBgSubtle":"new value","successBorderSubtle":"new value","successTextEmphasis":"new value","info":"new value","infoBgSubtle":"new value","infoBorderSubtle":"new value","infoTextEmphasis":"new value","danger":"new value","dangerBgSubtle":"new value","dangerBorderSubtle":"new value","dangerTextEmphasis":"new value","warning":"new value","warningBgSubtle":"new value","warningBorderSubtle":"new value","warningTextEmphasis":"new value","dark":"new value","darkBgSubtle":"new value","darkBorderSubtle":"new value","darkTextEmphasis":"new value","bodyColorRgb":"new value","emphasisColorRgb":"new value","linkColorRgb":"new value","linkHoverColorRgb":"new value","tertiaryColorRgb":"new value","secondaryBgRgb":"new value","tertiaryBgRgb":"new value","lightBorderSubtle":"new value","lightTextEmphasis":"new value","isDefault":true};

    beforeEach(async () => {
      themeCreated = await thisService.create(options);
    });

    it("should create a new theme", () => {
      assert.strictEqual(themeCreated.projectId, options.projectId);
assert.strictEqual(themeCreated.themeName, options.themeName);
assert.strictEqual(themeCreated.bodyColor, options.bodyColor);
assert.strictEqual(themeCreated.emphasisColor, options.emphasisColor);
assert.strictEqual(themeCreated.secondaryColor, options.secondaryColor);
assert.strictEqual(themeCreated.tertiaryColor, options.tertiaryColor);
assert.strictEqual(themeCreated.codeColor, options.codeColor);
assert.strictEqual(themeCreated.highlightColor, options.highlightColor);
assert.strictEqual(themeCreated.borderColorTranslucent, options.borderColorTranslucent);
assert.strictEqual(themeCreated.bodyBg, options.bodyBg);
assert.strictEqual(themeCreated.borderColor, options.borderColor);
assert.strictEqual(themeCreated.highlightBg, options.highlightBg);
assert.strictEqual(themeCreated.secondaryBg, options.secondaryBg);
assert.strictEqual(themeCreated.tertiaryBg, options.tertiaryBg);
assert.strictEqual(themeCreated.formInvalidBorderColor, options.formInvalidBorderColor);
assert.strictEqual(themeCreated.formInvalidColor, options.formInvalidColor);
assert.strictEqual(themeCreated.formValidBorderColor, options.formValidBorderColor);
assert.strictEqual(themeCreated.formValidColor, options.formValidColor);
assert.strictEqual(themeCreated.headingColor, options.headingColor);
assert.strictEqual(themeCreated.linkColor, options.linkColor);
assert.strictEqual(themeCreated.linkHoverColor, options.linkHoverColor);
assert.strictEqual(themeCreated.primary, options.primary);
assert.strictEqual(themeCreated.primaryBgSubtle, options.primaryBgSubtle);
assert.strictEqual(themeCreated.primaryBorderSubtle, options.primaryBorderSubtle);
assert.strictEqual(themeCreated.primaryTextEmphasis, options.primaryTextEmphasis);
assert.strictEqual(themeCreated.secondary, options.secondary);
assert.strictEqual(themeCreated.secondaryBgSubtle, options.secondaryBgSubtle);
assert.strictEqual(themeCreated.secondaryBorderSubtle, options.secondaryBorderSubtle);
assert.strictEqual(themeCreated.secondaryTextEmphasis, options.secondaryTextEmphasis);
assert.strictEqual(themeCreated.tertiary, options.tertiary);
assert.strictEqual(themeCreated.tertiaryBgSubtle, options.tertiaryBgSubtle);
assert.strictEqual(themeCreated.tertiaryBorderSubtle, options.tertiaryBorderSubtle);
assert.strictEqual(themeCreated.tertiaryTextEmphasis, options.tertiaryTextEmphasis);
assert.strictEqual(themeCreated.success, options.success);
assert.strictEqual(themeCreated.successBgSubtle, options.successBgSubtle);
assert.strictEqual(themeCreated.successBorderSubtle, options.successBorderSubtle);
assert.strictEqual(themeCreated.successTextEmphasis, options.successTextEmphasis);
assert.strictEqual(themeCreated.info, options.info);
assert.strictEqual(themeCreated.infoBgSubtle, options.infoBgSubtle);
assert.strictEqual(themeCreated.infoBorderSubtle, options.infoBorderSubtle);
assert.strictEqual(themeCreated.infoTextEmphasis, options.infoTextEmphasis);
assert.strictEqual(themeCreated.danger, options.danger);
assert.strictEqual(themeCreated.dangerBgSubtle, options.dangerBgSubtle);
assert.strictEqual(themeCreated.dangerBorderSubtle, options.dangerBorderSubtle);
assert.strictEqual(themeCreated.dangerTextEmphasis, options.dangerTextEmphasis);
assert.strictEqual(themeCreated.warning, options.warning);
assert.strictEqual(themeCreated.warningBgSubtle, options.warningBgSubtle);
assert.strictEqual(themeCreated.warningBorderSubtle, options.warningBorderSubtle);
assert.strictEqual(themeCreated.warningTextEmphasis, options.warningTextEmphasis);
assert.strictEqual(themeCreated.dark, options.dark);
assert.strictEqual(themeCreated.darkBgSubtle, options.darkBgSubtle);
assert.strictEqual(themeCreated.darkBorderSubtle, options.darkBorderSubtle);
assert.strictEqual(themeCreated.darkTextEmphasis, options.darkTextEmphasis);
assert.strictEqual(themeCreated.bodyColorRgb, options.bodyColorRgb);
assert.strictEqual(themeCreated.emphasisColorRgb, options.emphasisColorRgb);
assert.strictEqual(themeCreated.linkColorRgb, options.linkColorRgb);
assert.strictEqual(themeCreated.linkHoverColorRgb, options.linkHoverColorRgb);
assert.strictEqual(themeCreated.tertiaryColorRgb, options.tertiaryColorRgb);
assert.strictEqual(themeCreated.secondaryBgRgb, options.secondaryBgRgb);
assert.strictEqual(themeCreated.tertiaryBgRgb, options.tertiaryBgRgb);
assert.strictEqual(themeCreated.lightBorderSubtle, options.lightBorderSubtle);
assert.strictEqual(themeCreated.lightTextEmphasis, options.lightTextEmphasis);
assert.strictEqual(themeCreated.isDefault, options.isDefault);
    });
  });

  describe("#get", () => {
    it("should retrieve a theme by ID", async () => {
      const retrieved = await thisService.get(themeCreated._id);
      assert.strictEqual(retrieved._id, themeCreated._id);
    });
  });

  describe("#update", () => {
    let themeUpdated;
    const options = {"projectId":"345345345345345345345","themeName":"updated value","bodyColor":"updated value","emphasisColor":"updated value","secondaryColor":"updated value","tertiaryColor":"updated value","codeColor":"updated value","highlightColor":"updated value","borderColorTranslucent":"updated value","bodyBg":"updated value","borderColor":"updated value","highlightBg":"updated value","secondaryBg":"updated value","tertiaryBg":"updated value","formInvalidBorderColor":"updated value","formInvalidColor":"updated value","formValidBorderColor":"updated value","formValidColor":"updated value","headingColor":"updated value","linkColor":"updated value","linkHoverColor":"updated value","primary":"updated value","primaryBgSubtle":"updated value","primaryBorderSubtle":"updated value","primaryTextEmphasis":"updated value","secondary":"updated value","secondaryBgSubtle":"updated value","secondaryBorderSubtle":"updated value","secondaryTextEmphasis":"updated value","tertiary":"updated value","tertiaryBgSubtle":"updated value","tertiaryBorderSubtle":"updated value","tertiaryTextEmphasis":"updated value","success":"updated value","successBgSubtle":"updated value","successBorderSubtle":"updated value","successTextEmphasis":"updated value","info":"updated value","infoBgSubtle":"updated value","infoBorderSubtle":"updated value","infoTextEmphasis":"updated value","danger":"updated value","dangerBgSubtle":"updated value","dangerBorderSubtle":"updated value","dangerTextEmphasis":"updated value","warning":"updated value","warningBgSubtle":"updated value","warningBorderSubtle":"updated value","warningTextEmphasis":"updated value","dark":"updated value","darkBgSubtle":"updated value","darkBorderSubtle":"updated value","darkTextEmphasis":"updated value","bodyColorRgb":"updated value","emphasisColorRgb":"updated value","linkColorRgb":"updated value","linkHoverColorRgb":"updated value","tertiaryColorRgb":"updated value","secondaryBgRgb":"updated value","tertiaryBgRgb":"updated value","lightBorderSubtle":"updated value","lightTextEmphasis":"updated value","isDefault":false};

    beforeEach(async () => {
      themeUpdated = await thisService.update(themeCreated._id, options);
    });

    it("should update an existing theme ", async () => {
      assert.strictEqual(themeUpdated.projectId, options.projectId);
assert.strictEqual(themeUpdated.themeName, options.themeName);
assert.strictEqual(themeUpdated.bodyColor, options.bodyColor);
assert.strictEqual(themeUpdated.emphasisColor, options.emphasisColor);
assert.strictEqual(themeUpdated.secondaryColor, options.secondaryColor);
assert.strictEqual(themeUpdated.tertiaryColor, options.tertiaryColor);
assert.strictEqual(themeUpdated.codeColor, options.codeColor);
assert.strictEqual(themeUpdated.highlightColor, options.highlightColor);
assert.strictEqual(themeUpdated.borderColorTranslucent, options.borderColorTranslucent);
assert.strictEqual(themeUpdated.bodyBg, options.bodyBg);
assert.strictEqual(themeUpdated.borderColor, options.borderColor);
assert.strictEqual(themeUpdated.highlightBg, options.highlightBg);
assert.strictEqual(themeUpdated.secondaryBg, options.secondaryBg);
assert.strictEqual(themeUpdated.tertiaryBg, options.tertiaryBg);
assert.strictEqual(themeUpdated.formInvalidBorderColor, options.formInvalidBorderColor);
assert.strictEqual(themeUpdated.formInvalidColor, options.formInvalidColor);
assert.strictEqual(themeUpdated.formValidBorderColor, options.formValidBorderColor);
assert.strictEqual(themeUpdated.formValidColor, options.formValidColor);
assert.strictEqual(themeUpdated.headingColor, options.headingColor);
assert.strictEqual(themeUpdated.linkColor, options.linkColor);
assert.strictEqual(themeUpdated.linkHoverColor, options.linkHoverColor);
assert.strictEqual(themeUpdated.primary, options.primary);
assert.strictEqual(themeUpdated.primaryBgSubtle, options.primaryBgSubtle);
assert.strictEqual(themeUpdated.primaryBorderSubtle, options.primaryBorderSubtle);
assert.strictEqual(themeUpdated.primaryTextEmphasis, options.primaryTextEmphasis);
assert.strictEqual(themeUpdated.secondary, options.secondary);
assert.strictEqual(themeUpdated.secondaryBgSubtle, options.secondaryBgSubtle);
assert.strictEqual(themeUpdated.secondaryBorderSubtle, options.secondaryBorderSubtle);
assert.strictEqual(themeUpdated.secondaryTextEmphasis, options.secondaryTextEmphasis);
assert.strictEqual(themeUpdated.tertiary, options.tertiary);
assert.strictEqual(themeUpdated.tertiaryBgSubtle, options.tertiaryBgSubtle);
assert.strictEqual(themeUpdated.tertiaryBorderSubtle, options.tertiaryBorderSubtle);
assert.strictEqual(themeUpdated.tertiaryTextEmphasis, options.tertiaryTextEmphasis);
assert.strictEqual(themeUpdated.success, options.success);
assert.strictEqual(themeUpdated.successBgSubtle, options.successBgSubtle);
assert.strictEqual(themeUpdated.successBorderSubtle, options.successBorderSubtle);
assert.strictEqual(themeUpdated.successTextEmphasis, options.successTextEmphasis);
assert.strictEqual(themeUpdated.info, options.info);
assert.strictEqual(themeUpdated.infoBgSubtle, options.infoBgSubtle);
assert.strictEqual(themeUpdated.infoBorderSubtle, options.infoBorderSubtle);
assert.strictEqual(themeUpdated.infoTextEmphasis, options.infoTextEmphasis);
assert.strictEqual(themeUpdated.danger, options.danger);
assert.strictEqual(themeUpdated.dangerBgSubtle, options.dangerBgSubtle);
assert.strictEqual(themeUpdated.dangerBorderSubtle, options.dangerBorderSubtle);
assert.strictEqual(themeUpdated.dangerTextEmphasis, options.dangerTextEmphasis);
assert.strictEqual(themeUpdated.warning, options.warning);
assert.strictEqual(themeUpdated.warningBgSubtle, options.warningBgSubtle);
assert.strictEqual(themeUpdated.warningBorderSubtle, options.warningBorderSubtle);
assert.strictEqual(themeUpdated.warningTextEmphasis, options.warningTextEmphasis);
assert.strictEqual(themeUpdated.dark, options.dark);
assert.strictEqual(themeUpdated.darkBgSubtle, options.darkBgSubtle);
assert.strictEqual(themeUpdated.darkBorderSubtle, options.darkBorderSubtle);
assert.strictEqual(themeUpdated.darkTextEmphasis, options.darkTextEmphasis);
assert.strictEqual(themeUpdated.bodyColorRgb, options.bodyColorRgb);
assert.strictEqual(themeUpdated.emphasisColorRgb, options.emphasisColorRgb);
assert.strictEqual(themeUpdated.linkColorRgb, options.linkColorRgb);
assert.strictEqual(themeUpdated.linkHoverColorRgb, options.linkHoverColorRgb);
assert.strictEqual(themeUpdated.tertiaryColorRgb, options.tertiaryColorRgb);
assert.strictEqual(themeUpdated.secondaryBgRgb, options.secondaryBgRgb);
assert.strictEqual(themeUpdated.tertiaryBgRgb, options.tertiaryBgRgb);
assert.strictEqual(themeUpdated.lightBorderSubtle, options.lightBorderSubtle);
assert.strictEqual(themeUpdated.lightTextEmphasis, options.lightTextEmphasis);
assert.strictEqual(themeUpdated.isDefault, options.isDefault);
    });
  });

  describe("#delete", () => {
  let themeDeleted;
    beforeEach(async () => {
      themeDeleted = await thisService.remove(themeCreated._id);
    });

    it("should delete a theme", async () => {
      assert.strictEqual(themeDeleted._id, themeCreated._id);
    });
  });
});