import { Stack, router } from "expo-router";
import '@shared/styles/global.css';
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from 'expo-font';

import { TouchableOpacity, StatusBar, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PlusJakartaSans_400Regular, PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans';


const Layout = () => {
  const theme = useColorScheme(); // Retorna 'light' ou 'dark'

  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Regular': PlusJakartaSans_400Regular,
    'PlusJakartaSans-Bold': PlusJakartaSans_700Bold,
  });
  return (

    <>
      <StatusBar
        backgroundColor={theme === 'dark' ? '#222' : '#ff5733'}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Stack
        screenOptions={({ route }) => ({
          headerTitle: "",
          headerLeft: ({ canGoBack }) =>
            canGoBack && route.name !== "(tabs)" ? ( // ✅ Verificação da rota (tabs)
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back-outline" size={24} color="#000000" />
              </TouchableOpacity>
            ) : null,
          headerLargeTitleShadowVisible: false,
        })}

      >
        <Stack.Screen name="(public)/index" options={{ headerShown: false }} />
        <Stack.Screen name="/login" />
        <Stack.Screen name="/reset-password" />
        <Stack.Screen name="/create-account" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      </Stack>
    </>

  );
};

export default Layout;
