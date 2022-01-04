import React from "react";
import Svg, {Path, Rect} from 'react-native-svg';
import { IconProps } from "./IconProps/IconProps";

const ConceptIcon = ({strokeColor='white' ,  color = "#F0F0FD", width = 24, height = 24, paddingleft = 16}: IconProps) => {
    return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" >
        <Path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke={strokeColor} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M1 10H23" stroke={strokeColor} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    )
}

export default ConceptIcon;