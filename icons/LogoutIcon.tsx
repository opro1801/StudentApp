import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { IconProps } from './IconProps/IconProps';

const LogoutIcon = ({
  strokeColor = '#F95141',
  color = '#F0F0FD',
  width = 24,
  height = 24,
  paddingleft = 16,
  marginRight = 0,
}: IconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      style={{ marginRight: marginRight }}
    >
      <Path
        d='M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9'
        stroke={strokeColor}
        stroke-width='1.6'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M16 17L21 12L16 7'
        stroke={strokeColor}
        stroke-width='1.6'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M21 12H9'
        stroke={strokeColor}
        stroke-width='1.6'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  );
};

export default LogoutIcon;
