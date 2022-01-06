import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { IconProps } from './IconProps/IconProps';

const FAQIcon = ({
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
      height={width}
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
        d='M9.09003 9.00008C9.32513 8.33175 9.78918 7.76819 10.4 7.40921C11.0108 7.05024 11.7289 6.91902 12.4272 7.03879C13.1255 7.15857 13.7588 7.52161 14.2151 8.06361C14.6714 8.60561 14.9211 9.2916 14.92 10.0001C14.92 12.0001 11.92 13.0001 11.92 13.0001'
        stroke={strokeColor}
        stroke-width='1.6'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12 17H12.01'
        stroke={strokeColor}
        stroke-width='1.6'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  );
};

export default FAQIcon;
