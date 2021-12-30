import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import FantaskticIcon from '../../../icons/FantaskticIcon';
import StyleSheetLibrary from '../../../stylesheet/StyleSheetLibrary';
import CourseCard from './CourseCard';


const ClassContainer = () => {
    const classList = [
        {subject: 'Mathematics', className: 'Group 5'},
        {subject: 'Physics', className: 'F5'}
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Classes</Text>
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={classList}
                    renderItem={({ item }) => {
                        return (
                            <CourseCard subject={item.subject} className={item.className} />
                        )
                    }}
                    keyExtractor={item => `${item.subject} - ${item.className}`}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        height: 190,
        width: '100%',
        backgroundColor: '#ffffff',
        marginBottom: 16,
    },
    title: {
        width: '100%',
        fontSize: StyleSheetLibrary.fontSizeBigText,
        fontWeight: '500',
        lineHeight: 22,
    }
})

export default ClassContainer;