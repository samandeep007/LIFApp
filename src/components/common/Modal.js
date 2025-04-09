import { View, Dimensions, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import { COLORS, scaleFont } from '../../utils/constants';

const { width, height } = Dimensions.get('window');

const Modal = ({ visible, onClose, children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        className="bg-[#000000] rounded-[8px] p-[scaleFont(16)]"
        style={{ width: width * 0.8, maxHeight: height * 0.8 }}
      >
        {children}
      </View>
    </Animated.View>
  );
};

export default Modal;