import { Image, Text, View, TouchableOpacity } from "react-native";
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
        <Image source={require("@/assets/logo.png")} className="h-16 w-16" />
        <Text className="text-white text-left text-base font-body">Bem-vindo(a)!</Text>
        <View className="flex-row gap-x-4 items-center">
          {cartQuantity > 0 && (
            <Link href="/cart" asChild>
              <TouchableOpacity className="relative mb-4" activeOpacity={0.7}>
                <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
                  <Text className="text-slate-900 font-bol text-xs">
                    {cartQuantity}
                  </Text>
                </View>
                <Feather name="shopping-bag" color={colors.white} size={24} />
              </TouchableOpacity>
            </Link>
          )}
          <Link href="(login)/" asChild>
            <Feather name="log-out" color={colors.white} size={24} />
          </Link>
        </View>
      </View>
      <Text className="text-white w-full text-left mt-2 text-xl font-heading">{title}</Text>
    </View>
  );
}
