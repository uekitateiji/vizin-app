import { TextInputProps } from "react-native";
import { Control, FieldErrors, FieldValues } from "react-hook-form";
export interface TextFieldControllerProps {
  control: Control<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  name: string;
  placeholder: string;
  props?: TextInputProps;
}