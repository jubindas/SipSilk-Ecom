import { QueryClient } from "@tanstack/react-query";

interface CustomError extends Error {
  status?: number;
  isNetworkError?: boolean;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 min
      refetchOnWindowFocus: false,
      retry: (failureCount, error: CustomError) => {
        if (error.status === 404) return false;
        return failureCount < 3;
      },
      retryDelay: (attemptIndex) => {
        // Exponential backoff: 1s, 2s, 4s, etc.
        return Math.min(1000 * 2 ** attemptIndex, 30000);
      },
    },
    mutations: {
      retry: 2,
      retryDelay: 1000,
    },
  },
});
