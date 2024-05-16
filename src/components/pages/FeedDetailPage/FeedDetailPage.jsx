import {} from 'prop-types';
import { Helmet } from 'react-helmet-async';
import Header from '../../organisms/Header/Header/Header';

function FeedDetailPage() {
  return (
    <>
      <Helmet>
        <title>책콩 | 피드 상세페이지</title>
      </Helmet>
      <Header title={'피드 상세'} />
      <main className="mb-[100px] bg-gray">
        <section className="mb-3 mt-[69px] bg-grayscale-white border-grayscale-200 border px-4">
          <p className="py-6 text-grayscale-500 text-content-xs text-right">
            2024년 3월 1일
          </p>
          <h3 className="contents-xs text-primary-500">역행자(확장판)</h3>
          <h2 className="contents-lg py-4 text-grayscale-900">
            역행자 읽었어용
          </h2>
          <p className="contents-sm pb-[86px] text-grayscale-black">
            역행자를 읽었는데 제가 역행할 수 있을까요?
          </p>
        </section>
        <section className="bg-grayscale-white border-grayscale-100 border py-6 px-4">
          <form
            onSubmit={onsubmit}
            className="flex items-center flex-shrink-0 justify-between w-full rounded bg-grayscale-white border border-primary-500 mb-6 px-3 py-2"
          >
            <input type="text" className=" rounded" placeholder="Placeholder" />
            <button className="w-[50px] h-[24px] bg-grayscale-200 rounded justify-center align-middle flex">
              <img src="/images/icons/arrow-up.svg" alt="검색버튼" />
            </button>
          </form>
          <span className="pr-2 text-grayscale-900 contents-md-bold">댓글</span>
          <span className="text-primary-500 contents-md-bold">5</span>
          <div className="flex gap-3 p-4 border rounded-lg bg-grayscale-white border-grayscale-100 list-shadow mt-6 mb-3">
            <img
              src="/images/characters/Rectangle 99.png"
              alt="/"
              className="w-[45px] h-[45px]"
            />
            <div className="flex flex-col">
              <div className="flex mb-1">
                <span className="contents-xs-bold text-grayscale-black pr-2">
                  나는개똥벌레
                </span>
                <span className="contents-2xs text-grayscale-400 flex items-center">
                  2024년 3월 13일
                </span>
              </div>
              <span className="contents-small text-grayscale-700">
                댓글 본문이에요
              </span>
            </div>
          </div>
          <div className="flex gap-3 p-4 border rounded-lg bg-grayscale-white border-grayscale-100 list-shadow">
            <img
              src="/images/characters/Rectangle 99.png"
              alt="/"
              className="w-[45px] h-[45px]"
            />
            <div className="flex flex-col">
              <div className="flex mb-1">
                <span className="contents-xs-bold text-grayscale-black pr-2">
                  나는개똥벌레
                </span>
                <span className="contents-2xs text-grayscale-400 flex items-center">
                  2024년 3월 13일
                </span>
              </div>
              <span className="contents-small text-grayscale-700">
                길게 들어가는 본문은 이렇게 나와요. <br />
                길게 들어가는 본문은 이렇게 나와요. <br />
                길게 들어가는 본문은 이렇게 나와요. <br />
                길게 들어가는 본문은 이렇게 나와요.
              </span>
            </div>
          </div>
          <div className="flex gap-3 p-4 border rounded-lg bg-grayscale-white border-grayscale-100 list-shadow mt-3 mb-3">
            <img
              src="/images/characters/Rectangle 99.png"
              alt="/"
              className="w-[45px] h-[45px]"
            />
            <div className="flex flex-col">
              <div className="flex mb-1">
                <span className="contents-xs-bold text-grayscale-black pr-2">
                  나는개똥벌레
                </span>
                <span className="contents-2xs text-grayscale-400 flex items-center">
                  2024년 3월 13일
                </span>
              </div>
              <span className="contents-small text-grayscale-700">
                댓글 본문이에요
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

FeedDetailPage.propTypes = {};

export default FeedDetailPage;
