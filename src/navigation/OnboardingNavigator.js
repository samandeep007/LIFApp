import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/onboarding/SplashScreen';
import SignupScreen from '../screens/onboarding/Signup/SignupScreen';
import VerifyEmailScreen from '../screens/onboarding/VerifyEmailScreen';
import LoginScreen from '../screens/onboarding/LoginScreen';

const Stack = createStackNavigator();

export const OnboardingNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);