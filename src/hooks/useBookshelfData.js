import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { loginUserData } from '../utils/controlUserData';
import { searchLibraryData } from '../utils/controlBookData';

export function useBookshelfData(query) {
  const { data: constData, isLoading } = useQuery({
    queryKey: ['bookshelf', loginUserData.id],
    queryFn: () => searchLibraryData(query),
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

  return { data, isLoading };
}
