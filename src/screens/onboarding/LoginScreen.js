import { StyleSheet, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '../../components/common';
import Toast from '../../components/common/Toast'; // Default import
import { COLORS, scaleFont } from '../../utils/constants';
import { login } from '../../backendProxy/rest/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { useState } from 'react';

const { width } = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      dispatch(setUser(response.data)); // Assuming response.data has user info
      navigation.navigate('Main');
    } catch (error) {
      setToastMessage('Login failed: ' + error.message);
      setTimeout(() => setToastMessage(''), 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Email" onChangeText={setEmail} value={email} />
      <Input
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button
        title="Log In"
        icon="log-in"
        onPress={handleLogin}
        style={{ marginTop: scaleFont(20) }}
      />
      <Button
        title="Forgot Password?"
        icon="help-circle"
        onPress={() => setToastMessage('Forgot Password not implemented yet')}
        style={{ marginTop: scaleFont(10), backgroundColor: COLORS.secondary }}
      />
      {toastMessage ? <Toast message={toastMessage} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: scaleFont(16),
    justifyContent: 'center',
  },
});

export default LoginScreen;