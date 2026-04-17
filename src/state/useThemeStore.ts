import { create } from "zustand";
import { Appearance } from "react-native";
import { storage, StorageKeys } from "./storage";
import { UnistylesRuntime } from "react-native-unistyles";

type Theme = "light" | "dark";

type ThemeState = {
  theme: Theme;
  hydrateTheme: () => void;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const getSystemTheme = (): Theme => {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme === "dark" ? "dark" : "light";
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  // 1. initial value = MMKV OR system theme
  theme:
    (storage.getString(StorageKeys.THEME) as Theme) || getSystemTheme(),

  // 2. hydrate on app start
  hydrateTheme: () => {
    const savedTheme = storage.getString(StorageKeys.THEME) as Theme;

    const finalTheme = savedTheme || getSystemTheme();

    UnistylesRuntime.setTheme(finalTheme);

    set({ theme: finalTheme });
  },

  // 3. manual set
  setTheme: (theme) => {
    storage.set(StorageKeys.THEME, theme);

    UnistylesRuntime.setTheme(theme);

    set({ theme });
  },

  // 4. toggle
  toggleTheme: () => {
    const nextTheme = get().theme === "light" ? "dark" : "light";

    storage.set(StorageKeys.THEME, nextTheme);

    UnistylesRuntime.setTheme(nextTheme);

    set({ theme: nextTheme });
  },
}));