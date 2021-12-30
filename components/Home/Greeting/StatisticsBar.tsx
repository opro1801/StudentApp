import React from "react"
import { View, StyleSheet, Text, Image } from "react-native"
import StyleSheetLibrary from "../../../stylesheet/StyleSheetLibrary";
import SectionStats from "./SectionStats";

const StatisticsBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerContent}>Your Learning Statistics</Text>
                <Text style={styles.learnMore}>Learn More</Text>
            </View>
            <View style={styles.breakLine}/>
            <View style={styles.details}>
                <SectionStats date="Today" time="48m"/>
                <SectionStats date="This Week" time="2h 24m"/>
                <SectionStats date="This Month" time="12h"/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'rgba(0, 0, 0, 0.08)',
        height: 98,
    },
    header: {
        height: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerContent: {
        fontSize: StyleSheetLibrary.fontSizeBigText,
        fontWeight: '500',
        lineHeight: 22,
    },
    learnMore: {
        fontSize: StyleSheetLibrary.fontSizeText,
        lineHeight: 16,
        color: '#A0A1AF'
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    breakLine: {
        width: '100%',
        borderTopWidth: 1,
        borderColor: 'rgba(26, 26, 28, 0.08)',
    }
});

export default StatisticsBar;