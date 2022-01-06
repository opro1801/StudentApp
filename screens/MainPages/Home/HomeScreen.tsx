import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import GreetingWithStatistics from '../../../components/Home/Greeting/GreetingWithStatistics';
import HomeHeader from '../../../components/Home/Greeting/HomeHeader';
import TasksContainer from '../../../components/Home/Tasks/TasksContainer';
import StatusBarBackGround, {
  statusBarIgnore,
} from '../../../components/StatusBarBackGround';
import FantaskticIcon from '../../../icons/FantaskticIcon';
import NotificationIcon from '../../../icons/NotificationIcon';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { HomeStackParamList } from './HomeStackNavigator';
import { useNavigation } from '@react-navigation/native';
import ClassContainer from '../../../components/Home/ClassesList/ClassContainer';
import { useCustomLazyQuery } from '../../../utils/useCustomLazyQuery';
import { GET_USERS, GET_USER_BY_ID } from '../../../apiService/query/users.gql';
import { useQuery } from '@apollo/client';
import { GET_ME_QUERY } from '../../../apiService/auth/GetMeQuery';
import { User } from 'firebase/auth';
import { Loading } from '../../../components/Loading';
import { GET_TOPIC_DETAIL_BY_ID_QUERY } from '../../../apiService/query/topic_detail.gql';

type homeScreenNavigationType = StackNavigationProp<HomeStackParamList, 'Home'>;

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation<homeScreenNavigationType>();

  const notificationNavigate = () => {
    navigation.navigate('Notification');
  };

  const { data, loading } = useQuery(GET_USER_BY_ID, {
    variables: { userId: '4f542f5e-7122-4126-9e6a-4e856e549e66' },
  });

  // console.log(data);

  if (loading) {
    return <Loading />;
  }

  const {
    user: { name },
  } = data;

  return (
    <View style={styles.container}>
      <StatusBar />
      <HomeHeader notificationNavigate={notificationNavigate} />
      <ScrollView style={{ paddingTop: 56 + statusBarIgnore }}>
        <GreetingWithStatistics name={name} />
        <ClassContainer />
        <TasksContainer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
});

export default HomeScreen;
