import {} from 'prop-types';

function TopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    // 웹 브라우저에서 위치조정을 위해 컨테이너 추가
    <div className="max-w-[448px] w-full min-w-[320px] fixed left-[50%] -translate-x-1/2 bottom-0 h-5 z-20">
      <button
        onClick={handleScrollToTop}
        type="button"
        aria-label="웹페이지의 맨위로 이동하기"
        className="absolute right-4 bottom-[66px]"
      >
        <img className="w-12 h-12" src="/images/icons/top-button.svg" alt="" />
      </button>
    </div>
  );
}

TopButton.propTypes = {};

export default TopButton;
