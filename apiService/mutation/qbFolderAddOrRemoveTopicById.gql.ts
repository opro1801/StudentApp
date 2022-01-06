import { gql } from '@apollo/client';

export const QB_FOLDER_ADD_OR_REMOVE_TOPIC_BY_ID_MUTATION = gql`
  mutation qbFolderAddOrRemoveTopicById(
    $folderAddOrRemoveTopicInput: FolderAddOrRemoveTopicInput!
  ) {
    qbFolderAddOrRemoveTopicById(
      folderAddOrRemoveTopicInput: $folderAddOrRemoveTopicInput
    ) {
      isSuccess
      errorMessage
      code
      data {
        id
      }
    }
  }
`;
