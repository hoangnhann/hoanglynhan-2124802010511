import React, { Component, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

// RootStackParamList
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Product: undefined;
};

// MenuItem interface (dùng emoji thay vì icon)
interface MenuItem {
  id: string;
  title: string;
  screen: keyof RootStackParamList;
  emoji: string;
}

// Navigation type
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

// Tính toán kích thước item
const screenWidth = Dimensions.get('window').width;
const itemSize = screenWidth / 2 - 24;

// ErrorBoundary
interface ErrorBoundaryProps {
  children: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={{ alignItems: 'center', padding: 20 }}>
          <Text style={{ color: '#ff4d4d', fontSize: 16, fontWeight: '600' }}>
            Lỗi: {this.state.error?.message}
          </Text>
          <Text style={{ color: '#333', fontSize: 14 }}>Không thể tải thành phần.</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [menuItems, setMenuItems] = React.useState<MenuItem[]>([
    { id: '1', title: 'Đăng nhập', screen: 'Login', emoji: '🔐' },
    { id: '2', title: 'Đăng ký', screen: 'Register', emoji: '📝' },
    { id: '3', title: 'Sản phẩm', screen: 'Product', emoji: '🛒' },
  ]);

  useFocusEffect(
    useCallback(() => {
      setMenuItems([
       // { id: '1', title: 'Đăng nhập', screen: 'Login', emoji: '🔐' },
       // { id: '2', title: 'Đăng ký', screen: 'Register', emoji: '📝' },
        { id: '3', title: 'Sản phẩm', screen: 'Product', emoji: '🛒' },
      ]);
      return () => {};
    }, [])
  );

  return (
    <LinearGradient
      colors={['#6b7280', '#1e3a8a']}
      style={styles.container}
    >
      <Text style={styles.title}>📱 Trang Chủ </Text>
      <ErrorBoundary>
        <FlatList
          data={menuItems}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.grid}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.8}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text style={styles.emoji}>{item.emoji}</Text>
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </ErrorBoundary>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  grid: {
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  card: {
    width: itemSize,
    height: itemSize,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  emoji: {
    fontSize: 40,
  },
  cardText: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
  },
});
