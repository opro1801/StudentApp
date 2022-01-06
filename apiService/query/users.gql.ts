import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsersById() {
    users {
      id
      firebaseUid
      name
      email
      photoURL
      role
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserById($userId: String!) {
    user(id: $userId) {
      id
      firebaseUid
      name
      email
      photoURL
      role
    }
  }
`;
