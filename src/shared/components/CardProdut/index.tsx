import { View, Text, Image } from "react-native";
import '@shared/styles/global.css';
import { Ionicons } from "@expo/vector-icons";
import { CardProductProps } from "./CardProduct.types";
import AdvertiserRating from "../AdvertiserRating";
const CardProduct = ({
  title,
  price,
  reviews,
  rating,
  advertiser,
  isCompact,
  isHighlight
}: CardProductProps) => {

  const ralliart: any = require("@assets/images/lancer-ralliart.jpeg");
  return (
    <View className={`${isCompact ? "max-w-64 h-72 mr-2" : "w-full flex-row h-56 mb-2"} ${isHighlight ? "border-purple-500 border-l-8" : "border-gray-200"} border-2  rounded-lg`}>

      <Image source={ralliart} className={`${isCompact ? "w-full rounded-t-xl " : "h-full"} flex-[2]`} />


      <View className="flex-[2] p-2 justify-between">
        {isHighlight && <HighlightTag />}

        <View>
          <Text className="font-semibold text-2xl">R$ {price}</Text>
          <Text className="">{title}</Text>
        </View>
        {/* Anunciante e avaliação */}
        <AdvertiserRating
          advertiser={advertiser}
          rating={rating}
          reviews={reviews} />
      </View>
    </View >
  );
};

const HighlightTag = () => (
  <View className="absolute bottom-0 left-[-83] bg-purple-500 px-2 py-1">
    <Text className="text-white font-bold">DESTAQUE</Text>
  </View>
);

export default CardProduct;
