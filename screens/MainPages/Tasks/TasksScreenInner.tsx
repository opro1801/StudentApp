import { StatusBar } from "expo-status-bar";
import React, {createContext, useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Dimensions, TouchableOpacity, Animated } from "react-native";
import StatusBarBackGround, { headerIgnore } from "../../../components/StatusBarBackGround";
import { NavigatorScreenParams, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import GeneralHeader from "../../../components/GeneralHeader";
import { createMaterialTopTabNavigator, MaterialTopTabBarProps, MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";
import CompletedTasks from './CompletedTasks';
import UpcomingTasks from './UpcomingTasks';
import TasksContextProvider, { useTasksContext } from "../../../contexts/TasksContext";

const {width, height} = Dimensions.get('window');

export type TopTabBarParamList = {
  upcoming: undefined,
  completed: undefined,
};

export type TopBarNavigationType = MaterialTopTabNavigationProp<TopTabBarParamList> 


const TasksScreenInner = () => {

  const Tab = createMaterialTopTabNavigator();

  const MyTabBar: React.FC<MaterialTopTabBarProps> = ({ state, descriptors, navigation, position }) => {
    return (
      <View>
      </View>
    );
  }
  
  const navigation = useNavigation<TopBarNavigationType>()

  const goCompleted = () => {
    navigation.navigate('completed');
  }
  const goUpcoming = () => {
    navigation.navigate('upcoming');
  }
  const { currentRouteName } = useTasksContext();

  return (
      <View style={styles.container} >
        <StatusBar />
        <GeneralHeader titleContent="My Tasks" hasBack={false} hasMore={false} isTasks={true} goCompleted={goCompleted} goUpcoming={goUpcoming}/>
        <Tab.Navigator initialRouteName="upcoming" tabBar={props => <MyTabBar {...props}/> } >
          <Tab.Screen name="upcoming" component={UpcomingTasks}/>
          <Tab.Screen name="completed" component={CompletedTasks}/>
        </Tab.Navigator>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    overflow: 'visible',
  },
})

export default TasksScreenInner;
  