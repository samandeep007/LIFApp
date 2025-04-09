import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Dimensions } from 'react-native';
import { scaleFont } from '../utils/constants';

const Stack = createStackNavigator();
const { width } = Dimensions.get('window');

const PlaceholderScreen = ({ name }) => (
  <View className="flex-1 bg-[#000000] justify-center items-center">
    <Text className="text-[#ffffff] font-roboto-bold" style={{ fontSize: scaleFont(24) }}>{name}</Text>
  </View>
);

export const OnboardingNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={PlaceholderScreen} initialParams={{ name: 'Splash Screen' }} />
    <Stack.Screen name="SignupStep1" component={PlaceholderScreen} initialParams={{ name: 'Signup Step 1' }} />
    <Stack.Screen name="SignupStep2" component={PlaceholderScreen} initialParams={{ name: 'Signup Step 2' }} />
    <Stack.Screen name="SignupStep3" component={PlaceholderScreen} initialParams={{ name: 'Signup Step 3' }} />
    <Stack.Screen name="SignupStep4" component={PlaceholderScreen} initialParams={{ name: 'Signup Step 4' }} />
    <Stack.Screen name="VerifyEmail" component={PlaceholderScreen} initialParams={{ name: 'Verify Email' }} />
    <Stack.Screen name="Login" component={PlaceholderScreen} initialParams={{ name: 'Login Screen' }} />
  </Stack.Navigator>
);