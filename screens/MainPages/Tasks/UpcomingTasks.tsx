import React, { Dispatch, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Dimensions, TouchableOpacity, Animated } from "react-native";
import StatusBarBackGround, { headerIgnore } from "../../../components/StatusBarBackGround";
import TaskCard from "../../../components/Home/Tasks/TaskCard";
import StyleSheetLibrary from '../../../stylesheet/StyleSheetLibrary';

const {width, height} = Dimensions.get('screen');

const UpcomingTasks = () => {
    const tasksList = [
        // {subject: 'first', className: 'first', time: 'first',},
        {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z'},
        {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z'},
        {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z'},
        {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z'},
        {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z'},
        {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z'},
        {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z'},
        {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z'},
        {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z'},
        {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z'},
        {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z'},
        {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z'},
        // {subject: 'last', className: 'last', time:'last'},
    ]
    const dueTasksList = [
        {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z'},
        {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z'},
        {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z'},
        {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z'},
        {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z'},
        {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z'},
        {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z'},
        {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z'},
        {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z'},
        {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z'},
        {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z'},
        {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z'},
        // {subject: 'last', className: 'last', time:'last'},
    ]

    let rows = [];
    for(let item of tasksList) {
        rows.push(<TaskCard courseName={item.subject} taskName={item.className} date={item.time} fillContainer={true} marginBottom={16} key={(Math.random() * 10000).toString()}/>)
    }
    let dueRows = [];
    for(let item of dueTasksList) {
        dueRows.push(<TaskCard courseName={item.subject} taskName={item.className} date={item.time} fillContainer={true} marginBottom={16} key={(Math.random() * 10000).toString()} isDue={true}/>)
    }

    return (
    <View style={styles.container} >
        <ScrollView style={styles.taskList} showsVerticalScrollIndicator={false}>
            <View style={{height: headerIgnore+60}} />
            <View style={styles.dueTaskContainer}>
                <View style={styles.dueTaskContainerHeader}>
                    <Text style={styles.dueHeaderText}>Due Tasks</Text>
                    <View style={styles.numberDueTaskContainer}>
                        <Text style={styles.numberDueTask}>
                            {dueTasksList.length}
                        </Text>
                    </View>
                </View>
                <View style={styles.dueTaskContent}>
                    {dueRows}
                </View>
            </View>
            {rows}
            <View style={{height: 90 + 16}} />
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: width,
    },
    taskList: {
        padding: 24,
        width: width,
    },
    dueTaskContainer: {
    marginBottom: 16,
    },
    dueTaskContainerHeader: {
    padding: 12, 
    backgroundColor: '#FB504D', 
    height: 48, 
    justifyContent: 'space-between',
    width: '100%',
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    },
    dueTaskContent: {
        borderBottomEndRadius: 12,
        borderBottomStartRadius: 12,
        borderWidth: 2,
        borderColor: '#FB504D',
        padding: 16,
        paddingBottom: 0,
    },
    dueHeaderText: {
        fontSize: StyleSheetLibrary.fontSizeBigText,
        color: '#ffffff',
        fontWeight: '500',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    numberDueTaskContainer: {
        borderRadius: 4,
        backgroundColor: '#ffffff',
        width: 31,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberDueTask: {
        fontSize: StyleSheetLibrary.fontSizeText,
        color: '#FB504D',
    }

})

export default UpcomingTasks;

  