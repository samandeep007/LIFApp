import { View, Text, Dimensions } from 'react-native';
import { Button, Toast } from '../../components/common/';
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
    <View className="flex-1 bg-[#000000] p-[scaleFont(16)] justify-center items-center">
      <Text
        className="text-[#ffffff] font-roboto-medium mb-[scaleFont(20)]"
        style={{ fontSize: scaleFont(16), textAlign: 'center' }}
      >
        Check your email to verify your account!
      </Text>
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

export default VerifyEmailScreen;