import { Helmet } from 'react-helmet-async';
import Header from '../../organisms/Header/Header/Header';
import { useMutation } from '@tanstack/react-query';
import pb from '../../../api/pocketbase';
import { loginUserData } from '../../../utils/controlUserData';
import { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import A11yHidden from '../../atoms/A11yHidden/A11yHidden';
import { v4 as uuidv4 } from 'uuid';

// 피드 생성 패치 함수
const createFeed = async (formData) => {
  await pb.collection('feeds').create(formData);
};

const FeedRegistrationPage = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [bookTitle, setBookTitle] = useState('');

  // 데이터 생성
  const feedMutation = useMutation({
    mutationFn: createFeed,
    onSuccess: () => {
      navigate('/feed');
    },
  });

  const handleSelect = (e) => {
    setBookTitle(e.target.value);
  };

  // 폼 태그 Submit 작동 Action
  const handleFeedSubmit = (e) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      if (!formData.get('book_title')) {
        alert('책을 선택해주세요.');

        return;
      }

      if (!formData.get('feed_title')) {
        alert('피드 제목을 작성해주세요.');

        return;
      }

      if (!formData.get('content')) {
        alert('피드 내용을 작성해주세요.');

        return;
      }

      formData.append('user_id', loginUserData.id);

      feedMutation.mutate(formData);
    }
  };

  const dummyData = [
    '오만과 편견',
    '자유론',
    '사피엔스',
    '총 균 쇠',
    '프랑켄슈타인 (무선)',
    '나는 3학년 2반 7번 애벌레',
    '죄와 벌 1',
    '사랑의 기술',
  ];

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
                name="book_title"
                onChange={handleSelect}
                className="block w-full outline-none contents-sm-bold cursor-pointer"
                value={bookTitle}
              >
                <option value="" disabled>
                  책 제목을 선택해주세요.
                </option>
                {dummyData?.map((bookTitle) => (
                  <option key={uuidv4()} value={bookTitle}>
                    {bookTitle}
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
                name="feed_title"
                className="w-full mt-6 outline-none text-content-large"
                placeholder="제목을 입력해주세요."
              />
              <A11yHidden as="label" htmlFor="feed-textarea">
                책의 피드 내용 입력
              </A11yHidden>
              <textarea
                required
                id="feed-textarea"
                name="content"
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
