import { View, Text, TextInput } from 'react-native';
import '@shared/styles/global.css';
import CustomButton from '@shared/components/custom-button';
import { Link, router } from 'expo-router';

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
        <TextInput
          placeholder="Email"
          placeholderTextColor="#A1A1A1"
          keyboardType="email-address"
          autoCapitalize="none"
          className="w-full border border-gray-200 rounded-lg p-4 mb-4 text-black"

        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#A1A1A1"
          secureTextEntry
          className="w-full border border-gray-200 rounded-lg p-4 mb-6 text-black"
        />

        <CustomButton label="Acessar" onPress={() => router.replace("/home")} />

        <CustomButton className="mt-4 bg-base" label="Redefinir senha" onPress={() => router.push("/reset-password")} />

        <Link href={"/create-account"} className="text-center mt-8 text-gray-500">
          Não possui conta? Crie agora!
        </Link>

      </View>
    </View>
  );
}
