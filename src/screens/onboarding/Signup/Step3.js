// src/screens/onboarding/Signup/Step3.js
import { View, Text, Dimensions, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input, ProgressBar, Toast } from '../../../components/common';
import { COLORS, scaleFont } from '../../../utils/constants';
import * as Location from 'expo-location';
import { useState } from 'react';
import axios from 'axios';

const { width } = Dimensions.get('window');

const Step3 = ({ formData, setFormData }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [locationInput, setLocationInput] = useState('');

  // Fetch current location
  const getCurrentLocation = async () => {
    setLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setToastMessage('Permission to access location was denied');
        setTimeout(() => setToastMessage(''), 3000);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setFormData({
        ...formData,
        lat: location.coords.latitude.toString(),
        lng: location.coords.longitude.toString(),
      });
      setToastMessage('Location fetched successfully');
      setTimeout(() => setToastMessage(''), 3000);
    } catch (error) {
      setToastMessage('Failed to get location: ' + error.message);
      setTimeout(() => setToastMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  // Geocode city/address to lat/lng
  const geocodeAddress = async () => {
    if (!locationInput) {
      setToastMessage('Please enter a city or address');
      setTimeout(() => setToastMessage(''), 3000);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationInput)}&format=json&limit=1`
      );
      if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setFormData({
          ...formData,
          lat: lat,
          lng: lon,
        });
        setToastMessage('Location set from address');
        setTimeout(() => setToastMessage(''), 3000);
      } else {
        setToastMessage('Could not find location');
        setTimeout(() => setToastMessage(''), 3000);
      }
    } catch (error) {
      setToastMessage('Geocoding failed: ' + error.message);
      setTimeout(() => setToastMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-[#000000] p-[scaleFont(16)]">
      <ProgressBar progress={0.75} />
      <Button
        title={loading ? "Fetching..." : "Use Current Location"}
        icon="map-pin"
        onPress={getCurrentLocation}
        style={{ marginBottom: scaleFont(16) }}
        disabled={loading}
      />
      {loading && <ActivityIndicator size="small" color={COLORS.primary} />}
      <Input
        placeholder="City or Address"
        onChangeText={setLocationInput}
        value={locationInput}
        style={{ marginBottom: scaleFont(16) }}
      />
      <Button
        title="Set Location"
        icon="check"
        onPress={geocodeAddress}
        style={{ marginBottom: scaleFont(16) }}
        disabled={loading}
      />
      <Input
        placeholder="Age"
        onChangeText={(text) => setFormData({ ...formData, age: text })}
        value={formData.age}
        keyboardType="numeric"
      />
      <Input
        placeholder="Gender (male/female/nonbinary)"
        onChangeText={(text) => setFormData({ ...formData, gender: text })}
        value={formData.gender}
      />
      <Button
        title="Next"
        icon="arrow-right"
        onPress={() => navigation.navigate('SignupStep4')}
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

export default Step3;