import { gql } from "@apollo/client";

export const MANAGER_LOGIN = gql`
  mutation managerLogin($email: String!, $password: String!) {
    managerLogin(email: $email, password: $password) {
      token
      manager {
        _id
        username
        email
        phone
      }
    }
  }
`;

export const ADD_CUSTOMER = gql`
  mutation addCustomer(
    $username: String!
    $queueId: String!
    $email: String!
    $phone: String!
    $partyCount: Int
    $note: String
  ) {
    addCustomer(
      username: $username
      queueId: $queueId
      email: $email
      phone: $phone
      partyCount: $partyCount
      note: $note
    ) {
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

export const CHECK_IN_CUSTOMER = gql`
  mutation CheckinCustomer($id: ID!) {
    CheckinCustomer(_id: $id) {
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

export const DELETE_CUSTOMER = gql`
  mutation deleteCustomer($id: ID!) {
    deleteCustomer(_id: $id) {
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

export const CHANGE_WAIT_TIME = gql`
  mutation ChangeWaitTime($queueId: String!, $updateTime: Int!) {
    ChangeWaitTime(queueId: $queueId, updateTime: $updateTime) {
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

export const ADD_QUEUE = gql`
  mutation AddQueue($queueId: String!) {
    addQueue(queueId: $queueId) {
      _id
      queueId
      createdAt
      note
      wait_time
    }
  }
`;

export const CLOSE = gql`
  mutation CloseQueue {
    closeQueue {
      name
      queueId
    }
  }
`;
