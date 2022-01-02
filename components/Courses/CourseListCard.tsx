import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RightArrowButtonIcon from '../../icons/RightArrowButtonIcon';
import StyleSheetLibrary from '../../stylesheet/StyleSheetLibrary';

interface CourseListCard {
    courseName: string;
    className: string;
}

const CourseListCard: React.FC<CourseListCard> = ({courseName, className}) => {
    return (
        <View style={[styles.container]}>
            <Image source={require('../../assets/ChemistrySymbol.png')}/>
            <View style={styles.content}>
                <Text style={styles.courseName}>{courseName}</Text>
                <Text style={styles.className}>{className}</Text>
            </View>
            <TouchableOpacity>
                <RightArrowButtonIcon marginRight={30}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        minHeight: 96,
        borderRadius: 8,
        borderColor: 'rgba(0, 0, 0, 0.08)',
        borderWidth: 2,
        paddingHorizontal: 16,
        paddingVertical: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginBottom: 12,
    },
    content: {
        flex: 1,
        marginHorizontal: 12,
    },
    courseName: {
        fontSize: StyleSheetLibrary.fontSizeSmallTitle,
        color: '#3A7DFF',
        fontWeight: '600',
        lineHeight: 24,
    },
    className: {
        fontSize: StyleSheetLibrary.fontSizeText,
        fontWeight: '600',
        lineHeight: 18,
    }
})

export default CourseListCard;