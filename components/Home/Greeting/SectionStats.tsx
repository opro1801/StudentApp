import React from "react"
import { View, StyleSheet, Text, Image, Dimensions } from "react-native"
import StyleSheetLibrary from '../../../stylesheet/StyleSheetLibrary';

const { width } = Dimensions.get("window");

interface SectionStatsProps {
    date: string;
    time: string;
}

const SectionStats: React.FC<SectionStatsProps> = ({date, time}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.time}>{time}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        width: (width - 96)/3,
    },
    date: {
        fontSize: StyleSheetLibrary.fontSizeSmallText,
        fontWeight: '600',
        lineHeight: 16,
        color: '#A0A1AF',

    },
    time: {
        fontSize: StyleSheetLibrary.fontSizeBigText,
        color: '#2ED47A',
        lineHeight: 20,
    }

});

export default SectionStats;