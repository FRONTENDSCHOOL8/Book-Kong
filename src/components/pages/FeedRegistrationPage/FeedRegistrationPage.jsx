import { Helmet } from 'react-helmet-async';
import Header from '../../organisms/Header/Header/Header';
import { useMutation, useQuery } from '@tanstack/react-query';
import pb from '../../../api/pocketbase';
import { loginUserData } from '../../../utils/controlUserData';
import { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserLibraryData } from '/src/utils/controlBookData';
import A11yHidden from '../../atoms/A11yHidden/A11yHidden';

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
      <Helmet>
        <title>책콩 | 피드 작성</title>
      </Helmet>
      <Header title="피드 작성" formId="feed-data" />
      <main className="h-screen pb-[63px] pt-[65px]">
        <article className="h-full border-y bg-grayscale-white border-1 border-grayscale-200">
          <form
            method="get"
            ref={formRef}
            id="feed-data"
            onSubmit={handleFeedSubmit}
          >
            <div className="relative w-full h-auto px-4 pt-6 pb-4 leading-4 border-b border-grayscale-200 text-primary-500">
              <A11yHidden as="label" htmlFor="feed-book-select">
                등록할 피드의 책 선택
              </A11yHidden>
              <select
                id="feed-book-select"
                name="book-title"
                onChange={handleSelect}
                className="block w-full outline-none contents-sm-bold"
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
            </div>
            <div className="px-4 pt-3">
              <A11yHidden as="label" htmlFor="feed-title">
                책의 피드 제목 입력
              </A11yHidden>
              <input
                required
                id="feed-title"
                name="feed-title"
                className="w-full mt-6 outline-none text-content-large"
                placeholder="제목을 입력해주세요."
              />
              <A11yHidden as="label" htmlFor="feed-textarea">
                책의 피드 내용 입력
              </A11yHidden>
              <textarea
                required
                id="feed-textarea"
                name="feed-contents"
                className="w-full mt-4 outline-none text-content-small h-[524px] resize-none"
                placeholder="내용을 입력해주세요."
              />
            </div>
          </form>
        </article>
      </main>
    </>
  );
};

export default FeedRegistrationPage;
