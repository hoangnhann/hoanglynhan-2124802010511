import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

type Product = {
  id: string;
  name: string;
  category: 'Điện thoại' | 'Máy tính';
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    category: 'Điện thoại',
    price: 29990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24',
    category: 'Điện thoại',
    price: 23990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/305658/samsung-galaxy-s24-plus-thumb-600x600.jpg',
  },
  {
    id: '3',
    name: 'MacBook Pro M3',
    category: 'Máy tính',
    price: 48990000,
    image: 'https://cdn.tgdd.vn/Products/Images/44/299888/macbook-pro-m3-2023-600x600.jpg',
  },
  {
    id: '4',
    name: 'ASUS ROG Strix',
    category: 'Máy tính',
    price: 34990000,
    image: 'https://cdn.tgdd.vn/Products/Images/44/278522/asus-rog-strix-g15-thumb-600x600.jpg',
  },
];

const ProductScreen = () => {
  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.price}>{item.price.toLocaleString()} đ</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách sản phẩm</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  category: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    color: '#e91e63',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default ProductScreen;
