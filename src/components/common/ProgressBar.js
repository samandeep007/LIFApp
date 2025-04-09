import { View, Dimensions } from 'react-native';
import { ProgressBar as RNProgressBar } from '@react-native-community/progress-bar-android';
import { COLORS, scaleFont } from '../../utils/constants';

const { width } = Dimensions.get('window');

const ProgressBar = ({ progress }) => (
  <View className="w-[width * 0.8] mb-[scaleFont(20)] self-center">
    <RNProgressBar
      styleAttr="Horizontal"
      indeterminate={false}
      progress={progress} // 0 to 1 (e.g., 0.25 for 25%)
      color={COLORS.primary}
      style={{ height: scaleFont(10) }}
    />
  </View>
);

export default ProgressBar;