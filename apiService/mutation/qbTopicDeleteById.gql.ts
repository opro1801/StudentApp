import { gql } from '@apollo/client';

export const QB_TOPIC_DELETE_BY_ID_MUTATION = gql`
  mutation qbTopicDeleteById($topicId: String!) {
    qbTopicDeleteById(topicId: $topicId) {
      isSuccess
      code
      errorMessage
      data {
        id
        name {
          zh
          en
        }
        description
        orderSequence
        icon {
          size
          fileURL
          fileName
          filePath
          attachmentFileType
          contentType
          originalFileName
        }
      }
    }
  }
`;
