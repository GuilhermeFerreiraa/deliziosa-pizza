import { Link } from "expo-router";
import { ExpoRouter } from "../../.expo/types/router";
import { Pressable, Text } from "react-native";

type LinkButtonProps = ExpoRouter.LinkProps<string> & {
  title: string;
};

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <Link asChild {...rest}>
      <Pressable>
        <Text className="text-slate-800 text-center text-base font-body">
          {title}
        </Text>
      </Pressable>
    </Link>
  );
}
