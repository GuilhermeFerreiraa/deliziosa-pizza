import { Image, Text, View, TouchableOpacity, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Link } from "expo-router";

type HeaderProps = {
  title: string;
  cartQuantity?: number;
};

export default function Header({ title, cartQuantity = 0 }: HeaderProps) {
  return (
    <View className="flex items-center border-b border-slate-700 pb-5 mx-5">
      <View className="w-full flex-row items-center justify-between">
        <Image source={require("@/assets/logo_black.png")} className="h-14 w-14" />
        <Text className="text-gray-800 text-left text-xl font-heading">Bem-vindo(a)!</Text>
        <View className="flex-row gap-x-4 items-center">
          {cartQuantity > 0 && (
            <Link href="/cart" asChild>
              <TouchableOpacity className="relative mb-4" activeOpacity={0.7}>
                <View className="bg-secondary w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
                  <Text className="text-slate-900 font-bol text-xs">
                    {cartQuantity}
                  </Text>
                </View>
                <Feather name="shopping-bag" color={colors.slate[800]} size={24} />
              </TouchableOpacity>
            </Link>
          )}
          <Link href="/" asChild>
            <Pressable>
              <Feather name="log-out" color={colors.slate[800]} size={24} />
            </Pressable>
          </Link>
        </View>
      </View>
      <Text className="text-slate-800 w-full text-left mt-2 text-xl font-heading">{title}</Text>
    </View>
  );
}
