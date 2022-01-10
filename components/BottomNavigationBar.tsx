import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BottomNavigationBarInterface {
  currentState: bottomNavigationBarState;
}

export enum bottomNavigationBarState {
  INITIAL,
  AFTERPICKING,
  AFTERCHECKING,
}

const BottomNavigationBar: React.FC<BottomNavigationBarInterface> = ({
  currentState = bottomNavigationBarState.INITIAL,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <TouchableOpacity style={styles.backButton}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.checkButton,
            {
              borderColor: currentState === 0 ? '#A0A1AF' : '#3145F5',
              backgroundColor: currentState === 2 ? '#3145F5' : '#ffffff',
            },
          ]}
        >
          <Text
            style={{
              color:
                currentState === 0
                  ? '#a0a1af'
                  : currentState === 1
                  ? '#3145f5'
                  : '#ffffff',
            }}
          >
            Check
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
