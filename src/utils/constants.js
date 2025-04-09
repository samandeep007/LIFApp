import { Dimensions, PixelRatio } from 'react-native';
const { width } = Dimensions.get('window');

export const COLORS = {
  background: '#000000',
  primary: '#feacd0',
  secondary: '#ffffff',
};

export const BORDER_RADIUS = {
  button: 8,
  card: 8,
  input: 4,
};

export const ICONS = {
  size: width * 0.06,
};

export const scaleFont = (size) => PixelRatio.roundToNearestPixel(size * (width / 375));