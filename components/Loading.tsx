import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const Loading = () => (
  <View style={styles.centered}>
    <ActivityIndicator size='large' />
  </View>
);

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
