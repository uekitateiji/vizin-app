import { View, Text, ScrollView } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import '@shared/styles/global.css';
import CardProduct from '@shared/components/CardProdut';
export default function Products() {
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
          <ScrollView contentInsetAdjustmentBehavior="automatic">

            <View className='p-4'>
              <CardProduct
                title="Lancer Ralliart"
                price="95.000,00"
                reviews={20}
                rating={10}
                advertiser={"Teiji Uekita"}
                isHighlight={true}

              />

              <CardProduct
                title="Lancer Ralliart"
                price="95.000,00"
                reviews={20}
                rating={10}
                advertiser={"Teiji Uekita"}

              />

              <CardProduct
                title="Lancer Ralliart"
                price="95.000,00"
                reviews={20}
                rating={10}
                advertiser={"Teiji Uekita"}

              />

              <CardProduct
                title="Lancer Ralliart"
                price="95.000,00"
                reviews={20}
                rating={10}
                advertiser={"Teiji Uekita"}

              />

            </View>
          </ScrollView>
        )}
      </ScrollView>
    </View>
  );
}






// <ScrollView contentInsetAdjustmentBehavior="automatic">

// <View className='p-4'>
//   <CardProduct
//     title="Lancer Ralliart"
//     price="95.000,00"
//     reviews={20}
//     rating={10}
//     advertiser={"Teiji Uekita"}
//     isHighlight={true}

//   />

//   <CardProduct
//     title="Lancer Ralliart"
//     price="95.000,00"
//     reviews={20}
//     rating={10}
//     advertiser={"Teiji Uekita"}

//   />

//   <CardProduct
//     title="Lancer Ralliart"
//     price="95.000,00"
//     reviews={20}
//     rating={10}
//     advertiser={"Teiji Uekita"}

//   />

//   <CardProduct
//     title="Lancer Ralliart"
//     price="95.000,00"
//     reviews={20}
//     rating={10}
//     advertiser={"Teiji Uekita"}

//   />

// </View>
// </ScrollView>