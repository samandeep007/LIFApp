import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { COLORS, scaleFont } from '../../utils/constants';

const { width } = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Signup');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.text}>Love Is Free</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.secondary,
    fontFamily: 'Roboto-Bold',
    fontSize: scaleFont(24),
  },
});

export default SplashScreen;