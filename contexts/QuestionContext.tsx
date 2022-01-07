import { useQuery } from '@apollo/client';
import React, { useState, useEffect, FC, useContext, Dispatch } from 'react';
import { Platform, Dimensions } from 'react-native';
import { GET_QUESTIONS_QUERY } from '../apiService/questionBank/questionBankGQL';
import { Loading } from '../components/Loading';
import { ProgressStatus } from '../components/ProgressIndicator';

interface QuestionContextInterface {
  totalQuestions: number;
  currentQuestion: number;
  setQuestion: (value: number) => void;
  statusQuestions: QuestionInterface[];
  questions: InitialQuestionInterface[];
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
  totalQuestions: 0,
  currentQuestion: 0,
  setQuestion: (value: number) => {},
  statusQuestions: [],
  questions: [],
};

export const QuestionContext =
  React.createContext<QuestionContextInterface>(defaultState);

export const QuestionContextProvider: FC = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //   const [questions, setQuestions] = useState<QuestionInterface[]>([]);
  const setQuestion = (value: number) => {
    setQuestion(value);
  };
  //   useEffect(() => {
  //       if(data != undefined)
  //     setQuestions(
  //       data.questions
  //         .slice(0, 6)
  //         .map((_item: { id: string; _typename: string }) => {
  //           return { id: _item.id, status: ProgressStatus.INACTIVE };
  //         }),
  //     );
  //   }, [data]);
  const { data, error, loading } = useQuery(GET_QUESTIONS_QUERY);
  if (loading) return <Loading />;
  const questions = data.questions.slice(0, 6);
  const totalQuestions = questions.length;
  //   console.log(questions);
  return (
    <QuestionContext.Provider
      value={{
        totalQuestions,
        currentQuestion,
        setQuestion,
        statusQuestions: [],
        questions,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
export const useQuestionContext = () => useContext(QuestionContext);

export default QuestionContextProvider;
