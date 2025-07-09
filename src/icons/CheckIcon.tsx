import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { type SvgIconProps } from './type';

export const CheckIcon: React.FunctionComponent<SvgIconProps> = ({
  color = '#0275D8',
  size = '20',
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M13.5 4.5L6.5 11.4997L3 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
