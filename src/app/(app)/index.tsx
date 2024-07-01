import CategoryButton from "@/components/category-button";
import Header from "@/components/header";
import Product from "@/components/product";
import { useCartStore } from "@/stores/cart-store";
import { CATEGORIES, MENU, ProductProps } from "@/utils/data/products";
import { Link } from "expo-router";
import { useRef, useState } from "react";
import { FlatList, SectionList, Text, View } from "react-native";

export default function Home() {
  const cartStore = useCartStore();
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const sectionlistRef = useRef<SectionList<ProductProps>>(null);

  const cartQuantityItems = cartStore.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const handleCategorySelected = (seletedCategory: string) => {
    setCategory(seletedCategory);

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === seletedCategory
    );

    if (sectionlistRef.current) {
      sectionlistRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      });
    }
  };

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantity={cartQuantityItems} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(i) => i}
        horizontal
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelected(item)}
          />
        )}
      />

      <SectionList
        ref={sectionlistRef}
        sections={MENU}
        keyExtractor={(i) => i.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-white font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}
