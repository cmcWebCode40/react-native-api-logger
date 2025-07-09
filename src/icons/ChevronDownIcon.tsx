import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { type SvgIconProps } from './type';

export const ChevronDownIcon: React.FunctionComponent<SvgIconProps> = ({
  color = '#5F738C',
  size = '20',
}) => {
  return (
    <Svg
      accessibilityHint="chevron-down"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7072 7.70725L10.7073 13.7073C10.3163 14.0983 9.68425 14.0983 9.29325 13.7073L3.29325 7.70725C2.90225 7.31625 2.90225 6.68425 3.29325 6.29325C3.68425 5.90225 4.31625 5.90225 4.70725 6.29325L10.0002 11.5862L15.2933 6.29325C15.6842 5.90225 16.3162 5.90225 16.7072 6.29325C16.9022 6.48825 17.0002 6.74425 17.0002 7.00025C17.0002 7.25625 16.9022 7.51225 16.7072 7.70725Z"
        fill={color}
      />
    </Svg>
  );
};
