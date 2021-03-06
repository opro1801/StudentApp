import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
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
} from 'react-native';
import { AuthStackParamList } from './LandingNavigator';
import { useLandingContext } from '../../contexts/LandingContext';
import BackButton from '../../components/BackButton';
import StatusBarBackGround from '../../components/StatusBarBackGround';
import StyleSheetLibrary from '../../stylesheet/StyleSheetLibrary';

const { width, height } = Dimensions.get('window');
type authScreenNavigationType = StackNavigationProp<
  AuthStackParamList,
  'EmailVerification'
>;
type emailRouteType = RouteProp<AuthStackParamList, 'EmailVerification'>;

const EmailVerification = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const { toggleIsWelcome, isWelcome, user } = useLandingContext();

  const nextPage = () => {
    toggleIsWelcome;
  };
  const previousPage = () => {
    navigation.navigate('EmailContinueScreen');
  };
  const handleVerifyEmail = async () => {
    userReload();
    if (user && user.emailVerified) {
      toggleIsWelcome();
    }
  };

  const userReload = async () => {
    if (user) user.reload();
    // console.log(user.emailVerified);
  };
  //vuvaxe@acrossgracealley.com
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
            <BackButton previousPage={previousPage} />
            <View>
              <Text
                style={[
                  styles.header,
                  { fontSize: StyleSheetLibrary.fontSizeBigTitle },
                ]}
              >
                Verify your Email
              </Text>
              <Text style={{ fontSize: StyleSheetLibrary.fontSizeBigText }}>
                A verification email has been sent to your email, please open
                and proceed
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleVerifyEmail}
          >
            <Text style={styles.continueButtonText}>Proceed</Text>
          </TouchableOpacity>
          <View style={{ justifyContent: 'space-around', height: 36 }}>
            <Text style={{ fontSize: StyleSheetLibrary.fontSizeText }}>
              Having trouble logging in?
            </Text>
            <Text style={{ fontSize: StyleSheetLibrary.fontSizeText }}>
              Please contact{' '}
              <Text style={styles.contactEmail} onPress={() => {}}>
                cs@fantasktic.io
              </Text>
            </Text>
          </View>
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
  backButton: {
    width: 40,
    height: 40,
  },
  header: {
    fontWeight: '600',
    fontSize: 24,
    marginTop: 24,
    marginBottom: 4,
    lineHeight: 32,
  },
  contactEmail: {
    color: '#3145F5',
  },
  continueButton: {
    borderRadius: 10,
    height: 60,
    width: '100%',
    backgroundColor: '#3145F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  continueButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default EmailVerification;
