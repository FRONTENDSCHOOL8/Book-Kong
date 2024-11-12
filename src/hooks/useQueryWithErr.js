import { useQuery } from '@tanstack/react-query';

// 해당 커스텀 훅에서 받는 인자와 return 값은 TanStack Query에서 제공하는 useQuery가 받는 인자, 그리고 return 값과 완전히 같음.
// TanStack Query 내 'useQuery' 사용법 링크 : https://tanstack.com/query/latest/docs/framework/react/reference/useQuery#usequery
// fetching 관련 error handling 로직 강화 필요
export function useQueryWithErr(
  {
    queryKey,
    queryFn,
    gcTime,
    enabled,
    networkMode,
    initialData,
    initialDataUpdatedAt,
    meta,
    notifyOnChangeProps,
    placeholderData,
    queryKeyHashFn,
    refetchInterval,
    refetchIntervalInBackground,
    refetchOnMount,
    refetchOnReconnect,
    refetchOnWindowFocus,
    retry,
    retryOnMount,
    retryDelay,
    select,
    staleTime,
    structuralSharing,
    throwOnError,
  },
  queryClient
) {
  const {
    data,
    dataUpdatedAt,
    error,
    errorUpdatedAt,
    failureCount,
    failureReason,
    fetchStatus,
    isError,
    isFetched,
    isFetchedAfterMount,
    isFetching,
    isInitialLoading,
    isLoading,
    isLoadingError,
    isPaused,
    isPending,
    isPlaceholderData,
    isRefetchError,
    isRefetching,
    isStale,
    isSuccess,
    promise,
    refetch,
    status,
  } = useQuery(
    {
      queryKey,
      queryFn,
      gcTime,
      enabled,
      networkMode,
      initialData,
      initialDataUpdatedAt,
      meta,
      notifyOnChangeProps,
      placeholderData,
      queryKeyHashFn,
      refetchInterval,
      refetchIntervalInBackground,
      refetchOnMount,
      refetchOnReconnect,
      refetchOnWindowFocus,
      retry,
      retryOnMount,
      retryDelay,
      select,
      staleTime,
      structuralSharing,
      throwOnError,
    },
    queryClient
  );

  // 쿼리 요청 실패 횟수와 실패 이유를 기준으로 error throwing 기능 구현
  if (failureCount >= 1 && failureReason.message.startsWith('Server'))
    throw error;

  if (failureCount === 4) throw error;

  return {
    data,
    dataUpdatedAt,
    error,
    errorUpdatedAt,
    failureCount,
    failureReason,
    fetchStatus,
    isError,
    isFetched,
    isFetchedAfterMount,
    isFetching,
    isInitialLoading,
    isLoading,
    isLoadingError,
    isPaused,
    isPending,
    isPlaceholderData,
    isRefetchError,
    isRefetching,
    isStale,
    isSuccess,
    promise,
    refetch,
    status,
  };
}
