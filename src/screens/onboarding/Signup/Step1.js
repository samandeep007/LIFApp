import { View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input, ProgressBar } from '../../../components/common';
import { COLORS, scaleFont } from '../../../utils/constants';

const { width } = Dimensions.get('window');

const Step1 = ({ formData, setFormData }) => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-[#000000] p-[scaleFont(16)]">
      <ProgressBar progress={0.25} />
      <Input
        placeholder="Email"
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        value={formData.email}
      />
      <Input
        placeholder="Password"
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        value={formData.password}
        secureTextEntry
      />
      <Input
        placeholder="Name"
        onChangeText={(text) => setFormData({ ...formData, name: text })}
        value={formData.name}
      />
      <Button
        title="Next"
        icon="arrow-right"
        onPress={() => navigation.navigate('SignupStep2')}
        style={{ marginTop: scaleFont(20) }}
      />
    </View>
  );
};

export default Step1;