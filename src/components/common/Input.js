import { StyleSheet, TextInput, Dimensions } from 'react-native';
import { COLORS, scaleFont } from '../../utils/constants';

const { width } = Dimensions.get('window');

const Input = ({ placeholder, onChangeText, value, secureTextEntry, style }) => (
  <TextInput
    placeholder={placeholder}
    placeholderTextColor="#ffffff80"
    onChangeText={onChangeText}
    value={value}
    secureTextEntry={secureTextEntry}
    style={[styles.input, style]}
  />
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderOpacity: 0.2,
    borderRadius: 4,
    color: COLORS.secondary,
    fontSize: scaleFont(16),
    padding: scaleFont(12),
    marginBottom: scaleFont(16),
  },
});

export default Input;