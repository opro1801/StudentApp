import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './IconProps/IconProps';

const CloseIcon = ({
  color = '#B0B6BB',
  width = 24,
  height = 24,
  strokeColor = 'white',
}: IconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
    >
      <Path
        d='M18 6L6 18'
        stroke={strokeColor}
        stroke-width='1.6'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M6 6L18 18'
        stroke={strokeColor}
        stroke-width='1.6'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  );
};

export default CloseIcon;
