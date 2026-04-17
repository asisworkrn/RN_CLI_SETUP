// src/services/api/baseApi.ts
import { AxiosRequestConfig } from 'axios';
import { apiClient } from './axios';

type RequestConfig = AxiosRequestConfig;

export const api = {
  get: async <T>(url: string, config?: RequestConfig): Promise<T> => {
    const res = await apiClient.get<T>(url, config);
    return res.data;
  },

  post: async <T>(
    url: string,
    data?: unknown,
    config?: RequestConfig
  ): Promise<T> => {
    const res = await apiClient.post<T>(url, data, config);
    return res.data;
  },

  put: async <T>(
    url: string,
    data?: unknown,
    config?: RequestConfig
  ): Promise<T> => {
    const res = await apiClient.put<T>(url, data, config);
    return res.data;
  },

  patch: async <T>(
    url: string,
    data?: unknown,
    config?: RequestConfig
  ): Promise<T> => {
    const res = await apiClient.patch<T>(url, data, config);
    return res.data;
  },

  delete: async <T>(
    url: string,
    config?: RequestConfig
  ): Promise<T> => {
    const res = await apiClient.delete<T>(url, config);
    return res.data;
  },

  // ✅ Optional helper for file uploads (FormData)
  postFormData: async <T>(
    url: string,
    data: FormData,
    config?: RequestConfig
  ): Promise<T> => {
    const res = await apiClient.post<T>(url, data, {
      ...config,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...(config?.headers),
      },
    });
    return res.data;
  },
};