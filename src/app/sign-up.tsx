import { Button } from "@/components/button";
import Loading from "@/components/loading";
import { Auth } from "aws-amplify";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import colors from "tailwindcss/colors";
import * as Yup from "yup";

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
};

const img_logo_ = require('@/assets/logo.png');

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, '*Muito curto!')
    .max(50, '*Muito longo!')
    .required('*Obrigatório'),
  email: Yup.string()
    .email('*Email inválido')
    .required('*Obrigatório'),
  password: Yup.string()
    .min(8, '*Muito curto!')
    .required('*Obrigatório'),
});

export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues: SignUpParameters = {
    username: '',
    password: '',
    email: ''
  };

  const handleSubmit = async (values: SignUpParameters, { resetForm }: { resetForm: () => void }) => {
    setIsLoading(true);

    try {
      await Auth.signUp({
        password: values.password,
        username: values.email,
        attributes: {
          name: values.email,
        },
        autoSignIn: {
          enabled: true
        },
      });

      Alert.alert('Conta criada com êxito. Por favor, confirme seu email.');

      router.push('confirm-code');
      router.setParams({ email: values.email, name: values.username });

      setIsLoading(false);
    } catch (err: any) {
      if (err.code === 'UserNotConfirmedException') {
        Alert.alert('Por favor, confirme seu email antes de fazer login.');
      } else {
        Alert.alert('Houve um erro inesperado. Tente novamente mais tarde.');
      }

      setIsLoading(false);
    }

    resetForm();
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'ios' ? "padding" : "height"}>
      <Animated.View entering={FadeInUp.delay(300)} className="flex-1 bg-primary">
        <View className="flex-1 flex-col items-center justify-center">
          <Image
            source={img_logo_}
            className="w-32 h-32 mb-4"
          />
          <Text className="text-xl text-center font-heading my-4 text-white">Vamos criar sua conta?</Text>
          <Formik
            initialValues={initialValues}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View className="w-[80%]">
                {touched.username && errors.username &&
                  <Text className="text-white font-base text-sm">{errors.username}</Text>
                }
                <TextInput
                  textContentType='oneTimeCode'
                  className='border-slate-200 border-2 bg-slate-100 rounded-lg px-4 py-3 text-sm mt-2'
                  placeholder="Ex: Joao da Silva"
                  keyboardType="default"
                  placeholderTextColor={colors.slate[400]}
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  secureTextEntry={false}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
                {touched.email && errors.email &&
                  <Text className="text-white font-base text-sm">{errors.email}</Text>
                }
                <TextInput
                  textContentType='oneTimeCode'
                  className='border-slate-200 border-2 bg-slate-100 rounded-lg px-4 py-3 text-sm my-2'
                  placeholder="Ex: teste@teste.teste"
                  keyboardType="email-address"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  secureTextEntry={false}
                  placeholderTextColor={colors.slate[400]}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {touched.password && errors.password &&
                  <Text className="text-white font-base text-sm">{errors.password}</Text>
                }
                <TextInput
                  textContentType='oneTimeCode'
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  returnKeyType="done"
                  placeholderTextColor={colors.slate[400]}
                  returnKeyLabel="Entrar"
                  keyboardAppearance="dark"
                  keyboardType="default"
                  secureTextEntry
                  placeholder="********"
                  className='border-slate-200 border-2 bg-slate-100 rounded-lg px-4 py-3 font-body text-sm'
                />


                <Button className='bg-secondary rounded-lg mt-8' onPress={handleSubmit as any}>
                  <Button.Text>
                    Criar conta
                  </Button.Text>
                </Button>
              </View>
            )}
          </Formik>
          <TouchableOpacity onPress={router.back}>
            <Text className='text-white font-subtitle text-base underline mt-4'>
              Voltar
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      {isLoading && <Loading />}
    </KeyboardAvoidingView >
  );
}
