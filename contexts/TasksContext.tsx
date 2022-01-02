
import React, { useState, useEffect, FC, useContext, Dispatch } from 'react';
import { Platform, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

interface TasksContextInterface {
    currentRouteName: string;
    setRouteName?: (name: string) => void;
}

const defaultState = {
    currentRouteName: 'upcoming',
};

export const TasksContext = React.createContext<TasksContextInterface>(defaultState);

export const TasksContextProvider: FC = ({ children }) => {
    const [currentRouteName, setcurrentRouteName] = useState('upcoming');
    const setRouteName = (name : string) => {
        setcurrentRouteName(name);
    }
    return <TasksContext.Provider
        value={{
            currentRouteName,
            setRouteName,
        }}
    >
        {children}
    </TasksContext.Provider>
}
export const useTasksContext = () => useContext(TasksContext);

export default TasksContextProvider;