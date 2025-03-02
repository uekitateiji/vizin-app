import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import banners from "@data/banners.data";
import CustomButton from "@shared/components/CustomButton";
import { router } from "expo-router";
import ProgressIndicator from "@shared/components/ProgressIndicator";

export default function Index() {
  const [bannerCurrentIndex, setBannerCurrentIndex] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [completedBanners, setCompletedBanners] = useState<boolean[]>(Array(banners.length).fill(false));
  const timer = 6000;
  const changeBanner = (direction: "next" | "prev") => {
    if (direction === "prev" && bannerCurrentIndex === 0) {
      setProgress(0);
      setBannerCurrentIndex(0);
      setCompletedBanners(Array(banners.length).fill(false));
      return;
    }

    setProgress(0);

    setBannerCurrentIndex((prevIndex) => {
      let newIndex = prevIndex;

      if (direction === "next") {
        if (prevIndex + 1 >= banners.length) {
          setCompletedBanners(Array(banners.length).fill(false));
          newIndex = 0;
        } else {
          newIndex = prevIndex + 1;
          setCompletedBanners((prev) => {
            const updated = [...prev];
            updated[prevIndex] = true;
            return updated;
          });
        }
      } else {
        newIndex = prevIndex - 1;
        setCompletedBanners((prev) => {
          const updated = [...prev];
          updated[prevIndex] = false;
          return updated;
        });
      }

      return newIndex;
    });
  };

  useEffect(() => {
    let progressValue = 0;

    const interval = setInterval(() => {
      progressValue += 0.01;
      setProgress(progressValue);

      if (progressValue >= 1) {
        changeBanner("next");
      }
    }, timer / 100);

    return () => clearInterval(interval);
  }, [bannerCurrentIndex]);

  return (
    <ImageBackground source={banners[bannerCurrentIndex].image} resizeMode="cover" className="h-full w-full">
      <Animated.View
        className="h-full w-full"
        key={bannerCurrentIndex}
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(500)}
      >
        <View className="absolute top-24 flex-row justify-center px-8 items-center w-full py-2">
          {banners.map((_, index) => (
            <ProgressIndicator
              key={index}
              totalItems={banners.length}
              progress={index === bannerCurrentIndex ? progress : 0}
              isActive={index === bannerCurrentIndex}
              isCompleted={completedBanners[index]}
            />
          ))}
        </View>



        <View className="absolute top-0 left-0 w-full h-full flex-row">
          <TouchableOpacity className="flex-1" activeOpacity={0.2} onPress={() => changeBanner("prev")} />

          <TouchableOpacity className="flex-1" activeOpacity={0.2} onPress={() => changeBanner("next")} />
        </View>
        <View className="w-full items-center">
          <Text className="text-white absolute top-40 text-center text-5xl">
            VIZIN
          </Text>
        </View>
        {/* 🔥 Conteúdo do banner */}
        <View className="absolute bottom-20 w-full px-8">
          <Text className="text-5xl font-semibold text-white">
            {banners[bannerCurrentIndex].title}
          </Text>
          <Text className="text-2xl mb-14 mt-2 text-white">
            {banners[bannerCurrentIndex].description}
          </Text>
          <CustomButton label="Vamos lá!" onPress={() => router.push("login")} fullWidth />
        </View>

      </Animated.View>
    </ImageBackground>
  );
}
