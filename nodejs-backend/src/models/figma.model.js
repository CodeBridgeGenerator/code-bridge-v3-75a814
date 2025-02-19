
    module.exports = function (app) {
        const modelName = "figma";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "Project Id, dropdown, false, false, false, false, false, false, false, projects, projects, one-to-one, projectName," },
name: { type:  String , comment: "Name, p, false, true, true, true, true, true, true, , , , ," },
fileId: { type:  String , comment: "File Id, p, false, true, true, true, true, true, true, , , , ," },
description: { type:  String , comment: "Description, p, false, true, true, true, true, true, true, , , , ," },
isDefault: { type: Boolean, required: false, comment: "Is Default, p_boolean, false, true, true, true, true, true, true, , , , ," },
textBody: { type:  String , comment: "Text Body, p, false, true, true, true, true, true, true, , , , ," },
textEmphasis: { type:  String , comment: "Text Emphasis, p, false, true, true, true, true, true, true, , , , ," },
textSecondary: { type:  String , comment: "Text Secondary, p, false, true, true, true, true, true, true, , , , ," },
textTertiary: { type:  String , comment: "Text Tertiary, p, false, true, true, true, true, true, true, , , , ," },
textCode: { type:  String , comment: "Text Code, p, false, true, true, true, true, true, true, , , , ," },
textHighlight: { type:  String , comment: "Text Highlight, p, false, true, true, true, true, true, true, , , , ," },
bgBorderTranslucent: { type:  String , comment: "Bg Border Translucent, p, false, true, true, true, true, true, true, , , , ," },
bgBody: { type:  String , comment: "Bg Body, p, false, true, true, true, true, true, true, , , , ," },
bgBorder: { type:  String , comment: "Bg Border, p, false, true, true, true, true, true, true, , , , ," },
bgHighlight: { type:  String , comment: "Bg Highlight, p, false, true, true, true, true, true, true, , , , ," },
bgSecondary: { type:  String , comment: "Bg Secondary, p, false, true, true, true, true, true, true, , , , ," },
bgTertiary: { type:  String , comment: "Bg Tertiary, p, false, true, true, true, true, true, true, , , , ," },
formInvalidBorder: { type:  String , comment: "Form Invalid Border, p, false, true, true, true, true, true, true, , , , ," },
formInvalidBg: { type:  String , comment: "Form Invalid Bg, p, false, true, true, true, true, true, true, , , , ," },
formValidBorder: { type:  String , comment: "Form Valid Border, p, false, true, true, true, true, true, true, , , , ," },
formValidBg: { type:  String , comment: "Form Valid Bg, p, false, true, true, true, true, true, true, , , , ," },
textHeading: { type:  String , comment: "Text Heading, p, false, true, true, true, true, true, true, , , , ," },
textLink: { type:  String , comment: "Text Link, p, false, true, true, true, true, true, true, , , , ," },
textLinkHover: { type:  String , comment: "Text Link Hover, p, false, true, true, true, true, true, true, , , , ," },
signalPrimaryFill: { type:  String , comment: "Signal Primary Fill, p, false, true, true, true, true, true, true, , , , ," },
signalPrimaryBg: { type:  String , comment: "Signal Primary Bg, p, false, true, true, true, true, true, true, , , , ," },
signalPrimaryBorder: { type:  String , comment: "Signal Primary Border, p, false, true, true, true, true, true, true, , , , ," },
signalPrimaryText: { type:  String , comment: "Signal Primary Text, p, false, true, true, true, true, true, true, , , , ," },
signalSecondaryFill: { type:  String , comment: "Signal Secondary Fill, p, false, true, true, true, true, true, true, , , , ," },
signalSecondaryBg: { type:  String , comment: "Signal Secondary Bg, p, false, true, true, true, true, true, true, , , , ," },
signalSecondaryBorder: { type:  String , comment: "Signal Secondary Border, p, false, true, true, true, true, true, true, , , , ," },
signalSecondaryText: { type:  String , comment: "Signal Secondary Text, p, false, true, true, true, true, true, true, , , , ," },
signalTertiaryFill: { type:  String , comment: "Signal Tertiary Fill, p, false, true, true, true, true, true, true, , , , ," },
signalTertiaryBg: { type:  String , comment: "Signal Tertiary Bg, p, false, true, true, true, true, true, true, , , , ," },
signalTertiaryBorder: { type:  String , comment: "Signal Tertiary Border, p, false, true, true, true, true, true, true, , , , ," },
signalTertiaryText: { type:  String , comment: "Signal Tertiary Text, p, false, true, true, true, true, true, true, , , , ," },
signalSuccessFill: { type:  String , comment: "Signal Success Fill, p, false, true, true, true, true, true, true, , , , ," },
signalSuccessBg: { type:  String , comment: "Signal Success Bg, p, false, true, true, true, true, true, true, , , , ," },
signalSuccessBorder: { type:  String , comment: "Signal Success Border, p, false, true, true, true, true, true, true, , , , ," },
signalSuccessText: { type:  String , comment: "Signal Success Text, p, false, true, true, true, true, true, true, , , , ," },
signalInfoFill: { type:  String , comment: "Signal Info Fill, p, false, true, true, true, true, true, true, , , , ," },
signalInfoBg: { type:  String , comment: "Signal Info Bg, p, false, true, true, true, true, true, true, , , , ," },
signalInfoBorder: { type:  String , comment: "Signal Info Border, p, false, true, true, true, true, true, true, , , , ," },
signalInfoText: { type:  String , comment: "Signal Info Text, p, false, true, true, true, true, true, true, , , , ," },
signalDangerFill: { type:  String , comment: "Signal Danger Fill, p, false, true, true, true, true, true, true, , , , ," },
signalDangerBg: { type:  String , comment: "Signal Danger Bg, p, false, true, true, true, true, true, true, , , , ," },
signalDangerBorder: { type:  String , comment: "Signal Danger Border, p, false, true, true, true, true, true, true, , , , ," },
signalDangerText: { type:  String , comment: "Signal Danger Text, p, false, true, true, true, true, true, true, , , , ," },
signalWarningFill: { type:  String , comment: "Signal Warning Fill, p, false, true, true, true, true, true, true, , , , ," },
signalWarningBg: { type:  String , comment: "Signal Warning Bg, p, false, true, true, true, true, true, true, , , , ," },
signalWarningBorder: { type:  String , comment: "Signal Warning Border, p, false, true, true, true, true, true, true, , , , ," },
signalWarningText: { type:  String , comment: "Signal Warning Text, p, false, true, true, true, true, true, true, , , , ," },
signalInvertFill: { type:  String , comment: "Signal Invert Fill, p, false, true, true, true, true, true, true, , , , ," },
signalInvertBg: { type:  String , comment: "Signal Invert Bg, p, false, true, true, true, true, true, true, , , , ," },
signalInvertBorder: { type:  String , comment: "Signal Invert Border, p, false, true, true, true, true, true, true, , , , ," },
signalInvertText: { type:  String , comment: "Signal Invert Text, p, false, true, true, true, true, true, true, , , , ," },
components: { type: Schema.Types.Mixed , comment: "Components, pre, false, true, true, true, true, true, true, , , , ," },

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