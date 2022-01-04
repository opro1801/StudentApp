import { gql } from '@apollo/client';

export const GET_ME_QUERY = gql`
  query {
    me {
      id
      name
      email
      role
      coursesAsTeacher {
        courseName
        status
        role
      }
      coursesAsStudent {
        courseName
        status
        role
      }
    }
  }
`;
