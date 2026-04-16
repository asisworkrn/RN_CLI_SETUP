import { createNavigationContainerRef } from "@react-navigation/native";
import type { AppStackParamList } from "./types";

export const navigationRef = createNavigationContainerRef<AppStackParamList>();

// 🔥 Navigate
export function navigate(name: keyof AppStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

// 🔁 Replace
export function replace(name: keyof AppStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{ name, params }],
    });
  }
}

// ⬅️ Go back
export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}