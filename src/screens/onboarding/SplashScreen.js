import { View, Text, Dimensions } from 'react-native';
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
    <View className="flex-1 bg-[#000000] items-center justify-center">
      <StatusBar style="light" />
      <Text className="text-[#ffffff] font-roboto-bold" style={{ fontSize: scaleFont(24) }}>
        Love Is Free
      </Text>
    </View>
  );
};

export default SplashScreen;