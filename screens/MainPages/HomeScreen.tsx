import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ClassContainer from "../../components/Home/ClassesList/ClassContainer";
import GreetingWithStatistics from "../../components/Home/Greeting/GreetingWithStatistics";
import HomeHeader from "../../components/Home/Greeting/HomeHeader";
import TasksContainer from "../../components/Home/Tasks/TasksContainer";
import StatusBarBackGround from "../../components/StatusBarBackGround";
import FantaskticIcon from "../../icons/FantaskticIcon";
import NotificationIcon from "../../icons/NotificationIcon";

const HomeScreen = () => {
    return (
      <ScrollView contentContainerStyle={styles.container} style={{backgroundColor: '#ffffff'}}>
        <StatusBarBackGround />
        <View style={styles.inner}>
          <StatusBar />
          <HomeHeader />
          <GreetingWithStatistics />
          <ClassContainer />
          <TasksContainer />
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    opacity: 0.88,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  }
})

export default HomeScreen;
  