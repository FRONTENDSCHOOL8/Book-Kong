import {} from 'prop-types';

function FeedDetailPostContents() {
  return (
    <section className="px-4 mb-3 border-t border-b bg-grayscale-white border-grayscale-200">
      <p className="py-6 text-right text-grayscale-500 text-content-xs">
        2024년 3월 1일
      </p>
      <h3 className="contents-xs text-primary-500">역행자(확장판)</h3>
      <h2 className="py-4 contents-lg text-grayscale-900">역행자 읽었어용</h2>
      <p className="contents-sm pb-[86px] text-grayscale-black">
        역행자를 읽었는데 제가 역행할 수 있을까요?
      </p>
    </section>
  );
}

FeedDetailPostContents.propTypes = {};

export default FeedDetailPostContents;
