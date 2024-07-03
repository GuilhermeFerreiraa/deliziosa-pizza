import { formatCurrency } from "@/utils/functions/format-currency";
import { forwardRef } from "react";
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type ProductDataProps = {
  title: string;
  description: string;
  thumbnail: ImageProps;
  quantity?: number;
  price?: number;
};

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps;
};

const Product = forwardRef<TouchableOpacity, ProductProps>(
  ({ data, ...rest }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        className="w-full flex-row items-center pb-4 bg-white p-2 rounded-md mb-2"
        {...rest}
        testID="product-component"
      >
        <Image
          source={data.thumbnail}
          className="w-20 h-20 rounded-md"
          testID="product-thumbnail"
        />
        <View className="flex-1 ml-3">
          <View className="flex-row items-center">
            <Text numberOfLines={1} className="text-slate-900 w-full flex-1 font-subtitle text-base" testID="product-title">
              {data.title}
            </Text>
            <Text className="text-slate-800 font-subtitle text-xs" testID="product-price">
              {data.price ? formatCurrency(data.price) : 'R$0,00'}
            </Text>
          </View>
          {data.quantity && (
            <Text className="text-slate-800 font-subtitle text-sm" testID="product-quantity">
              x{data.quantity}
            </Text>
          )}
          <Text className="text-slate-800 text-sm leading-5 mt-0.5" testID="product-description">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);

export default Product;
