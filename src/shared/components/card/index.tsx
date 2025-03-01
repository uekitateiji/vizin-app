import { View, Text, } from "react-native";
import { CardProps } from "./Card.types";
import '@shared/styles/global.css';
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../CustomButton";
const CardHighlight = ({
  title,
  imageUrl,
  highlight,
  rating,
  reviews,
  category,
  advertiser
}: CardProps) => {
  return (
    <View className="w-full  mb-4">

      <View className={` bg-white border-2 w-full h-50 rounded-xl p-4 border-itemBackground shadow-lg`}>

        <View className="h-max">
          <View className={`flex-row items-center justify-between mb-2 `}>
            <Text className="font-bold text-lg">{title}</Text>
            <View className="flex-row">
              <Ionicons name="time-outline" size={16} color="#757575" />
              <Text className={`text-sm text-[#757575] ml-2`}>
                Há 1 dia
              </Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between mb-2">
            {/* <Text className={`text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-800`}>
              {category}
            </Text> */}
          </View>
          <View className="flex-row items-center">
            <Ionicons name="calendar-outline" size={16} color="#000000" />
            <Text className="text-lg"> Para quando: </Text>
            <Text className="text-lg">Sábado, 03/03 </Text>
          </View>
          <View className="flex-row">
            <View className="flex-row items-center">
              <Ionicons name="person" size={16} color="#000" className="pr-1" />
              <Text className="text-lg">{advertiser} · </Text>
            </View>

            <View className="flex-row items-center">
              <Ionicons name="star" size={16} color="#FACC15" />
              <Text className="font-semibold text-primary pr-1">{rating.toFixed(1)}</Text>
              <Text className="text-gray-500 text-sm">({reviews} avaliações)</Text>
            </View>
          </View>



        </View>

        {/* <View className="w-full flex-1 items-center justify-center">
          <CustomButton label="Emprestar esse item" onPress={() => { }} fullWidth />
        </View> */}

      </View >

    </View >
  );
};

export default CardHighlight;
