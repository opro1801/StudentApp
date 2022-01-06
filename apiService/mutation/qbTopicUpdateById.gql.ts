import { gql } from '@apollo/client';

export const QB_TOPIC_UPDATE_BY_ID_MUTATION = gql`
  mutation qbTopicUpdateById($topicUpdateInput: TopicUpdateInput!) {
    qbTopicUpdateById(topicUpdateInput: $topicUpdateInput) {
      isSuccess
      code
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
        isEnable
        isFlagged
      }
    }
  }
`;
