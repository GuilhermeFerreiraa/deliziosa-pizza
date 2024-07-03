import { Button } from "@/components/button";
import Loading from "@/components/loading";
import { Auth } from "aws-amplify";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Formik } from 'formik';
import { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import * as yup from 'yup';

const img_logo_ = require('@/assets/logo.png');

export default function SignIn() {
 const router = useRouter();
 const { email } = useLocalSearchParams<{ email: string }>();

 const [isLoading, setIsLoading] = useState<boolean>(false);

 const validationSchema = yup.object().shape({
  code: yup.string().required('Por favor, insira o código de verificação.').length(6, 'O código deve ter 6 dígitos.'),
 });

 const handleSubmit = async (values: { code: string }, { resetForm }: { resetForm: () => void }) => {

  setIsLoading(true);
  try {
   if (!email) {
    Alert.alert('Houve um erro inesperado. Tente novamente mais tarde.');
    return;
   }

   await Auth.confirmSignUp(email, values.code);

   router.push('(app)/')

  } catch (err: any) {
   console.error('error: ', err);
   Alert.alert('Houve um erro inesperado. Tente novamente mais tarde.');
  } finally {
   setIsLoading(false);
   resetForm()
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
     <Text className="text-xl text-center font-heading mt-2 text-white">Insira o código de verificação!</Text>
     <Text className="text-sm text-center font-heading mb-4 mt-2 text-white">
      {`Enviamos um código para o seu e-mail\n ${email}.`}
     </Text>
     <Formik
      initialValues={{ code: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
     >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
       <>
        <TextInput
         textContentType='oneTimeCode'
         className='w-[80%] border-slate-200 border-2 bg-slate-100 rounded-lg px-4 py-3 text-sm my-2'
         placeholder="Ex: ######"
         returnKeyType="join"
         keyboardType="number-pad"
         keyboardAppearance="dark"
         secureTextEntry={false}
         onChangeText={handleChange('code')}
         onBlur={handleBlur('code')}
         value={values.code}
        />
        {touched.code && errors.code &&
         <Text className="text-white font-base text-sm">{errors.code}</Text>
        }
        <Button className='w-[80%] bg-secondary rounded-lg mt-8' onPress={handleSubmit as any}>
         <Button.Text>
          Enviar
         </Button.Text>
        </Button>
       </>
      )}
     </Formik>
     <TouchableOpacity onPress={() => router.replace('/')}>
      <Text className='text-white font-subtitle text-base underline mt-4'>
       Voltar para o Login
      </Text>
     </TouchableOpacity>
    </View>
   </Animated.View>
   {isLoading && <Loading />}
  </KeyboardAvoidingView>
 );
}