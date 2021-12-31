import React from "react";
import Svg, { Circle } from 'react-native-svg';
import { IconProps } from "./IconProps/IconProps";


const IndicatorIcon = ({color = "#3145F5", width = 4, height = 4, paddingleft = 16}: IconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 4 4" fill="none">
            <Circle cx="2" cy="2" r="2" fill={color}/>
        </Svg>
    )
}

export default IndicatorIcon;