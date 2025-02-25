import { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';

interface ProgressIndicatorProps {
  totalSteps: number;
  duration: number;
  currentStep: number; // Adicionado para sincronização com o banner
  onComplete?: () => void;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ totalSteps, duration, currentStep, onComplete }) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: currentStep,
      duration: duration / totalSteps,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      if (onComplete) onComplete();
    });
  }, [currentStep, duration, totalSteps, onComplete]);

  return (
    <View className="flex-row justify-between items-center w-full px-4">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const width = progress.interpolate({
          inputRange: [index, index + 1],
          outputRange: ['0%', '100%'],
          extrapolate: 'clamp',
        });

        return (
          <View key={index} className="h-1 flex-1 mx-1 bg-gray-300 rounded-full overflow-hidden">
            <Animated.View
              style={{
                width,
                height: '100%',
                backgroundColor: '#3B82F6',
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

export default ProgressIndicator;
