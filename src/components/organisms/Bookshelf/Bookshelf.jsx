import List from '../List/List';
import { useQuery } from '@tanstack/react-query';
import { loginUserData } from '../../../utils/controlUserData';
import { getUserLibraryData } from '../../../utils/controlBookData';
import { useState } from 'react';
import Filter from '../../molecules/Filter/Filter';

function Bookshelf() {
  const [filter, setFilter] = useState('전체');
  const { data } = useQuery({
    queryKey: ['bookshelf', loginUserData.id],
    queryFn: () => getUserLibraryData(),
  });

  const handleClick = (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    setFilter(button.innerText);
  };

  return (
    <main className="px-4 pt-[129px] pb-[120px] overflow-scroll h-screen">
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
