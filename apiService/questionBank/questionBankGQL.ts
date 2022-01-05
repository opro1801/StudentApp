import { gql } from '@apollo/client';

export const GET_QUESTION_BANKS_BASIC_QUERY = gql`
  query getQuestionBanksBasic {
    questionBanks {
      id
      name {
        ...localeStringDetail
      }
      subject
      examSystem
    }
  }
  fragment localeStringDetail on LocaleString {
    en
    zh
  }
`;

export const GET_QUESTION_BANK_DETAIL_QUERY = gql`
  # Write your query or mutation here
  query getQuestionBank($id: String!) {
    questionBank(id: $id) {
      id
      name {
        ...localeStringDetail
      }
      subject
      examSystem
      topics {
        id
        name {
          ...localeStringDetail
        }
        isEnable
        isFlagged
      }
      folders {
        id
        name {
          ...localeStringDetail
        }
        isEnable
        isFlagged
        topics {
          id
          name {
            ...localeStringDetail
          }
        }
      }
      unclassifiedTopics {
        id
        name {
          ...localeStringDetail
        }
        isEnable
        isFlagged
      }
    }
  }
  fragment localeStringDetail on LocaleString {
    en
    zh
  }
`;

export const GET_FOLDER_DETAIL_QUERY = gql`
  query getFolder($id: String!) {
    folder(id: $id) {
      id
      name {
        ...localeStringDetail
      }
      topics {
        id
        name {
          ...localeStringDetail
        }
        questions {
          id
          level
          inputType
          groupId
          isFlaged
          content {
            ... on MCContent {
              inputType
              body {
                ...localeStringDetail
              }
              answers {
                optionName
                body {
                  ...localeStringDetail
                }
                attachments {
                  ... on PhotoAtachment {
                    fileURL
                  }
                }
              }
              correctAnswer
              solution {
                ...localeStringDetail
              }
            }
          }
          tags {
            id
            name {
              ...localeStringDetail
            }
          }
        }
        groups {
          id
          name {
            ...localeStringDetail
          }
          questions {
            id
            level
            inputType
            groupId
            isFlaged
            topicAncestorIds
            content {
              ... on MCContent {
                inputType
                body {
                  ...localeStringDetail
                }
                answers {
                  optionName
                  body {
                    ...localeStringDetail
                  }
                  attachments {
                    ... on PhotoAtachment {
                      fileURL
                    }
                  }
                }
                correctAnswer
                solution {
                  ...localeStringDetail
                }
              }
            }
            tags {
              id
              name {
                ...localeStringDetail
              }
            }
          }
        }
        subTopics {
          id
          name {
            ...localeStringDetail
          }
        }
      }
      subFolders {
        id
        name {
          ...localeStringDetail
        }
      }
    }
  }
  fragment localeStringDetail on LocaleString {
    en
    zh
  }
`;

export const GET_TOPIC_DETAIL_QUERY = gql`
  query getTopic($id: String!) {
    topic(id: $id) {
      id
      name {
        ...localeStringDetail
      }
      questions {
        id
        level
        inputType
        groupId
        isFlaged
        topicAncestorIds
        content {
          ... on MCContent {
            inputType
            body {
              ...localeStringDetail
            }
            answers {
              optionName
              body {
                ...localeStringDetail
              }
              attachments {
                ... on PhotoAtachment {
                  fileURL
                }
              }
            }
            correctAnswer
            solution {
              ...localeStringDetail
            }
          }
        }
        tags {
          id
          name {
            ...localeStringDetail
          }
        }
      }
      groups {
        id
        name {
          ...localeStringDetail
        }
        questions {
          id
          level
          inputType
          groupId
          isFlaged
          topicAncestorIds
          content {
            ... on MCContent {
              inputType
              body {
                ...localeStringDetail
              }
              answers {
                optionName
                body {
                  ...localeStringDetail
                }
                attachments {
                  ... on PhotoAtachment {
                    fileURL
                  }
                }
              }
              correctAnswer
              solution {
                ...localeStringDetail
              }
            }
          }
          tags {
            id
            name {
              ...localeStringDetail
            }
          }
        }
      }
      subTopics {
        id
        name {
          ...localeStringDetail
        }
        questions {
          id
          level
          inputType
          groupId
          isFlaged
          topicAncestorIds
          content {
            ... on MCContent {
              inputType
              body {
                ...localeStringDetail
              }
              answers {
                optionName
                body {
                  ...localeStringDetail
                }
                attachments {
                  ... on PhotoAtachment {
                    fileURL
                  }
                }
              }
              correctAnswer
              solution {
                ...localeStringDetail
              }
            }
          }
          tags {
            id
            name {
              ...localeStringDetail
            }
          }
        }
        groups {
          id
          name {
            ...localeStringDetail
          }
          questions {
            id
            level
            inputType
            groupId
            isFlaged
            topicAncestorIds
            content {
              ... on MCContent {
                inputType
                body {
                  ...localeStringDetail
                }
                answers {
                  optionName
                  body {
                    ...localeStringDetail
                  }
                  attachments {
                    ... on PhotoAtachment {
                      fileURL
                    }
                  }
                }
                correctAnswer
                solution {
                  ...localeStringDetail
                }
              }
            }
            tags {
              id
              name {
                ...localeStringDetail
              }
            }
          }
        }
      }
    }
  }
  fragment localeStringDetail on LocaleString {
    en
    zh
  }
`;

export const GET_GROUP_DETAIL_QUERY = gql`
  query getGroup($id: String!) {
    group(id: $id) {
      id
      name {
        ...localeStringDetail
      }
      questions {
        id
        level
        inputType
        groupId
        isFlaged
        topicAncestorIds
        content {
          ... on MCContent {
            inputType
            body {
              ...localeStringDetail
            }
            answers {
              optionName
              body {
                ...localeStringDetail
              }
              attachments {
                ... on PhotoAtachment {
                  fileURL
                }
              }
            }
            correctAnswer
            solution {
              ...localeStringDetail
            }
          }
        }
        tags {
          id
          name {
            ...localeStringDetail
          }
        }
      }
    }
  }
  fragment localeStringDetail on LocaleString {
    en
    zh
  }
`;

export const GET_QUESTION_DETAIL_QUERY = gql`
  query getQuestion($id: String!) {
    question(id: $id) {
      id
      level
      inputType
      groupId
      isFlaged
      topicAncestorIds
      content {
        ... on MCContent {
          inputType
          body {
            ...localeStringDetail
          }
          answers {
            optionName
            body {
              ...localeStringDetail
            }
            attachments {
              ... on PhotoAtachment {
                fileURL
              }
            }
          }
          correctAnswer
          solution {
            ...localeStringDetail
          }
        }
      }
      tags {
        id
        name {
          ...localeStringDetail
        }
      }
    }
  }
  fragment localeStringDetail on LocaleString {
    en
    zh
  }
`;

export const GET_TAGS_QUERY = gql`
  query getTags($tagFilterInput: TagFilterInput) {
    tags(tagFilterInput: $tagFilterInput) {
      id
      name {
        ...localeStringDetail
      }
    }
  }
  fragment localeStringDetail on LocaleString {
    en
    zh
  }
`;

export const TAG_CREATE_MUTATION = gql`
  mutation qbTagCreate($tagCreateInput: TagCreateInput!) {
    qbTagCreate(tagCreateInput: $tagCreateInput) {
      isSuccess
      data {
        id
        name {
          ...localeStringDetail
        }
      }
    }
  }
  fragment localeStringDetail on LocaleString {
    en
    zh
  }
`;

export const ADD_Folder_BY_ID_MUTATION = gql`
  mutation qbFolderCreate($folderCreateInput: FolderCreateInput!) {
    qbFolderCreate(folderCreateInput: $folderCreateInput) {
      isSuccess
      code
      errorMessage
      data {
        id
      }
    }
  }
`;

export const ADD_TOPIC_BY_ID_MUTATION = gql`
  mutation qbTopicCreate($topicCreateInput: TopicCreateInput!) {
    qbTopicCreate(topicCreateInput: $topicCreateInput) {
      isSuccess
      code
      errorMessage
      data {
        id
        ancestorIds
      }
    }
  }
`;

export const ADD_SUBTOPIC_BY_ID_MUTATION = gql`
  mutation qbTopicCreate($topicCreateInput: TopicCreateInput!) {
    qbTopicCreate(topicCreateInput: $topicCreateInput) {
      isSuccess
      code
      errorMessage
      data {
        id
        ancestorIds
      }
    }
  }
`;

export const DELETE_QUESTION_BY_ID_MUTATION = gql`
  mutation qbQuestionDeleteById($id: String!) {
    qbQuestionDeleteById(id: $id) {
      isSuccess
      code
      errorMessage
      data {
        id
        content {
          ... on MCContent {
            body {
              en
              zh
            }
          }
        }
      }
    }
  }
`;
