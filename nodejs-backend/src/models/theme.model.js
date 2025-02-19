
    module.exports = function (app) {
        const modelName = "theme";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "Project Id, dropdown, false, false, false, false, false, false, false, projects, projects, one-to-one, projectName," },
themeName: { type:  String , comment: "Theme Name, p, false, true, true, true, true, true, true, , , , ," },
bodyColor: { type:  String , comment: "Body Color, p, false, true, true, true, true, true, true, , , , ," },
emphasisColor: { type:  String , comment: "Emphasis Color, p, false, true, true, true, true, true, true, , , , ," },
secondaryColor: { type:  String , comment: "Secondary Color, p, false, true, true, true, true, true, true, , , , ," },
tertiaryColor: { type:  String , comment: "Tertiary Color, p, false, true, true, true, true, true, true, , , , ," },
codeColor: { type:  String , comment: "Code Color, p, false, true, true, true, true, true, true, , , , ," },
highlightColor: { type:  String , comment: "Highlight Color, p, false, true, true, true, true, true, true, , , , ," },
borderColorTranslucent: { type:  String , comment: "Border Color Translucent, p, false, true, true, true, true, true, true, , , , ," },
bodyBg: { type:  String , comment: "Body Bg, p, false, true, true, true, true, true, true, , , , ," },
borderColor: { type:  String , comment: "Border Color, p, false, true, true, true, true, true, true, , , , ," },
highlightBg: { type:  String , comment: "Highlight Bg, p, false, true, true, true, true, true, true, , , , ," },
secondaryBg: { type:  String , comment: "Secondary Bg, p, false, true, true, true, true, true, true, , , , ," },
tertiaryBg: { type:  String , comment: "Tertiary Bg, p, false, true, true, true, true, true, true, , , , ," },
formInvalidBorderColor: { type:  String , comment: "Form Invalid Border Color, p, false, true, true, true, true, true, true, , , , ," },
formInvalidColor: { type:  String , comment: "Form Invalid Color, p, false, true, true, true, true, true, true, , , , ," },
formValidBorderColor: { type:  String , comment: "Form Valid Border Color, p, false, true, true, true, true, true, true, , , , ," },
formValidColor: { type:  String , comment: "Form Valid Color, p, false, true, true, true, true, true, true, , , , ," },
headingColor: { type:  String , comment: "Heading Color, p, false, true, true, true, true, true, true, , , , ," },
linkColor: { type:  String , comment: "Link Color, p, false, true, true, true, true, true, true, , , , ," },
linkHoverColor: { type:  String , comment: "Link Hover Color, p, false, true, true, true, true, true, true, , , , ," },
primary: { type:  String , comment: "Primary, p, false, true, true, true, true, true, true, , , , ," },
primaryBgSubtle: { type:  String , comment: "Primary Bg Subtle, p, false, true, true, true, true, true, true, , , , ," },
primaryBorderSubtle: { type:  String , comment: "Primary Border Subtle, p, false, true, true, true, true, true, true, , , , ," },
primaryTextEmphasis: { type:  String , comment: "Primary Text Emphasis, p, false, true, true, true, true, true, true, , , , ," },
secondary: { type:  String , comment: "Secondary, p, false, true, true, true, true, true, true, , , , ," },
secondaryBgSubtle: { type:  String , comment: "Secondary Bg Subtle, p, false, true, true, true, true, true, true, , , , ," },
secondaryBorderSubtle: { type:  String , comment: "Secondary Border Subtle, p, false, true, true, true, true, true, true, , , , ," },
secondaryTextEmphasis: { type:  String , comment: "Secondary Text Emphasis, p, false, true, true, true, true, true, true, , , , ," },
tertiary: { type:  String , comment: "Tertiary, p, false, true, true, true, true, true, true, , , , ," },
tertiaryBgSubtle: { type:  String , comment: "Tertiary Bg Subtle, p, false, true, true, true, true, true, true, , , , ," },
tertiaryBorderSubtle: { type:  String , comment: "Tertiary Border Subtle, p, false, true, true, true, true, true, true, , , , ," },
tertiaryTextEmphasis: { type:  String , comment: "Tertiary Text Emphasis, p, false, true, true, true, true, true, true, , , , ," },
success: { type:  String , comment: "Success, p, false, true, true, true, true, true, true, , , , ," },
successBgSubtle: { type:  String , comment: "Success Bg Subtle, p, false, true, true, true, true, true, true, , , , ," },
successBorderSubtle: { type:  String , comment: "Success Border Subtle, p, false, true, true, true, true, true, true, , , , ," },
successTextEmphasis: { type:  String , comment: "Success Text Emphasis, p, false, true, true, true, true, true, true, , , , ," },
info: { type:  String , comment: "Info, p, false, true, true, true, true, true, true, , , , ," },
infoBgSubtle: { type:  String , comment: "Info Bg Subtle, p, false, true, true, true, true, true, true, , , , ," },
infoBorderSubtle: { type:  String , comment: "Info Border Subtle, p, false, true, true, true, true, true, true, , , , ," },
infoTextEmphasis: { type:  String , comment: "Info Text Emphasis, p, false, true, true, true, true, true, true, , , , ," },
danger: { type:  String , comment: "Danger, p, false, true, true, true, true, true, true, , , , ," },
dangerBgSubtle: { type:  String , comment: "Danger Bg Subtle, p, false, true, true, true, true, true, true, , , , ," },
dangerBorderSubtle: { type:  String , comment: "Danger Border Subtle, p, false, true, true, true, true, true, true, , , , ," },
dangerTextEmphasis: { type:  String , comment: "Danger Text Emphasis, p, false, true, true, true, true, true, true, , , , ," },
warning: { type:  String , comment: "Warning, p, false, true, true, true, true, true, true, , , , ," },
warningBgSubtle: { type:  String , comment: "Warning Bg Subtle, p, false, true, true, true, true, true, true, , , , ," },
warningBorderSubtle: { type:  String , comment: "Warning Border Subtle, p, false, true, true, true, true, true, true, , , , ," },
warningTextEmphasis: { type:  String , comment: "Warning Text Emphasis, p, false, true, true, true, true, true, true, , , , ," },
dark: { type:  String , comment: "Dark, p, false, true, true, true, true, true, true, , , , ," },
darkBgSubtle: { type:  String , comment: "Dark Bg Subtle, p, false, true, true, true, true, true, true, , , , ," },
darkBorderSubtle: { type:  String , comment: "Dark Border Subtle, p, false, true, true, true, true, true, true, , , , ," },
darkTextEmphasis: { type:  String , comment: "Dark Text Emphasis, p, false, true, true, true, true, true, true, , , , ," },
bodyColorRgb: { type:  String , comment: "Body Color Rgb, p, false, true, true, true, true, true, true, , , , ," },
emphasisColorRgb: { type:  String , comment: "Emphasis Color Rgb, p, false, true, true, true, true, true, true, , , , ," },
linkColorRgb: { type:  String , comment: "Link Color Rgb, p, false, true, true, true, true, true, true, , , , ," },
linkHoverColorRgb: { type:  String , comment: "Link Hover Color Rgb, p, false, true, true, true, true, true, true, , , , ," },
tertiaryColorRgb: { type:  String , comment: "Tertiary Color Rgb, p, false, true, true, true, true, true, true, , , , ," },
secondaryBgRgb: { type:  String , comment: "Secondary Bg Rgb, p, false, true, true, true, true, true, true, , , , ," },
tertiaryBgRgb: { type:  String , comment: "Tertiary Bg Rgb, p, false, true, true, true, true, true, true, , , , ," },
lightBorderSubtle: { type:  String , comment: "Light Border Subtle, p, false, true, true, true, true, true, true, , , , ," },
lightTextEmphasis: { type:  String , comment: "Light Text Emphasis, p, false, true, true, true, true, true, true, , , , ," },
isDefault: { type: Boolean, required: false, comment: "Is Default, p_boolean, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };