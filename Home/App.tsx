import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductDetailScreen from './screens/ProductDetailScreen'; // 👈 Import thêm

export type Product = {
  id: string;
  name: string;
  category: 'Điện thoại' | 'Máy tính';
  price: number;
  image: string;
};

// 👇 Thêm định nghĩa kiểu RootStackParamList
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Product: undefined;
  ProductDetail: { product: Product }; // 👈 Thêm dòng này
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Chi tiết sản phẩm' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
