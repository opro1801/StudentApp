import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FantaskticIcon from '../../../icons/FantaskticIcon';
import StyleSheetLibrary from '../../../stylesheet/StyleSheetLibrary';

interface TaskCardProps {
    courseName: string;
    taskName: string;
    date?: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ courseName, taskName, date }) => {
    return (
        <View style={styles.container}>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 280,
        height: 120,
        borderRadius: 8,
        borderColor: 'rgba(0, 0, 0, 0.02)',
        borderWidth: 2,
        marginRight: 16,
        padding: 12,
        justifyContent: 'flex-end',
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
    }
})

export default TaskCard;