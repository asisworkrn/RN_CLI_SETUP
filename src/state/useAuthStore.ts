import { create } from 'zustand';
import { storage, StorageKeys } from './storage';

type AuthState = {
  token: string | null;
  setToken: (token: string | null) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: storage.getString(StorageKeys.TOKEN) || null,

  setToken: (token) => {
    if (token) {
      storage.set(StorageKeys.TOKEN, token);
    } else {
      storage.remove(StorageKeys.TOKEN);
    }

    set({ token });
  },
}));