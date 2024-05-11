import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { loginUserData } from '../utils/controlUserData';
import { searchUserLibData } from '../utils/controlBookData';

export default function useUserLibData(query) {
  const {
    data: constData,
    isLoading,
    isStale,
    refetch,
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

  return { data, isLoading, isStale, refetch };
}
