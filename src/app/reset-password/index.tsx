import { View, Text, TextInput } from 'react-native';
import '@shared/styles/global.css';
import CustomButton from '@shared/components/custom-button';
import { Link } from 'expo-router';

export default function ResetPassword() {
  return (
    <View className='w-full h-full bg-white p-8'>
      <Text className='text-black text-3xl font-semibold'>
        Redefinir senha
      </Text>
      <Text className='text-black text-lg'>
        Definir seu e-mail para redefinir a senha.
      </Text>

      <View className="mt-4">
        <TextInput
          placeholder="Email"
          placeholderTextColor="#A1A1A1"
          keyboardType="email-address"
          autoCapitalize="none"
          className="w-full border border-gray-200 rounded-lg p-4 mb-4 text-black"

        />

        <CustomButton label="Enviar" onPress={() => { }} />

      </View>
    </View>
  );
}
