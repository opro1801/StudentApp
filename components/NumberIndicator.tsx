import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface HasNoticeProps {
    payload: number;
    size?: number
}

const NumberIndicator: React.FC<HasNoticeProps> = ({payload, size=16}) => {
    return (
        <View style={[styles.circle, {width: size, height: size, borderRadius: size}]}>
            <Text style={styles.number}>{payload}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        backgroundColor: '#3145F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        color: 'white',
        fontSize: 8,
        fontWeight: '600',
        textAlign: 'center',
    }
})

export default NumberIndicator;