import React, { useState, useEffect, FC, useContext } from 'react';
import { Platform, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

interface AppContextInterface {
    isLoggedIn: boolean;
    toggleLoggedIn?: () => void;
    statusBarHeight?: number,
    isWelcome: boolean,
    toggleIsWelcome?: () => void;
}

const defaultState = {
    isLoggedIn: false,
    isWelcome: false,
};

export const AppContext = React.createContext<AppContextInterface>(defaultState);

export const AppContextProvider: FC = ({ children }) => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const toggleLoggedIn = () => {
        setisLoggedIn(!isLoggedIn);
    }
    const statusBarHeight = (Platform.OS === 'ios') ? 44 : 0;
    const isWelcome = false;
    return <AppContext.Provider
        value={{
            isLoggedIn,
            toggleLoggedIn,
            statusBarHeight,
            isWelcome,
        }}
    >
        {children}
    </AppContext.Provider>
}
export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;