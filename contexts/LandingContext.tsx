import React, { useState, useEffect, FC, useContext } from 'react';

interface LandingContextInterface {
    isLoggedIn: boolean;
    toggleLoggedIn?: () => void;
    fontSizeText: number,
    fontSizeTitle: number,
    fontSizeSubtitle: number,
    fontSizeLargeText: number,
    fontSizeSmallTitle: number,
}

const defaultState = {
    isLoggedIn: false,
    fontSizeText: 12,
    fontSizeTitle: 24,
    fontSizeLargeText: 14,
    fontSizeSubtitle: 14,
    fontSizeSmallTitle: 16,
};

export const LandingContext = React.createContext<LandingContextInterface>(defaultState);

export const LandingContextProvider: FC = ({ children }) => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const toggleLoggedIn = () => {
        setisLoggedIn(!isLoggedIn);
    }
    const fontSizeText = 12;
    const fontSizeTitle = 24;
    const fontSizeLargeText = 14;
    const fontSizeSubtitle = 14;
    const fontSizeSmallTitle = 16;
    return <LandingContext.Provider
        value={{
            isLoggedIn,
            toggleLoggedIn,
            fontSizeText,
            fontSizeTitle,
            fontSizeLargeText,
            fontSizeSubtitle,
            fontSizeSmallTitle,
        }}
    >
        {children}
    </LandingContext.Provider>
}
export const useLandingContext = () => useContext(LandingContext);

export default LandingContextProvider;