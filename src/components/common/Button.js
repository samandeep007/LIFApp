import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
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
    <Animated.View style={[animatedStyle, styles.container, style]}>
      <TouchableOpacity
        onPressIn={() => triggerHaptic('Light')}
        onPress={onPress}
        style={styles.button}
      >
        {icon && <Feather name={icon} size={ICONS.size} color={COLORS.secondary} style={styles.icon} />}
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    minWidth: width * 0.4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: scaleFont(12),
  },
  icon: {
    marginRight: scaleFont(8),
  },
  title: {
    color: COLORS.secondary,
    fontFamily: 'Roboto-Bold',
    fontSize: scaleFont(18),
  },
});

export default Button;