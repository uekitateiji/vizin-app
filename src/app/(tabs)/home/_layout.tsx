import { View, Text, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {

  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        headerRight: getHeaderRight,
        headerLeft: getHeaderLeft,
        headerLargeTitleShadowVisible: false,
      }}
    />
  );
};

const getHeaderRight = () => {
  return (
    <View className='h-10 w-10 bg-primary rounded-3xl items-center justify-center'>
      <Text className='text-white'>TU</Text>
    </View>
  )
}

const getHeaderLeft = () => {
  const condominio = "Hyper Living";
  return (
    <TouchableOpacity className="flex-row items-center">
      <View className='h-10 w-10 bg-primary rounded-3xl items-center justify-center'>
        <Ionicons name="location-outline" size={20} color="#fff" />
      </View>
      <Text className="text-xl text-black ml-4 mr-2">
        {condominio}
      </Text>
      <Ionicons name="chevron-down" size={20} color="#456EFE" />
    </TouchableOpacity>
  )
}

export default Layout;
