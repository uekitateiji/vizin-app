import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({ label, onPress }: any) => {
  return (
    <TouchableOpacity
      className="bg-blue-500 rounded-full py-4"
      onPress={onPress}
    >
      <Text className="text-white text-center font-semibold">
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton;