// const faker = require('faker');
const ManagerSeeds = require("./managerSeed.json");
const CustomerSeeds = require("./customerSeed.json");
const QueueSeeds = require("./queueSeed.json");
const db = require("../config/connection");
const { Manager, Customer, Queue, Switch } = require("../models");

db.once("open", async () => {
  try {
    await Switch.deleteMany({});
    await Manager.deleteMany({});
    await Manager.create(ManagerSeeds);
    await Customer.deleteMany({});
    await Queue.deleteMany({});
    await Queue.create(QueueSeeds);
    for (let i = 0; i < CustomerSeeds.length; i++) {
      const { _id, queueId } = await Customer.create(CustomerSeeds[i]);
      console.log(_id, queueId);
      const temp = await Queue.findOneAndUpdate(
        { queueId: queueId },
        {
          $addToSet: {
            customers: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
