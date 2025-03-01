import { View, Text, Image } from "react-native";
import { CardProps } from "./card.types";
import '@shared/styles/global.css';
import { Ionicons } from "@expo/vector-icons";

const Card = ({ title, value, applicant, date, imageUrl }: CardProps) => {
  return (
    <View className="basis-1/2 p-2">

      <View className="bg-gray-200 rounded-xl shadow-lg overflow-hidden">

        <Image source={imageUrl} className="h-40 w-full rounded-t-xl" />


        <View className="h-32 p-4">
          <Text className="text-black font-bold">{title}</Text>

          <View className="items-end flex-[2] justify-between flex-row">
            <Text className="text-sm text-gray-500">Data</Text>
            <Text className="text-md text-gray-800">{date}</Text>
          </View>

          <View className="items-end justify-between flex-row mt-2">
            <Text className="text-sm text-gray-500">Valor:</Text>
            <Text className="text-md font-bold text-secondary">{value}</Text>
          </View>

          <View className="flex-row justify-between items-center mt-2">

            <View className="flex-row items-center">
              <Ionicons
                className="mr-1"
                name="person-outline"
                size={16}
                color="#000000"
              />
              <Text className="text-sm text-black">{applicant}</Text>
            </View>

            {/* <Text className="text-sm font-bold text-primary">Detalhes</Text> */}
          </View>

        </View>
      </View>

    </View >
  );
};

export default Card;



