import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useMutation, useQuery } from '@tanstack/react-query';
import Header from '../../organisms/Header/Header/Header';
import A11yHidden from '../../atoms/A11yHidden/A11yHidden';
import { loginUserData } from '../../../utils/controlUserData';
import { getUserLibraryData } from '../../../utils/controlBookData';
import pb from '../../../api/pocketbase';
import { useNavigate } from 'react-router-dom';

function MemoRegistrationPage() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const formRef = useRef(null);
  const [selectedBook, setSelectedBook] = useState('');

  const handleSelect = (e) => {
    setSelectedBook(e.target.value);
  };

  const handleText = (e) => {
    const newText = e.target.value;
    if (newText.length <= 1000) {
      setText(newText);
    }
  };

  // 데이터 패칭 및 캐시
  const { data: librariesData } = useQuery({
    queryKey: ['library', loginUserData.id],
    queryFn: async () => getUserLibraryData(),
  });

  // 메모 생성 패치 함수
  const createMemo = async (formData) => {
    await pb.collection('memos').create(formData);
  };

  // 데이터 생성
  const memoMutation = useMutation({
    mutationFn: createMemo,
    onSuccess: () => {
      navigate('/record/memo');
    },
  });

  // 폼 태그 Submit 작동 Action
  const handleMemoSubmit = (e) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      formData.append('user_id', loginUserData.id);

      memoMutation.mutate(formData);
    }
  };

  return (
    <>
      <Helmet>
        <title>책콩 | 메모 작성</title>
      </Helmet>
      <Header title="메모 작성" formId="memo-data" />
      <main className="h-screen pb-[63px] pt-[65px]">
        <article className="h-full border-y bg-grayscale-white border-1 border-grayscale-200">
          <A11yHidden as="h2">메모 작성</A11yHidden>
          <form
            method="get"
            className="h-full"
            id="memo-data"
            ref={formRef}
            onSubmit={handleMemoSubmit}
          >
            <div className="relative w-full h-auto pt-6 pb-4 pl-10 pr-4 leading-4 border-b border-grayscale-200 memo-icon before:top-[27px] before:left-4 text-primary-500">
              <A11yHidden as="label" htmlFor="memo-book-select">
                등록할 메모의 책 선택
              </A11yHidden>
              <select
                id="memo-book-select"
                name="book_title"
                className="block w-full outline-none cursor-pointer contents-sm-bold"
                onChange={handleSelect}
                value={selectedBook}
                required
              >
                <option disabled className="default-option" value="">
                  어떤 책에 대한 메모인가요?
                </option>
                {librariesData?.map((libRecord) => (
                  <option key={libRecord.id} value={libRecord.title}>
                    {libRecord.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-end h-full pb-[79px] px-4 pt-3">
              <p className="text-grayscale-400">
                <span
                  className={`${
                    text.length >= 1000
                      ? 'text-primary-500'
                      : 'text-grayscale-black'
                  } contents-md-bold`}
                >
                  {text.length}
                </span>{' '}
                / 1000
              </p>
              <A11yHidden as="label" htmlFor="memo-textarea">
                책의 메모 입력
              </A11yHidden>
              <textarea
                className="w-full h-full mt-[6px] block resize-none focus:outline-none hide-scrollbar"
                onChange={handleText}
                value={text}
                name="content"
                id="memo-textarea"
                placeholder="메모를 입력해보세요!"
                required
              ></textarea>
            </div>
          </form>
        </article>
      </main>
    </>
  );
}

export default MemoRegistrationPage;
