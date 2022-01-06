import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import NotificationIcon from '../../icons/NotificationIcon';
import StyleSheetLibrary from '../../stylesheet/StyleSheetLibrary';

const NotificationPreference = () => {
  const [isNewTask, setIsNewTask] = useState(false);
  const [isLiveQuiz, setIsLiveQuiz] = useState(false);
  const [isOneDayNearDue, setIsOneDayNearDue] = useState(false);
  const [isOneHourNearDue, setIsOneHourNearDue] = useState(false);
  const toggleIsNewTask = () => {
    setIsNewTask(!isNewTask);
  };
  const toggleIsLiveQuiz = () => {
    setIsLiveQuiz(!isLiveQuiz);
  };
  const toggleIsOneDayNearDue = () => {
    setIsOneDayNearDue(!isOneDayNearDue);
  };
  const toggleIsOneHourNearDue = () => {
    setIsOneHourNearDue(!isOneHourNearDue);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <NotificationIcon marginRight={8} color='black' />
        <Text style={styles.headerText}>Notification Preference</Text>
      </View>
      <View style={styles.frame} />
      <View style={styles.options}>
        <View style={styles.option}>
          <Text style={styles.content}>When Teacher Assigns New Tasks</Text>
          <Switch
            trackColor={{ false: '#ffffff', true: '#2ED47A' }}
            thumbColor={isNewTask ? '#ffffff' : '#ffffff'}
            ios_backgroundColor={'#ffffff'}
            onValueChange={toggleIsNewTask}
            value={isNewTask}
          />
        </View>
        <View style={styles.option}>
          <Text style={styles.content}>When Teacher Launches Live Quiz</Text>
          <Switch
            trackColor={{ false: '#ffffff', true: '#2ED47A' }}
            thumbColor={isLiveQuiz ? '#ffffff' : '#ffffff'}
            ios_backgroundColor={'#ffffff'}
            onValueChange={toggleIsLiveQuiz}
            value={isLiveQuiz}
          />
        </View>
        <View style={styles.option}>
          <Text style={styles.content}>When Homework is 1 Day Near Due</Text>
          <Switch
            trackColor={{ false: '#ffffff', true: '#2ED47A' }}
            thumbColor={isOneDayNearDue ? '#ffffff' : '#ffffff'}
            ios_backgroundColor={'#ffffff'}
            onValueChange={toggleIsOneDayNearDue}
            value={isOneDayNearDue}
          />
        </View>
        <View style={styles.option}>
          <Text style={styles.content}>When Homework is 1 Hour Near Due</Text>
          <Switch
            trackColor={{ false: '#ffffff', true: '#2ED47A' }}
            thumbColor={isOneHourNearDue ? '#ffffff' : '#ffffff'}
            ios_backgroundColor={'#ffffff'}
            onValueChange={toggleIsOneHourNearDue}
            value={isOneHourNearDue}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    flex: 1,
    fontSize: StyleSheetLibrary.fontSizeSmallTitle,
    fontWeight: '600',
    lineHeight: 24,
  },
  frame: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    backgroundColor: '#F1F0FE',
    marginBottom: 16,
  },
  options: {
    width: '100%',
  },
  option: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
});

export default NotificationPreference;
