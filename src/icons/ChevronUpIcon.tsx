import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { type SvgIconProps } from './type';

export const ChevronUpIcon: React.FunctionComponent<SvgIconProps> = ({
  color = '#5F738C',
  size = '20',
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M6.5 15L12.5 9L18.5 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
