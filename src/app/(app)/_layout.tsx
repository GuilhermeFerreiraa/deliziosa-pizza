import { Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";


export default function Layout() {
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
    <Stack.Screen
     name="index"
     options={{
      headerShown: false
     }}
    />
    <Stack.Screen
     name="cart"
     options={{
      headerShown: false
     }}
    />
   </Stack>
  </SafeAreaView>
 )
}