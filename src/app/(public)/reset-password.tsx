import { View, Text, TextInput } from 'react-native';
import '@shared/styles/global.css';
import CustomButton from '@shared/components/CustomButton';
import { Link } from 'expo-router';
import TextFieldController from '@shared/components/TextFieldController';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function ResetPassword() {
  const fromSchema = yup.object({
    email: yup
      .string()
      .email("Por favor, digite um email válido!")
      .required("O campo email é obrigatório!"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(fromSchema)
  });

  const submit = () => {

    console.log('ON SUBMIT ');
  };

  return (
    <View className='w-full h-full bg-white p-8'>
      <Text className='text-black text-3xl font-semibold'>
        Redefinir senha
      </Text>
      <Text className='text-black text-lg mb-4'>
        Definir seu e-mail para redefinir a senha.
      </Text>

      <View className='mb-4'>
        <TextFieldController
          control={control}
          name="email"
          placeholder="Email"
          errors={errors}
          props={{
            keyboardType: "email-address"
          }}
        />
      </View>

      <CustomButton label="Enviar" onPress={handleSubmit(submit)} />
    </View>
  );
}
