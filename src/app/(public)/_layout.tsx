import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, useColorScheme } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
const PublicLayout = () => {
  const theme = useColorScheme();

  return (
    <>
      <StatusBar
        backgroundColor={theme === 'dark' ? '#222' : '#ff5733'}

      />
      <Stack
        screenOptions={({ route }) => ({
          headerTitle: "",
          headerShown: false,
          headerLeft: ({ canGoBack }) =>
            canGoBack && route.name !== "(tabs)" ? ( // ✅ Verificação da rota (tabs)
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back-outline" size={24} color="#000000" />
              </TouchableOpacity>
            ) : null,
          headerLargeTitleShadowVisible: false,
        })}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" options={{ headerShown: true }} />
        <Stack.Screen name="reset-password" options={{ headerShown: true }} />
        <Stack.Screen name="create-account" options={{ headerShown: true }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  )
};

export default PublicLayout;