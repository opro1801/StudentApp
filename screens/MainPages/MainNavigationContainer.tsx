import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeIcon from '../../icons/HomeIcon';
import CoursesIcon from '../../icons/CoursesIcon';
import TasksIcon from '../../icons/TasksIcon';
import ProfileIcon from '../../icons/ProfileIcon';
import HomeScreen from './HomeScreen';
import TasksScreen from './TasksScreen';
import CoursesScreen from './CoursesScreen';
import ProfileScreen from './ProfileScreen';


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
                case 'Course':
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