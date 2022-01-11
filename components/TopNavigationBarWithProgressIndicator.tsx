import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import CloseIcon from '../icons/CloseIcon';
import MoreIcon from '../icons/MoreIcon';
import XSquareIcon from '../icons/XSquareIcon';
import ProgressIndicator, {
  ProgressIndicatorInterface,
  ProgressStatus,
} from './ProgressIndicator';
import StyleSheetLibrary from '../stylesheet/StyleSheetLibrary';
import { useQuestionContext } from '../contexts/QuestionContext';
import { QuestionInterface } from '../draft/Draft';

interface TopNavigationBarWithProgressIndicatorInterface {
  questions: QuestionInterface[];
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}

const TopNavigationBarWithProgressIndicator: React.FC<
  TopNavigationBarWithProgressIndicatorInterface
> = ({ questions, currentQuestionIndex, setCurrentQuestionIndex }) => {
  const [indicatorList, setIndicatorList] = useState<JSX.Element[]>([]);
  useEffect(() => {
    setIndicatorList(
      questions.map((item, index) => {
        return (
          <ProgressIndicator
            status={item.status}
            currentQuestionIndex={currentQuestionIndex}
            index={index}
            key={item.id}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
        );
      }),
    );
  }, [questions, currentQuestionIndex]);
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.header}>
          <CloseIcon />
          <Text style={styles.headerText}>Set X</Text>
          <MoreIcon color='white' strokeColor='white' />
        </View>
        <View style={styles.progress}>
          {/* <FlatList
            style={{ flex: 1 }}
            horizontal
            scrollEnabled={false}
            data={questions}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <ProgressIndicator
                  status={item.status}
                  isCurrentPage={index === currentQuestionIndex}
                  index={index}
                />
              );
            }}
          /> */}
          {indicatorList}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5F45FF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: 88,
  },
  inner: {
    justifyContent: 'space-between',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  progress: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  headerText: {
    fontSize: StyleSheetLibrary.fontSizeSmallTitle,
    fontWeight: '500',
    lineHeight: 24,
    color: '#ffffff',
  },
});

export default TopNavigationBarWithProgressIndicator;
