import { useEffect, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import { ProgressIndicadorProps } from "./progress-indicator.types";

const AnimatedView = Animated.createAnimatedComponent(View);

const ProgressIndicator = ({
  totalSteps,
  duration,
  currentStep,
}: ProgressIndicadorProps) => {

  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: currentStep,
      duration: duration / totalSteps,
      easing: Easing.linear,
      useNativeDriver: false,
    });
  }, [currentStep, duration, totalSteps]);

  return (
    <View className="flex-row justify-between items-center w-full px-4">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const width = progress.interpolate({
          inputRange: [index, index + 1],
          outputRange: ["0%", "100%"],
          extrapolate: "clamp",
        });

        return (
          <View
            key={index}
            className="h-1 flex-1 mx-1 bg-gray-300 rounded-full overflow-hidden"
          >
            <AnimatedView
              style={{
                width,
              }}
              className="bg-primary h-full"
            />
          </View>
        );
      })}
    </View>
  );
};

export default ProgressIndicator;
