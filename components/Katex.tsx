import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { bool, func, object, string } from 'prop-types';
import { WebView } from 'react-native-webview';
import { Dispatch } from 'react';
import { bottomNavigationBarState } from './BottomNavigationBar';

function getContent(inlineStyle: string, expression: string, options: any) {
  return `<!DOCTYPE html>
<html>
  <head>
    <style>${inlineStyle}</style>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.0-rc.1/dist/katex.min.css" integrity="sha384-D+9gmBxUQogRLqvARvNLmA9hS2x//eK1FhVb9PiU86gmcrBrJAQT8okdJ4LMp2uv" crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.0-rc.1/dist/katex.min.js" integrity="sha384-483A6DwYfKeDa0Q52fJmxFXkcPCFfnXMoXblOkJ4JcA8zATN6Tm78UNL72AKk+0O" crossorigin="anonymous"></script>
  </head>
  <body>
  </body>
  <footer>
    <script>
      window.onerror = e => document.write(e);
      document.addEventListener("DOMContentLoaded", function() {katex.render(${JSON.stringify(
        expression,
      )}, document.body, ${JSON.stringify(options)});});
    </script>
  </footer>
</html>
`;
}

const defaultStyle = {
  height: 'auto',
  width: 'auto',
  backgroundColor: 'rgba(52, 52, 52, 0)', //transparent background
};

//will center the KaTeX within our webview & view container
const defaultInlineStyle = `
html, body {
  margin: 0;
  padding: 16;
  display:flex;
  justify-content: center;
  align-items: center;
}
`;

const CustomKatex = ({
  style,
  onLoad,
  onError,
  inlineStyle,
  expression,
  isChosen,
  currentAnswer,
  optionName,
  setCurrentAnswer,
  isChecked,
  correctAnswer,
  currentState,
  setCurrentState,
  ...options
}: CustomKatexInterface) => {
  // const width = ; // hacky attempt at dynamic width as flex width wasn't working
  return (
    <TouchableOpacity
      style={[
        styles.answer,
        {
          borderColor: isChecked
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
        if (
          currentState === bottomNavigationBarState.INITIAL &&
          setCurrentState != null
        ) {
          setCurrentState(bottomNavigationBarState.AFTERPICKING);
        }
      }}
    >
      <WebView
        style={style}
        source={{ html: getContent(inlineStyle, expression, options) }}
      />
    </TouchableOpacity>
  );
};

const styles = {
  answer: {
    borderRadius: 4,
    padding: 16,
    borderWidth: 1.6,
    marginBottom: 12,
    height: 100,
  },
};

interface CustomKatexInterface {
  expression: string;
  style: object;
  displayMode: boolean;
  throwOnError: boolean;
  errorColor: string;
  inlineStyle: string;
  macros: object;
  colorIsTextColor: boolean;
  onLoad: Function;
  onError: Function;
  isChosen: boolean;
  currentAnswer: string;
  setCurrentAnswer: Dispatch<React.SetStateAction<string>> | null;
  optionName: string;
  isChecked: boolean;
  setIsChecked: Dispatch<React.SetStateAction<boolean>> | null;
  correctAnswer: string;
  currentState: bottomNavigationBarState;
  setCurrentState: Dispatch<
    React.SetStateAction<bottomNavigationBarState>
  > | null;
}

CustomKatex.defaultProps = {
  displayMode: false,
  throwOnError: false,
  errorColor: '#f00',
  inlineStyle: defaultInlineStyle,
  style: defaultStyle,
  macros: {},
  colorIsTextColor: false,
  onLoad: () => {},
  onError: (e: any) => {
    console.error(e);
  },
  isChosen: false,
  optionName: '',
};

export default CustomKatex;
