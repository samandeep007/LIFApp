import { TouchableOpacity, Text, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { triggerHaptic } from '../../utils/haptics';
import { COLORS, scaleFont, ICONS } from '../../utils/constants';

const { width } = Dimensions.get('window');

const Button = ({ title, onPress, icon, style }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(1, { duration: 100 }) }],
  }));

  return (
    <Animated.View style={[animatedStyle, { backgroundColor: COLORS.primary, borderRadius: 8, minWidth: width * 0.4 }, style]}>
      <TouchableOpacity
        onPressIn={() => triggerHaptic('Light')}
        onPress={onPress}
        className="flex-row items-center justify-center p-[scaleFont(12)]"
      >
        {icon && <Feather name={icon} size={ICONS.size} color={COLORS.secondary} className="mr-[scaleFont(8)]" />}
        <Text className="text-[#ffffff] font-roboto-bold" style={{ fontSize: scaleFont(18) }}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Button;