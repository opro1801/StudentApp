import React from "react";
import Svg, {Path} from 'react-native-svg';

interface HomeProps {
    color?: string,
    width?: number,
    height?: number,
    paddingleft?: number,
}

const TasksIcon = ({color = '#B0B6BB', width = 24, height = 24, paddingleft = 16}: HomeProps) => {
    return (
<Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
<Path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#B0B6BB" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="#B0B6BB" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
    )
}

export default TasksIcon;