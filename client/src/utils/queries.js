import { gql } from "@apollo/client";

export const QUERY_CUSTOMERS = gql`
  query Customers {
    customers {
      _id
      queueId
      username
      createdAt
      email
      phone
      partyCount
      note
      inQueue
    }
  }
`;

export const QUERY_CUSTOMER = gql`
  query Customer($id: ID!) {
    customer(_id: $id) {
      _id
      queueId
      username
      createdAt
      email
      phone
      partyCount
      note
      inQueue
    }
  }
`;

export const QUERY_MANAGER = gql`
  query Manager {
    manager {
      _id
      username
      email
      phone
    }
  }
`;

export const QUERY_QUEUES = gql`
  query Queues {
    queues {
      _id
      queueId
      createdAt
      note
      wait_time
      customers {
        _id
        queueId
        username
        createdAt
        email
        phone
        partyCount
        note
        inQueue
      }
    }
  }
`;

export const QUERY_QUEUE = gql`
  query Queues($queueId: String!) {
    queue(queueId: $queueId) {
      _id
      queueId
      createdAt
      note
      wait_time
      customers {
        _id
        queueId
        username
        createdAt
        email
        phone
        partyCount
        note
        inQueue
      }
    }
  }
`;

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
      phone
    }
  }
`;

export const SWITCH = gql`
  query Switch {
    switch {
      queueId
      name
    }
  }
`;

export const CURRENT = gql`
  query Current {
    current {
      _id
      queueId
    }
  }
`;
