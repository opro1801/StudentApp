import { StackNavigationProp } from "@react-navigation/stack";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import GeneralHeader from "../../components/GeneralHeader";
import StatusBarBackGround, { headerIgnore } from "../../components/StatusBarBackGround";
import LeftArrowIcon from "../../icons/LeftArrowIcon";
import MoreIcon from "../../icons/MoreIcon";
import { HomeStackParamList } from "./HomeStackNavigator";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from "react-native-gesture-handler";
import NotificationCard from "../../components/Home/Notification/NotificationCard";

type NotificationScreenNavigationType = StackNavigationProp<HomeStackParamList, "Notification">


const NotificationScreen = () => {

    const navigation = useNavigation<NotificationScreenNavigationType>();

    const goBack = () => {
        navigation.navigate('Home');
    }

    const noti = [
        {
            subject: 'Math',
            message: 'Notification Message',
            time: '12:00',
            isNew: true,
        },
        {
            subject: 'Math',
            message: 'Notification Message',
            time: '12:00',
            isNew: true,
        },
        {
            subject: 'Math',
            message: 'Notification Message',
            time: '12:00',
            isNew: true,
        },
        {
            subject: 'Math',
            message: 'Notification Message',
            time: '12:00',
            isNew: true,
        },
        {
            subject: 'Math',
            message: 'Notification Message',
            time: '12:00',
            isNew: false,
        },
        {
            subject: 'Math',
            message: 'Notification Message',
            time: '12:00',
            isNew: false,
        },
    ]

    return (
        <View style={styles.container}>
            <GeneralHeader titleContent="Notification" goBack={goBack}/>
            <View style={[styles.inner]}>
                <FlatList 
                    style={{width: '100%',paddingTop: headerIgnore}}
                    showsVerticalScrollIndicator={false}
                    data={noti}
                    renderItem={({item}) => {
                        return <NotificationCard subject={item.subject} message={item.message} time={item.time} isNew={item.isNew}/>
                    }}
                    keyExtractor={item => (Math.random() * 1000).toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    opacity: 0.88,
    flex: 1,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 24,
  },

})

export default NotificationScreen;
  