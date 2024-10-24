import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { loginUserData } from '../utils/controlUserData';
import { searchUserLibData } from '../utils/controlBookData';

export default function useUserLibData(query) {
  const {
    data: constData,
    isLoading,
    error,
    failureCount,
    failureReason,
  } = useQuery({
    queryKey: ['bookshelf', loginUserData.id],
    queryFn: () => searchUserLibData(query),
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!isLoading && constData) {
      if (query === '') {
        setData([...constData]);
      } else {
        setData([...constData]?.filter((item) => item.title.includes(query)));
      }
    }
  }, [query, isLoading, constData]);

  return {
    data,
    isLoading,
    error,
    failureCount,
    failureReason,
  };
}
