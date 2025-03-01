export type ButtonVariant = "primary" | "secondary" | "outline" | "disable";

export type CustomButtonProps = {
  label: string;
  onPress: () => void;
  fullWidth?: boolean;
  className?: string;
  variant?: ButtonVariant;
};
