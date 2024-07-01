import { ActivityIndicator, View } from "react-native";
import colors from 'tailwindcss/colors'

export default function Loading() {
 return (
  <View className="flex-1 items-center justify-center bg-gray-50">
   <ActivityIndicator color={colors.white} />
  </View>
 )
}