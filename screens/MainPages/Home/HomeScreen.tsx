import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Dimensions } from "react-native";
import GreetingWithStatistics from "../../../components/Home/Greeting/GreetingWithStatistics";
import HomeHeader from "../../../components/Home/Greeting/HomeHeader";
import TasksContainer from "../../../components/Home/Tasks/TasksContainer";
import StatusBarBackGround from "../../../components/StatusBarBackGround";
import FantaskticIcon from "../../../icons/FantaskticIcon";
import NotificationIcon from "../../../icons/NotificationIcon";
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from "./HomeStackNavigator";
import { useNavigation } from '@react-navigation/native';
import ClassContainer from "../../../components/Home/ClassesList/ClassContainer";

type homeScreenNavigationType = StackNavigationProp<HomeStackParamList, "Home">

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  
  const navigation = useNavigation<homeScreenNavigationType>()

  const notificationNavigate = () => {
    navigation.navigate('Notification');
  }

  const statusBarHeight =  (Platform.OS === 'ios') ? 44 : 0;
  
   return (
    <View style={styles.container} >
      <StatusBar />
      <HomeHeader notificationNavigate={notificationNavigate} />
      <ScrollView style={{paddingTop: 56 + statusBarHeight}}>
        <GreetingWithStatistics />
        <ClassContainer />
        <TasksContainer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
})

export default HomeScreen;
  