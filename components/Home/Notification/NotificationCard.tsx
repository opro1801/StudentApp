import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FantaskticIcon from '../../../icons/FantaskticIcon';
import IndicatorIcon from '../../../icons/IndicatorIcon';
import StyleSheetLibrary from '../../../stylesheet/StyleSheetLibrary';

interface NotificationCardProps {
    subject: string;
    time: string;
    message: string;
    isNew: boolean;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ subject, time, message, isNew }) => {
    return (
        <View style={styles.container}>
            <View style={{ width: 20, alignItems: 'center', justifyContent: 'center'}}>
            {isNew &&
                <IndicatorIcon />
            }
            </View>
            <View style={styles.inner}>
                <Text style={styles.subject}>{subject}</Text>
                <Text style={styles.message}>{message}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 24,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.02)',
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'rgba(0, 0, 0, 0.12)',
        backgroundColor: '#ffffff',
        paddingRight: 20,
        paddingVertical: 12,
        borderRadius: 12,
        flexDirection: 'row',
    },
    inner: {
        width: '100%',
    },
    subject: {
        color: '#3145F5',
        fontSize: StyleSheetLibrary.fontSizeText,
        fontWeight: '600',
        lineHeight: 18,
        justifyContent: 'center',
    },
    message: {
        fontSize: StyleSheetLibrary.fontSizeSmallTitle,
        lineHeight: 24,
        fontWeight: '600',
        justifyContent: 'center',
    },
    time: {
        fontSize: StyleSheetLibrary.fontSizeSmallText,
        lineHeight: 16,
        fontWeight: '600',
        color: '#A0A1AF',
    }
})

export default NotificationCard;