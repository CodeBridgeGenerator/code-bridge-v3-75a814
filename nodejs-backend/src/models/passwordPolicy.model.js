
    module.exports = function (app) {
        const modelName = "password_policy";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "Project Id, dropdown, false, false, false, false, false, false, false, projects, projects, one-to-one, projectName," },
policyName: { type:  String , comment: "Policy Name, p, false, true, true, true, true, true, true, , , , ," },
passwordLength: { type: Number, comment: "Password Length, p_number, false, true, true, true, true, true, true, , , , ," },
capitalLetters: { type: Number, comment: "Capital Letters, p_number, false, true, true, true, true, true, true, , , , ," },
specialCharacters: { type: Number, comment: "Special Characters, p_number, false, true, true, true, true, true, true, , , , ," },
numbers: { type: Number, comment: "Numbers, p_number, false, true, true, true, true, true, true, , , , ," },
allowOldPasswordReuse: { type: Number, comment: "Allow Old Password Reuse, p_number, false, true, true, true, true, true, true, , , , ," },
isDefault: { type: Boolean, required: false, comment: "Is Default, p_boolean, false, true, true, true, true, true, true, , , , ," },
passwordRenewalTimeline: { type: Number, comment: "Password Renewal Timeline, p_number, false, true, true, true, true, true, true, , , , ," },

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