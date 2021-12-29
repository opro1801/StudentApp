import React, { useState, useEffect, FC, useContext } from 'react';
import { Platform, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

interface LandingContextInterface {
    isLoggedIn: boolean;
    toggleLoggedIn?: () => void;
    fontSizeText: number,
    fontSizeTitle: number,
    fontSizeSubtitle: number,
    fontSizeLargeText: number,
    fontSizeSmallTitle: number,
    statusBarHeight: number,
}

const defaultState = {
    isLoggedIn: false,
    fontSizeText: 12,
    fontSizeTitle: 24,
    fontSizeLargeText: 14,
    fontSizeSubtitle: 14,
    fontSizeSmallTitle: 16,
    statusBarHeight: 44,
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
    return <LandingContext.Provider
        value={{
            isLoggedIn,
            toggleLoggedIn,
            fontSizeText,
            fontSizeTitle,
            fontSizeLargeText,
            fontSizeSubtitle,
            fontSizeSmallTitle,
            statusBarHeight,
        }}
    >
        {children}
    </LandingContext.Provider>
}
export const useLandingContext = () => useContext(LandingContext);

export default LandingContextProvider;