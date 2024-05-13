import {} from 'prop-types';

function FeedDetailPage() {
  return (
    <>
      <section className="mb-3 bg-grayscale-white border-grayscale-200 border px-4">
        <p className="py-6 px-4 text-grayscale-500 text-content-xs text-right">
          2024년 3월 1일
        </p>
        <h3 className="text-primary-500 text-content-xs">역행자(확장판)</h3>
        <h2 className="py-4 text-grayscale-900 text-content-large">
          역행자 읽었어용
        </h2>
        <p className="pb-[86px] text-grayscale-black text-content-small">
          역행자를 읽었는데 제가 역행할 수 있을까요?
        </p>
      </section>
      <section className="bg-grayscale-white border-grayscale-100 border py-6 px-4">
        <form action="">
          <input
            type="text"
            className="w-full h-[36px] border border-primary-500 outline-none rounded mb-6"
            placeholder="placeholder"
          />
        </form>
        <span className="pr-2 text-grayscale-900 text-content-medium">
          댓글
        </span>
        <span className="text-primary-500 text-content-medium">5</span>
        <div className="flex gap-3 p-4 border rounded-lg bg-grayscale-white border-grayscale-100 list-shadow mt-6 mb-3">
          <img
            src="/images/characters/Rectangle 99.png"
            alt="/"
            className="w-[45px] h-[45px]"
          />
          <div className="flex flex-col">
            <div className="flex mb-1">
              <span className="contents-xs text-grayscale-black pr-2">
                나는개똥벌레
              </span>
              <span className="contents-2xs text-grayscale-400">
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
              <span className="contents-xs text-grayscale-black pr-2">
                나는개똥벌레
              </span>
              <span className="contents-2xs text-grayscale-400">
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
              <span className="contents-xs text-grayscale-black pr-2">
                나는개똥벌레
              </span>
              <span className="contents-2xs text-grayscale-400">
                2024년 3월 13일
              </span>
            </div>
            <span className="contents-small text-grayscale-700">
              댓글 본문이에요
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

FeedDetailPage.propTypes = {};

export default FeedDetailPage;
