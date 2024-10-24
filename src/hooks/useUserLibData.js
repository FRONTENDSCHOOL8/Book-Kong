import { useQuery } from '@tanstack/react-query';
import { loginUserData } from '../utils/controlUserData';
import { searchUserLibData } from '../utils/controlBookData';

export default function useUserLibData(query) {
  const { data, isLoading, error, failureCount, failureReason } = useQuery({
    queryKey: ['bookshelf', loginUserData.id],
    queryFn: () => searchUserLibData(query),
  });

  return {
    data,
    isLoading,
    error,
    failureCount,
    failureReason,
  };
}
