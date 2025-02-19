
    module.exports = function (app) {
        const modelName = "login_policy";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "Project Id, dropdown, false, false, false, false, false, false, false, projects, projects, one-to-one, projectName," },
policyName: { type:  String , comment: "Policy Name, p, false, true, true, true, true, true, true, , , , ," },
useEmail: { type: Boolean, required: false, comment: "Use Email, p_boolean, false, true, true, true, true, true, true, , , , ," },
useGoogle: { type: Boolean, required: false, comment: "Use Google, p_boolean, false, true, true, true, true, true, true, , , , ," },
useStaffId: { type: Boolean, required: false, comment: "Use Staff ID, p_boolean, false, true, true, true, true, true, true, , , , ," },
useLinkedIn: { type: Boolean, required: false, comment: "Use Linked In, p_boolean, false, true, true, true, true, true, true, , , , ," },
isDefault: { type: Boolean, required: false, comment: "Is Default, p_boolean, false, true, true, true, true, true, true, , , , ," },
googleAuthenticator: { type: Boolean, required: false, comment: "Google Authenticator, p_boolean, false, true, true, true, true, true, true, , , , ," },
msAuthenticator: { type: Boolean, required: false, comment: "MS Authenticator, p_boolean, false, true, true, true, true, true, true, , , , ," },

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