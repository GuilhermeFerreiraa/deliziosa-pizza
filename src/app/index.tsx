import { Button } from "@/components/button";
import { Link, useRouter } from "expo-router";
import { Image, ImageBackground, Text } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const img_background_ = require('@/assets/background.png');
const img_logo_ = require('@/assets/logo.png');

export default function Login() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/sign-in')
  }

  return (
    <ImageBackground
      className="flex-1 items-center justify-center"
      source={img_background_}
    >
      <Animated.View className="flex-1 items-center justify-center" entering={FadeInDown.delay(300)}>
        <Image
          source={img_logo_}
          className="w-32 h-32"
        />
        <Button className='px-12 bg-secondary rounded-xl mt-10' onPress={handleSignIn}>
          <Button.Text>
            Acessar minha conta
          </Button.Text>
        </Button>

        <Text className='text-white my-1 text-base font-body'>
          ou
        </Text>
        <Text className='text-white text-base font-body'>
          Entrar {" "}
          <Link className='underline font-subtitle' href='(app)'>
            sem cadastro
          </Link>
        </Text>
      </Animated.View>
    </ImageBackground>
  );
}
