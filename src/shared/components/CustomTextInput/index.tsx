import { View, Text, TextInput } from "react-native";
import { InputProps } from "./types";
import { inputStyles } from "./styles";

const CustomTextInput = ({
  error,
  placeholder,
  ...rest
}: InputProps) => {
  return (
    <View className="w-full">
      <TextInput
        placeholder={placeholder}
        className={`${inputStyles.base}`}
        {...rest}
      />

      {error && <Text className={inputStyles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;
