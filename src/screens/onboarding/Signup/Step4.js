import { StyleSheet, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input, ProgressBar } from '../../../components/common';
import Toast from '../../../components/common/Toast'; // Default import
import { COLORS, scaleFont } from '../../../utils/constants';
import { register } from '../../../backendProxy/rest/auth';
import { useState } from 'react';

const { width } = Dimensions.get('window');

const Step4 = ({ formData, setFormData }) => {
  const navigation = useNavigation();
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      await register(data);
      navigation.navigate('VerifyEmail');
    } catch (error) {
      setToastMessage('Registration failed: ' + error.message);
      setTimeout(() => setToastMessage(''), 3000);
    }
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={1.0} />
      <Input
        placeholder="Interests (comma-separated)"
        onChangeText={(text) => setFormData({ ...formData, interests: text })}
        value={formData.interests}
      />
      {/* Photo upload will be added in a later chunk */}
      <Button
        title="Sign Up"
        icon="check"
        onPress={handleSubmit}
        style={{ marginTop: scaleFont(20) }}
      />
      <Button
        title="Back"
        icon="arrow-left"
        onPress={() => navigation.goBack()}
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
  },
});

export default Step4;