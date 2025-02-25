import React from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  // const navigation = useNavigation();

  return (
    <View className="w-full h-20 flex items-center flex-row justify-between px-8">
      <Pressable className="w-6 h-6 justify-center items-center">
        <ArrowLeft color="black" size={24} />
      </Pressable>

      {title && <Text className="text-black">{title}</Text>}
      <View />
    </View>
  );
};

export default Header;
