import React from "react";
import Svg, {Path, Rect} from 'react-native-svg';
import { IconProps } from "./IconProps/IconProps";

const AddIcon = ({strokeColor='#3145F5',  color = "#F0F0FD", width = 32, height = 32, paddingleft = 16}: IconProps) => {
    return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
        <Rect width={width} height={height} rx="16" fill={color} />
        <Path d="M16 9V23" stroke={strokeColor} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M9 16H23" stroke={strokeColor} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    )
}

export default AddIcon;