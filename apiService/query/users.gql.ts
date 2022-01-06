import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsersById {
    users {
      id
      firebaseUid
      name
      email
      role
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getTopicDetailById($userId: String!) {
    user(id: $userId) {
      id
      name
    }
  }
`;
