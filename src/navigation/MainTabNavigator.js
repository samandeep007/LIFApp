import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { COLORS, ICONS, scaleFont } from '../utils/constants';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

const PlaceholderScreen = ({ name }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{name}</Text>
  </View>
);

export const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: COLORS.background,
        height: width * 0.08,
        paddingBottom: 5,
      },
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Roboto-Bold',
    fontSize: scaleFont(24),
  },
});