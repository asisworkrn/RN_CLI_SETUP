// src/services/api/axios.ts
import { useAuthStore } from '@src/state/useAuthStore';
import axios from 'axios';


export const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 55000,
});

// REQUEST
apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Dynamic headers
  config.headers.Accept = 'application/json';

  // FormData handling
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
});

// RESPONSE
apiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const status = error.response?.status;

    if (status === 401) {
      useAuthStore.getState().setToken(null);
    }

    const normalizedError = {
      message:
        error.response?.data?.message ||
        error.message ||
        'Something went wrong',
      status,
      data: error.response?.data,
    };

    throw normalizedError;
  }

);