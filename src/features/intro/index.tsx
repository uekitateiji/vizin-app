import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ProgressIndicator from "@shared/components/progress-indicator";
import CustomButton from "@shared/components/custom-button";
import banners from "data/banners.data";

type RootStackParamList = {
  Intro: undefined;
  Login: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Intro">;

const IntroPage: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const timerDuration = 5000;

  const [currentBanner, setCurrentBanner] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const handleNavigateToLogin = () => {
    navigation.navigate("Login");
  }

  useEffect(() => {

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
            duration={timerDuration}
            currentStep={currentBanner + 1}
          />
        </View>

        <View className="absolute bottom-16 px-8 w-full">
          <Text className="text-white text-5xl mb-4 font-semibold">
            {banners[currentBanner].title}
          </Text>

          <Text className="text-gray-300 text-2xl mb-14">
            {banners[currentBanner].description}
          </Text>

          <CustomButton label="Vamos lá" onPress={handleNavigateToLogin} />
        </View>

      </ImageBackground>
    </View>
  );
};

export default IntroPage;
