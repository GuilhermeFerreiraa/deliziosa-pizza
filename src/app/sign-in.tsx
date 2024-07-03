import { Button } from "@/components/button";
import Loading from "@/components/loading";
import { Feather } from "@expo/vector-icons";
import { Auth } from 'aws-amplify';
import { Link, useRouter } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, Platform, Text, TextInput, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import colors from "tailwindcss/colors";
import * as Yup from 'yup';

const img_logo_ = require('@/assets/logo.png');

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('*Email inválido')
    .required('*Obrigatório'),
  password: Yup.string()
    .min(8, '*Muito curto!')
    .required('*Obrigatório'),
});

export default function SignIn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (values: { email: string, password: string }, { resetForm }: { resetForm: () => void }) => {
    setIsLoading(true);
    try {
      await SignInSchema.validate(values, { abortEarly: false });

      const res = await Auth.signIn(values.email, values.password);

      router.push('(app)');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        Alert.alert('Por favor, verifique os campos.', err.errors.join('\n'));
      } else {
        Alert.alert('Essas credenciais não estão corretas. Por favor, verifique os dados e tente novamente.');
        console.log('error: ', err);
      }
    } finally {
      setIsLoading(false);
      resetForm();
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
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={SignInSchema}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View className="w-[80%]">
                {errors.email && touched.email && (
                  <Text className="text-white font-base text-sm">{errors.email}</Text>
                )}
                <TextInput
                  textContentType='oneTimeCode'
                  className='border-slate-200 border-2 bg-slate-100 rounded-lg px-4 py-3 text-sm my-2'
                  placeholder="E-mail"
                  placeholderTextColor={colors.slate[400]}
                  keyboardType="email-address"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  secureTextEntry={false}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />

                {errors.password && touched.password && (
                  <Text className="text-white font-base text-sm">{errors.password}</Text>
                )}
                <TextInput
                  placeholder="Senha"
                  placeholderTextColor={colors.slate[400]}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  returnKeyType="join"
                  returnKeyLabel="Entrar"
                  keyboardAppearance="dark"
                  keyboardType="default"
                  secureTextEntry
                  className='border-slate-200 border-2 bg-slate-100 rounded-lg px-4 py-3 font-body text-sm'
                />

                <Button className='bg-secondary rounded-lg mt-8' onPress={handleSubmit as any}>
                  <Button.Icon>
                    <Feather name="log-in" color={colors.white} size={24} />
                  </Button.Icon>
                  <Button.Text>
                    Entrar
                  </Button.Text>
                </Button>
              </View>
            )}
          </Formik>

          <Text className="text-white font-body mt-4">
            Não tem uma conta? <Link href='sign-up'><Text className="underline font-subtitle">Registre-se</Text></Link>
          </Text>
        </View>
      </Animated.View>
      {isLoading && <Loading />}
    </KeyboardAvoidingView>
  );
}
