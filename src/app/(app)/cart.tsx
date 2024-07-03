import { Alert, ScrollView, Text, View } from "react-native";

import Header from "@/components/header";
import Input from "@/components/input";
import Product from "@/components/product";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";
import { ProductCartProps, useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Entypo, Feather } from "@expo/vector-icons";
import clsx from "clsx";
import { useNavigation } from "expo-router";
import { useState } from "react";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import colors from "tailwindcss/colors";

export default function Cart() {
  const cartStore = useCartStore();
  const navigation = useNavigation();

  const [address, setAddress] = useState<string>("");

  const total = formatCurrency(
    cartStore.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  );

  const handleProductRemove = (product: ProductCartProps) => {
    Alert.alert("Remover", `Deseja remover ${product.title} do carrinho?`, [
      {
        text: "Cancelar",
      },
      {
        text: "Remover",
        onPress: () => cartStore.remove(product.id),
      },
    ]);
  };

  const handleToOrder = () => {
    if (address.trim().length === 0) {
      return Alert.alert("Pedido", "Informe os dados da entrega.");
    }

    const products = cartStore.products
      .map((product) => `\n${product.quantity}x ${product.title}`)
      .join("");

    const message = `
    🍔 NOVO PEDIDO 
        \n Entregar em: ${address}
        ${products}
        \n Valor total: ${total}
      `;
    cartStore.clear();
    navigation.goBack();

    Alert.alert("Sucesso", "Seu pedido já foi enviado e está sendo preparado!\n" + message);
  };

  return (
    <Animated.View entering={FadeInDown.delay(300)} className="flex-1 pt-8">
      <Header title="Seu carrinho" />
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View className={clsx("p-5 flex-1", cartStore.products.length == 0 && ' items-center justify-center')}>
            {cartStore.products.length > 0 ? (
              <View className="border-b border-slate-800">
                {cartStore.products.map((product) => (
                  <Product
                    key={product.id}
                    data={product}
                    onPress={() => handleProductRemove(product)}
                  />
                ))}
                <View className="flex-row gap-2 items-center mt-5 mb-4">
                  <Text className="text-slate-800 text-xl font-heading">Total:</Text>

                  <Text className="text-primary text-2xl font-heading">
                    {total}
                  </Text>
                </View>

                <Input
                  blurOnSubmit={true}
                  onChangeText={setAddress}
                  onSubmitEditing={handleToOrder}
                  returnKeyType="next"
                  placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento"
                />
              </View>
            ) : (
              <Animated.View entering={FadeInDown.delay(300)} className="flex-col justify-center items-center">
                <Entypo name="emoji-sad" color={colors.slate[500]} size={24} />
                <Text className="font-heading text-slate-500 text-center text-base mr-2">
                  Seu carrinho está vazio.
                </Text>
              </Animated.View>
            )}
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>


      <Animated.View exiting={FadeOutDown.delay(300)} className="p-5 gap-5">
        {cartStore.products.length > 0 && (
          <Button onPress={handleToOrder}>
            <Button.Text>Enviar pedido</Button.Text>
            <Button.Icon>
              <Feather name="chevron-right" size={24} color={colors.white} />
            </Button.Icon>
          </Button>
        )}

        <LinkButton title="Voltar ao cardápio" href="/(app)" />
      </Animated.View>
    </Animated.View>
  );
}
