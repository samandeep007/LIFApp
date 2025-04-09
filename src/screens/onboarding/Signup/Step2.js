import { StyleSheet, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input, ProgressBar } from '../../../components/common';
import { COLORS, scaleFont } from '../../../utils/constants';

const { width } = Dimensions.get('window');

const Step2 = ({ formData, setFormData }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ProgressBar progress={0.5} />
      <Input
        placeholder="Phone"
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
        value={formData.phone}
        keyboardType="phone-pad"
      />
      <Input
        placeholder="Prompt (max 50 chars)"
        onChangeText={(text) => setFormData({ ...formData, prompt: text })}
        value={formData.prompt}
        maxLength={50}
      />
      <Button
        title="Next"
        icon="arrow-right"
        onPress={() => navigation.navigate('SignupStep3')}
        style={{ marginTop: scaleFont(20) }}
      />
      <Button
        title="Back"
        icon="arrow-left"
        onPress={() => navigation.goBack()}
        style={{ marginTop: scaleFont(10), backgroundColor: COLORS.secondary }}
      />
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

export default Step2;