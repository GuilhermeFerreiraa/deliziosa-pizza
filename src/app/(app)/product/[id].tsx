import { Image, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/link-button";
import { useCartStore } from "@/stores/cart-store";
import { Redirect } from "expo-router";
import Animated, { FadeInDown, FadeInLeft, FadeInUp, FadeOut, FadeOutUp, SlideInLeft } from "react-native-reanimated";
import colors from "tailwindcss/colors";

export default function Product() {
  const { id } = useLocalSearchParams();
  const cartStore = useCartStore();
  const navigation = useNavigation();

  const product = PRODUCTS.find((item) => item.id === id);

  const handleAddToCart = () => {
    if (product) {
      cartStore.add(product);
      navigation.goBack();
    }
  };

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <Animated.View entering={FadeInDown.delay(300)} className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="p-5 mt-4 flex-1">
        <Text className="text-primary text-xl font-heading">{product.title}</Text>
        <Text className="text-slate-800 text-2xl font-heading my-2">
          {formatCurrency(product.price)}
        </Text>

        <Animated.ScrollView className='flex-1' alwaysBounceVertical={false}>
          <Text className="text-slate-800 font-body text-base leading-6 mb-6">
            {product.description}
          </Text>

          {product.ingredients.map((item) => (
            <Text
              key={item}
              className="text-slate-800 font-body text-base leading-6"
            >
              {"\u2022"} {item}
            </Text>
          ))}
        </Animated.ScrollView>
      </View>

      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus-circle" color={colors.white} size={20} />
          </Button.Icon>

          <Button.Text>Adicionar ao pedido</Button.Text>
        </Button>
        <LinkButton title="Voltar ao cardápio" href="/(app)" />
      </View>
    </Animated.View>
  );
}
