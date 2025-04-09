import { View, Text, Image, Dimensions } from 'react-native';
import { COLORS, scaleFont } from '../../utils/constants';

const { width } = Dimensions.get('window');

const ProfileTile = ({ profile }) => (
  <View className="flex-row items-center p-[scaleFont(12)] bg-[#ffffff] rounded-[8px] mb-[scaleFont(8)]">
    <Image
      source={{ uri: profile.photo || 'https://via.placeholder.com/50' }}
      style={{ width: scaleFont(50), height: scaleFont(50), borderRadius: scaleFont(25) }}
    />
    <View className="ml-[scaleFont(12)] flex-1">
      <Text className="text-[#000000] font-roboto-medium" style={{ fontSize: scaleFont(16) }}>
        {profile.name}, {profile.age}
      </Text>
      <Text className="text-[#000000] font-roboto-regular" style={{ fontSize: scaleFont(14) }}>
        {profile.gender} | {profile.prompt}
      </Text>
    </View>
  </View>
);

export default ProfileTile;