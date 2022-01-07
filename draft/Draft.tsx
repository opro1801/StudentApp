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

const Draft = () => {
  //   const [currentQuestion, setCurrentQuestion] = useState(0);
  //   const { data, error, loading } = useQuery(GET_QUESTIONS_QUERY);
  //   if (loading) return <Loading />;
  //   const questions = data.questions.slice(0, 6);
  //   const totalQuestions = questions.length;
  //   console.log('total questions: ', totalQuestions);

  return (
    <QuestionContextProvider>
      <View style={styles.container}>
        <View style={{ height: statusBarIgnore, backgroundColor: '#5F45FF' }} />
        <TopNavigationBarWithProgressIndicator />
        <QuestionContent />
      </View>
    </QuestionContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Draft;
