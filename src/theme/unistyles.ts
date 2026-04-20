// src/theme/unistyles.ts

import { StyleSheet } from "react-native-unistyles";
import { appThemes } from "./themes";
import { breakpoints } from "./breakpoints";

StyleSheet.configure({
  themes: appThemes,
  breakpoints,
 settings: {
    initialTheme: "light",
  },
});