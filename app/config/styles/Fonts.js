import { Dimensions } from 'react-native';
import BaseStyle from './BaseStyle';

import {
  scale,
  verticalScale,
  moderateScale
} from '../../utilities/ResponsiveFonts';

const Fonts = {
  normal: {
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Regular'
  },
  bold: {
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Medium'
  },
  content: {
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Regular'
  },
  contentBold: {
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Medium'
  },
  subtitle: {
    fontSize: moderateScale(18),
    fontFamily: 'Montserrat-Regular'
  },
  subtitleBold: {
    fontSize: moderateScale(18),
    fontFamily: 'Montserrat-Medium'
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Regular'
  },
  titleBold: {
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Medium'
  },
  tabHeader: {
    fontSize: moderateScale(22),
    fontFamily: 'Montserrat-Regular'
  },
  tabHeaderBold: {
    fontSize: moderateScale(22),
    fontFamily: 'Montserrat-Medium'
  },
  headers: {
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Regular'
  },
  headersBold: {
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Medium'
  },
  textInput: {
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Regular'
  },
  tinyBold: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Medium'
  },
  tiny: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular'
  },
  tinyMedium: {
    fontSize: moderateScale(11),
    fontFamily: 'Montserrat-Regular'
  },
  tinyMediumBold: {
    fontSize: moderateScale(11),
    fontFamily: 'Montserrat-Medium'
  },
  tinyLarge: {
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Regular'
  },
  tinyLargeBold: {
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Medium'
  },
  largest: {
    fontSize: moderateScale(22),
    fontFamily: 'Montserrat-Regular'
  },
  largestBold: {
    fontSize: moderateScale(22),
    fontFamily: 'Montserrat-Medium'
  },
  mediumSize: {
    fontSize: moderateScale(11),
    fontFamily: 'Montserrat-Regular',
    lineHeight: 20
  },
  mediumSizeBold: {
    fontSize: moderateScale(11),
    fontFamily: 'Montserrat-Medium',
    lineHeight: 20
  },
  smallSize: {
    fontSize: moderateScale(10),
    fontFamily: 'Montserrat-Regular',
    lineHeight: 20
  },
  navHeader: {
    fontSize: moderateScale(17),
    fontFamily: 'Montserrat-Medium'
  }
};

module.exports = Fonts;
