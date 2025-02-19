
    module.exports = function (app) {
        const modelName = "database_apps";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "Project Id, dropdown, false, false, false, false, false, false, false, projects, projects, one-to-one, projectName," },
name: { type:  String , comment: "Name, p, false, true, true, true, true, true, true, , , , ," },
environment: { type: Schema.Types.ObjectId, ref: "environments", comment: "Environment, dropdown, false, true, true, true, true, true, true, environments, environments, one-to-one, name," },
username: { type:  String , comment: "Username, p, false, true, true, true, true, true, true, , , , ," },
password: { type:  String , comment: "Password, p, false, true, true, true, true, true, true, , , , ," },
port: { type:  String , comment: "Port, p, false, true, true, true, true, true, true, , , , ," },
url: { type:  String , comment: "URL, p, false, true, true, true, true, true, true, , , , ," },
database: { type:  String , comment: "Database, p, false, true, true, true, true, true, true, , , , ," },

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