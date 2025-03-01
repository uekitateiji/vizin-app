import { View, Text, Image } from "react-native";
import '@shared/styles/global.css';
import { Ionicons } from "@expo/vector-icons";
import { CardProductProps } from "./CardProduct.types";
const CardProduct = ({
  title,
  price,
  reviews,
  rating,
  advertiser,
  isCompact,
  isHighlight
}: CardProductProps) => {
  console.log('~ isHighlight ~ ', isHighlight);
  const ralliart: any = require("@assets/images/lancer-ralliart.jpeg");
  return (
    <View className={`${isCompact ? "max-w-64 h-72 mr-2" : "w-full flex-row h-56 mb-2"} ${isHighlight ? "border-purple-500 border-l-8" : "border-gray-200"} border-2  rounded-lg`}>

      <Image source={ralliart} className={`${isCompact ? "w-full rounded-t-xl " : "h-full"} flex-[2]`} />


      <View className="flex-[2] p-2 justify-between">
        {isHighlight && <View className="max-h-max max-w-max bg-purple-500 absolute bottom-0 left-[-83] px-2 py-1" >
          <Text className="text-white">DESTAQUE</Text>
        </View>}

        <View>
          <Text className="font-semibold text-2xl">R$ {price}</Text>
          <Text className="">{title}</Text>
        </View>
        {/* Anunciante e avaliação */}
        <View className="flex-col">
          <View className="flex-row items-center">
            <Ionicons name="person" size={16} color="#000" className="pr-1" />
            <Text className="text-lg">{advertiser}</Text>
          </View>

          <View className="flex-row items-center">
            <Ionicons name="star" size={16} color="#FACC15" />
            <Text className="font-semibold text-primary pr-1">{rating.toFixed(1)}</Text>
            <Text className="text-gray-500 text-sm">({reviews} avaliações)</Text>
          </View>
        </View>
      </View>
    </View >
  );
};

export default CardProduct;
