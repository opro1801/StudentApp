import React, { Dispatch, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import ReactDOMServer from 'react-dom/server';
// import MathMarkdown from './MathMarkdown';
import {
  Dimensions,
  ActivityIndicator,
  View,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { QuestionAnswerKatexCss } from '../stylesheet/styles';
import { MathMarkdown } from './MathMarkdown/index';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Loading } from './Loading';

// interface MathViewInterface {
//   katex: string;
// }

const { width, height } = Dimensions.get('screen');

// const webViewScript = `
// setTimeout(() => {
//   window.ReactNativeWebView.postMessage(document.documentElement.scrollHeight)
// }, 200);
// true;
// `;

interface MathViewInterface {
  currentAnswer: string;
  setCurrentAnswer: Dispatch<React.SetStateAction<string>> | null;
  optionName: string;
  isChecked: boolean;
  setIsChecked: Dispatch<React.SetStateAction<boolean>> | null;
  correctAnswer: string;
  solution: string;
  katex: string;
  isRendering: boolean;
  setIsRendering: Dispatch<React.SetStateAction<boolean>>;
}

const MathView: React.FC<MathViewInterface> = ({
  katex,
  setCurrentAnswer,
  optionName,
  isChecked,
  correctAnswer,
  solution,
  currentAnswer,
  setIsRendering,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [webViewHeight, setWebViewHeight] = useState(0);
  const [webViewSolutionHeight, setWebViewSolutionHeight] = useState(0);
  const onMessage = (event: WebViewMessageEvent) => {
    setWebViewHeight(Number(event.nativeEvent.data));
  };
  const onMessageSolution = (event: WebViewMessageEvent) => {
    setWebViewSolutionHeight(Number(event.nativeEvent.data));
  };
  const injectedJavaScript = `
  window.ReactNativeWebView.postMessage(
    Math.max(document.body.offsetHeight, document.body.scrollHeight)
  );
`;
  // if (isLoading) return <Loading />;
  return (
    <TouchableOpacity
      style={[
        styles.answer,
        {
          height:
            isChecked && optionName === correctAnswer
              ? webViewHeight + 32 + 42 + 3.2 + webViewSolutionHeight
              : webViewHeight + 32 + 3.2,
          borderColor: isLoading
            ? 'white'
            : isChecked
            ? correctAnswer === optionName
              ? '#2ED47A'
              : currentAnswer === optionName
              ? '#F95141'
              : '#E8E8E8'
            : currentAnswer === optionName
            ? '#3145F5'
            : '#E8E8E8',
        },
      ]}
      onPress={() => {
        if (setCurrentAnswer != null) setCurrentAnswer(optionName);
      }}
      disabled={isChecked}
    >
      <WebView
        style={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        bounces={false}
        scrollEnabled={false}
        onMessage={onMessage}
        javaScriptEnabled={true}
        injectedJavaScript={injectedJavaScript}
        source={{
          html:
            QuestionAnswerKatexCss('black') +
            `${ReactDOMServer.renderToString(
              <MathMarkdown skipHtml={false} children={katex} />,
            )}`,
        }}
        onLoadEnd={() => {
          setIsLoading(false);
        }}
      />
      {isChecked && correctAnswer === optionName && (
        // <LinearGradient
        //   start={{ x: 0.0, y: 1.0 }}
        //   end={{ x: 1.0, y: 1.0 }}
        //   style={{
        //     height: 48,
        //     width: '100%',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //   }}
        //   colors={['#A950EE', '#2339FA']}
        // >
        <View style={[styles.explanation, { opacity: isLoading ? 0 : 1 }]}>
          <Text style={styles.explanationHeader}>Explanation</Text>
          <WebView
            // style={{ flex: 1 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            automaticallyAdjustContentInsets={false}
            bounces={false}
            scrollEnabled={false}
            onMessage={onMessageSolution}
            javaScriptEnabled={true}
            injectedJavaScript={injectedJavaScript}
            source={{
              html:
                QuestionAnswerKatexCss('black') +
                `${ReactDOMServer.renderToString(
                  <MathMarkdown skipHtml={false} children={solution} />,
                )}`,
            }}
          />
        </View>
        // </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

MathView.defaultProps = {
  optionName: '',
};

const styles = StyleSheet.create({
  answer: {
    borderRadius: 4,
    padding: 16,
    borderWidth: 1.6,
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  explanation: {
    borderWidth: 1.6,
    borderColor: '#2339FA',
    borderRadius: 4,
    padding: 12,
    flexGrow: 1,
  },
  explanationHeader: {
    marginBottom: 8,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default MathView;
