import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Dimensions } from "react-native";
import { router } from "expo-router";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolateColor,
} from "react-native-reanimated";
import CustomButton from "@shared/components/custom-button";
import banners from "data/banners.data";
import ProgressIndicator from "@shared/components/ProgressIndicator";
const { width, height } = Dimensions.get("window");
const DURATION = 10000;


const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

const Banner = ({ banner, index, currentBanner }: any) => {
    const animatedOpacity = useAnimatedStyle(() => ({
        opacity: withTiming(currentBanner === index ? 1 : 0, { duration: 500 }),
    }));

    return (
        <AnimatedImageBackground
            source={banner.image}
            style={[{ width, height, position: "absolute" }, animatedOpacity]}
            className="justify-between w-full h-full"
        >
            <View className="absolute bottom-16 w-full">
                <Text className="text-5xl font-semibold text-white">{banner.title}</Text>
                <Text className="text-2xl mb-14 mt-2 text-white">{banner.description}</Text>
                <CustomButton label="Vamos lá!" onPress={() => router.push("/login")} fullWidth />
            </View>
        </AnimatedImageBackground>
    );
};




export default function Index() {
    const [currentBanner, setCurrentBanner] = useState(0);
    const progress = useSharedValue(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        const startAnimation = () => {
            progress.value = 0; // Reseta progresso
            progress.value = withTiming(1, { duration: DURATION });

            interval = setInterval(() => {
                setCurrentBanner((prev) => (prev + 1) % banners.length);
            }, DURATION);
        };

        startAnimation(); // Inicia animação quando o componente monta

        return () => {
            clearInterval(interval); // Limpa o intervalo ao desmontar o componente
            progress.value = 0; // Reseta o progresso
        };
    }, []);

    return (
        <View className="">
            {banners.map((banner, index) => (
                <Banner key={index} banner={banner} index={index} currentBanner={currentBanner} />
            ))}

            {/* Indicadores de progresso */}
            <View className="absolute top-24 left-4 right-4 flex-row justify-between">
                {banners.map((_, index) => (
                    <ProgressIndicator key={index} index={index} currentBanner={currentBanner} progress={progress} />
                ))}
            </View>
        </View>
    );
}

// import { View, Dimensions } from "react-native";
// import Animated, { useAnimatedStyle, interpolateColor } from "react-native-reanimated";
// import banners from "data/banners.data";

// const { width } = Dimensions.get("window");
// const PADDING = 32;
// const SPACING = 8;
// const segmentWidth = (width - PADDING - (banners.length - 1) * SPACING) / banners.length;

// const ProgressIndicator = ({ index, currentBanner, progress }: any) => {
//     const animatedStyle = useAnimatedStyle(() => ({
//         width: segmentWidth * progress.value, // 🔥 Apenas multiplica pelo progresso
//         backgroundColor: interpolateColor(progress.value, [0, 1], ["rgba(255, 255, 255, 0.3)", "#456EFE"]),
//     }));

//     return (
//         <View
//             className="h-1 rounded overflow-hidden"
//             style={{
//                 width: segmentWidth,
//                 backgroundColor: "rgba(255, 255, 255, 0.3)",
//                 marginRight: indexA !== banners.length - 1 ? SPACING : 0,
//             }}
//         >
//             <Animated.View className="h-full" style={animatedStyle} />
//         </View>
//     );
// };

// export default ProgressIndicator;
