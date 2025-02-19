const assert = require("assert");
const app = require("../../src/app");

describe("figma service", () => {
  let thisService;
  let figmaCreated;

  beforeEach(async () => {
    thisService = await app.service("figma");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (figma)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","name":"new value","fileId":"new value","description":"new value","isDefault":true,"textBody":"new value","textEmphasis":"new value","textSecondary":"new value","textTertiary":"new value","textCode":"new value","textHighlight":"new value","bgBorderTranslucent":"new value","bgBody":"new value","bgBorder":"new value","bgHighlight":"new value","bgSecondary":"new value","bgTertiary":"new value","formInvalidBorder":"new value","formInvalidBg":"new value","formValidBorder":"new value","formValidBg":"new value","textHeading":"new value","textLink":"new value","textLinkHover":"new value","signalPrimaryFill":"new value","signalPrimaryBg":"new value","signalPrimaryBorder":"new value","signalPrimaryText":"new value","signalSecondaryFill":"new value","signalSecondaryBg":"new value","signalSecondaryBorder":"new value","signalSecondaryText":"new value","signalTertiaryFill":"new value","signalTertiaryBg":"new value","signalTertiaryBorder":"new value","signalTertiaryText":"new value","signalSuccessFill":"new value","signalSuccessBg":"new value","signalSuccessBorder":"new value","signalSuccessText":"new value","signalInfoFill":"new value","signalInfoBg":"new value","signalInfoBorder":"new value","signalInfoText":"new value","signalDangerFill":"new value","signalDangerBg":"new value","signalDangerBorder":"new value","signalDangerText":"new value","signalWarningFill":"new value","signalWarningBg":"new value","signalWarningBorder":"new value","signalWarningText":"new value","signalInvertFill":"new value","signalInvertBg":"new value","signalInvertBorder":"new value","signalInvertText":"new value","components":{"name":"John Doe Many","age":20,"dateofbirth":"1999-01-01T00:00:00.000Z"}};

    beforeEach(async () => {
      figmaCreated = await thisService.create(options);
    });

    it("should create a new figma", () => {
      assert.strictEqual(figmaCreated.projectId, options.projectId);
assert.strictEqual(figmaCreated.name, options.name);
assert.strictEqual(figmaCreated.fileId, options.fileId);
assert.strictEqual(figmaCreated.description, options.description);
assert.strictEqual(figmaCreated.isDefault, options.isDefault);
assert.strictEqual(figmaCreated.textBody, options.textBody);
assert.strictEqual(figmaCreated.textEmphasis, options.textEmphasis);
assert.strictEqual(figmaCreated.textSecondary, options.textSecondary);
assert.strictEqual(figmaCreated.textTertiary, options.textTertiary);
assert.strictEqual(figmaCreated.textCode, options.textCode);
assert.strictEqual(figmaCreated.textHighlight, options.textHighlight);
assert.strictEqual(figmaCreated.bgBorderTranslucent, options.bgBorderTranslucent);
assert.strictEqual(figmaCreated.bgBody, options.bgBody);
assert.strictEqual(figmaCreated.bgBorder, options.bgBorder);
assert.strictEqual(figmaCreated.bgHighlight, options.bgHighlight);
assert.strictEqual(figmaCreated.bgSecondary, options.bgSecondary);
assert.strictEqual(figmaCreated.bgTertiary, options.bgTertiary);
assert.strictEqual(figmaCreated.formInvalidBorder, options.formInvalidBorder);
assert.strictEqual(figmaCreated.formInvalidBg, options.formInvalidBg);
assert.strictEqual(figmaCreated.formValidBorder, options.formValidBorder);
assert.strictEqual(figmaCreated.formValidBg, options.formValidBg);
assert.strictEqual(figmaCreated.textHeading, options.textHeading);
assert.strictEqual(figmaCreated.textLink, options.textLink);
assert.strictEqual(figmaCreated.textLinkHover, options.textLinkHover);
assert.strictEqual(figmaCreated.signalPrimaryFill, options.signalPrimaryFill);
assert.strictEqual(figmaCreated.signalPrimaryBg, options.signalPrimaryBg);
assert.strictEqual(figmaCreated.signalPrimaryBorder, options.signalPrimaryBorder);
assert.strictEqual(figmaCreated.signalPrimaryText, options.signalPrimaryText);
assert.strictEqual(figmaCreated.signalSecondaryFill, options.signalSecondaryFill);
assert.strictEqual(figmaCreated.signalSecondaryBg, options.signalSecondaryBg);
assert.strictEqual(figmaCreated.signalSecondaryBorder, options.signalSecondaryBorder);
assert.strictEqual(figmaCreated.signalSecondaryText, options.signalSecondaryText);
assert.strictEqual(figmaCreated.signalTertiaryFill, options.signalTertiaryFill);
assert.strictEqual(figmaCreated.signalTertiaryBg, options.signalTertiaryBg);
assert.strictEqual(figmaCreated.signalTertiaryBorder, options.signalTertiaryBorder);
assert.strictEqual(figmaCreated.signalTertiaryText, options.signalTertiaryText);
assert.strictEqual(figmaCreated.signalSuccessFill, options.signalSuccessFill);
assert.strictEqual(figmaCreated.signalSuccessBg, options.signalSuccessBg);
assert.strictEqual(figmaCreated.signalSuccessBorder, options.signalSuccessBorder);
assert.strictEqual(figmaCreated.signalSuccessText, options.signalSuccessText);
assert.strictEqual(figmaCreated.signalInfoFill, options.signalInfoFill);
assert.strictEqual(figmaCreated.signalInfoBg, options.signalInfoBg);
assert.strictEqual(figmaCreated.signalInfoBorder, options.signalInfoBorder);
assert.strictEqual(figmaCreated.signalInfoText, options.signalInfoText);
assert.strictEqual(figmaCreated.signalDangerFill, options.signalDangerFill);
assert.strictEqual(figmaCreated.signalDangerBg, options.signalDangerBg);
assert.strictEqual(figmaCreated.signalDangerBorder, options.signalDangerBorder);
assert.strictEqual(figmaCreated.signalDangerText, options.signalDangerText);
assert.strictEqual(figmaCreated.signalWarningFill, options.signalWarningFill);
assert.strictEqual(figmaCreated.signalWarningBg, options.signalWarningBg);
assert.strictEqual(figmaCreated.signalWarningBorder, options.signalWarningBorder);
assert.strictEqual(figmaCreated.signalWarningText, options.signalWarningText);
assert.strictEqual(figmaCreated.signalInvertFill, options.signalInvertFill);
assert.strictEqual(figmaCreated.signalInvertBg, options.signalInvertBg);
assert.strictEqual(figmaCreated.signalInvertBorder, options.signalInvertBorder);
assert.strictEqual(figmaCreated.signalInvertText, options.signalInvertText);
assert.strictEqual(figmaCreated.components, options.components);
    });
  });

  describe("#get", () => {
    it("should retrieve a figma by ID", async () => {
      const retrieved = await thisService.get(figmaCreated._id);
      assert.strictEqual(retrieved._id, figmaCreated._id);
    });
  });

  describe("#update", () => {
    let figmaUpdated;
    const options = {"projectId":"345345345345345345345","name":"updated value","fileId":"updated value","description":"updated value","isDefault":false,"textBody":"updated value","textEmphasis":"updated value","textSecondary":"updated value","textTertiary":"updated value","textCode":"updated value","textHighlight":"updated value","bgBorderTranslucent":"updated value","bgBody":"updated value","bgBorder":"updated value","bgHighlight":"updated value","bgSecondary":"updated value","bgTertiary":"updated value","formInvalidBorder":"updated value","formInvalidBg":"updated value","formValidBorder":"updated value","formValidBg":"updated value","textHeading":"updated value","textLink":"updated value","textLinkHover":"updated value","signalPrimaryFill":"updated value","signalPrimaryBg":"updated value","signalPrimaryBorder":"updated value","signalPrimaryText":"updated value","signalSecondaryFill":"updated value","signalSecondaryBg":"updated value","signalSecondaryBorder":"updated value","signalSecondaryText":"updated value","signalTertiaryFill":"updated value","signalTertiaryBg":"updated value","signalTertiaryBorder":"updated value","signalTertiaryText":"updated value","signalSuccessFill":"updated value","signalSuccessBg":"updated value","signalSuccessBorder":"updated value","signalSuccessText":"updated value","signalInfoFill":"updated value","signalInfoBg":"updated value","signalInfoBorder":"updated value","signalInfoText":"updated value","signalDangerFill":"updated value","signalDangerBg":"updated value","signalDangerBorder":"updated value","signalDangerText":"updated value","signalWarningFill":"updated value","signalWarningBg":"updated value","signalWarningBorder":"updated value","signalWarningText":"updated value","signalInvertFill":"updated value","signalInvertBg":"updated value","signalInvertBorder":"updated value","signalInvertText":"updated value","components":{"name":"John Doe","age":200,"dateofbirth":"2025-01-31T00:00:00.000Z"}};

    beforeEach(async () => {
      figmaUpdated = await thisService.update(figmaCreated._id, options);
    });

    it("should update an existing figma ", async () => {
      assert.strictEqual(figmaUpdated.projectId, options.projectId);
assert.strictEqual(figmaUpdated.name, options.name);
assert.strictEqual(figmaUpdated.fileId, options.fileId);
assert.strictEqual(figmaUpdated.description, options.description);
assert.strictEqual(figmaUpdated.isDefault, options.isDefault);
assert.strictEqual(figmaUpdated.textBody, options.textBody);
assert.strictEqual(figmaUpdated.textEmphasis, options.textEmphasis);
assert.strictEqual(figmaUpdated.textSecondary, options.textSecondary);
assert.strictEqual(figmaUpdated.textTertiary, options.textTertiary);
assert.strictEqual(figmaUpdated.textCode, options.textCode);
assert.strictEqual(figmaUpdated.textHighlight, options.textHighlight);
assert.strictEqual(figmaUpdated.bgBorderTranslucent, options.bgBorderTranslucent);
assert.strictEqual(figmaUpdated.bgBody, options.bgBody);
assert.strictEqual(figmaUpdated.bgBorder, options.bgBorder);
assert.strictEqual(figmaUpdated.bgHighlight, options.bgHighlight);
assert.strictEqual(figmaUpdated.bgSecondary, options.bgSecondary);
assert.strictEqual(figmaUpdated.bgTertiary, options.bgTertiary);
assert.strictEqual(figmaUpdated.formInvalidBorder, options.formInvalidBorder);
assert.strictEqual(figmaUpdated.formInvalidBg, options.formInvalidBg);
assert.strictEqual(figmaUpdated.formValidBorder, options.formValidBorder);
assert.strictEqual(figmaUpdated.formValidBg, options.formValidBg);
assert.strictEqual(figmaUpdated.textHeading, options.textHeading);
assert.strictEqual(figmaUpdated.textLink, options.textLink);
assert.strictEqual(figmaUpdated.textLinkHover, options.textLinkHover);
assert.strictEqual(figmaUpdated.signalPrimaryFill, options.signalPrimaryFill);
assert.strictEqual(figmaUpdated.signalPrimaryBg, options.signalPrimaryBg);
assert.strictEqual(figmaUpdated.signalPrimaryBorder, options.signalPrimaryBorder);
assert.strictEqual(figmaUpdated.signalPrimaryText, options.signalPrimaryText);
assert.strictEqual(figmaUpdated.signalSecondaryFill, options.signalSecondaryFill);
assert.strictEqual(figmaUpdated.signalSecondaryBg, options.signalSecondaryBg);
assert.strictEqual(figmaUpdated.signalSecondaryBorder, options.signalSecondaryBorder);
assert.strictEqual(figmaUpdated.signalSecondaryText, options.signalSecondaryText);
assert.strictEqual(figmaUpdated.signalTertiaryFill, options.signalTertiaryFill);
assert.strictEqual(figmaUpdated.signalTertiaryBg, options.signalTertiaryBg);
assert.strictEqual(figmaUpdated.signalTertiaryBorder, options.signalTertiaryBorder);
assert.strictEqual(figmaUpdated.signalTertiaryText, options.signalTertiaryText);
assert.strictEqual(figmaUpdated.signalSuccessFill, options.signalSuccessFill);
assert.strictEqual(figmaUpdated.signalSuccessBg, options.signalSuccessBg);
assert.strictEqual(figmaUpdated.signalSuccessBorder, options.signalSuccessBorder);
assert.strictEqual(figmaUpdated.signalSuccessText, options.signalSuccessText);
assert.strictEqual(figmaUpdated.signalInfoFill, options.signalInfoFill);
assert.strictEqual(figmaUpdated.signalInfoBg, options.signalInfoBg);
assert.strictEqual(figmaUpdated.signalInfoBorder, options.signalInfoBorder);
assert.strictEqual(figmaUpdated.signalInfoText, options.signalInfoText);
assert.strictEqual(figmaUpdated.signalDangerFill, options.signalDangerFill);
assert.strictEqual(figmaUpdated.signalDangerBg, options.signalDangerBg);
assert.strictEqual(figmaUpdated.signalDangerBorder, options.signalDangerBorder);
assert.strictEqual(figmaUpdated.signalDangerText, options.signalDangerText);
assert.strictEqual(figmaUpdated.signalWarningFill, options.signalWarningFill);
assert.strictEqual(figmaUpdated.signalWarningBg, options.signalWarningBg);
assert.strictEqual(figmaUpdated.signalWarningBorder, options.signalWarningBorder);
assert.strictEqual(figmaUpdated.signalWarningText, options.signalWarningText);
assert.strictEqual(figmaUpdated.signalInvertFill, options.signalInvertFill);
assert.strictEqual(figmaUpdated.signalInvertBg, options.signalInvertBg);
assert.strictEqual(figmaUpdated.signalInvertBorder, options.signalInvertBorder);
assert.strictEqual(figmaUpdated.signalInvertText, options.signalInvertText);
assert.strictEqual(figmaUpdated.components, options.components);
    });
  });

  describe("#delete", () => {
  let figmaDeleted;
    beforeEach(async () => {
      figmaDeleted = await thisService.remove(figmaCreated._id);
    });

    it("should delete a figma", async () => {
      assert.strictEqual(figmaDeleted._id, figmaCreated._id);
    });
  });
});