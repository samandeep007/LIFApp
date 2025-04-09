import * as Haptics from 'expo-haptics';
export const triggerHaptic = (type = 'Light') => Haptics.impactAsync(Haptics.ImpactFeedbackStyle[type]);