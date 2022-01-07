import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export enum ProgressStatus {
  CORRECT = 0,
  INCORRECT = 1,
  CURRENT = 2,
  INACTIVE = 3,
}

interface ProgressIndicatorInterface {
  status: ProgressStatus;
  isCurrentPage: boolean;
}

const statusColor = ['#2ED47A', '#F95141', '#3145F5', '#D0D0D7'];

const ProgressIndicator: React.FC<ProgressIndicatorInterface> = ({
  status,
  isCurrentPage,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: isCurrentPage ? statusColor[status] : 'white',
          borderColor: statusColor[status],
        },
      ]}
      onPress={() => {}}
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
