import React from "react";
import Svg, {Path} from 'react-native-svg';
import { IconProps } from "./IconProps/IconProps";

interface RightArrowButtonIconProps{
    strokeColor?: string;
    color?: string;
    width?: number;
    height?: number;
    paddingleft?: number;
}

const RightArrowButtonIcon = ({strokeColor = '#3145F5', color='#F1F0FE', width = 24, height = 24, paddingleft = 16}: RightArrowButtonIconProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
            <Path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill={color}/>
            <Path d="M10 16L14 12L10 8" stroke={strokeColor} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}

export default RightArrowButtonIcon;