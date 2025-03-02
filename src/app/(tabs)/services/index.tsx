import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import '@shared/styles/global.css';
import Card from '@shared/components/ServiceCard';
import cardsService from '@data/cards-service.data';
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from 'react';

export default function Services() {

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


// <View className={`w-full h-full bg-white p-4 `}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <Text className="text-black text-3xl font-semibold mx-2 mb-4">
//           Necessidade dos vizin
//         </Text>



//         <View className='flex-row justify-between items-center mb-4'>
//           <TextInput
//             placeholder="Procurar"
//             placeholderTextColor="#A1A1A1"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             className="flex-1 border border-gray-200 rounded-lg p-4"
//           />
//           <TouchableOpacity className='px-2 items-center justify-center ' onPress={() => { }}>
//             <Ionicons name="search-outline" size={24} color="#C2C2C2" />
//           </TouchableOpacity>
//         </View>


//         <View className="flex-row flex-wrap">
//           {cardsService.map(
//             (
//               { id, title, value, description, applicant, category, rating, reviews, imageUrl, date, categoryColor }: any
//             ) => (
//               <Card
//                 rating={rating}
//                 reviews={reviews}
//                 category={category}
//                 key={id}
//                 applicant={applicant}
//                 title={title}
//                 value={value}
//                 description={description}
//                 date={date}
//                 imageUrl={imageUrl}
//                 categoryColor={categoryColor}
//               />
//             )
//           )}
//         </View>
//       </ScrollView >
//     </View >