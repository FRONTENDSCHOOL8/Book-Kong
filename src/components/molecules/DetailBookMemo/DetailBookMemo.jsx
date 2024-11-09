import { string, shape } from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import SortingBtn from '../SortingBtn/SortingBtn';
import MemoCard from '../../organisms/MemoCard/MemoCard';
import { loginUserData } from '../../../utils/controlUserData';
import { getAllUserMemos } from '../../../utils/controlMemoData';
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import NoneCardState from '../NoneCardState/NoneCardState';
import RegistrationIcon from '../../atoms/RegistrationIcon/RegistrationIcon';
import { Link } from 'react-router-dom';
import { useToggleSorting } from '../../../hooks/useToggleSorting';

function DetailBookMemo({ data: bookData }) {
  const { data: serverMemoOfBook } = useQuery({
    queryKey: ['memos', loginUserData],
    queryFn: getAllUserMemos,
    select: (memosRecs) =>
      memosRecs?.filter((memosRec) => memosRec.book_title === bookData.title),
  });

  const {
    copiedData: memosOfBook,
    sortState,
    handleSort: handleMemoSort,
  } = useToggleSorting({
    sortState: ['오래된 순', '최신순'],
    serverData: serverMemoOfBook,
  });

  const listVar = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: {
        type: 'spring',
        mass: 0.8,
        staggerChildren: 0.03,
      },
    },
  };

  const [listCount, setListCount] = useState(0);

  useEffect(() => {
    setListCount(memosOfBook?.length || 0);
  }, [memosOfBook]);

  return (
    <section
      className="before:border-b before:content-[''] before:block before:pt-[109px] mt-[-111px] border-b"
      id="memo"
    >
      <div className="pb-8 bg-grayscale-white ">
        <div className="flex items-center justify-between pt-8 mx-4">
          <div className="flex gap-2">
            <h4 className="contents-lg-bold text-grayscale-900">메모</h4>
            <span className="font-bold align-middle text-primary-500 contents-lg-bold">
              {listCount}
            </span>
          </div>
          <Link
            to="/record/memo"
            className="text-grayscale-500 contents-sm-bold"
          >
            전체보기
          </Link>
        </div>
        <div className="flex flex-col items-end px-4 pb-[56px] ">
          <div
            className={`w-full flex items-center ${memosOfBook?.length !== 0 ? 'justify-between' : 'justify-end'} mt-6 mb-4`}
          >
            {memosOfBook?.length !== 0 ? (
              <SortingBtn sortState={sortState} onClick={handleMemoSort} />
            ) : (
              ''
            )}
            <RegistrationIcon page={'memo'} />
          </div>
          <motion.ul
            variants={listVar}
            initial="start"
            animate="end"
            className="flex flex-col w-full gap-3"
          >
            {memosOfBook?.length !== 0 ? (
              memosOfBook?.map((memosRec) => (
                <MemoCard
                  key={memosRec.id}
                  title={memosRec.book_title}
                  contents={memosRec.content}
                  date={memosRec.created}
                  id={memosRec.id}
                />
              ))
            ) : (
              <NoneCardState data="메모" />
            )}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

DetailBookMemo.propTypes = {
  data: shape({
    id: string.isRequired,
  }).isRequired,
};

export default DetailBookMemo;
