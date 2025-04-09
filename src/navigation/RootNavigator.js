import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingNavigator } from './OnboardingNavigator';
import { MainTabNavigator } from './MainTabNavigator';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Main" component={MainTabNavigator} />
      ) : (
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
      )}
    </Stack.Navigator>
  );
};