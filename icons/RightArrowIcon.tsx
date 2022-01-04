import React from "react";
import Svg, {Path, Rect} from 'react-native-svg';
import { IconProps } from "./IconProps/IconProps";

const RightArrowIcon = ({strokeColor='white' ,  color = "#F0F0FD", width = 24, height = 24, paddingleft = 16}: IconProps) => {
    return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
        <Path d="M5 12H19" stroke={strokeColor} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M12 5L19 12L12 19" stroke={strokeColor} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    )
}

export default RightArrowIcon;