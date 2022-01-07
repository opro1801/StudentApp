import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { GET_QUESTION_DETAIL_QUERY } from '../apiService/questionBank/questionBankGQL';
import { useQuestionContext } from '../contexts/QuestionContext';
import { Loading } from './Loading';

interface QuestionContentInterface {
  //   questionId: string;
}

const QuestionContent: React.FC<QuestionContentInterface> = (
  {
    //   questionId,
  },
) => {
  const { totalQuestions, questions, currentQuestion } = useQuestionContext();
  const { data, loading, error } = useQuery(GET_QUESTION_DETAIL_QUERY, {
    variables: { id: questions[currentQuestion].id },
  });
  if (loading) return <Loading />;
  //   console.log(data.question.content);
  const answers = data.question.content.answers;
  const questionBody = data.question.content.body;
  console.log(questionBody);
  return <View></View>;
};

const styles = StyleSheet.create({});

export default QuestionContent;
