import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import GeneralHeader from "../../../components/GeneralHeader";
import CompletedTaskCard from "../../../components/Home/Tasks/CompletedTaskCard";
import { headerIgnore } from "../../../components/StatusBarBackGround";
import CourseListCard from '../../../components/Courses/CourseListCard';
import { BlurView } from "expo-blur";

const { width, height } = Dimensions.get('window');

const CoursesScreen = () => {

  const [tasksList, settasksList] = useState([
    // {subject: 'first', className: 'first', time: 'first',},
    {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z', progress: 0.8},
    {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z', progress: 0.7},
    {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z', progress: 0.8},
    {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z', progress: 0.7},
    {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z', progress: 0.8},
    {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z', progress: 0.7},
    {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z', progress: 0.8},
    {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z', progress: 0.7},
    {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z', progress: 0.8},
    {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z', progress: 0.7},
    {subject: 'Mathematics', className: '1.2 - More About Probability', time:'2021-12-31T09:54:33Z', progress: 0.8},
    {subject: 'Physics', className: 'F5', time:'2021-12-31T09:54:33Z', progress: 0.7},
    // {subject: 'last', className: 'last', time:'last'},
  ]);

  let rows = [];
  // useEffect(() => {
      for(let item of tasksList) {
          rows.push(<CourseListCard courseName={item.subject} className={item.className} key={(Math.random() * 100000).toString()} />)
      }
  // }, [tasksList])
    return (
      <View style={styles.container}>
        {/* <BlurView intensity={100}> */}
          <GeneralHeader titleContent="My Courses" hasBack={false} hasMore={false} hasAdd={true}/>
        {/* </BlurView> */}
        <View style={styles.inner}>
        <ScrollView style={styles.courseList} showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{height: headerIgnore}} />
            {rows}
            <View style={{height: 90 + 16}} />
        </ScrollView>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  courseList: {
    // flex: 1,
    height: height,
  }
})

export default CoursesScreen;
  