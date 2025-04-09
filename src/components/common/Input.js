import { TextInput, Dimensions } from 'react-native';
import { COLORS, scaleFont } from '../../utils/constants';

const { width } = Dimensions.get('window');

const Input = ({ placeholder, onChangeText, value, secureTextEntry, style }) => (
  <TextInput
    placeholder={placeholder}
    placeholderTextColor="#ffffff80"
    onChangeText={onChangeText}
    value={value}
    secureTextEntry={secureTextEntry}
    className="w-full border-[#ffffff] border-opacity-20 rounded-[4px] text-[#ffffff] p-[scaleFont(12)] mb-[scaleFont(16)]"
    style={{ fontSize: scaleFont(16), ...style }}
  />
);

export default Input;