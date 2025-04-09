import { StyleSheet, View, Dimensions } from 'react-native';
import { COLORS, scaleFont } from '../../utils/constants';

const { width } = Dimensions.get('window');

const ProgressBar = ({ progress }) => (
  <View style={styles.container}>
    <View style={[styles.progress, { width: `${progress * 100}%` }]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    height: scaleFont(10),
    backgroundColor: '#888888',
    borderRadius: 5,
    marginBottom: scaleFont(20),
    alignSelf: 'center',
  },
  progress: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
});

export default ProgressBar;