
    module.exports = function (app) {
        const modelName = "locale";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "Project Id, dropdown, false, false, false, false, false, false, false, projects, projects, one-to-one, projectName," },
localeName: { type:  String , comment: "Locale Name, p, false, true, true, true, true, true, true, , , , ," },
dateFormat: { type:  String , comment: "Date Format, p, false, true, true, true, true, true, true, , , , ," },
timeFormat: { type:  String , comment: "Time Format, p, false, true, true, true, true, true, true, , , , ," },
timeZone: { type:  String , comment: "Time Zone, p, false, true, true, true, true, true, true, , , , ," },
currencyFormat: { type:  String , comment: "Currency Format, p, false, true, true, true, true, true, true, , , , ," },
currencyIndex: { type:  String , comment: "Currency Index, p, false, true, true, true, true, true, true, , , , ," },
currencySymbol: { type:  String , comment: "Currency Symbol, p, false, true, true, true, true, true, true, , , , ," },
country: { type:  String , comment: "Country, p, false, true, true, true, true, true, true, , , , ," },
language: { type:  String , comment: "Language, p, false, true, true, true, true, true, true, , , , ," },
languages: { type:  [String] , description: "isArray", comment: "Languages, p, false, true, true, true, true, true, true, , , , ," },
intlDialing: { type: Number, comment: "Intl Dialing, p_number, false, true, true, true, true, true, true, , , , ," },
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