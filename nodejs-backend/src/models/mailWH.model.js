module.exports = function (app) {
  const modelName = "mail_w_h";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      date: {
        type: Date,
        comment:
          "Date, p_calendar, false, true, true, true, true, true, true, , , , ,",
      },
      data: {
        type: Schema.Types.Mixed,
        comment: "Data, p, false, true, true, true, true, true, true, , , , ,",
      },

      createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
      updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
    },
    {
      timestamps: true,
    },
  );

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
