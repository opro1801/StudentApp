import React from "react"
import { View, StyleSheet } from "react-native"
import Greeting from "./Greeting";
import StatisticsBar from './StatisticsBar';

const GreetingWithStatistics = () => {
    return (
        <View style={styles.container}>
            <Greeting />
            <StatisticsBar/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 24,
        paddingVertical: 16,
        height: 198,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
    }
});

export default GreetingWithStatistics;