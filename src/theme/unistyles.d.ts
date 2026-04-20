// src/theme/unistyles.d.ts

import { appThemes } from "./themes";
import { breakpoints } from "./breakpoints";

type AppThemes = typeof appThemes;
type AppBreakpoints = typeof breakpoints;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

export {};