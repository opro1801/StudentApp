import { User } from 'firebase/auth';
import React, { useState, useEffect, FC, useContext } from 'react';
import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface LandingContextInterface {
  isLoggedIn: boolean;
  toggleLoggedIn?: () => void;
  statusBarHeight: number;
  isWelcome: boolean;
  toggleIsWelcome: () => void;
  user: User | null;
  setCurrentUser: (user: User) => void;
}

const defaultState = {
  isLoggedIn: false,
  statusBarHeight: 44,
  isWelcome: false,
  toggleIsWelcome: () => {},
  user: null,
  setCurrentUser: (user: User) => {},
};

export const LandingContext =
  React.createContext<LandingContextInterface>(defaultState);

export const LandingContextProvider: FC = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const toggleLoggedIn = () => {
    setisLoggedIn(!isLoggedIn);
  };
  const [user, setUser] = useState<User | null>(null);
  const statusBarHeight = Platform.OS === 'ios' ? 44 : 0;
  const [isWelcome, setisWelcome] = useState(false);
  const toggleIsWelcome = () => {
    setisWelcome(!isWelcome);
  };
  const setCurrentUser = (user: User) => {
    setUser(user);
  };
  return (
    <LandingContext.Provider
      value={{
        isLoggedIn,
        toggleLoggedIn,
        statusBarHeight,
        isWelcome,
        toggleIsWelcome,
        user,
        setCurrentUser,
      }}
    >
      {children}
    </LandingContext.Provider>
  );
};
export const useLandingContext = () => useContext(LandingContext);

export default LandingContextProvider;
