import React from 'react';
import { View, Text, Button } from 'react-native';

const IntroPage = ({ navigation }: any) => {
  return (
    <View className="h-full w-full bg-white">
      <Text className="text-lg text-red-500 font-semibold mb-4">Bem-vindo ao Vizin App!</Text>
      <Button title="Ir para Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default IntroPage;
