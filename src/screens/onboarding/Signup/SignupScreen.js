import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const Stack = createStackNavigator();

const SignupScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    prompt: '',
    lat: '',
    lng: '',
    age: '',
    gender: '',
    interests: '',
    photo: null,
  });

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignupStep1" children={(props) => <Step1 {...props} formData={formData} setFormData={setFormData} />} />
      <Stack.Screen name="SignupStep2" children={(props) => <Step2 {...props} formData={formData} setFormData={setFormData} />} />
      <Stack.Screen name="SignupStep3" children={(props) => <Step3 {...props} formData={formData} setFormData={setFormData} />} />
      <Stack.Screen name="SignupStep4" children={(props) => <Step4 {...props} formData={formData} setFormData={setFormData} />} />
    </Stack.Navigator>
  );
};

export default SignupScreen;