import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ProgressIndicator from "@shared/components/progress-indicator";
import CustomButton from "@shared/components/custom-button";

type RootStackParamList = {
  Intro: undefined;
  Login: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Intro">;

const banners = [
  {
    image: require("../../../assets/images/banner-1.png"),
    title: "O marketplace exclusivo para o seu condomínio!",
    subtitle:
      "Compre, venda e contrate serviços de forma rápida e segura, sem sair de casa.",
  },
  {
    image: require("../../../assets/images/banner-2.png"),
    title: "Negociações seguras entre vizinhos!",
    subtitle: "Seu marketplace local, com mais confiança e transparência.",
  },
  {
    image: require("../../../assets/images/banner-3.png"),
    title: "Anuncie e compre sem sair de casa!",
    subtitle:
      "Venda o que não usa mais e encontre produtos incríveis dentro do seu condomínio.",
  },
];

const IntroPage: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [currentBanner, setCurrentBanner] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const handleNavigateToLogin = () => {
    navigation.navigate("Login");
  };

  useEffect(() => {
    const cycleDuration = 3000;
    const timer = setInterval(() => {
      setCurrentBanner((prev) => {
        const nextBanner = (prev + 1) % banners.length;
        if (nextBanner === 0) setProgressKey((key) => key + 1); // Reinicia o progresso
        return nextBanner;
      });
    }, cycleDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <View className="flex-1 bg-black">
      <ImageBackground
        source={banners[currentBanner].image}
        className="w-full h-full justify-between"
        resizeMode="cover"
      >
        <View className="mt-24 px-6">
          <ProgressIndicator
            key={progressKey}
            totalSteps={banners.length}
            duration={9000}
            currentStep={currentBanner + 1}
          />
        </View>

        <View className="absolute bottom-16 px-8 w-full">
          <Text className="text-white text-5xl mb-4 font-semibold">
            {banners[currentBanner].title}
          </Text>

          <Text className="text-gray-300 text-2xl mb-14">
            {banners[currentBanner].subtitle}
          </Text>

          <CustomButton label="Vamos lá" onPress={handleNavigateToLogin} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default IntroPage;
