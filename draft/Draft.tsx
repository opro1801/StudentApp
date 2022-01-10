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
}

interface InitialQuestionInterface {
  id: string;
  _typename: string;
}

const Draft = () => {
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
        />
      </View>
      <QuestionContent
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
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
