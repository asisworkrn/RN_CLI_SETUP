import { useEffect } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@src/app/queryClient";
import RootNavigator from "@src/navigation/root/RootNavigator";
import { useThemeStore } from "@src/state/useThemeStore";

function App() {

  const hydrateTheme = useThemeStore((s) => s.hydrateTheme);
  const theme = useThemeStore((s) => s.theme);

  // hydrate saved theme on app start
  useEffect(() => {
    hydrateTheme();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={
            theme === "dark" ? "light-content" : "dark-content"
          }
          backgroundColor="transparent"
        />

        <RootNavigator />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;