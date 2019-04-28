import { Platform } from 'react-native';
export const fonts = {
  fontPrimaryLight: Platform.OS === 'ios' ? 'OpenSans-Light' : 'OpenSans-Light',
  fontPrimaryBlack: Platform.OS === 'ios' ? 'OpenSans-Black' : 'OpenSans-Black',
  fontPrimaryItalic:
    Platform.OS === 'ios' ? 'OpenSans-Medium' : 'OpenSans-Medium',
  fontPrimaryBold: Platform.OS === 'ios' ? 'OpenSans-Bold' : 'OpenSans-Bold',
  fontPrimaryRegular:
    Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans-Regular'
};
