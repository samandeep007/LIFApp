import { View, FlatList, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, scaleFont } from '../../utils/constants';
import { getConversation, sendMessage, markMessagesRead } from '../../backendProxy/rest/message';
import { addConversation, addMessage, markRead } from '../../redux/slices/chatSlice';
import ChatBubble from '../../components/feature/ChatBubble';
import { Input, IconButton, Modal } from '../../components/common';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const { userId, userName } = route.params;
  const messages = useSelector((state) => state.chat.conversations[userId] || []);
  const currentUser = useSelector((state) => state.user.user);
  const [newMessage, setNewMessage] = useState('');
  const [confessionModalVisible, setConfessionModalVisible] = useState(false);
  const [safetyModalVisible, setSafetyModalVisible] = useState(false);
  const [confessionText, setConfessionText] = useState('');

  useEffect(() => {
    const fetchConversation = async () => {
      try {
        const response = await getConversation(userId);
        dispatch(addConversation({ userId, messages: response.data }));
        await markMessagesRead(userId);
        dispatch(markRead(userId));
      } catch (error) {
        console.error('Failed to fetch conversation:', error);
      }
    };
    fetchConversation();
  }, [userId, dispatch]);

  const handleSend = async () => {
    if (!newMessage.trim()) return;
    try {
      const message = {
        recipientId: userId,
        text: newMessage,
        createdAt: new Date().toISOString(),
      };
      await sendMessage({ recipientId: userId, text: newMessage });
      dispatch(addMessage({ userId, message: { ...message, sender: currentUser._id, read: false } }));
      setNewMessage('');
    } catch (error) {
      console.error('Send message failed:', error);
    }
  };

  const handleSendConfession = async () => {
    if (!confessionText.trim()) return;
    try {
      await sendMessage({ recipientId: userId, text: confessionText, isConfession: true });
      dispatch(
        addMessage({
          userId,
          message: {
            recipientId: userId,
            text: confessionText,
            createdAt: new Date().toISOString(),
            sender: currentUser._id,
            isConfession: true,
            read: false,
          },
        })
      );
      setConfessionModalVisible(false);
      setConfessionText('');
    } catch (error) {
      console.error('Send confession failed:', error);
    }
  };

  const renderItem = ({ item }) => (
    <ChatBubble message={item} isOwnMessage={item.sender === currentUser._id} />
  );

  return (
    <View className="flex-1 bg-[#000000] p-[scaleFont(16)]">
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.createdAt}-${index}`}
        contentContainerStyle={{ paddingBottom: scaleFont(16) }}
      />
      <View className="flex-row items-center">
        <Input
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={setNewMessage}
          style={{ flex: 1, marginRight: scaleFont(8) }}
        />
        <IconButton icon="send" onPress={handleSend} color="#feacd0" />
        <IconButton icon="edit" onPress={() => setConfessionModalVisible(true)} color="#ffbb00" />
        <IconButton icon="shield" onPress={() => setSafetyModalVisible(true)} color="#888888" />
      </View>

      {/* Confession Modal */}
      <Modal visible={confessionModalVisible} onClose={() => setConfessionModalVisible(false)}>
        <Text className="text-[#ffffff] font-roboto-bold" style={{ fontSize: scaleFont(18), marginBottom: scaleFont(16) }}>
          Send a Confession
        </Text>
        <Input
          placeholder="Write your confession..."
          value={confessionText}
          onChangeText={setConfessionText}
          style={{ marginBottom: scaleFont(16) }}
        />
        <Button title="Send" icon="send" onPress={handleSendConfession} />
        <Button
          title="Cancel"
          icon="x"
          onPress={() => setConfessionModalVisible(false)}
          style={{ marginTop: scaleFont(8), backgroundColor: COLORS.secondary }}
        />
      </Modal>

      {/* Safety Guidelines Modal */}
      <Modal visible={safetyModalVisible} onClose={() => setSafetyModalVisible(false)}>
        <Text className="text-[#ffffff] font-roboto-bold" style={{ fontSize: scaleFont(18), marginBottom: scaleFont(16) }}>
          Safety Guidelines
        </Text>
        <Text className="text-[#ffffff] font-roboto-regular" style={{ fontSize: scaleFont(14), marginBottom: scaleFont(16) }}>
          1. Be respectful in your messages.\n
          2. Do not share personal information.\n
          3. Report any suspicious behavior.
        </Text>
        <Button
          title="Close"
          icon="x"
          onPress={() => setSafetyModalVisible(false)}
          style={{ backgroundColor: COLORS.secondary }}
        />
      </Modal>
    </View>
  );
};

export default ChatScreen;