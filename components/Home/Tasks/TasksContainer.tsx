import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import FantaskticIcon from '../../../icons/FantaskticIcon';
import StyleSheetLibrary from '../../../stylesheet/StyleSheetLibrary';
import TaskCard from './TaskCard';


const TasksContainer = () => {
    const classList = [
        {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z'},
        {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z'}
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upcoming Tasks</Text>
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={classList}
                    renderItem={({ item }) => {
                        return (
                            <TaskCard courseName={item.subject} taskName={item.className} date={item.time}/>
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
        height: 162,
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

export default TasksContainer;