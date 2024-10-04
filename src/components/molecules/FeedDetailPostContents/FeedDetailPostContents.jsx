import {} from 'prop-types';

function FeedDetailPostContents() {
  return (
    <section className="mb-3 mt-[69px] bg-grayscale-white border-grayscale-200 border px-4">
      <p className="py-6 text-grayscale-500 text-content-xs text-right">
        2024년 3월 1일
      </p>
      <h3 className="contents-xs text-primary-500">역행자(확장판)</h3>
      <h2 className="contents-lg py-4 text-grayscale-900">역행자 읽었어용</h2>
      <p className="contents-sm pb-[86px] text-grayscale-black">
        역행자를 읽었는데 제가 역행할 수 있을까요?
      </p>
    </section>
  );
}

FeedDetailPostContents.propTypes = {};

export default FeedDetailPostContents;
