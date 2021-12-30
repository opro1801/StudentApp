import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FantaskticIcon from '../../../icons/FantaskticIcon';
import StyleSheetLibrary from '../../../stylesheet/StyleSheetLibrary';

interface CourseCardProps {
    subject: string;
    className: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ subject, className }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.subject}>{subject}</Text>
            <Text style={styles.className}>{className}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 160,
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

export default CourseCard;