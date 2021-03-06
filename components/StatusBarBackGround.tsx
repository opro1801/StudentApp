import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Platform } from 'react-native';

const StatusBarBackGround = () => {
  return <View style={styles.statusBarBackGround}></View>;
};

const styles = StyleSheet.create({
  statusBarBackGround: {
    height: Platform.OS === 'ios' ? 44 : 30,
    backgroundColor: 'rgba(255,255,255,0)',
  },
});

export const headerIgnore = Platform.OS === 'ios' ? 44 + 56 : 56 + 30;

export const statusBarIgnore = Platform.OS === 'ios' ? 44 : 30;

export default StatusBarBackGround;
