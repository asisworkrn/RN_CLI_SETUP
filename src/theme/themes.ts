// src/theme/themes.ts

import { lightColors, darkColors } from "./colors";

export const appThemes = {
  light: {
    colors: lightColors,
    spacing: (v: number) => v * 8,
  },

  dark: {
    colors: darkColors,
    spacing: (v: number) => v * 8,
  },
};