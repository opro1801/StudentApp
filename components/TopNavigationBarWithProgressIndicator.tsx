import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CloseIcon from '../icons/CloseIcon';
import MoreIcon from '../icons/MoreIcon';
import XSquareIcon from '../icons/XSquareIcon';
import ProgressIndicator, { ProgressStatus } from './ProgressIndicator';
import StyleSheetLibrary from '../stylesheet/StyleSheetLibrary';
import { useQuestionContext } from '../contexts/QuestionContext';

const TopNavigationBarWithProgressIndicator = () => {
  const { totalQuestions } = useQuestionContext();
  let indicatorList = [];
  //   for(int)
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.header}>
          <CloseIcon />
          <Text style={styles.headerText}>Set X</Text>
          <MoreIcon color='white' strokeColor='white' />
        </View>
        <View style={styles.progress}>
          <ProgressIndicator
            status={ProgressStatus.CORRECT}
            isCurrentPage={false}
          />
          <ProgressIndicator
            status={ProgressStatus.INCORRECT}
            isCurrentPage={false}
          />
          <ProgressIndicator
            status={ProgressStatus.CORRECT}
            isCurrentPage={false}
          />
          <ProgressIndicator
            status={ProgressStatus.INCORRECT}
            isCurrentPage={false}
          />
          <ProgressIndicator
            status={ProgressStatus.CURRENT}
            isCurrentPage={true}
          />
          <ProgressIndicator
            status={ProgressStatus.INACTIVE}
            isCurrentPage={false}
          />
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
