import { TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { triggerHaptic } from '../../utils/haptics';
import { COLORS, scaleFont, ICONS } from '../../utils/constants';

const { width } = Dimensions.get('window');

const IconButton = ({ icon, onPress, color }) => (
  <TouchableOpacity
    onPressIn={() => triggerHaptic('Medium')}
    onPress={onPress}
    className="rounded-full p-[scaleFont(12)]"
    style={{ backgroundColor: color }}
  >
    <Feather name={icon} size={ICONS.size} color={COLORS.secondary} />
  </TouchableOpacity>
);

export default IconButton;