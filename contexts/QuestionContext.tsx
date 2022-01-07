import { useQuery } from '@apollo/client';
import React, { useState, useEffect, FC, useContext, Dispatch } from 'react';
import { Platform, Dimensions } from 'react-native';
import { GET_QUESTIONS_QUERY } from '../apiService/questionBank/questionBankGQL';
import { Loading } from '../components/Loading';

interface QuestionContextInterface {
  totalQuestions: number;
  currentQuestion: number;
  setQuestion: (value: number) => void;
}

const defaultState = {
  totalQuestions: 0,
  currentQuestion: 0,
  setQuestion: (value: number) => {},
};

export const QuestionContext =
  React.createContext<QuestionContextInterface>(defaultState);

export const QuestionContextProvider: FC = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const setQuestion = (value: number) => {
    setQuestion(value);
  };
  const { data, error, loading } = useQuery(GET_QUESTIONS_QUERY);
  if (loading) return <Loading />;
  const questions = data.questions.slice(0, 6);
  const totalQuestions = questions.length;
  console.log('total questions: ', totalQuestions);
  return (
    <QuestionContext.Provider
      value={{
        totalQuestions,
        currentQuestion,
        setQuestion,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
export const useQuestionContext = () => useContext(QuestionContext);

export default QuestionContextProvider;
