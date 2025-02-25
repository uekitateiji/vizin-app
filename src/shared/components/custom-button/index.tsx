import { TouchableOpacity, Text } from "react-native";
import { CustomButtonProps } from "./custom-button.types";

const CustomButton = ({ label, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-primary rounded-full py-4"
      onPress={onPress}
    >
      <Text className="text-white text-center font-semibold">{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
