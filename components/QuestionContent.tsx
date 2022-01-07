import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GET_QUESTION_DETAIL_QUERY } from '../apiService/questionBank/questionBankGQL';
import { useQuestionContext } from '../contexts/QuestionContext';
import { Loading } from './Loading';
import Katex from 'react-native-katex';
// import Markdown from 'react-native-markdown-display';
import { WebView } from 'react-native-webview';
import Markdown from 'react-native-markdown-renderer';

interface QuestionContentInterface {
  //   questionId: string;
}

const QuestionContent: React.FC<QuestionContentInterface> = (
  {
    //   questionId,
  },
) => {
  const [loaded, setLoaded] = useState(false);
  const [expression, setExpression] = useState('c=\\pm\\sqrt{a^2 + b^2}');
  setTimeout(() => setExpression('d=\\pm\\sqrt{a^2 + b^2}'), 2000);
  const { totalQuestions, questions, currentQuestion } = useQuestionContext();
  const { data, loading, error } = useQuery(GET_QUESTION_DETAIL_QUERY, {
    variables: { id: questions[3].id },
  });
  if (loading) return <Loading />;
  //   console.log(data.question.content);
  const answers = data.question.content.answers;
  const questionBody = data.question.content.body;
  console.log(questionBody.en);
  return <View />;
};

const styles = StyleSheet.create({
  katex: {
    flex: 1,
  },
});

const inlineStyle = `
html, body {
  display: flex;
  background-color: #fafafa;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
}
.katex {
  font-size: 4em;
  margin: 0;
  display: flex;
}
`;

export default QuestionContent;
