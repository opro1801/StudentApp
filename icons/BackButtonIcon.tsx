import React from "react";
import Svg, {Path} from 'react-native-svg';

interface BackButtonProps {
    color?: string,
    width?: number,
    height?: number,
    paddingleft?: number,
}

const BackButtonIcon = ({width = 40, height = 40, paddingleft = 16, color = "#3145F5"}: BackButtonProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
            <Path fill={color} d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z"/>
            <Path d="M27 20H13" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M20 27L13 20L20 13" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}

export default BackButtonIcon;