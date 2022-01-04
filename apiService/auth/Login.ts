import { gql, useMutation } from '@apollo/client';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  Auth,
  createUserWithEmailAndPassword,
  getIdToken,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  OAuthCredential,
  OAuthProvider,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  isSignInWithEmailLink,
  User as FirebaseUser,
} from 'firebase/auth';
import firebaseAppWithConfig from '../../config/FirebaseConfig';
import {
  AuthFirebaseLoginOutput,
  FirebaseUserLoginInput,
  FirebaseUserRegisterInput,
  User,
  UserRole,
} from '../../assets/type/backend.type';
import { useCustomLazyQuery } from '../../utils/useCustomLazyQuery';
import { GET_ME_QUERY } from './GetMeQuery';

const FIREBASEUSER_LOGIN_MUTATION = gql`
  mutation firebaseUserLogin($firebaseUserLoginInput: FirebaseUserLoginInput!) {
    firebaseUserLogin(firebaseUserLoginInput: $firebaseUserLoginInput) {
      isSuccess
      errorMessage
      token
    }
  }
`;

const FIREBASEUSER_REGISTER_MUTATION = gql`
  mutation firebaseUserRegister(
    $firebaseUserRegisterInput: FirebaseUserRegisterInput!
  ) {
    firebaseUserRegister(
      firebaseUserRegisterInput: $firebaseUserRegisterInput
    ) {
      isSuccess
      errorMessage
      data {
        id
        name
        role
        email
        photoURL
        firebaseUid
      }
    }
  }
`;

export enum FirebaseProvider {
  GOOGLE = 'GOOGLE',
  APPLE = 'APPLE',
  // CUSTOM="CUSTOM",
}

const LoginFuntion = (email: string) => {
  let auth = getAuth(firebaseAppWithConfig);
  const [firebaseUserLoginMutation] = useMutation<
    { firebaseUserLogin: AuthFirebaseLoginOutput },
    { firebaseUserLoginInput: FirebaseUserLoginInput }
  >(FIREBASEUSER_LOGIN_MUTATION);
  const [firebaseUserRegisterMutation] = useMutation<
    User,
    { firebaseUserRegisterInput: FirebaseUserRegisterInput }
  >(FIREBASEUSER_REGISTER_MUTATION);
  const getMeApi = useCustomLazyQuery<{ me: User }>(GET_ME_QUERY);
  async function handleSendSignInLinkToEmail(_auth: Auth, _email: string) {
    try {
      // update auth
      _auth = getAuth(firebaseAppWithConfig);
      const actionCodeSettings = {
        url: 'http://localhost:3001/login',
        // no need to setup if not building IOS or Andriod app
        // iOS: {
        //    bundleId: 'com.example.ios'
        // },
        // android: {
        //   packageName: 'com.example.android',
        //   installApp: true,
        //   minimumVersion: '12'
        // },
        handleCodeInApp: true,
      };
      await sendSignInLinkToEmail(_auth, _email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      alert(`SignIn Link Sent to ${_email}`);
    } catch (error) {
      console.log('error', JSON.stringify(error));
      alert('SignIn failed');
    }
  }
  handleSendSignInLinkToEmail(auth, email);
};

export default LoginFuntion;
