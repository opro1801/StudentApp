import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';
import GoogleIcon from '../../icons/GoogleIcon';
import { useLandingContext } from '../../contexts/LandingContext';
import StyleSheetLibrary from '../../stylesheet/StyleSheetLibrary';

const { width } = Dimensions.get('window');

const GoogleButton = () => {
  // React.useEffect(()=> {
  //     initAsync();
  // },[]);

  // const initAsync = async () => {
  //     await GoogleSignIn.initAsync({
  //       // You may ommit the clientId when the firebase `googleServicesFile` is configured
  //       //clientId: '<YOUR_IOS_CLIENT_ID>',
  //     });
  //     _syncUserWithStateAsync();
  //   };

  // const _syncUserWithStateAsync = async () => {
  //     const user = await GoogleSignIn.signInSilentlyAsync();
  //     setGoogleUser(user)
  //     const json = await google_signin_function.post_google_sign_in_handling(user)
  //     if (google_signin_function.E_google_sign_in(json)) {
  //         //Do sth after login
  //         //Alert.alert("Login Sucess", "Please proceed to other process")
  //     }
  // };

  // const signOutAsync = async () => {
  //     await GoogleSignIn.signOutAsync();
  //     setGoogleUser(null);
  //   };

  // const signInAsync = async () => {
  //     try {
  //       await GoogleSignIn.askForPlayServicesAsync();
  //       const { type, user } = await GoogleSignIn.signInAsync();
  //       if (type === 'success') {
  //         _syncUserWithStateAsync();
  //       }
  //     } catch ({ message }) {
  //       alert('login: Error:' + message);
  //     }
  //   };

  return (
    <TouchableOpacity
      onPress={() => {
        // if (GoogleUser== null) {
        //     signInAsync()
        // }
        // else {
        //     signOutAsync()
        // }
      }}
      style={styles.googleButton}
    >
      <GoogleIcon />
      {/* <Image style={styles.googleLogo} source={require("../../assets/GoogleLogo.png")}/> */}
      <Text
        style={[
          styles.googleText,
          { fontSize: StyleSheetLibrary.fontSizeBigText },
        ]}
      >
        Continue with Google
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  googleButton: {
    width: width - 48,
    height: 56,
    margin: 6,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#14153A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleLogo: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
  },
  googleText: {
    fontWeight: '600',
    color: 'black',
    fontSize: 14,
  },
});

export default GoogleButton;
