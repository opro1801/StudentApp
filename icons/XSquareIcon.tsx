import React from "react";
import Svg, {Path, Rect} from 'react-native-svg';
import { IconProps } from "./IconProps/IconProps";

const XSquareIcon = ({strokeColor='white' ,  color = "#F0F0FD", width = 24, height = 24, paddingleft = 16}: IconProps) => {
    return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" >
        <Path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke={strokeColor} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M9 9L15 15" stroke={strokeColor} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M15 9L9 15" stroke={strokeColor} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    )
}

export default XSquareIcon;