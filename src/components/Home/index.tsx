import { ScrollView, Text, View, SafeAreaView } from 'react-native';
import '@shared/styles/global.css';
import CardHighlight from '@shared/components/card-highlight';
import { Ionicons } from "@expo/vector-icons";
import cardHighlight from '@data/card-highlight.datta';
import CardProduct from '@shared/components/CardProdut';
import { Link } from "expo-router";

const dataCardService = [
  { label: "Babá", icon: "basket-outline" },
  { label: "Faz tudo", icon: "hammer-outline" },
  { label: "Eletricista", icon: "flash-outline" },
  { label: "Chaveiro", icon: "key-outline" },
  { label: "Encanador", icon: "server-outline" },
];
const Home = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView className='p-4 '>

        <View className='mb-4'>
          <Text className='text-2xl font-semibold'>Olá, Teiji!</Text>
          <Text className="text-lg">
            {/* Veja o que seus vizinhos estão precisando */}
          </Text>
        </View>

        {/* SERVIÇOS */}
        <Section
          title={"Serviços solicitados"}
          subtitle={"Veja quais serviços seus vizinhos estão precisando!"}
          handleRouteShowAll={"/services"} >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            automaticallyAdjustContentInsets={true}>

            {
              dataCardService.map((item) => (
                <CardServiceCompact key={item.label} label={item.label} icon={item.icon} />
              ))
            }

          </ScrollView>
        </Section>

        <Section
          title={"Produtos à venda"}
          subtitle={"Encontre itens disponíveis para compra no condomínio!"}
          handleRouteShowAll={"/products"} >
          <ScrollView showsHorizontalScrollIndicator={false}
            contentInsetAdjustmentBehavior="automatic" horizontal className=' w-full'>

            <CardProduct
              title="Lancer Ralliart"
              price="95.000,00"
              reviews={20}
              rating={10}
              advertiser={"Teiji Uekita"}

              isCompact={true}
            />

            <CardProduct
              title="Lancer Ralliart"
              price="95.000,00"
              reviews={20}
              rating={10}
              advertiser={"Teiji Uekita"}
              isCompact={true}

            />

          </ScrollView>
        </Section>

        <Section
          title={"Tem algo para emprestar?"}
          subtitle={"Descubra itens que os vizinhos estão precisando!"}
          handleRouteShowAll={"/requests"} >
          <ScrollView contentInsetAdjustmentBehavior="automatic" horizontal showsHorizontalScrollIndicator={false}>

            {
              cardHighlight.map((card) => (
                <CardHighlight
                  key={card.title}
                  title={card.title}
                  highlight={card.highlight}
                  reviews={card.reviews}
                  rating={card.rating}
                  category={card.category}
                  advertiser={card.advertiser}
                  isCompact={true} />
              ))
            }

          </ScrollView>
        </Section>


      </ScrollView>
    </SafeAreaView >
  );
}

export default Home;


const Section = ({ title, subtitle, handleRouteShowAll, children }: any) => {
  return (
    <>
      <View className='flex-row justify-between items-center'>
        <View className='flex-row items-center'>
          <Ionicons name="construct" size={16} color="#000FFF" className='pr-2' />
          <Text className='text-2xl font-semibold'>{title}</Text>
        </View>
        <Link href={handleRouteShowAll} className='pr-2 font-medium'>
          Ver tudo
        </Link>
      </View>
      <Text>{subtitle}</Text>
      <View className='flex-row mt-4 mb-6'>
        {children}
      </View>
    </>
  )
}

const CardServiceCompact = ({ label, icon }: any) => {

  return (
    <View className='justify-center items-center pr-4 '>
      <View className='h-24 w-24 border-2 border-gray-200 rounded-xl justify-center items-center'>
        <Ionicons name={icon} size={30} color="#456EFE" className='' />
      </View>
      <View className='w-24'>
        <Text className='text-black text-center pt-2'>
          {label}
        </Text>
      </View>
    </View>
  )
};

// <View className='flex-row  items-center'>
// <Text className='text-2xl'>Ganhe dinheiro com itens parados!</Text>
// <Ionicons name="flame-outline" size={29} color="red" className='pl-2' />
// </View>
// <Text>
// · Transforme objetos parados em renda extra
// </Text>
// <Text>
// · Ajude seus vizinhos e construa conexões.
// </Text>
// <Text>
// · Segurança e controle total sobre os empréstimos.
// </Text>
// <Text>
// Cadastre agora seus itens para emprestar e veja o que
// seus vizinhos estão precisando! Você pode ter algo em casa que
// pode ajudar alguém e ainda ganhar uma renda extra.
// </Text>
