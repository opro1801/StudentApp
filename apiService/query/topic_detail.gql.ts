import { gql } from '@apollo/client';

//8141a91e-9b33-4c80-9b7f-e59740d9a5fd

export const GET_TOPIC_DETAIL_BY_ID_QUERY = gql`
  query getTopicDetailById($topicId: String!) {
    topic(id: $topicId) {
      id
      name {
        ...localeStringDetail
      }
      description
      isEnable
      isFlagged
      subject
      orderSequence
      icon {
        ...photoDetail
      }
    }
  }
  fragment localeStringDetail on LocaleString {
    en
    zh
  }
  fragment photoDetail on PhotoAtachment {
    fileURL
    fileName
    filePath
    attachmentFileType
    contentType
    originalFileName
  }
`;
