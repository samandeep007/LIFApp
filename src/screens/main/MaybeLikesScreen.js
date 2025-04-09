import { View, FlatList, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { COLORS, scaleFont } from '../../utils/constants';
import { getMaybeLikes, likeProfile } from '../../backendProxy/rest/user';
import ProfileTile from '../../components/feature/ProfileTile';
import IconButton from '../../components/feature/IconButton';

const { width } = Dimensions.get('window');

const MaybeLikesScreen = () => {
  const [maybeLikes, setMaybeLikes] = useState([]);

  useEffect(() => {
    const fetchMaybeLikes = async () => {
      try {
        const response = await getMaybeLikes();
        setMaybeLikes(response.data);
      } catch (error) {
        console.error('Failed to fetch maybe likes:', error);
      }
    };
    fetchMaybeLikes();
  }, []);

  const handleLike = async (profileId) => {
    try {
      await likeProfile({ profileId, direction: 'right' });
      setMaybeLikes(maybeLikes.filter((profile) => profile._id !== profileId));
    } catch (error) {
      console.error('Like failed:', error);
    }
  };

  const handleRemove = (profileId) => {
    setMaybeLikes(maybeLikes.filter((profile) => profile._id !== profileId));
  };

  const renderItem = ({ item }) => (
    <View className="flex-row items-center justify-between">
      <ProfileTile profile={item} />
      <View className="flex-row">
        <IconButton icon="heart" onPress={() => handleLike(item._id)} color="#00cc00" />
        <IconButton icon="trash" onPress={() => handleRemove(item._id)} color="#ff4444" />
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-[#000000] p-[scaleFont(16)]">
      <FlatList
        data={maybeLikes}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center">
            <Text className="text-[#ffffff] font-roboto-medium" style={{ fontSize: scaleFont(16) }}>
              No maybe likes yet
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default MaybeLikesScreen;