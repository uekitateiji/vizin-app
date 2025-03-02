import { View, Text, ImageBackground } from "react-native";
import { ProductCardProps } from "./types";
import AdvertiserRating from "../AdvertiserRating";

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
      <ImageBackground source={productImage} className={`flex-[2] ${isCompact ? "w-full rounded-t-lg" : "h-full"}`} />
      <ProductDetails
        title={title}
        price={price}
        advertiser={advertiser}
        rating={rating}
        reviews={reviews}
        isHighlight={isHighlight}
      />
    </View>
  );
};


const ProductDetails = ({
  title,
  price,
  advertiser,
  rating,
  reviews,
  isHighlight
}: Omit<ProductCardProps, "">) => (
  <View className="flex-[2] p-2 justify-between">
    {isHighlight && <HighlightTag />}
    <View>
      <Text className="font-semibold text-2xl">R$ {price}</Text>
      <Text>{title}</Text>
    </View>
    <AdvertiserRating advertiser={advertiser} rating={rating} reviews={reviews} />
  </View>
);

const HighlightTag = () => (
  <View className="absolute bottom-0 left-[-84px] bg-purple-500 px-2 py-1">
    <Text className="text-white font-medium">DESTAQUE</Text>
  </View>
);

export default CardProduct;
