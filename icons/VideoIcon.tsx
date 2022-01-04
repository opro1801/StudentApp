import React from "react";
import Svg, {Path, Rect} from 'react-native-svg';
import { IconProps } from "./IconProps/IconProps";

const VideoIcon = ({strokeColor='white' ,  color = "#F0F0FD", width = 24, height = 24, paddingleft = 16}: IconProps) => {
    return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
        <Path d="M23 7L16 12L23 17V7Z" stroke={strokeColor} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke={strokeColor} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    )
}

export default VideoIcon;