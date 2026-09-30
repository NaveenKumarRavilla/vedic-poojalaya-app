import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../src/theme';

export default function TabLayout() {
 const insets = useSafeAreaInsets();
 return <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.maroon, tabBarInactiveTintColor: colors.subtle, tabBarLabelStyle: { fontSize: 10, fontWeight: '500', marginTop: 1 }, tabBarStyle: { height: 56 + insets.bottom, paddingTop: 7, paddingBottom: Math.max(6, insets.bottom), borderTopColor: colors.line, backgroundColor: colors.paper, elevation: 0 }, sceneStyle: { backgroundColor: colors.cream } }}>
  <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} /> }} />
  <Tabs.Screen name="categories" options={{ title: 'Categories', tabBarIcon: ({ color, size }) => <Feather name="grid" size={size} color={color} /> }} />
  <Tabs.Screen name="orders" options={{ title: 'Orders', tabBarIcon: ({ color, size }) => <Feather name="package" size={size} color={color} /> }} />
  <Tabs.Screen name="wishlist" options={{ title: 'Wishlist', tabBarIcon: ({ color, size }) => <Feather name="heart" size={size} color={color} /> }} />
  <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} /> }} />
 </Tabs>;
}
