import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import '@shared/styles/global.css';
import { Ionicons } from "@expo/vector-icons";
import cardHighlight from '@data/card-highlight.datta';
import Card from '@shared/components/card';
import CardHighlight from '@shared/components/RequestCard';
const cards = [
  {
    id: 1,
    title: "Furadeira",
    imageUrl: require("@assets/images/eletricista.jpg"),
    highlight: false,
    category: "Ferramentas",
    advertiser: "Teiji Uekita",
    rating: 2,
    reviews: 22,
  },
  {
    id: 2,
    title: "Caixa JBL",
    imageUrl: require("@assets/images/eletricista.jpg"),
    highlight: false,
    category: "Aúdio",
    advertiser: "Larissa Cristina",
    rating: 5,
    reviews: 86,
  },
  {
    id: 3,
    title: "Ventilador",
    imageUrl: require("@assets/images/eletricista.jpg"),
    highlight: false,
    category: "Aúdio",
    advertiser: "Kazuya Uekita",
    rating: 5,
    reviews: 86,
  },
];
export default function Requests() {
  const [activeTab, setActiveTab] = useState<'myProducts' | 'neighborsProducts'>('neighborsProducts');

  return (
    <View className='bg-white h-full w-full'>
      <ScrollView contentInsetAdjustmentBehavior="automatic">

        {/* Tabs */}
        <View className='flex-row mt-4'>
          <TouchableOpacity
            className={`flex-1 py-3 ${activeTab === 'neighborsProducts' ? 'border-b-2 border-blue-500' : 'border-b border-gray-300'}`}
            onPress={() => setActiveTab('neighborsProducts')}
          >
            <Text className={`text-center font-medium ${activeTab === 'neighborsProducts' ? 'text-blue-500' : 'text-gray-500'}`}>
              Anunciados por Vizinhos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-3 ${activeTab === 'myProducts' ? 'border-b-2 border-blue-500' : 'border-b border-gray-300'}`}
            onPress={() => setActiveTab('myProducts')}
          >
            <Text className={`text-center font-medium ${activeTab === 'myProducts' ? 'text-blue-500' : 'text-gray-500'}`}>
              Meus Anúncios
            </Text>
          </TouchableOpacity>


        </View>

        {/* Conteúdo das Tabs */}
        {activeTab === 'myProducts' ? (
          <View className='p-4'>
            <Text className='text-gray-500'>Aqui você verá seus produtos anunciados.</Text>
          </View>
        ) : (
          <View className='p-4'>
            <Text className='text-gray-500'>Aqui estão os produtos anunciados pelos vizinhos.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}


// <View className='bg-white'>
// <ScrollView contentInsetAdjustmentBehavior="automatic">




//   {/* Urgentes */}
//   <View className='m-4'>
//     <View className='flex-row items-center pb-2'>
//       <Ionicons name="flash-outline" size={16} color="#000FFF" className='pr-2' />
//       <Text className='text-2xl font-semibold'>Solicitações urgentes</Text>
//     </View>
//     <View className='flex-row flex-wrap'>
//       {
//         cardHighlight.map((card) => (
//           <CardHighlight
//             key={card.title}
//             title={card.title}
//             highlight={card.highlight}
//             reviews={card.reviews}
//             rating={card.rating}
//             category={card.category}
//             advertiser={card.advertiser} />
//         ))
//       }
//     </View>
//   </View>

//   {/* Todas */}
//   <View className='mt-6 mx-4'>
//     <View className='flex-row items-center pb-2'>
//       <Ionicons name="document-text-outline" size={16} color="#000FFF" className='pr-2' />
//       <Text className='text-2xl font-semibold'>Outras Solicitações</Text>
//     </View>
//     <View className='flex-row flex-wrap'>
//       {
//         cards.map((card) => (
//           <Card
//             key={card.title}
//             title={card.title}
//             highlight={card.highlight}
//             reviews={card.reviews}
//             rating={card.rating}
//             category={card.category}
//             advertiser={card.advertiser} />
//         ))
//       }
//     </View>
//   </View>

// </ScrollView>
// </View>