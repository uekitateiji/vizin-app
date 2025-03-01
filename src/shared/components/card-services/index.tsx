import { View, Text, Image } from "react-native";
import { CardProps } from "./card.types";
import '@shared/styles/global.css';
import { Ionicons } from "@expo/vector-icons";

const CardServices = ({ title, value, description, applicant, category, rating = 0, reviews, categoryColor }: CardProps) => {
  // Função para truncar a descrição
  const truncateDescription = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength - 3) + '...' : text;
  };

  return (
    <View className="w-full min-h-50 max-h-52 pb-4">
      <View className="bg-base rounded-xl shadow-lg overflow-hidden p-4 min-h-full max-h-full">
        {/* Título e categoria */}
        <View className="flex-row items-center justify-between mb-2">
          <Text className="font-semibold text-2xl text-black max-w-[75%]">{title}</Text>
          <Text className={`text-sm px-2 py-1 rounded-full ${categoryColor}`}>
            {category}
          </Text>
        </View>



        {/* Descrição, valor e data */}
        <View className="mb-3  flex-[4] justify-between">
          <Text className="text-gray-700 text-base mb-2">
            {truncateDescription(description, 100)}
          </Text>
          <View className="flex-row justify-between items-center">
            <Text className="text-green-600 font-semibold">💵 Valor: {value}</Text>
            <Text className="text-gray-600">🗓️ Data: 25/03/2025</Text>
          </View>
        </View>

        {/* Solicitante e ver detalhes */}
        <View className="flex-row justify-between items-end pt-3  flex-1">
          <View className="flex-row items-center">
            <Ionicons
              className="mr-2"
              name="person-outline"
              size={16}
              color="#000000"
            />
            <Text>{applicant}</Text>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text className="text-black font-semibold">{rating.toFixed(1)}</Text>
            <Text className="text-gray-500 text-sm">({reviews})</Text>
          </View>

          <Text className="font-bold text-primary">Ver detalhes</Text>
        </View>
      </View>
    </View>
  );
};

export default CardServices;