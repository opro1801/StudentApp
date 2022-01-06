import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { IconProps } from './IconProps/IconProps';

const InfoIcon = ({
  strokeColor = '#434461',
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
        d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
        stroke={strokeColor}
        stroke-width='1.6'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12 16V12'
        stroke={strokeColor}
        stroke-width='1.6'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12 8H12.01'
        stroke={strokeColor}
        stroke-width='1.6'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  );
};

export default InfoIcon;
