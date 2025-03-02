import { View, Text, TextInput } from "react-native";
import { TextFieldControllerProps } from "./types";
import { inputStyles } from "./styles";
import {
  Control, Controller, FieldValues, FieldErrors
} from "react-hook-form";

const TextFieldController = ({
  control,
  errors,
  name,
  placeholder,
  props,
}: TextFieldControllerProps) => {

  // Garante que `errorMessage` sempre seja uma string ou undefined
  const errorMessage = errors && errors[name] ? (errors[name].message as string) : undefined;
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            className={`${inputStyles["base"]} ${errors && errors[name] && inputStyles.error}`}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            {...props}
          />
        )}
      />

      {errors && errors[name] && <Text className={inputStyles.errorText}>{errorMessage}</Text>}

    </>
  );
};

export default TextFieldController;


// <View className="w-full">
//       <TextInput
//         placeholder={placeholder}
//         className={`${inputStyles.base} ${error && inputStyles.error}`}
//         {...rest}
//       />

//       {error && <Text className={inputStyles.errorText}>{error}</Text>}
//     </View>