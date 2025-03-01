import { TouchableOpacity, Text } from "react-native";
import { CustomButtonProps } from "./custom-button.types";
import '@shared/styles/global.css';

const CustomButton = ({ label, onPress, fullWidth = false, className = "" }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className={` ${className} bg-primary rounded-full py-4 ${fullWidth ? 'w-full' : ''}`} // ✅ Largura total se fullWidth = true
      onPress={onPress}
    >
      <Text className="text-white text-center font-semibold">{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
