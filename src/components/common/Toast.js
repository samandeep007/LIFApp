import { View, Text, Dimensions } from 'react-native';
import { COLORS, scaleFont } from '../../utils/constants';

const { width } = Dimensions.get('window');

const Toast = ({ message }) => (
  <View className="bg-[#feacd0] p-[scaleFont(12)] rounded-[8px] absolute bottom-10 w-[width * 0.8] self-center">
    <Text className="text-[#ffffff] font-roboto-medium" style={{ fontSize: scaleFont(16) }}>{message}</Text>
  </View>
);

export default Toast;