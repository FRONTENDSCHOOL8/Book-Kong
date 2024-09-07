import { useState } from 'react';
import Header from '../../organisms/Header/Header/Header';
import { Helmet } from 'react-helmet-async';
import A11yHidden from '../../atoms/A11yHidden/A11yHidden';
import { useQuery } from '@tanstack/react-query';
import { getUserLibraryData } from '../../../utils/controlBookData';
import { loginUserData } from '../../../utils/controlUserData';

function MemoRegistrationPage() {
  const [text, setText] = useState('');

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

  return (
    <>
      <Helmet>
        <title>책콩 | 메모 작성</title>
      </Helmet>
      <Header title="메모 작성" formId="memo-data" />
      <main className="h-screen pb-[63px] pt-[65px]">
        <article className="h-full border-y bg-grayscale-white border-1 border-grayscale-200">
          <A11yHidden as="h2">메모 작성</A11yHidden>
          <form action="get" id="memo-data">
            <div className="relative w-full h-auto pt-6 pb-4 pl-10 pr-4 leading-4 border-b border-grayscale-200 memo-icon text-primary-500">
              <A11yHidden as="label" htmlFor="memo-book-select">
                등록할 메모의 책 선택
              </A11yHidden>
              <select
                id="memo-book-select"
                name="book-title"
                className="block w-full outline-none contents-sm-bold"
              >
                <option disabled selected className="default-option" value="">
                  어떤 책에 대한 메모인가요?
                </option>
                {librariesData?.map((libRecord) => (
                  <option key={libRecord.id} value={libRecord.title}>
                    {libRecord.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-end px-4 pt-3">
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
                className="w-full mt-[6px] h-[524px] block resize-none focus:outline-none"
                onChange={handleText}
                value={text}
                name="memo-contents"
                id="memo-textarea"
                placeholder="메모를 입력해보세요!"
              ></textarea>
            </div>
          </form>
        </article>
      </main>
    </>
  );
}

export default MemoRegistrationPage;
