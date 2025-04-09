import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import HomeScreen from '../screens/main/HomeScreen';
import InboxScreen from '../screens/main/InboxScreen';
import ChatScreen from '../screens/main/ChatScreen';
import CallScreen from '../screens/main/CallScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import MaybeLikesScreen from '../screens/main/MaybeLikesScreen';
import { Dimensions } from 'react-native';
import { COLORS, ICONS } from '../utils/constants';

const { width } = Dimensions.get('window');
const Tab = createBottomTabNavigator();

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
      component={HomeScreen}
      options={{ tabBarIcon: ({ color }) => <Feather name="home" size={ICONS.size} color={color} /> }}
    />
    <Tab.Screen
      name="Inbox"
      component={InboxScreen}
      options={{ tabBarIcon: ({ color }) => <Feather name="message-circle" size={ICONS.size} color={color} /> }}
    />
    <Tab.Screen
      name="Calls"
      component={CallScreen}
      options={{ tabBarIcon: ({ color }) => <Feather name="phone" size={ICONS.size} color={color} /> }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ tabBarIcon: ({ color }) => <Feather name="user" size={ICONS.size} color={color} /> }}
    />
    <Tab.Screen
      name="MaybeLikes"
      component={MaybeLikesScreen}
      options={{ tabBarIcon: ({ color }) => <Feather name="star" size={ICONS.size} color={color} /> }}
    />
  </Tab.Navigator>
);