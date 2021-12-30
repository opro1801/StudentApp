import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StatusBarBackGround from './components/StatusBarBackGround';
import LandingContextProvider from './contexts/LandingContext';
import LandingNavigator from './screens/Landing/LandingNavigator'
import LandingScreen from './screens/Landing/LandingScreen';
import MainNavigationContainer from './screens/MainPages/MainNavigationContainer';

export default function App() {
  return (
      // <LandingContextProvider>
      //   <LandingNavigator />
      // </LandingContextProvider>
      <MainNavigationContainer />
      );
    }
