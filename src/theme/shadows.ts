import { Platform } from 'react-native';
export const shadows = {
  soft: Platform.select({ ios: { shadowColor: '#412B1D', shadowOpacity: 0.07, shadowRadius: 16, shadowOffset: { width: 0, height: 5 } }, android: { elevation: 2 }, default: {} }),
} as const;
