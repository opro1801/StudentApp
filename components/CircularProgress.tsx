import React from "react";
import { View } from "react-native";
import * as Progress from 'react-native-progress';
import StyleSheetLibrary from "../stylesheet/StyleSheetLibrary";

interface CircularProgressProps {
    size?: number;
    progress: number;
    color?: string;
    thickness?: number;
}

const CircularProgress = ({size=48, progress=0.88, color="#2ED47A" , thickness=3}: CircularProgressProps) => {
    return (
        <Progress.Circle
            size={size} 
            progress={progress} 
            borderWidth={0} 
            color={color}
            unfilledColor="#F1F0FE"
            showsText={true}
            textStyle={{fontSize: StyleSheetLibrary.fontSizeText}}
            formatText={(progress) => progress*100}
            thickness={thickness}
            strokeCap="round"
        />
    )
}

export default CircularProgress;