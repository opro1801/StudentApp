import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './LandingScreen';
import EmailContinueScreen from './EmailContinueScreen';
import EmailVerification from './EmailVerification';
import WelcomeScreen from './WelcomeScreen';
import { useLandingContext } from '../../contexts/LandingContext';
import { User } from 'firebase/auth';

export type AuthStackParamList = {
  Landing: undefined;
  EmailContinueScreen: undefined;
  EmailVerification: undefined;
  Welcome: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export default function LandingNavigator() {
  const { isWelcome } = useLandingContext();
  return (
    <NavigationContainer>
      {!isWelcome && (
        <Stack.Navigator
          initialRouteName='Landing'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Landing' component={LandingScreen} />
          <Stack.Screen
            name='EmailContinueScreen'
            component={EmailContinueScreen}
          />
          <Stack.Screen
            name='EmailVerification'
            component={EmailVerification}
          />
          {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        </Stack.Navigator>
      )}
      {isWelcome && <WelcomeScreen />}
    </NavigationContainer>
  );
}
