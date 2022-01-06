
import { gql } from "@apollo/client";

export const GET_QUESTIONBANK_CONTENT_QUERY = gql`
# Write your query or mutation here
query getQuestionBankContent($id: String!) {
  questionBank(id: $id) {
    id
    name {
      ...localeStringDetail
    }
    subject
    examSystem
    folders {
      id
      name {
        ...localeStringDetail
      }
      isEnable
      isFlagged
      icon {
				...photoDetail
			}
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
      icon {
				...photoDetail
			}
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