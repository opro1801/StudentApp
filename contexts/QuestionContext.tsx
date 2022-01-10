import { useQuery } from '@apollo/client';
import React, { useState, useEffect, FC, useContext, Dispatch } from 'react';
import { Platform, Dimensions } from 'react-native';
import { GET_QUESTIONS_QUERY } from '../apiService/questionBank/questionBankGQL';
import { Loading } from '../components/Loading';
import { ProgressStatus } from '../components/ProgressIndicator';
interface QuestionContextInterface {
  questions: QuestionInterface[];
  currentQuestionIndex: number;
  // questionIds: InitialQuestionInterface[];
}

interface QuestionInterface {
  id: string;
  status: ProgressStatus;
}

interface InitialQuestionInterface {
  id: string;
  _typename: string;
}

const defaultState = {
  questions: [],
  currentQuestionIndex: 0,
  // questionIds: [],
};

export const QuestionContext =
  React.createContext<QuestionContextInterface>(defaultState);

export const QuestionContextProvider: FC = ({ children }) => {
  const { data, error, loading } = useQuery(GET_QUESTIONS_QUERY);
  // const questionIds = data.questions.slice(0, 6);
  const [questions, setQuestions] = useState<QuestionInterface[]>([]);
  const [questionsStatus, setQuestionsStatus] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  useEffect(() => {
    if (data !== undefined) {
      setQuestions(
        data.questions
          .slice(0, 6)
          .map((value: { __typename: string; id: string }, index: number) => {
            if (index === 0)
              return { id: value.id, status: ProgressStatus.CURRENT };
            return { id: value.id, status: ProgressStatus.INACTIVE };
          }),
      );
    }
  }, [data]);
  useEffect(() => {
    // setQuestions(
    //   questions.map((value: QuestionInterface, index) => {
    //     if (index === currentQuestionIndex) {
    //       return { id: value.id, status: ProgressStatus.CURRENT };
    //     }
    //     return value;
    //   }),
    // );
    console.log(questions);
  }, [questions, currentQuestionIndex]);
  if (loading) return <Loading />;
  return (
    <QuestionContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        // questionIds,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
export const useQuestionContext = () => useContext(QuestionContext);

export default QuestionContextProvider;
