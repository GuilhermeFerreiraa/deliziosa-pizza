import { Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";

import {
 Inter_400Regular,
 Inter_500Medium,
 Inter_600SemiBold,
 Inter_700Bold,
} from '@expo-google-fonts/inter';
import { useFonts } from "expo-font";
import Loading from "@/components/loading";

import { Amplify } from 'aws-amplify';
import awsconfig from '@/aws-exports';
Amplify.configure(awsconfig);

export const unstable_settings = {
 initialRouteName: 'index',
};

const RootLayout = () => {

 const [fontsLoaded] = useFonts({
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
 });

 if (!fontsLoaded) {
  return <Loading />
 }

 return (
  <SafeAreaView className="flex-1 bg-[#BF0A25]">
   <StatusBar animated barStyle="light-content" />
   <Stack
    initialRouteName="index"
    screenOptions={{
     headerShown: false,
     animation: 'fade_from_bottom',
     presentation: "card"
    }}
   >
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="sign-in" options={{ headerShown: false }} />
    <Stack.Screen name="sign-up" options={{ headerShown: false, }} />
    <Stack.Screen name="confirm-code" options={{ headerShown: false }} />
   </Stack>
  </SafeAreaView>
 )
}

export default RootLayout;