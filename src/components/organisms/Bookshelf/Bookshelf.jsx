import List from '../List/List';
import { useQuery } from '@tanstack/react-query';
import { loginUserData } from '../../../utils/controlUserData';
import { searchLibraryData } from '../../../utils/controlBookData';
import { useState } from 'react';
import Filter from '../../molecules/Filter/Filter';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

function Bookshelf() {
  const [filter, setFilter] = useState('전체');
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const { data: constData, isLoading } = useQuery({
    queryKey: ['bookshelf', loginUserData.id],
    queryFn: () => searchLibraryData(query),
  });

  useEffect(() => {
    if (!isLoading && constData) {
      if (query === '') {
        setData([...constData]);
      } else {
        setData([...constData]?.filter((item) => item.title.includes(query)));
      }
    }
  }, [query, isLoading, constData]);

  const handleClick = (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    setFilter(button.innerText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newKeyword = e.target[0].value.trim();
    setQuery(newKeyword);
  };

  return (
    <main className="px-4 pt-[129px] pb-[120px] overflow-scroll h-screen">
      <Helmet>
        <title>책콩 | 서재 페이지 - 책장</title>
      </Helmet>
      <SearchBar onSubmit={handleSubmit} />
      <Filter onClick={handleClick} filter={filter} />
      <List
        data={
          filter === '전체'
            ? data
            : data?.filter((data) => data.status === filter)
        }
      />
    </main>
  );
}

export default Bookshelf;
