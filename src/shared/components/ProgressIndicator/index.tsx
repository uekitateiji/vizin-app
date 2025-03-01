import { View, useWindowDimensions } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

interface ProgressIndicatorProps {
  totalItems: number;
  progress: number; // Valor entre 0 e 1 para indicar o progresso do banner ativo
  isActive: boolean; // Indica se esse indicador está preenchendo
  isCompleted: boolean; // Indica se esse banner já foi totalmente visto
  parentPadding?: number; // 🔥 Permite que o componente pai defina um padding lateral opcional
}

const ProgressIndicator = ({ totalItems, progress, isActive, isCompleted, parentPadding = 16 }: ProgressIndicatorProps) => {
  const { width } = useWindowDimensions(); // 🔥 Obtém a largura real da tela
  const availableWidth = width - parentPadding * 4; // 🔥 Considera o padding do pai
  const segmentWidth = availableWidth / totalItems - 4; // 🔥 Distribui o espaço igualmente

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(isActive ? progress * segmentWidth : segmentWidth, { duration: 100 }), // 🔥 Agora usa valores numéricos
      backgroundColor: isCompleted || isActive ? "#2563EB" : "#FFFFFF", // 🔵 Mantém azul se ativo ou completado
    };
  });

  return (
    <View
      className="h-1 rounded-full overflow-hidden mx-1"
      style={{ width: segmentWidth, backgroundColor: "#FFFFFF" }} // 🔲 Branco padrão
    >
      <Animated.View className="h-full" style={animatedStyle} />
    </View>
  );
};

export default ProgressIndicator;
