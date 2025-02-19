
    module.exports = function (app) {
        const modelName = "login_blocked";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "Project Id, dropdown, false, false, false, false, false, false, false, projects, projects, one-to-one, projectName," },
policyName: { type:  String , comment: "Policy Name, p, false, true, true, true, true, true, true, , , , ," },
blockedIp: { type:  String , comment: "Blocked IP, p, false, true, true, true, true, true, true, , , , ," },
startBlockedIp: { type:  String , comment: "Start Blocked IP, p, false, true, true, true, true, true, true, , , , ," },
endBlockedIp: { type:  String , comment: "End Blocked IP, p, false, true, true, true, true, true, true, , , , ," },

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