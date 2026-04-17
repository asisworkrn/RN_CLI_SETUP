import { createMMKV } from 'react-native-mmkv'

export const storage = createMMKV({
  id: 'app-storage',
});

export const StorageKeys = {
  TOKEN: 'token',
};