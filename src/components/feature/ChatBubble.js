import { View, Text, Dimensions } from 'react-native';
import { COLORS, scaleFont } from '../../utils/constants';

const { width } = Dimensions.get('window');

const ChatBubble = ({ message, isOwnMessage }) => (
  <View
    className={`p-[scaleFont(12)] rounded-[8px] mb-[scaleFont(8)] max-w-[${width * 0.7}] ${
      isOwnMessage ? 'bg-[#feacd0] self-end' : 'bg-[#ffffff] self-start'
    }`}
  >
    <Text
      className={isOwnMessage ? 'text-[#ffffff]' : 'text-[#000000]'}
      style={{ fontSize: scaleFont(14), fontFamily: 'Roboto-Regular' }}
    >
      {message.text}
    </Text>
    <Text
      className={isOwnMessage ? 'text-[#ffffff80]' : 'text-[#00000080]'}
      style={{ fontSize: scaleFont(10), fontFamily: 'Roboto-Regular', marginTop: scaleFont(4) }}
    >
      {new Date(message.createdAt).toLocaleTimeString()}
    </Text>
  </View>
);

export default ChatBubble;