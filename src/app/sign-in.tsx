import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, Platform, Text, TextInput, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import colors from "tailwindcss/colors";

const img_logo_ = require('@/assets/logo.png');

export default function SignIn() {
 const router = useRouter();
 const [Email, setEmail] = useState<string>('');
 const [password, setPassword] = useState<string>('');

 const signIn = async () => {
  if (!Email) {
   Alert.alert('Houve um erro!', 'O campo de e-mail é obrigatório')
   return;
  } else if (!password) {
   Alert.alert('Houve um erro!', 'A senha é obrigatória');
   return;
  }

  try {
   // await Auth.signIn(Email, password);
   router.replace('(app)');
  } catch (error) {
   console.error('error signing in', error);
  }
 };

 return (
  <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'ios' ? "padding" : "height"}>
   <Animated.View entering={FadeInUp.delay(300)} className="flex-1 bg-primary">
    <View className="flex-1 flex-col items-center justify-center">
     <Image
      source={img_logo_}
      className="w-32 h-32 mb-4"
     />
     <TextInput
      textContentType='oneTimeCode'
      className='w-3/4 border-slate-200 border-2 bg-slate-100 rounded-lg px-4 py-3 text-sm my-2'
      placeholder="E-mail"
      keyboardType="email-address"
      keyboardAppearance="dark"
      returnKeyType="next"
      secureTextEntry={false}
      onChangeText={setEmail}
      value={Email}
     />
     <TextInput
      placeholder="Senha"
      onChangeText={setPassword}
      value={password}
      returnKeyType="join"
      returnKeyLabel="Entrar"
      keyboardAppearance="dark"
      keyboardType="default"
      secureTextEntry
      onSubmitEditing={signIn}
      className='w-3/4 border-slate-200 border-2 bg-slate-100 rounded-lg px-4 py-3 font-body text-sm'
     />
     <Button className='w-[50%] bg-secondary rounded-lg mt-8' onPress={signIn}>
      <Button.Icon>
       <Feather name="log-in" color={colors.white} size={24} />
      </Button.Icon>
      <Button.Text>
       Entrar
      </Button.Text>
     </Button>
     <Text className="text-white font-body mt-4">
      Não tem uma conta? <Link href='/'><Text className="underline font-subtitle">Registre-se</Text></Link>
     </Text>
    </View>
   </Animated.View>
  </KeyboardAvoidingView>
 )
}