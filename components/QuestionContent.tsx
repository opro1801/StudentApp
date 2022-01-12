import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { GET_QUESTION_DETAIL_QUERY } from '../apiService/questionBank/questionBankGQL';
import { useQuestionContext } from '../contexts/QuestionContext';
import { Loading } from './Loading';
import Markdown from 'react-native-markdown-display';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
// import Markdown from 'react-native-markdown-renderer';
import { QuestionInterface } from '../draft/Draft';
import BottomNavigationBar from './BottomNavigationBar';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CustomKatex from './Katex';
import Katex from 'react-native-katex';
import { ProgressStatus } from './ProgressIndicator';
import MathView from './MathView';
import { QuestionAnswerKatexCss } from '../stylesheet/styles';
import ReactDOMServer from 'react-dom/server';
import { MathMarkdown } from './MathMarkdown';
// import Markdown from './MathView';
// import { WebView } from 'react-native-webview';

interface QuestionContentInterface {
  questions: QuestionInterface[];
  currentQuestionIndex: number;
  setQuestions: React.Dispatch<React.SetStateAction<QuestionInterface[]>>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrentSet: React.Dispatch<React.SetStateAction<number>>;
  currentSet: number;
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

export const injectedJavaScript = `
window.ReactNativeWebView.postMessage(
  Math.max(document.body.offsetHeight, document.body.scrollHeight)
);
`;

const QuestionContent: React.FC<QuestionContentInterface> = ({
  questions,
  currentQuestionIndex,
  setQuestions,
  setCurrentQuestionIndex,
  setCurrentSet,
  currentSet,
}) => {
  const [questionBody, setQuestionBody] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [solution, setSolution] = useState('');
  const [isRendering, setIsRendering] = useState(true);
  const [webViewQuestionHeight, setWebViewQuestionHeight] = useState(0);
  const onMessageQuestion = (event: WebViewMessageEvent) => {
    setWebViewQuestionHeight(Number(event.nativeEvent.data));
  };
  const handleNextSet = () => {
    setCurrentSet(currentSet + 1);
  };

  const handleCheckAnswer = () => {
    setIsChecked(true);
    setQuestions(
      questions.map((value: QuestionInterface, index: number) => {
        if (index === currentQuestionIndex)
          if (currentAnswer === correctAnswer)
            return {
              id: value.id,
              status: ProgressStatus.CORRECT,
              answer: currentAnswer,
              correctAnswer: correctAnswer,
            };
          else
            return {
              id: value.id,
              status: ProgressStatus.INCORRECT,
              answer: currentAnswer,
              correctAnswer: correctAnswer,
            };
        return value;
      }),
    );
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setQuestions(
        questions.map((value: QuestionInterface, index: number) => {
          if (
            index === currentQuestionIndex + 1 &&
            value.status === ProgressStatus.INACTIVE
          ) {
            return {
              id: value.id,
              status: ProgressStatus.CURRENT,
              answer: '',
              correctAnswer: '',
            };
          }
          return value;
        }),
      );
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer('');
      setIsChecked(false);
    } else handleNextSet();
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // useEffect(() => {
  //   console.log(questions);
  // }, [questions]);
  const { data, loading, error } = useQuery(GET_QUESTION_DETAIL_QUERY, {
    variables: { id: questions[currentQuestionIndex].id },
  });
  useEffect(() => {
    // console.log(questions[currentQuestionIndex].id);
    if (data != undefined) {
      setQuestionBody(data.question.content.body.en);
      setCorrectAnswer(data.question.content.correctAnswer);
      setSolution(data.question.content.solution.en);
      setCurrentAnswer(questions[currentQuestionIndex].answer);
      console.log(data.question.content);
      if (
        questions[currentQuestionIndex].status === ProgressStatus.CORRECT ||
        questions[currentQuestionIndex].status === ProgressStatus.INCORRECT
      ) {
        setIsChecked(true);
      } else {
        setIsChecked(false);
      }
    }
  }, [data]);
  // console.log(questionBody.en);
  if (loading) return <Loading />;
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        {/* <Katex expression={questionBody} style={styles.question} /> */}
        {/* <Markdown>{questionBody}</Markdown> */}
        <View style={{ height: webViewQuestionHeight, marginBottom: 12 }}>
          <WebView
            style={{ flex: 1 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            automaticallyAdjustContentInsets={false}
            bounces={false}
            scrollEnabled={false}
            onMessage={onMessageQuestion}
            javaScriptEnabled={true}
            injectedJavaScript={injectedJavaScript}
            source={{
              html:
                QuestionAnswerKatexCss('black') +
                `${ReactDOMServer.renderToString(
                  <MathMarkdown skipHtml={false} children={questionBody} />,
                )}`,
            }}
          />
        </View>
        {data.question.content.answers.map(
          (value: AnswerInterface, index: number) => {
            return (
              <MathView
                isRendering={isRendering}
                katex={value.body.en}
                key={`${value.body.en} ${(Math.random() * 1000).toString()}`}
                currentAnswer={currentAnswer}
                setCurrentAnswer={setCurrentAnswer}
                optionName={value.optionName}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                correctAnswer={correctAnswer}
                solution={solution}
                setIsRendering={setIsRendering}
              />
            );
          },
        )}
      </ScrollView>
      <BottomNavigationBar
        handleCheckAnswer={handleCheckAnswer}
        isChecked={isChecked}
        setIsCheck={setIsChecked}
        currentAnswer={currentAnswer}
        handleNextQuestion={handleNextQuestion}
        handleBack={handleBack}
      />
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
