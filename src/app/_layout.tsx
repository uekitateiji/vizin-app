import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
import { Stack, useRouter, useSegments } from "expo-router";
import '@shared/styles/global.css';
import { tokenCache } from '@shared/utils/cache';
import { LogBox } from "react-native";
import { useEffect } from 'react';

const clerkPublishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) {
  throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
}

LogBox.ignoreLogs(['Clerk: Clerk has been loaded with development keys']);

const InitialLayout = () => {

  // const { isLoaded, isSignedIn } = useAuth();
  // const segments = useSegments();
  // const router = useRouter();

  // useEffect(() => {

  //   console.log('~ isLoaded ~', isLoaded);


  // }, [isLoaded]);

  return (
    <Stack
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(public)" />
    </Stack>
  )
}

const RootLayout = () => {
  console.log("clerkPublishableKey", clerkPublishableKey);
  return (
    // <ClerkProvider publishableKey={clerkPublishableKey} tokenCache={tokenCache}>
    <InitialLayout />
    // </ClerkProvider>
  )
}


export default RootLayout;
