import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
  error?: string;
  placeholder: string;
}