import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingNavigator from './Landing/LandingNavigator';
import MainNavigationContainer from './MainPages/MainNavigationContainer';

export type RootStackParamList = {
  Auth: undefined;
  MainPages: undefined;
};
// Root Stack
const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Auth'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Auth' component={LandingNavigator} />
        <Stack.Screen name='MainPages' component={MainNavigationContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
