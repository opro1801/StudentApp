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
import NotificationScreen from './NotificationScreen';
import HomeStackNavigator from './HomeStackNavigator';
import StyleSheetLibrary from '../../stylesheet/StyleSheetLibrary';


const Tab = createBottomTabNavigator();


export default function MainNavigationContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
                case 'HomeStack':
                    return <HomeIcon color={focused ? '#3145F5' : '#B0B6BB'}/>
                    break;
                case 'Tasks':
                    return <TasksIcon color={focused ? '#3145F5' : '#B0B6BB'}/>
                    break;
                case 'Courses':
                    return <CoursesIcon color={focused ? '#3145F5' : '#B0B6BB'}/>
                    break;
                case 'Profile':
                    return <ProfileIcon color={focused ? '#3145F5' : '#B0B6BB'}/>
                    break;
                // case 'Notification':
                //     return <NotificationScreen />
                default:
                    return <HomeIcon/>
                    break;
            }
          },
          tabBarActiveTintColor: '#3145F5',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
              backgroundColor: 'rgba(255,255,255,0.88)',
            //   height: 74,
              justifyContent: 'space-evenly',
              paddingHorizontal: 24,
              paddingVertical: 8,
            //   shadowRadius: 24,
            //   shadowColor: '#ffffff',
            //   shadowOffset: { width: 0, height: 1},
            //   shadowOpacity: 0.88,
          },
        //   tabBarBackground: () => {
        //       <View style={{backgroundColor: 'rgba(255,255,255,0.88'}} />
        //   },
        //   tabBarBackground: () => 
        //   <BlurView tint='light' intensity={4} style={{backgroundColor: 'rgba(255,255,255,0.88)'}} />,
          headerShown: false,
          tabBarLabelStyle: {
              fontSize: StyleSheetLibrary.fontSizeSmallText,
              fontWeight: '300',
          }
        })}
      >
        <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
        <Tab.Screen name="Tasks" component={TasksScreen} />
        <Tab.Screen name="Courses" component={CoursesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}