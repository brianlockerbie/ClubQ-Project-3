const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Customer {
    _id: ID
    queueId: String
    username: String
    createdAt: String
    email: String
    phone: String
    partyCount: Int
    note: String
    inQueue: Boolean
  }

  type Manager {
    _id: ID
    username: String
    email: String
    phone: String
  }

  type ManagerAuth {
    token: ID!
    manager: Manager
  }

  type Queue {
    _id: ID
    queueId: String
    createdAt: String
    note: String
    wait_time: Int
    customers: [Customer]
  }

  type Switch {
    name: String
    queueId: String
  }

  type Query {
    me: Manager
    customers: [Customer]
    customer(_id: ID!): Customer
    manager: [Manager]
    queues: [Queue]
    queue(queueId: String!): Queue
    switch: [Switch]
    current: Queue
  }

  type Mutation {
    managerLogin(email: String!, password: String!): ManagerAuth
    addCustomer(username: String!, queueId: String!, email: String!, phone: String!,partyCount: Int,note: String): Customer
    CheckinCustomer(_id: ID!): Customer
    deleteCustomer(_id: ID!): Customer
    ChangeWaitTime(queueId: String!, updateTime: Int!): Queue
    addQueue (queueId: String!, wait_time: String, note: String): Queue
    closeQueue: Switch
  }
`;

module.exports = typeDefs;
