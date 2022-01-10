import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { GET_QUESTION_DETAIL_QUERY } from '../apiService/questionBank/questionBankGQL';
import { useQuestionContext } from '../contexts/QuestionContext';
import { Loading } from './Loading';
// import Markdown from 'react-native-markdown-display';
import { WebView } from 'react-native-webview';
import Markdown from 'react-native-markdown-renderer';
import { QuestionInterface } from '../draft/Draft';
import BottomNavigationBar, {
  bottomNavigationBarState,
} from './BottomNavigationBar';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CustomKatex from './Katex';
import Katex from 'react-native-katex';

interface QuestionContentInterface {
  questions: QuestionInterface[];
  currentQuestionIndex: number;
}

interface AnswerInterface {
  __typename: string;
  attachments: any;
  body: {
    __typename: string;
    en: string;
    zh: string | null;
  };
  optionName: string;
}

const QuestionContent: React.FC<QuestionContentInterface> = ({
  questions,
  currentQuestionIndex,
}) => {
  const [questionBody, setQuestionBody] = useState('');
  const [currentState, setCurrentState] = useState(
    bottomNavigationBarState.INITIAL,
  );
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleCheckAnswer = () => {};

  const { data, loading, error } = useQuery(GET_QUESTION_DETAIL_QUERY, {
    variables: { id: questions[currentQuestionIndex].id },
  });
  useEffect(() => {
    console.log(questions[currentQuestionIndex].id);
    if (data != undefined) {
      setQuestionBody(data.question.content.body.en);
      setCorrectAnswer(data.question.content.correctAnswer);
    }
  }, [data]);
  // console.log(questionBody.en);
  if (loading) return <Loading />;
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {/* <Katex expression={questionBody} style={styles.question} /> */}
        {data.question.content.answers.map(
          (value: AnswerInterface, index: number) => {
            return (
              <CustomKatex
                key={value.body.en}
                expression={value.body.en.slice(1, -1)}
                currentAnswer={currentAnswer}
                setCurrentAnswer={setCurrentAnswer}
                optionName={value.optionName}
              />
            );
          },
        )}
      </ScrollView>
      <BottomNavigationBar currentState={currentState} />
    </View>
  );
};

const styles = StyleSheet.create({
  katex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  question: {
    marginBottom: 24,
  },
  answer: {
    borderRadius: 4,
    padding: 16,
    borderWidth: 1.6,
    marginBottom: 12,
    height: 100,
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
