import React from 'react';
import { Text, TextProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import {
  fontSizes,
  fontFamilies,
  lineHeights,
  letterSpacing,
} from '@src/theme/fonts';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'bodyMedium'
  | 'caption';

type FontWeight = 'regular' | 'medium' | 'semiBold' | 'bold';

interface Props extends Readonly<TextProps> {
  readonly variant?: Variant;
  readonly weight?: FontWeight;
  readonly style?: TextProps['style'];
}

const stylesheet = StyleSheet.create({
  h1: {
    fontSize: fontSizes.xxxl,
    lineHeight: lineHeights.xxxl,
    letterSpacing: letterSpacing.normal,
  },

  h2: {
    fontSize: fontSizes.xxl,
    lineHeight: lineHeights.xxl,
    letterSpacing: letterSpacing.normal,
  },

  h3: {
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    letterSpacing: letterSpacing.normal,
  },

  body: {
    fontSize: fontSizes.base,
    lineHeight: lineHeights.base,
    letterSpacing: letterSpacing.normal,
  },

  bodyMedium: {
    fontSize: fontSizes.base,
    lineHeight: lineHeights.base,
    letterSpacing: letterSpacing.normal,
  },

  caption: {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    letterSpacing: letterSpacing.normal,
  },
});

const getFontFamily = (weight: FontWeight) => {
  return fontFamilies.poppins[weight];
};


export default function AppText({
  variant = 'body',
  weight = 'regular',
  style,
  ...props
}: Props) {
  return (
    <Text
      {...props}
      style={[
        stylesheet[variant],
        { fontFamily: getFontFamily(weight) },
        style,
      ]}
    />
  );
}
