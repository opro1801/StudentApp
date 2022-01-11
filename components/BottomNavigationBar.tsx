import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BottomNavigationBarInterface {
  isChecked: boolean;
  setIsCheck: React.Dispatch<React.SetStateAction<boolean>>;
  currentAnswer: string;
  handleNextQuestion: () => void;
  handleCheckAnswer: () => void;
}
const BottomNavigationBar: React.FC<BottomNavigationBarInterface> = ({
  setIsCheck,
  isChecked,
  handleNextQuestion,
  currentAnswer,
  handleCheckAnswer,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <TouchableOpacity style={styles.backButton}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={currentAnswer === ''}
          style={[
            styles.checkButton,
            {
              borderColor: currentAnswer === '' ? '#A0A1AF' : '#3145F5',
              backgroundColor: isChecked ? '#3145F5' : '#ffffff',
            },
          ]}
          onPress={() => {
            if (!isChecked && currentAnswer !== '') {
              handleCheckAnswer();
            }
            if (isChecked) {
              handleNextQuestion();
            }
          }}
        >
          <Text
            style={{
              color:
                currentAnswer === ''
                  ? '#a0a1af'
                  : !isChecked
                  ? '#3145f5'
                  : '#ffffff',
            }}
          >
            {isChecked ? 'Next' : 'Check'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignSelf: 'flex-end',
    height: 56 + 30,
  },
  inner: {
    justifyContent: 'space-between',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 45,
  },
  checkButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1.6,
    borderRadius: 4,
  },
});

export default BottomNavigationBar;
