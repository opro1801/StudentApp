import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TopNavigationBarWithProgressIndicator from '../components/TopNavigationBarWithProgressIndicator';
import StatusBarBackGround, {
  statusBarIgnore,
} from '../components/StatusBarBackGround';
import { useQuery } from '@apollo/client';
import { GET_QUESTIONS_QUERY } from '../apiService/questionBank/questionBankGQL';
import { Loading } from '../components/Loading';
import QuestionContent from '../components/QuestionContent';
import QuestionContextProvider from '../contexts/QuestionContext';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ProgressStatus } from '../components/ProgressIndicator';
import BottomNavigationBar from '../components/BottomNavigationBar';

export interface QuestionInterface {
  id: string;
  status: ProgressStatus;
  answer: string;
  correctAnswer: string;
}
export interface QuestionSetInterface {
  id: string;
  set: number;
}

export interface QuestionStatusInterface {
  status: ProgressStatus;
}

interface InitialQuestionInterface {
  id: string;
  __typename: string;
}

const QUESTION_SET_AMOUNT = 6;

const Draft = () => {
  const { data, error, loading } = useQuery(GET_QUESTIONS_QUERY);
  // const questionIds = data.questions.slice(0, 6);
  // const [questionSets, setQuestionSets] = useState<QuestionSetInterface[]>([]);
  const [currentSet, setCurrentSet] = useState(0);
  const [questions, setQuestions] = useState<QuestionInterface[]>([]);
  const [questionsStatus, setQuestionsStatus] = useState<
    QuestionStatusInterface[]
  >([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // useEffect(() => {
  //   if (data !== undefined) {
  //     setQuestionSets(
  //       data.questions.map((value: InitialQuestionInterface, index: number) => {
  //         return { id: value.id, set: index / QUESTION_SET_AMOUNT };
  //       }),
  //     );
  //   }
  // }, [data]);
  useEffect(() => {
    if (data !== undefined) {
      setQuestions(
        data.questions
          .slice(
            currentSet * QUESTION_SET_AMOUNT,
            currentSet * QUESTION_SET_AMOUNT + 6,
          )
          .map((value: { __typename: string; id: string }, index: number) => {
            if (index === 0)
              return {
                id: value.id,
                status: ProgressStatus.CURRENT,
                answer: '',
                correctAnswer: '',
              };
            return {
              id: value.id,
              status: ProgressStatus.INACTIVE,
              answer: '',
              correctAnswer: '',
            };
          }),
      );
      setCurrentQuestionIndex(0);
      // setQuestionsStatus(
      //   data.questions.slice(0,6).map((value: InitialQuestionInterface, index: number) => {
      //     if(index === 0) return {status: ProgressStatus.CURRENT};
      //     return
      //   })
      // )
    }
  }, [data, currentSet]);
  if (loading || questions.length === 0) return <Loading />;
  return (
    // <QuestionContextProvider>
    <View style={styles.container}>
      <View>
        <StatusBar style={'light'} />
        <View style={{ height: statusBarIgnore, backgroundColor: '#5F45FF' }} />
        <TopNavigationBarWithProgressIndicator
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
      </View>
      <QuestionContent
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        setQuestions={setQuestions}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        setCurrentSet={setCurrentSet}
        currentSet={currentSet}
      />
    </View>
    // </QuestionContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default Draft;
