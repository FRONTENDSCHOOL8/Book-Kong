import { Helmet } from 'react-helmet-async';
import Header from '../../organisms/Header/Header/Header';

const FeedRegistrationPage = () => {
  return (
    <>
      <Helmet>
        <title>책콩 | 피드</title>
      </Helmet>
      <Header title="피드 작성" />
      <div className=" h-[68px]"></div>
      <main className="px-4 h-full bg-white">
        <div className="">
          <p className="pt-6 text-xs text-primary-500">
            데일 카네기 인간관계론 : 인간관계 바이블(원본 완역판)
          </p>
          <hr className="mt-4" />
          <input
            className="w-full text-lg mt-6 outline-none"
            placeholder="제목을 입력해주세요."
          />
          <textarea
            className="w-full mt-4 outline-none"
            placeholder="메모를 입력해주세요."
          />
        </div>
      </main>
    </>
  );
};

export default FeedRegistrationPage;
