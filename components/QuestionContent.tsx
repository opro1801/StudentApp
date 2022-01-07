import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useQuestionContext } from '../contexts/QuestionContext';

interface QuestionContentInterface {
  //   questionId: string;
}

const QuestionContent: React.FC<QuestionContentInterface> = (
  {
    //   questionId,
  },
) => {
  const { totalQuestions } = useQuestionContext();
  return <View></View>;
};

const styles = StyleSheet.create({});

export default QuestionContent;
