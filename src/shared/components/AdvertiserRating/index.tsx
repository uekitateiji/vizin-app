import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AdvertiserRatingProps } from "./types";
const AdvertiserRating = ({
  advertiser,
  rating,
  reviews
}: AdvertiserRatingProps) => {
  return (
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
  )
}

export default AdvertiserRating;