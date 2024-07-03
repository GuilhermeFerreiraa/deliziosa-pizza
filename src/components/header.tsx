import { Feather } from "@expo/vector-icons";
import { Auth } from "aws-amplify";
import { Link, useRouter } from "expo-router";
import { Alert, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

type HeaderProps = {
  title: string;
  cartQuantity?: number;
};

export default function Header({ title, cartQuantity = 0 }: HeaderProps) {
  const router = useRouter();


  const logOut = () => {
    Alert.alert(
      'Confirmar Logout',
      'Tem certeza que deseja sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: async () => {
            await Auth.signOut();
            router.replace('/')
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View testID="header-container" className="flex items-center border-b border-slate-700 pb-5 mx-5">
      <View className="w-full flex-row items-center justify-between">
        <Image
          source={require("@/assets/logo_black.png")}
          className="h-14 w-14"
        />
        <Text testID="header-welcome-text" className="text-gray-800 text-left text-xl font-heading">
          Bem-vindo(a)!
        </Text>
        <View
          className="flex-row gap-x-4 items-center">
          {cartQuantity > 0 && (
            <Link href="/cart" asChild>
              <TouchableOpacity className="relative mb-4" activeOpacity={0.7}>
                <View className="bg-secondary w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
                  <Text testID="cart-quantity" className="text-slate-900 font-bol text-xs">
                    {cartQuantity}
                  </Text>
                </View>
                <Feather name="shopping-bag" color={colors.slate[800]} size={24} />
              </TouchableOpacity>
            </Link>
          )}
          <Pressable onPress={logOut} testID="logout-button">
            <Feather name="log-out" color={colors.slate[800]} size={24} />
          </Pressable>
        </View>
      </View>
      <Text testID="header-title" className="text-slate-800 w-full text-left mt-2 text-xl font-heading">
        {title}
      </Text>
    </View>
  );
}
