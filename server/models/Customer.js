const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const customerSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      match: [/^[1-9]\d{2}-\d{3}-\d{4}/, "Must match an phone number!"],
    },
    partyCount: {
      type: Number,
      default: 1,
      match: [/[1-9]/, "Must me a number between 1-9!"],
    },
    queueId: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: false,
    },
    inQueue: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Customer = model("Customer", customerSchema);

module.exports = Customer;
