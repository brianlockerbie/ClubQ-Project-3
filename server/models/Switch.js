const { Schema, model } = require("mongoose");
const switchSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    queueId: {
      type: String,
      trim: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Switch = model("Switch", switchSchema);

module.exports = Switch;
