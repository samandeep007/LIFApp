import { View, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import Swiper from 'react-native-deck-swiper';
import { COLORS, scaleFont } from '../../utils/constants';
import { getProfiles, likeProfile, undoLastSwipe } from '../../backendProxy/rest/user';
import Card from '../../components/feature/Card';
import IconButton from '../../components/feature/IconButton';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const [profiles, setProfiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await getProfiles({
          maxDistance: 50,
          ageMin: 18,
          ageMax: 40,
          gender: 'all',
          interests: '',
          preferences: '',
          ethnicity: '',
          education: '',
          smoking: '',
        });
        setProfiles(response.data);
      } catch (error) {
        console.error('Failed to fetch profiles:', error);
      }
    };
    fetchProfiles();
  }, []);

  const handleSwipe = async (direction, profileId) => {
    try {
      await likeProfile({ profileId, direction });
      setCurrentIndex(currentIndex + 1);
    } catch (error) {
      console.error('Swipe failed:', error);
    }
  };

  const handleUndo = async () => {
    try {
      await undoLastSwipe();
      setCurrentIndex(currentIndex - 1);
    } catch (error) {
      console.error('Undo failed:', error);
    }
  };

  return (
    <View className="flex-1 bg-[#000000] p-[scaleFont(16)]">
      {profiles.length > 0 && currentIndex < profiles.length ? (
        <>
          <Swiper
            cards={profiles}
            renderCard={(profile) => <Card profile={profile} />}
            onSwipedLeft={(index) => handleSwipe('left', profiles[index]._id)}
            onSwipedRight={(index) => handleSwipe('right', profiles[index]._id)}
            onSwipedTop={(index) => handleSwipe('up', profiles[index]._id)}
            cardIndex={currentIndex}
            backgroundColor="transparent"
            stackSize={3}
            cardVerticalMargin={0}
            cardHorizontalMargin={0}
            disableBottomSwipe
            animateCardOpacity
            animateOverlayLabelsOpacity
            swipeBackCard
          />
          <View className="flex-row justify-around mt-[scaleFont(20)]">
            <IconButton icon="x" onPress={() => handleSwipe('left', profiles[currentIndex]._id)} color="#ff4444" />
            <IconButton icon="rotate-ccw" onPress={handleUndo} color="#888888" />
            <IconButton icon="heart" onPress={() => handleSwipe('right', profiles[currentIndex]._id)} color="#00cc00" />
            <IconButton icon="star" onPress={() => handleSwipe('up', profiles[currentIndex]._id)} color="#ffbb00" />
          </View>
        </>
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text className="text-[#ffffff] font-roboto-medium" style={{ fontSize: scaleFont(16) }}>
            No more profiles to show
          </Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;