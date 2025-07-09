import type { ColorValue } from 'react-native';
import type { SvgProps } from 'react-native-svg';

export type SvgIconProps = {
  size?: number | string;
  color?: ColorValue;
} & SvgProps;
