import { View, Text, TextInput } from 'react-native';
import '@shared/styles/global.css';
import CustomButton from '@shared/components/CustomButton';
import { Link } from 'expo-router';
import CustomTextInput from '@shared/components/CustomTextInput';
export default function ResetPassword() {
  return (
    <View className='w-full h-full bg-white p-8'>
      <Text className='text-black text-3xl font-semibold'>
        Redefinir senha
      </Text>
      <Text className='text-black text-lg mb-4'>
        Definir seu e-mail para redefinir a senha.
      </Text>

      <View className='mb-4'>
        <CustomTextInput
          placeholder={"Email"}
          keyboardType="email-address" />
      </View>

      <CustomButton label="Enviar" onPress={() => { }} />
    </View>
  );
}
