// src/app/queryClient.ts
import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any) => {
      console.log('Query Error:', error?.message || error);
    },
  }),

  mutationCache: new MutationCache({
    onError: (error: any) => {
      console.log('Mutation Error:', error?.message || error);
    },
  }),

  defaultOptions: {
    queries: {
      retry: (failureCount, error: any) => {
        if (error?.status === 401) return false;
        return failureCount < 2;
      },

      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,

      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
    },

    mutations: {
      retry: 0,
    },
  },
});