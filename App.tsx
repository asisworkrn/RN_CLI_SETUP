/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { queryClient } from '@src/app/queryClient';
import RootNavigator from '@src/navigation/root/RootNavigator';
import { QueryClientProvider } from '@tanstack/react-query';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator></RootNavigator>
    </SafeAreaProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
