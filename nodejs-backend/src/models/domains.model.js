
    module.exports = function (app) {
        const modelName = "domains";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "Project Id, dropdown, false, false, false, false, false, false, false, projects, projects, one-to-one, projectName," },
name: { type:  String , comment: "Name, p, false, true, true, true, true, true, true, , , , ," },
environment: { type: Schema.Types.ObjectId, ref: "environments", comment: "Environment, dropdown, false, true, true, true, true, true, true, environments, environments, one-to-one, name," },
domain: { type:  String , comment: "Domain, p, false, true, true, true, true, true, true, , , , ," },
appName: { type:  String , comment: "App Name, p, false, true, true, true, true, true, true, , , , ," },
appDir: { type:  String , comment: "App Dir, p, false, true, true, true, true, true, true, , , , ," },
appProjectName: { type:  String , comment: "App Project Name, p, false, true, true, true, true, true, true, , , , ," },
appObjectName: { type:  String , comment: "App Object Name, p, false, true, true, true, true, true, true, , , , ," },
appPortNumber: { type: Number, comment: "App Port Number, p_number, false, true, true, true, true, true, true, , , , ," },
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