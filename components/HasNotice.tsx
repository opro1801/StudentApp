import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface HasNoticeProps {
    notificationNumber: number;
}

const HasNotice: React.FC<HasNoticeProps> = ({notificationNumber}) => {
    return (
        <View style={styles.circle}>
            <Text style={styles.number}>{notificationNumber}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        backgroundColor: '#3145F5',
        borderRadius: 24,
        width: 16,
        height: 16,
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

export default HasNotice;