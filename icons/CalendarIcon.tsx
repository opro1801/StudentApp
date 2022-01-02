import React from "react";
import Svg, {Path} from 'react-native-svg';
import { IconProps } from "./IconProps/IconProps";

const CalendarIcon = ({color = "#A0A1AF", width = 16, height = 16, paddingleft = 16}: IconProps) => {
    return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
        <Path d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z" stroke={color} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.6667 1.33337V4.00004" stroke={color} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M5.33331 1.33337V4.00004" stroke={color} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M2 6.66663H14" stroke={color} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    )
}

export default CalendarIcon;