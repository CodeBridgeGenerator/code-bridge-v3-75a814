
    module.exports = function (app) {
        const modelName = "apis";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "Project Id, dropdown, false, false, false, false, false, false, false, projects, projects, one-to-one, projectName," },
apiName: { type:  String , comment: "Api Name, p, false, true, true, true, true, true, true, , , , ," },
url: { type:  String , comment: "Url, p, false, true, true, true, true, true, true, , , , ," },
request: { type: Schema.Types.Mixed , comment: "Request, pre, false, true, true, true, true, true, true, , , , ," },
params: { type: Schema.Types.Mixed , comment: "Params, pre, false, true, true, true, true, true, true, , , , ," },
method: { type:  String , comment: "Method, p, false, true, true, true, true, true, true, , , , ," },
token: { type:  String , comment: "Token, p, false, true, true, true, true, true, true, , , , ," },
authorization: { type:  String , comment: "Authorization, p, false, true, true, true, true, true, true, , , , ," },
response: { type: Schema.Types.Mixed , comment: "Response, pre, false, true, true, true, true, true, true, , , , ," },

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