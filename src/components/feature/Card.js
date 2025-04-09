import { View, Text, Image, Dimensions } from 'react-native';
import { COLORS, scaleFont } from '../../utils/constants';

const { width, height } = Dimensions.get('window');

const Card = ({ profile }) => {
  return (
    <View
      className="bg-[#ffffff] rounded-[8px] border-[#ffffff] border-opacity-20"
      style={{ width: width * 0.8, height: height * 0.6 }}
    >
      <Image
        source={{ uri: profile.photo || 'https://via.placeholder.com/150' }}
        style={{ width: '100%', height: '70%', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
      />
      <View className="p-[scaleFont(12)]">
        <Text className="text-[#000000] font-roboto-bold" style={{ fontSize: scaleFont(18) }}>
          {profile.name}, {profile.age}
        </Text>
        <Text className="text-[#000000] font-roboto-medium" style={{ fontSize: scaleFont(14) }}>
          {profile.gender} | {profile.prompt}
        </Text>
        <Text className="text-[#000000] font-roboto-regular" style={{ fontSize: scaleFont(12) }}>
          Distance: {profile.distance || 'Unknown'} km
        </Text>
      </View>
    </View>
  );
};

export default Card;