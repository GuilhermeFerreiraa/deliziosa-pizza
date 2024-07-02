import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { forwardRef } from "react";
import { formatCurrency } from "@/utils/functions/format-currency";

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
      >
        <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />
        <View className="flex-1 ml-3">
          <View className="flex-row items-center">
            <Text numberOfLines={1} className="text-slate-900 w-full flex-1 font-subtitle text-base">
              {data.title}
            </Text>
             <Text className="text-slate-800 font-subtitle text-xs">
              {data.price ? formatCurrency(data.price) : 'R$0,00'}
            </Text>
          </View>
            {data.quantity && (
              <Text className="text-slate-800 font-subtitle text-sm">
                x{data.quantity}
              </Text>
            )}

          <Text className="text-slate-800 text-xs leading-5 mt-0.5">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);

export default Product;
