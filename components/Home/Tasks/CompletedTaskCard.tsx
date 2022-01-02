import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CalendarIcon from '../../../icons/CalendarIcon';
import FantaskticIcon from '../../../icons/FantaskticIcon';
import RightArrowButtonIcon from '../../../icons/RightArrowButtonIcon';
import StyleSheetLibrary from '../../../stylesheet/StyleSheetLibrary';
import CircularProgress from '../../CircularProgress';

interface CompletedTaskCardProps {
    courseName: string;
    taskName: string;
    date: string;
    fillContainer?: boolean;
    marginBottom?: number;
    isDue?: boolean;
    keyName?: string;
    progress?: number;
}

const yyyymmdd = ( date: string ) => {
    return [date.substring(0,4),
            date.substring(4,6),
            date.substring(6,8)
           ].join('-');
};

const getDay = (time: string) => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    return days[(new Date(time)).getDay()-1];
}
const getDate = (time: string) => {
    return (new Date(time)).getDate();
}
const getMonth = (time: string) => {
    return (new Date(time)).getMonth()+1;
}

const CompletedTaskCard: React.FC<CompletedTaskCardProps> = ({ courseName, taskName, date, fillContainer=false, marginBottom = 0, progress=1}) => {
    return (
        <View style={[styles.container, {width: fillContainer ? '100%' : 280, marginBottom: marginBottom}]}>
            <View style={styles.content}>
                <Text style={styles.courseName}>{courseName}</Text>
                <View style={{minHeight: 48}}>
                    <Text style={styles.taskName}>{taskName}</Text>
                </View>
                <View style={styles.timeBox}>
                    <CalendarIcon />
                    <Text style={styles.timeText}>{getDate(date) < 10 ? '0' : ''}{getDate(date)}/{getMonth(date) < 10 ? '0' : ''}{getMonth(date)}</Text>
                </View>
            </View>
            <View style={{marginLeft: 12}}>
                <CircularProgress progress={0.5} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        minHeight: 112,
        borderRadius: 8,
        borderColor: 'rgba(0, 0, 0, 0.02)',
        borderWidth: 2,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    content: {
        flex: 1,
        height: '100%',
    },
    courseName: {
        fontSize: StyleSheetLibrary.fontSizeSmallText,
        fontWeight: '600',
        lineHeight: 16,
        color: '#0C69FF',
    },
    taskName: {
        fontSize: StyleSheetLibrary.fontSizeBigText,
        fontWeight: '600',
        lineHeight: 20,
    },
    timeBox: {
        flexDirection: 'row',
        width: 47,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    timeText: {
        fontSize: StyleSheetLibrary.fontSizeSmallText,
        color: '#A0A1AF'
    }
})

export default CompletedTaskCard;