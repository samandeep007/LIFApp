import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { COLORS, scaleFont } from '../../utils/constants';

const { width } = Dimensions.get('window');

const Toast = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.message}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: scaleFont(12),
    borderRadius: 8,
    position: 'absolute',
    bottom: 10,
    width: width * 0.8,
    alignSelf: 'center',
  },
  message: {
    color: COLORS.secondary,
    fontFamily: 'Roboto-Medium',
    fontSize: scaleFont(16),
  },
});

export default Toast; // Ensure default export