import { useState, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import UserBookList from '../UserBookList/UserBookList';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import ReadingStateFilter from '../../molecules/ReadingStateFilter/ReadingStateFilter';
import { getAllUserLibRecs } from '../../../utils/controlBookData';
import { loginUserData } from '../../../utils/controlUserData';
import { useQuery } from '@tanstack/react-query';
import debounce from '../../../utils/debounce';

function Bookshelf() {
  /* 책장 페이지에 필요한 데이터를 debouncedQuery로 요청
  책장 내 SearchBar input value의 실시간 상태 업데이트를 위해 localQuery와 debouncedQuery를 구분하여 설정 */
  const [localQuery, setLocalQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  const { data, isLoading, error, failureCount, failureReason } = useQuery({
    queryKey: ['library', loginUserData],
    queryFn: getAllUserLibRecs,
    select: (userLibRecs) => {
      if (debouncedQuery === '') return userLibRecs;
      else
        return userLibRecs.filter((userLibRec) =>
          userLibRec.title.includes(debouncedQuery)
        );
    },
  });

  // 쿼리 요청 실패 횟수와 실패 이유를 기준으로 error throwing 기능 구현
  if (failureCount >= 1 && failureReason.message.startsWith('Server'))
    throw error;

  if (failureCount === 4) throw error;

  const updateDebouncedQuery = useMemo(
    () =>
      debounce((query) => {
        setDebouncedQuery(query);
      }, []),
    []
  );

  const handleQuery = useCallback(
    (e) => {
      setLocalQuery(e.target.value);
      updateDebouncedQuery(e.target.value);
    },
    [updateDebouncedQuery]
  );

  // SearchBar 내 input 창에 입력된 검색어와 실제 렌더링 된 데이터가 다를 경우 data가 stale 되었음을 표시하기 위한 상태 선언
  const isStale = debouncedQuery !== localQuery;

  /* 독서 상태를 필터링하는 버튼의 innerText 값에 따라 책장에 나오는 데이터를 다르게 바꾸기 위해
  React state와 'click' event handler를 선언 */
  const [readingState, setReadingState] = useState('전체');

  const handleReadingState = useCallback((e) => {
    const button = e.target.closest('button');

    if (!button) return;

    setReadingState(button.innerText);
  }, []);

  return (
    <main className="px-4 pt-[129px] pb-[120px] overflow-scroll h-screen hide-scrollbar">
      <Helmet>
        <title>책콩 | 서재 - 책장</title>
      </Helmet>
      <SearchBar query={localQuery} onQueryChange={handleQuery} />
      <ReadingStateFilter
        onClick={handleReadingState}
        readingState={readingState}
      />
      <UserBookList
        data={
          readingState === '전체'
            ? data
            : data?.filter((record) => record.status === readingState)
        }
        isLoading={isLoading}
        isStale={isStale}
      />
    </main>
  );
}

export default Bookshelf;
