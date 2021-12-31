import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FantaskticIcon from '../../../icons/FantaskticIcon';
import RightArrowButtonIcon from '../../../icons/RightArrowButtonIcon';
import StyleSheetLibrary from '../../../stylesheet/StyleSheetLibrary';

interface TaskCardProps {
    courseName: string;
    taskName: string;
    date: string;
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

const TaskCard: React.FC<TaskCardProps> = ({ courseName, taskName, date }) => {
    return (
        <View style={styles.container}>
            <View style={styles.timeBox}>
                <Text style={styles.dateText}>
                    {getDate(date)}<Text style={styles.monthText}>/{getMonth(date)}</Text>
                </Text>
                <Text style={styles.dayText}>
                    {getDay(date)}
                </Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.courseText}>
                    {courseName}
                </Text>
                <Text style={styles.taskText}>
                    {taskName}
                </Text>
            </View>
            <TouchableOpacity>
                <RightArrowButtonIcon />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 280,
        height: 92,
        borderRadius: 8,
        borderColor: 'rgba(0, 0, 0, 0.02)',
        borderWidth: 2,
        marginRight: 16,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subject: {
        width: '100%',
        fontSize: StyleSheetLibrary.fontSizeSmallTitle,
        color: '#3145F5',
        fontWeight: '600',
        lineHeight: 22,
    },
    className: {
        lineHeight: 18,
        fontSize: StyleSheetLibrary.fontSizeText
    },
    timeBox: {
        width: 40,
        height: 36,
    },
    content: {
        width: 168,
    },
    dateText: {
        fontSize: StyleSheetLibrary.fontSizeBigText,
        fontWeight: '600',
        textAlign: 'center',
    },
    monthText: {
        fontSize: StyleSheetLibrary.fontSizeSmallText,
        fontWeight: '400',
    },
    dayText: {
        fontSize: StyleSheetLibrary.fontSizeSmallText,
        textAlign: 'center',
        color: '#B0B6BB',
    },
    courseText: {
        fontSize: StyleSheetLibrary.fontSizeSmallText,
        lineHeight: 16,
        color: '#3145F5',
        fontWeight: '600',
    },
    taskText: {
        fontSize: StyleSheetLibrary.fontSizeBigText,
        fontWeight: '600',
        lineHeight: 20,
    }
})

export default TaskCard;