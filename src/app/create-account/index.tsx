import { View, Text, TextInput } from 'react-native';
import '@shared/styles/global.css';
import CustomButton from '@shared/components/custom-button';
import { Link } from 'expo-router';

export default function ResetPassword() {
  return (
    <View className='w-full h-full bg-white p-8'>
      <Text className='text-black text-3xl font-semibold'>
        Criar conta
      </Text>
      <Text className='text-black text-lg'>
        Preencha os campos abaixo para criar sua conta.
      </Text>

      <View className="mt-4">
        <TextInput
          placeholder="Nome completo"
          placeholderTextColor="#A1A1A1"
          keyboardType="email-address"
          autoCapitalize="none"
          className="w-full border border-gray-200 rounded-lg p-4 mb-4 text-black"

        />

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
          keyboardType="email-address"
          autoCapitalize="none"
          className="w-full border border-gray-200 rounded-lg p-4 mb-4 text-black"

        />

        <TextInput
          placeholder="Confirme a senha"
          placeholderTextColor="#A1A1A1"
          keyboardType="email-address"
          autoCapitalize="none"
          className="w-full border border-gray-200 rounded-lg p-4 mb-4 text-black"

        />

        <CustomButton label="Criar conta" onPress={() => { }} />

      </View>
    </View>
  );
}
