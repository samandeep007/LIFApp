import { View, FlatList, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, scaleFont } from '../../utils/constants';
import { getInbox, deleteConversation } from '../../backendProxy/rest/message';
import { setInbox, removeConversation } from '../../redux/slices/chatSlice';
import ProfileTile from '../../components/feature/ProfileTile';
import IconButton from '../../components/feature/IconButton';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const InboxScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const inbox = useSelector((state) => state.chat.inbox);

  useEffect(() => {
    const fetchInbox = async () => {
      try {
        const response = await getInbox();
        dispatch(setInbox(response.data));
      } catch (error) {
        console.error('Failed to fetch inbox:', error);
      }
    };
    fetchInbox();
  }, [dispatch]);

  const handleDelete = async (userId) => {
    try {
      await deleteConversation(userId);
      dispatch(removeConversation(userId));
    } catch (error) {
      console.error('Delete conversation failed:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View className="flex-row items-center justify-between">
      <ProfileTile profile={item.user} />
      <View className="flex-row">
        <IconButton
          icon="message-circle"
          onPress={() => navigation.navigate('Chat', { userId: item.user._id, userName: item.user.name })}
          color="#feacd0"
        />
        <IconButton icon="trash" onPress={() => handleDelete(item.user._id)} color="#ff4444" />
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-[#000000] p-[scaleFont(16)]">
      <FlatList
        data={inbox}
        renderItem={renderItem}
        keyExtractor={(item) => item.user._id}
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center">
            <Text className="text-[#ffffff] font-roboto-medium" style={{ fontSize: scaleFont(16) }}>
              No conversations yet
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default InboxScreen;