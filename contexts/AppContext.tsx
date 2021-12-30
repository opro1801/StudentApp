import React, { useState, useEffect, FC, useContext } from 'react';
import { Platform, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

interface AppContextInterface {
    isLoggedIn: boolean;
    toggleLoggedIn?: () => void;
    fontSizeSmallText: number,
    fontSizeText: number,
    fontSizeBigText: number,
    fontSizeSmallTitle: number,
    fontSizeTitle: number,
    fontSizeBigTitle: number,
    fontSizeSmallHeading: number,
    fontSizeHeading: number,
    fontSizeBigHeading: number,
    statusBarHeight?: number,
    isWelcome: boolean,
    toggleIsWelcome?: () => void;
}

const defaultState = {
    isLoggedIn: false,
    fontSizeSmallText: 10,
    fontSizeText: 12,
    fontSizeBigText: 14,
    fontSizeSmallTitle: 16,
    fontSizeTitle: 24,
    fontSizeBigTitle: 32,
    fontSizeSmallHeading: 48,
    fontSizeHeading: 56,
    fontSizeBigHeading: 64,
    isWelcome: false,
};

export const AppContext = React.createContext<AppContextInterface>(defaultState);

export const AppContextProvider: FC = ({ children }) => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const toggleLoggedIn = () => {
        setisLoggedIn(!isLoggedIn);
    }
    const statusBarHeight = (Platform.OS === 'ios') ? 44 : 0;
    const fontSizeSmallText = 10;
    const fontSizeText = 12;
    const fontSizeBigText = 14;
    const fontSizeSmallTitle = 16;
    const fontSizeTitle = 24;
    const fontSizeBigTitle = 32;
    const fontSizeSmallHeading = 48;
    const fontSizeHeading = 56;
    const fontSizeBigHeading = 64;
    const isWelcome = false;
    return <AppContext.Provider
        value={{
            isLoggedIn,
            toggleLoggedIn,
            fontSizeSmallText,
            fontSizeText,
            fontSizeBigText,
            fontSizeSmallTitle,
            fontSizeTitle,
            fontSizeBigTitle,
            fontSizeSmallHeading,
            fontSizeHeading,
            fontSizeBigHeading,
            statusBarHeight,
            isWelcome,
        }}
    >
        {children}
    </AppContext.Provider>
}
export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;