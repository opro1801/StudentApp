import React from "react";
import Svg, {Path} from 'react-native-svg';

interface MailProps {
    color?: string,
    width?: number,
    height?: number,
    paddingleft?: number,
}

const MailIcon = ({width = 24, height = 24, paddingleft = 16,}: MailProps) => {
    return (
<Svg width={width} height={height} style={{position: 'absolute', left: paddingleft,}} viewBox="0 0 24 24" fill="none">
<Path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#14153A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M22 6L12 13L2 6" stroke="#14153A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
    )
}

export default MailIcon;