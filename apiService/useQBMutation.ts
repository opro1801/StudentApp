import { useMutation } from '@apollo/client';
import {
  FolderAddOrRemoveTopicInput,
  QBFolderUpdateOutput,
  QBTopicDeleteOutput,
  QBTopicUpdateOutput,
  TopicUpdateInput,
} from '../assets/type/backend.type';
import { QB_FOLDER_ADD_OR_REMOVE_TOPIC_BY_ID_MUTATION } from './mutation/qbFolderAddOrRemoveTopicById.gql';
import { QB_TOPIC_DELETE_BY_ID_MUTATION } from './mutation/qbTopicDeleteById.gql';
import { QB_TOPIC_UPDATE_BY_ID_MUTATION } from './mutation/qbTopicUpdateById.gql';

const useQBMutation = () => {
  const [qbTopicUpdateByIdMutation] = useMutation<
    { qbTopicUpdateById: QBTopicUpdateOutput },
    { topicUpdateInput: TopicUpdateInput }
  >(QB_TOPIC_UPDATE_BY_ID_MUTATION);

  const [qbTopicDeleteByIdMutation] = useMutation<
    { qbTopicDeleteById: QBTopicDeleteOutput },
    { topicId: string }
  >(QB_TOPIC_DELETE_BY_ID_MUTATION);

  const [qbFolderAddOrRemoveTopicByIdMutation] = useMutation<
    { qbFolderAddOrRemoveTopicById: QBFolderUpdateOutput },
    { folderAddOrRemoveTopicInput: FolderAddOrRemoveTopicInput }
  >(QB_FOLDER_ADD_OR_REMOVE_TOPIC_BY_ID_MUTATION);

  return {
    qbTopicUpdateByIdMutation,
    qbTopicDeleteByIdMutation,
    qbFolderAddOrRemoveTopicByIdMutation,
  };
};

export default useQBMutation;
