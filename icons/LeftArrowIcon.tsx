import React from "react";
import Svg, {Path} from 'react-native-svg';
import { IconProps } from "./IconProps/IconProps";

const LeftArrowIcon = ({color = '#B0B6BB', width = 24, height = 24, paddingleft = 16}: IconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path d="M19 12H5" stroke="#14153A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 19L5 12L12 5" stroke="#14153A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}

export default LeftArrowIcon;