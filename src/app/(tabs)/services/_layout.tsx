import { View, Text, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {

  return (
    <Stack
      screenOptions={{
        headerTitle: "Serviços",
        headerLargeTitle: true,
        headerShadowVisible: false,
        headerSearchBarOptions: {
          placeholder: "Buscar"
        }
      }}
    />
  );
};


export default Layout;
