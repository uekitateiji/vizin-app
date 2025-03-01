import { TouchableOpacity, Text } from "react-native";
import { CustomButtonProps } from "./types";
import '@shared/styles/global.css';
import { buttonStyles } from "./styles";

const CustomButton = ({
  label,
  onPress,
  fullWidth = false,
  className = "",
  variant = "primary",
  ...rest
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className={` ${className} rounded-full py-4 ${fullWidth ? 'w-full' : ''} ${buttonStyles[variant]}`}
      onPress={onPress}
      {...rest}
    >
      <Text className="text-white text-center font-semibold">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
