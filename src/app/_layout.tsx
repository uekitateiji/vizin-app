import { ClerkProvider } from '@clerk/clerk-expo'
import { SplashScreen, Stack } from "expo-router";
import '@shared/styles/global.css';
import { tokenCache } from '@shared/utils/cache';
import { LogBox } from "react-native";
import { useFonts, PlusJakartaSans_400Regular, PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans';
import { useEffect } from 'react';

const clerkPublishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) {
  throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
}

LogBox.ignoreLogs(['Clerk: Clerk has been loaded with development keys']);

const InitialLayout = () => {

  const [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_700Bold,
  });

  useEffect(() => {
    SplashScreen.hideAsync();
  }, [fontsLoaded])

  return (
    <Stack
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(public)" />
    </Stack>
  )
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey!} tokenCache={tokenCache}>
      <InitialLayout />
    </ClerkProvider>
  )
}


export default RootLayout;
