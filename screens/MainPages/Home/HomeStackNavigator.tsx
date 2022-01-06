import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';

export type HomeStackParamList = {
  Home: undefined;
  Notification: undefined;
};

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomePage'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='HomePage' component={HomeScreen} />
      <Stack.Screen name='Notification' component={NotificationScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    opacity: 0.88,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
});

export default HomeStackNavigator;
