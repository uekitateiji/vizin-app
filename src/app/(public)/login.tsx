import { View, Text, TextInput } from 'react-native';
import '@shared/styles/global.css';
import CustomButton from '@shared/components/CustomButton';
import { Link, router } from 'expo-router';
import CustomTextInput from '@shared/components/CustomTextInput';
export default function Login() {
  return (
    <View className='w-full h-full bg-white p-8'>
      <Text className='text-black text-3xl font-semibold'>
        Fazer login
      </Text>
      <Text className='text-black text-lg'>
        Bem vindo, vizin!
      </Text>

      <View className="mt-4">
        <View className='mb-4'>
          <CustomTextInput
            placeholder={"Email"}
            keyboardType="email-address" />
        </View>

        <View className='mb-4'>
          <CustomTextInput
            placeholder={"Senha"}
          />
        </View>

        <CustomButton
          label="Acessar"
          onPress={() => router.replace("/home")} />

        <CustomButton
          label="Redefinir senha"
          className="mt-4 bg-itemBackground"
          variant="disable"
          onPress={() => router.push("(public)/reset-password")} />

        <Link href={"/create-account"} className="text-center mt-8 text-gray-500">
          Não possui conta? Crie agora!
        </Link>

      </View>
    </View>
  );
}
