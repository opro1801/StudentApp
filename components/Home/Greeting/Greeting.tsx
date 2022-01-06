import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import StyleSheetLibrary from '../../../stylesheet/StyleSheetLibrary';

interface GreetingInterface {
  name: string;
}

const Greeting: React.FC<GreetingInterface> = ({ name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.greetingField}>
        <Text style={styles.greetingText}>Good Morning!</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Image
        style={{ width: 48, height: 48 }}
        source={require('../../../assets/demoAvt.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 52,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  greetingField: {
    alignItems: 'flex-start',
  },
  greetingText: {
    fontSize: StyleSheetLibrary.fontSizeBigText,
    fontWeight: '600',
    lineHeight: 20,
    color: '#3145F5',
  },
  name: {
    fontSize: StyleSheetLibrary.fontSizeTitle,
    fontWeight: '600',
    lineHeight: 32,
  },
});

export default Greeting;
