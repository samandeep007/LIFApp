import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Button } from '../../components/common';
import Toast from '../../components/common/Toast'; // Default import
import { COLORS, scaleFont } from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const { width } = Dimensions.get('window');

const VerifyEmailScreen = () => {
  const navigation = useNavigation();
  const [toastMessage, setToastMessage] = useState('');

  const handleResend = () => {
    // Backend call to resend email would go here
    setToastMessage('Resend email not implemented yet');
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Check your email to verify your account!</Text>
      <Button title="Resend Email" icon="refresh-cw" onPress={handleResend} />
      <Button
        title="Back to Login"
        icon="arrow-left"
        onPress={() => navigation.navigate('Login')}
        style={{ marginTop: scaleFont(20), backgroundColor: COLORS.secondary }}
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
    alignItems: 'center',
  },
  message: {
    color: COLORS.secondary,
    fontFamily: 'Roboto-Medium',
    fontSize: scaleFont(16),
    textAlign: 'center',
    marginBottom: scaleFont(20),
  },
});

export default VerifyEmailScreen;