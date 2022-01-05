import { RouteProp, useNavigation } from '@react-navigation/native';
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
import MailIcon from '../../icons/MailIcon';
import { AuthStackParamList } from './LandingNavigator';
import { useLandingContext } from '../../contexts/LandingContext';
import BackButton from '../../components/BackButton';
import StatusBarBackGround from '../../components/StatusBarBackGround';
import ContinueButton from '../../components/ContinueButton';
import StyleSheetLibrary from '../../stylesheet/StyleSheetLibrary';
import LoginFuntion, {
  FIREBASEUSER_LOGIN_MUTATION,
  FIREBASEUSER_REGISTER_MUTATION,
} from '../../apiService/auth/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Auth,
  getAuth,
  sendEmailVerification,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  AuthFirebaseLoginOutput,
  FirebaseUserLoginInput,
  FirebaseUserRegisterInput,
  User,
} from '../../assets/type/backend.type';
import { useMutation } from '@apollo/client';
import TextInputFocusEffect from '../../components/TextInputFocusEffect';
import { auth } from '../../config/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const { width, height } = Dimensions.get('window');
type authScreenNavigationType = StackNavigationProp<
  AuthStackParamList,
  'EmailContinueScreen'
>;

const EmailContinueScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();

  const [firebaseUserLoginMutation] = useMutation<
    { firebaseUserLogin: AuthFirebaseLoginOutput },
    { firebaseUserLoginInput: FirebaseUserLoginInput }
  >(FIREBASEUSER_LOGIN_MUTATION);
  const [firebaseUserRegisterMutation] = useMutation<
    User,
    { firebaseUserRegisterInput: FirebaseUserRegisterInput }
  >(FIREBASEUSER_REGISTER_MUTATION);

  const [isFocus, setisFocus] = useState(true);

  const [userEmail, setuserEmail] = useState<string>('');

  const [password, setPassword] = useState<string>('');

  const isValidEmail = (mail: string) => {
    const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regx.test(mail);
  };

  const handleOnChangeText = (value: string) => {
    setuserEmail(value);
  };

  // const login = async (_auth: Auth, _email: string) => {
  //   try {
  //     // update auth
  //     _auth = getAuth(firebaseAppWithConfig);
  //     const actionCodeSettings = {
  //       url: 'http://localhost:3001/login',
  //       // no need to setup if not building IOS or Andriod app
  //       iOS: {
  //         bundleId: 'com.example.ios',
  //       },
  //       android: {
  //         packageName: 'com.example.android',
  //         installApp: true,
  //         minimumVersion: '12',
  //       },
  //       handleCodeInApp: true,
  //     };
  //     await sendSignInLinkToEmail(_auth, _email, actionCodeSettings);
  //     storeData(_email);
  //     alert(`SignIn Link Sent to ${_email}`);
  //   } catch (error) {
  //     console.log('error', JSON.stringify(error));
  //     alert('SignIn failed');
  //   }
  // };continuous-mule-9242@onetimeusemail.com

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, userEmail, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Registered with', user.email);
        const actionCodeSettings = {
          url: 'https://www.example.com',
          iOS: {
            bundleId: 'com.example.ios',
          },
          android: {
            packageName: 'com.example.android',
            installApp: true,
            minimumVersion: '12',
          },
          handleCodeInApp: true,
        };
        storeData(user.email);
        sendEmailVerification(user, actionCodeSettings);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, userEmail, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch((error) => alert(error.message));
  };

  const nextPage = () => {
    if (isValidEmail(userEmail)) {
      handleSignUp();
      navigation.navigate('EmailVerification', {
        email: userEmail,
      });
    } else {
      Alert.alert('Please enter a valid email!');
    }
  };
  const previousPage = () => {
    navigation.navigate('Landing');
  };

  const storeData = async (value: string | null) => {
    try {
      if (value !== null) await AsyncStorage.setItem('emailToSignIn', value);
    } catch (error) {
      throw error;
    }
  };

  const retrieveEmail = async () => {
    try {
      let emailAddress = await AsyncStorage.getItem('emailToSignIn');

      if (emailAddress !== null) {
        setuserEmail(emailAddress);
      }
      return emailAddress;
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    const saved_email = retrieveEmail();
    // if(auth.isSignInWithEmailLink)
  }, []);

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
                Continue with Email
              </Text>
              <Text style={[{ fontSize: StyleSheetLibrary.fontSizeBigText }]}>
                Please enter your email address to proceed
              </Text>
            </View>
            <View
              style={[
                styles.inputSection,
                { borderWidth: isFocus ? 1 : 0, borderColor: '#3145F5' },
              ]}
            >
              <MailIcon paddingleft={16} />
              <TextInput
                style={[styles.emailInput]}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Your email'
                underlineColorAndroid='transparent'
                onChangeText={(text) => handleOnChangeText(text)}
                autoFocus={true}
                onFocus={() => setisFocus(true)}
                onBlur={() => setisFocus(false)}
                defaultValue={userEmail}
              />
            </View>
            <TextInputFocusEffect
              fieldName={password}
              setFieldName={setPassword}
              placeholder='Your password'
              autoCapitalize='none'
            />
          </View>
          <ContinueButton
            isValidInfo={isValidEmail}
            userInfo={userEmail}
            nextPage={nextPage}
            buttonText='Continue'
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
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8FB',
    borderRadius: 10,
    marginTop: 48,
    height: 48,
  },
  emailInput: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    marginLeft: 34,
    borderRadius: 10,
    backgroundColor: '#F7F8FB',
    color: '#424242',
    height: 46,
    width: '80%',
  },
});

export default EmailContinueScreen;
