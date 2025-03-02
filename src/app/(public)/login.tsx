import { View, Text, TextInput } from 'react-native';
import '@shared/styles/global.css';
import CustomButton from '@shared/components/CustomButton';
import { Link, router } from 'expo-router';
import TextFieldController from '@shared/components/TextFieldController';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login() {

  const fromSchema = yup.object({
    email: yup
      .string()
      .email("Por favor, digite um email válido!")
      .required("O campo email é obrigatório!"),
    password: yup
      .string()
      .required("O campo senha é obrigatório!")
      .min(8, "A senha possui no mínimo 8 dígitos")
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(fromSchema)
  });

  const submit = () => {
    router.replace("/home");
    console.log('TESTEEEEEEEEEEEEEEEEE');
  };


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

        <View className='mb-4'>
          <TextFieldController
            control={control}
            name="password"
            placeholder="Senha"
            errors={errors}
            props={{
              secureTextEntry: true
            }}
          />
        </View>

        <CustomButton
          label="Acessar"
          onPress={() => router.push("home")}
        />

        <CustomButton
          label="Redefinir senha"
          className="mt-4 bg-itemBackground"
          variant="disable"
          onPress={() => router.push("reset-password")} />

        <Link href={"/create-account"} className="text-center mt-8 text-gray-500">
          Não possui conta? Crie agora!
        </Link>

      </View>
    </View>
  );
}
