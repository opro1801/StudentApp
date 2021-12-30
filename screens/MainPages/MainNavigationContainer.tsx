import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeIcon from '../../icons/HomeIcon';
import CoursesIcon from '../../icons/CoursesIcon';
import TasksIcon from '../../icons/TasksIcon';
import ProfileIcon from '../../icons/ProfileIcon';
import HomeScreen from './HomeScreen';
import TasksScreen from './TasksScreen';
import CoursesScreen from './CoursesScreen';
import ProfileScreen from './ProfileScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BlurView } from 'expo-blur';


const Tab = createBottomTabNavigator();


export default function MainNavigationContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
                case 'Home':
                    return <HomeIcon />
                    break;
                case 'Tasks':
                    return <TasksIcon />
                    break;
                case 'Courses':
                    return <CoursesIcon />
                    break;
                case 'Profile':
                    return <ProfileIcon />
                    break;
                default:
                    return <HomeIcon/>
                    break;
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
              backgroundColor: 'rgba(220,220,220,0.3)',
              height: 90,
              justifyContent: 'space-evenly',
              paddingHorizontal: 24,
          },
          tabBarBackground: () => <BlurView tint='light' intensity={24} style={{backgroundColor: 'rgba(255,255,255,0.88)'}} />
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tasks" component={TasksScreen} />
        <Tab.Screen name="Courses" component={CoursesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}