import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Platform } from 'react-native';


const StatusBarBackGround = () => {
    return (
        <View style={styles.statusBarBackGround}>

        </View>
    )
}

const styles = StyleSheet.create({
    statusBarBackGround: {
        height: (Platform.OS === 'ios') ? 44 : 0,
        backgroundColor: 'white',
    }
})


export default StatusBarBackGround;