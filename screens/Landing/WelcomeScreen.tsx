import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Button,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { AuthStackParamList } from './LandingNavigator';
import { useLandingContext } from '../../contexts/LandingContext';
import StatusBarBackGround from '../../components/StatusBarBackGround';
import ContinueButton from '../../components/ContinueButton';
import TextInputFocusEffect from '../../components/TextInputFocusEffect';
import StyleSheetLibrary from '../../stylesheet/StyleSheetLibrary';

// type authScreenNavigationType = StackNavigationProp<AuthStackParamList, "Welcome">
// type welcomeRouteType = RouteProp<AuthStackParamList, "Welcome">;

const WelcomeScreen = () => {
  const [userName, setuserName] = useState<string>('');
  // const {
  //     params: {email}
  // } = useRoute<welcomeRouteType>();

  const completeRegistration = () => {
    if (userName !== '') {
      Alert.alert('OK!');
    } else {
      Alert.alert('Please enter your name!');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <StatusBar />
          <View>
            <StatusBarBackGround />
            <View>
              <Text
                style={[
                  styles.header,
                  { fontSize: StyleSheetLibrary.fontSizeBigTitle },
                ]}
              >
                Welcome!
              </Text>
              <Text style={{ fontSize: StyleSheetLibrary.fontSizeBigText }}>
                Seems like you are new here.
              </Text>
              <Text style={{ fontSize: StyleSheetLibrary.fontSizeBigText }}>
                Before we begin, please tell us about yourself :)
              </Text>
            </View>
            <View style={styles.nameInputView}>
              <Text style={[{ fontSize: StyleSheetLibrary.fontSizeBigText }]}>
                What is your name?
              </Text>
              <TextInputFocusEffect
                setFieldName={setuserName}
                fieldName={userName}
                placeholder='Your Name'
                autoCapitalize='words'
              />
            </View>
          </View>
          <ContinueButton
            isValidInfo={() => userName !== ''}
            userInfo={userName}
            buttonText='Complete Registration'
            nextPage={completeRegistration}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-between',
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  header: {
    fontWeight: '600',
    fontSize: 24,
    marginBottom: 4,
    lineHeight: 32,
  },
  nameInputView: {
    marginTop: 24,
  },
});

export default WelcomeScreen;
