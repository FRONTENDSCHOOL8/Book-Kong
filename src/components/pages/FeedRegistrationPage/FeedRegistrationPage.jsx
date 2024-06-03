import { Helmet } from 'react-helmet-async';
import Header from '../../organisms/Header/Header/Header';
import { useMutation, useQuery } from '@tanstack/react-query';
import pb from '../../../api/pocketbase';
import { loginUserData } from '../../../utils/controlUserData';
import { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserLibraryData } from '/src/utils/controlBookData';

// 피드 생성 패치 함수
const createFeed = async (formData) => {
  await pb.collection('feeds').create(formData);
};

const FeedRegistrationPage = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [selectState, setSelectState] = useState('');

  // 데이터 패칭 및 캐시
  const { data: librariesData } = useQuery({
    queryKey: ['library', loginUserData.id],
    queryFn: async () => getUserLibraryData(),
  });

  // 데이터 생성
  const feedMutation = useMutation({
    mutationFn: createFeed,
    onSuccess: () => {
      navigate('/feed');
    },
  });

  const handleSelect = (e) => {
    setSelectState(e.target.value);
  };

  // 폼 태그 Submit 작동 Action
  const handleFeedSubmit = (e) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = Object.fromEntries(
        new FormData(formRef.current).entries()
      );
      formData.book_id = selectState;
      if (formData.book_id === '') {
        throw new Error('책 제목을 선택해주세요.');
      }

      feedMutation.mutate(formData);
    }
  };

  return (
    <>
      <Helmet formId="feed-data">
        <title>책콩 | 피드</title>
      </Helmet>
      <Header title="피드 작성" />
      <main className="px-4 h-full mt-[68px] bg-white">
        <form
          method="get"
          ref={formRef}
          id="feed-data"
          onSubmit={handleFeedSubmit}
        >
          <select
            onChange={handleSelect}
            className=" text-content-xs text-primary-500"
          >
            <option selected value="" disabled>
              책 제목을 선택해주세요.
            </option>
            {librariesData?.map((library) => (
              <option key={library.id} value={library.id}>
                {library.title}
              </option>
            ))}
          </select>
          <hr className="mt-4" />
          <label className="sr-only" htmlFor="title">
            제목
          </label>
          <input
            required
            id="title"
            name="title"
            className="w-full text-content-large mt-6 outline-none"
            placeholder="제목을 입력해주세요."
          />
          <textarea
            required
            id="content"
            name="content"
            className="w-full mt-4 outline-none"
            placeholder="메모를 입력해주세요."
          />
        </form>
      </main>
    </>
  );
};

export default FeedRegistrationPage;
