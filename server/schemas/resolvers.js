const { Manager, Queue, Customer, Switch } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const managerData = await Manager.findOne({
          _id: context.user._id,
        }).select("-__v -password");
        return managerData;
      }
      throw new AuthenticationError("Not logged in");
    },
    manager: async () => {
      return Manager.find();
    },
    switch: async () => {
      return Switch.find();
    },
    customers: async () => {
      return Customer.find();
    },
    customer: async (parent, { _id }) => {
      return Customer.findOne({ _id }).select("-__v -password");
    },
    queues: async () => {
      return Queue.find().populate("customers");
    },
    queue: async (parent, { queueId }) => {
      return Queue.findOne({ queueId }).populate("customers");
    },
    current: async () => {
      return Switch.findOne({ name: "main" });
    },
  },

  Mutation: {
    managerLogin: async (parent, { email, password }) => {
      const manager = await Manager.findOne({ email });
      if (!manager) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await manager.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(manager);
      return { token, manager };
    },

    addCustomer: async (parent, args) => {
      const customer = await Customer.create(args);
      const { _id, queueId } = customer;
      console.log(_id, queueId);
      const temp = await Queue.findOneAndUpdate(
        { queueId: queueId },
        {
          $addToSet: {
            customers: _id,
          },
        }
      );

      return customer;
    },

    addQueue: async (parent, args) => {
      const queue = await Queue.create(args);
      const temp = await Switch.create({
        name: "main",
        queueId: queue.queueId,
      });
      return queue;
    },

    closeQueue: async () => {
      return Switch.findOneAndDelete({ name: "main" });
    },

    deleteCustomer: async (parent, args, context) => {
      if (context.user) {
        return Customer.findOneAndDelete({ _id: args._id });
      }
      throw new AuthenticationError("Only Manager can access this!");
    },

    CheckinCustomer: async (parent, args, context) => {
      if (context.user) {
        const temp = await Customer.findOneAndUpdate(
          { _id: args._id },
          { inQueue: false },
          { new: true, runValidators: true }
        );
        return temp;
      }
      throw new AuthenticationError("Only Manager can access this!");
    },

    ChangeWaitTime: async (parent, args, context) => {
      if (context.user) {
        const temp = await Queue.findOneAndUpdate(
          { queueId: args.queueId },
          { wait_time: args.updateTime },
          { new: true, runValidators: true }
        ).populate("customers");
        return temp;
      }
      throw new AuthenticationError("Only Manager can access this!");
    },
  },
};

module.exports = resolvers;
