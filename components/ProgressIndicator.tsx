import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export enum ProgressStatus {
  CORRECT = 0,
  INCORRECT = 1,
  CURRENT = 2,
  INACTIVE = 3,
}

export interface ProgressIndicatorInterface {
  status: ProgressStatus;
  currentQuestionIndex: number;
  index: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}

const statusColor = ['#2ED47A', '#F95141', '#3145F5', '#D0D0D7'];

const ProgressIndicator: React.FC<ProgressIndicatorInterface> = ({
  status,
  currentQuestionIndex,
  index,
  setCurrentQuestionIndex,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor:
            currentQuestionIndex === index ? statusColor[status] : 'white',
          borderColor: statusColor[status],
        },
      ]}
      onPress={() => {
        setCurrentQuestionIndex(index);
        console.log(currentQuestionIndex);
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 16,
    borderRadius: 12,
    borderWidth: 2,
    flex: 1,
    margin: 4,
  },
});

export default ProgressIndicator;
