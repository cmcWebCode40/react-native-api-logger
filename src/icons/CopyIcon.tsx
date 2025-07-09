import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { type SvgIconProps } from './type';

export const CopyIcon: React.FunctionComponent<SvgIconProps> = ({
  color = 'white',
  size = '20',
}) => {
  return (
    <Svg
      accessibilityHint="copy icon"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M13.5004 11.5001V2.5H4.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.5004 4.5H2.5V13.5H11.5004V4.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
