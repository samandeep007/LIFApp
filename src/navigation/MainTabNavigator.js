import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { View, Text, Dimensions } from 'react-native';
import { COLORS, ICONS, scaleFont } from '../utils/constants';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

const PlaceholderScreen = ({ name }) => (
  <View className="flex-1 bg-[#000000] justify-center items-center">
    <Text className="text-[#ffffff] font-roboto-bold" style={{ fontSize: scaleFont(24) }}>{name}</Text>
  </View>
);

export const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: { backgroundColor: COLORS.background, height: width * 0.08, paddingBottom: 5 },
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.secondary,
    }}
  >
    <Tab.Screen
      name="Home"
      component={PlaceholderScreen}
      initialParams={{ name: 'Home Screen' }}
      options={{ tabBarIcon: ({ color }) => <Feather name="home" size={ICONS.size} color={color} /> }}
    />
    <Tab.Screen
      name="Inbox"
      component={PlaceholderScreen}
      initialParams={{ name: 'Inbox Screen' }}
      options={{ tabBarIcon: ({ color }) => <Feather name="message-circle" size={ICONS.size} color={color} /> }}
    />
    <Tab.Screen
      name="Calls"
      component={PlaceholderScreen}
      initialParams={{ name: 'Calls Screen' }}
      options={{ tabBarIcon: ({ color }) => <Feather name="phone" size={ICONS.size} color={color} /> }}
    />
    <Tab.Screen
      name="Profile"
      component={PlaceholderScreen}
      initialParams={{ name: 'Profile Screen' }}
      options={{ tabBarIcon: ({ color }) => <Feather name="user" size={ICONS.size} color={color} /> }}
    />
  </Tab.Navigator>
);