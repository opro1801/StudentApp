import React from 'react';
import { View, StyleSheet } from 'react-native';
import Greeting from './Greeting';
import StatisticsBar from './StatisticsBar';

interface GreetingWithStatisticsInterface {
  name: string;
}

const GreetingWithStatistics: React.FC<GreetingWithStatisticsInterface> = ({
  name,
}) => {
  return (
    <View style={styles.container}>
      <Greeting name={name} />
      <StatisticsBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 16,
    height: 198,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
});

export default GreetingWithStatistics;
