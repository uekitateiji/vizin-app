import { View, Text } from "react-native";
import { CardHighlightProps } from "./CardHighlight.types";
import '@shared/styles/global.css';
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../custom-button";

const CardHighlight = ({
  title,
  imageUrl,
  highlight,
  rating,
  reviews,
  category,
  advertiser,
  isCompact
}: CardHighlightProps) => {
  console.log('~ IS COMPACT ~ ', isCompact);
  return (
    <View className="pr-4">
      <View
        className={`mb-4 bg-white border-2 min-h-32 rounded-xl p-4 shadow-md shadow-purple-200 ${highlight ? "border-purple-700" : "border-itemBackground"}`}
      >
        {/* Seção do cabeçalho */}
        <View className="h-max">
          <View className={` mb-2 ${isCompact ? " " : "flex-row items-center justify-between"}`}>
            {/* Badge de "Urgente" */}
            {highlight ?
              (
                <View className="px-2 h-6 w-24 items-center justify-start py-1 rounded-full bg-purple-100 flex-row">
                  <Ionicons name="alert-outline" size={16} color="#456EFE" />
                  <Text className="text-sm text-purple-700">Urgente</Text>
                </View>
              ) : <View className="h-6"></View>}

            {/* Tempo de publicação */}
            {!isCompact && <View className={`flex-row ${highlight ? "" : "justify-end w-full"}`}>
              <Ionicons name="time-outline" size={12} color="#757575" />
              <Text className="text-[10px] text-[#757575] ml-2">Há 1 dia</Text>
            </View>}
          </View>

          {/* Título e categoria */}
          <View className="flex-row items-center justify-between mb-2">
            <Text className="font-bold text-lg">{title}</Text>
            {/* Categoria (comentado por enquanto) */}
            {/* <Text className="text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-800">
              {category}
            </Text> */}
          </View>

          {/* Data */}
          {!isCompact && <View className="flex-row items-center mb-2">
            <Text className="text-lg pr-2">Para quando:</Text>
            <Ionicons name="calendar-outline" size={16} color="#000000" className="pr-1" />
            <Text className="text-lg">Sábado, 03/03</Text>
          </View>}

          {/* Anunciante e avaliação */}
          <View className={`flex-row items-center`}>
            <View className={`flex-row  items-center`}>
              <Ionicons name="person" size={16} color="#000" className="pr-1" />
              <Text className="text-lg">{advertiser} · </Text>
            </View>

            <View className={`flex-row  items-center`}>
              <Ionicons name="star" size={16} color="#FACC15" />
              <Text className="font-semibold text-primary pr-1">{rating.toFixed(1)}</Text>
              {!isCompact && <Text className="text-gray-500 text-sm">({reviews} avaliações)</Text>}
            </View>
          </View>

        </View>

        {/* Botão (comentado por enquanto) */}
        {/* <View className="w-full flex-1 items-center justify-center">
          <CustomButton label="Emprestar esse item" onPress={() => { }} fullWidth />
        </View> */}
      </View>
    </View>
  );
};

export default CardHighlight;