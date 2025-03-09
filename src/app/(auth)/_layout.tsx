import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#456EFE',
                tabBarInactiveTintColor: 'gray',
            }} >

            <Tabs.Screen
                name="home"
                options={{
                    title: "Inicio",
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
                    ),
                }} />



        </Tabs >
    );
}
