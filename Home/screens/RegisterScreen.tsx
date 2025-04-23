import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin');
      return;
    }
    // Simulate successful registration (replace with actual registration logic)
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const handleNavigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Đăng ký</Text>
        <TextInput
          placeholder="Họ tên"
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholderTextColor="#666"
          accessible
          accessibilityLabel="Họ tên"
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#666"
          accessible
          accessibilityLabel="Email"
        />
        <TextInput
          placeholder="Mật khẩu"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#666"
          accessible
          accessibilityLabel="Mật khẩu"
        />
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleRegister}
          accessible
          accessibilityLabel="Nút đăng ký"
        >
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Đã có tài khoản? </Text>
          <TouchableOpacity onPress={handleNavigateToLogin} accessible accessibilityLabel="Đăng nhập">
            <Text style={styles.loginLink}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#E0FFFF', // Sea blue background
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 20,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5, // Floating effect
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#003087', // Dark navy for contrast
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
    backgroundColor: '#F9F9F9',
  },
  primaryButton: {
    backgroundColor: '#007BFF', // Vibrant blue
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  switchText: {
    fontSize: 14,
    color: '#003087',
  },
  loginLink: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});