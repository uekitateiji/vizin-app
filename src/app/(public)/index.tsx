import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import banners from "@data/banners.data";
import CustomButton from "@shared/components/custom-button";
import { router } from "expo-router";
import ProgressIndicator from "@shared/components/ProgressIndicator";

export default function Index() {
  const [bannerCurrentIndex, setBannerCurrentIndex] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [completedBanners, setCompletedBanners] = useState<boolean[]>(Array(banners.length).fill(false));
  const timer = 6000; // Tempo total de exibição do banner

  // 🔥 Função para mudar o banner manualmente ao clicar
  const changeBanner = (direction: "next" | "prev") => {
    if (direction === "prev" && bannerCurrentIndex === 0) {
      // 🔄 Se for o primeiro banner e clicar para voltar, REINICIA TUDO
      setProgress(0);
      setBannerCurrentIndex(0); // 🔥 Mantém no primeiro banner
      setCompletedBanners(Array(banners.length).fill(false)); // 🔄 Zera todos os indicadores
      return; // Sai da função para evitar qualquer troca de banner
    }

    setProgress(0); // 🔄 Reseta o progresso para o novo banner

    setBannerCurrentIndex((prevIndex) => {
      let newIndex = prevIndex;

      if (direction === "next") {
        if (prevIndex + 1 >= banners.length) {
          // 🔄 Se for o último banner, resetamos os indicadores e reiniciamos
          setCompletedBanners(Array(banners.length).fill(false));
          newIndex = 0;
        } else {
          newIndex = prevIndex + 1;
          // 🔥 Marca o banner atual como completado antes de avançar
          setCompletedBanners((prev) => {
            const updated = [...prev];
            updated[prevIndex] = true;
            return updated;
          });
        }
      } else {
        newIndex = prevIndex - 1;
        // 🔄 Resetamos o indicador do banner que estávamos visualizando
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
      progressValue += 0.01; // 🔥 Incrementa o progresso
      setProgress(progressValue);

      if (progressValue >= 1) {
        changeBanner("next");
      }
    }, timer / 100); // 🔥 Atualiza a cada tick

    return () => clearInterval(interval);
  }, [bannerCurrentIndex]); // Dependência no índice do banner

  return (
    <ImageBackground source={banners[bannerCurrentIndex].image} resizeMode="cover" className="h-full w-full">
      <Animated.View
        className="h-full w-full"
        key={bannerCurrentIndex}
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(500)}
      >
        {/* 🔥 Indicador de progresso no topo */}
        <View className="absolute top-24 flex-row justify-center px-8 items-center w-full py-2">
          {banners.map((_, index) => (
            <ProgressIndicator
              key={index}
              totalItems={banners.length}
              progress={index === bannerCurrentIndex ? progress : 0} // 🔥 Apenas o ativo preenche
              isActive={index === bannerCurrentIndex}
              isCompleted={completedBanners[index]} // 🔵 Mantém azul apenas se já foi visto
            />
          ))}
        </View>



        {/* 🔥 Áreas de toque para avançar ou voltar os banners */}
        <View className="absolute top-0 left-0 w-full h-full flex-row">
          {/* 🔙 Toque à esquerda para voltar */}
          <TouchableOpacity className="flex-1" activeOpacity={0.2} onPress={() => changeBanner("prev")} />

          {/* 🔜 Toque à direita para avançar */}
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
          <CustomButton label="Vamos lá!" onPress={() => router.push("/login")} fullWidth />
        </View>

      </Animated.View>
    </ImageBackground>
  );
}
