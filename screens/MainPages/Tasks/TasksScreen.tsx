import { StatusBar } from "expo-status-bar";
import React, {createContext, useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Dimensions, TouchableOpacity, Animated } from "react-native";
import StatusBarBackGround, { headerIgnore } from "../../../components/StatusBarBackGround";
import { NavigatorScreenParams, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import GeneralHeader from "../../../components/GeneralHeader";
import { createMaterialTopTabNavigator, MaterialTopTabBarProps, MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";
import CompletedTasks from './CompletedTasks';
import UpcomingTasks from './UpcomingTasks';
import TasksContextProvider from "../../../contexts/TasksContext";
import TasksScreenInner from "./TasksScreenInner";

const {width, height} = Dimensions.get('window');

const TasksScreen = () => {
  return (
    <TasksContextProvider>
      <TasksScreenInner />
    </TasksContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    overflow: 'visible',
  },
})

export default TasksScreen;
  