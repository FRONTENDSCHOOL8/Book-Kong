import { useState, useEffect, useCallback } from 'react';

/**
 * 서버에서 useQuery로 data를 가져올 때, 같은 queryKey 값을 사용하는 경우 특정 컴포넌트에서 sorting 하는 과정이
 * 다른 컴포넌트의 데이터 렌더링 결과에 영향을 미치지 않도록 local state로 server data를 copy하고,
 * toggling을 하는 sorting 관련 event handler를 만들어 각각 내보내는 함수
 * @param { Object } 토글되는 정렬 상태를 표현하는 되는 sortState와 서버에서 fetch 해온 serverData를 prop들로 가진 object
 * @prop { Array.<string> } sortState Toggle 되는 정렬 상태를 표현하는 string 값들 ( e.g., ['오래된 순', '최신순'] )
 * @prop { Object } serverData 서버에서 fetch 해온 data
 * @returns { Object }
 * @prop { Object } copiedData 서버에서 fetch 해온 data의 copy 본이 저장 된 local state
 * @prop { string } sortState 현재 정렬 상태를 나타내는 string 값이 저장된 React local state
 * @prop { Function } handleSort 정렬을 위한 event 발생 시 실행 되는 event handler
 */
export function useToggleSorting({
  sortState: [initSortState, nextSortState],
  serverData,
}) {
  const [copiedData, setCopiedData] = useState(null);
  const [sortState, setSortState] = useState(initSortState);

  useEffect(() => {
    if (serverData) setCopiedData(serverData);
  }, [serverData]);

  const handleSort = useCallback(() => {
    setCopiedData((prevData) => prevData.toReversed());

    setSortState(sortState === initSortState ? nextSortState : initSortState);
  }, [sortState, initSortState, nextSortState]);

  return { copiedData, sortState, handleSort };
}
