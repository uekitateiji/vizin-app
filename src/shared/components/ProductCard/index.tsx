import { View, Text, ImageBackground } from "react-native";
import { ProductCardProps } from "./types";
import { Ionicons } from "@expo/vector-icons";

const CardProduct = ({
  title,
  price,
  reviews,
  rating,
  advertiser,
  isCompact,
  isHighlight
}: ProductCardProps) => {
  const productImage = require("@assets/images/lancer-ralliart.jpeg");

  return (
    <View className={`border-2 rounded-lg overflow-hidden
      ${isCompact ? "max-w-64 h-72 mr-2" : "w-full flex-row h-56 mb-2"}
      ${isHighlight ? "border-purple-500" : "border-gray-200"}
    `}>
      <ImageBackground source={productImage} className={`flex-[2] ${isCompact ? "w-full rounded-t-lg" : "h-full"}`} >


        {isHighlight &&
          <View className="absolute bottom-0  bg-purple-500 px-2 py-1">
            <Text className="text-white font-medium">DESTAQUE</Text>
          </View>}
      </ImageBackground>
      <View className="flex-[2] p-2 justify-between">
        {/* {isHighlight && <HighlightTag />} */}
        <View>
          <Text className="font-semibold text-2xl">R$ {price}</Text>
          <Text>{title}</Text>
        </View>
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
    </View>
  );
};


export default CardProduct;
