import React, { useState, useEffect, FC, useContext } from 'react';
import { Platform, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

interface LandingContextInterface {
    isLoggedIn: boolean;
    toggleLoggedIn?: () => void;
    statusBarHeight: number,
    isWelcome: boolean,
    toggleIsWelcome?: () => void;
}

const defaultState = {
    isLoggedIn: false,
    statusBarHeight: 44,
    isWelcome: false,
};

export const LandingContext = React.createContext<LandingContextInterface>(defaultState);

export const LandingContextProvider: FC = ({ children }) => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const toggleLoggedIn = () => {
        setisLoggedIn(!isLoggedIn);
    }
    const statusBarHeight = (Platform.OS === 'ios') ? 44 : 0;
    const fontSizeText = 12;
    const fontSizeTitle = width < 300 ? 28 : 32;
    const fontSizeLargeText = width < 300 ? 12 : 14;
    const fontSizeSubtitle = width < 300 ? 12 : 14;
    const fontSizeSmallTitle = width < 300 ? 14 : 16;
    const [isWelcome, setisWelcome] = useState(false);
    const toggleIsWelcome = () => {
        setisWelcome(!isWelcome);
    }
    return <LandingContext.Provider
        value={{
            isLoggedIn,
            toggleLoggedIn,
            statusBarHeight,
            isWelcome,
            toggleIsWelcome,
        }}
    >
        {children}
    </LandingContext.Provider>
}
export const useLandingContext = () => useContext(LandingContext);

export default LandingContextProvider;