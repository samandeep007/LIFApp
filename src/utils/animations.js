import { withSpring, withTiming } from 'react-native-reanimated';
export const fadeIn = (value) => withTiming(value, { duration: 500 });
export const slideUp = (value) => withSpring(value, { damping: 10 });
export const scalePress = (value) => withTiming(value, { duration: 100 });