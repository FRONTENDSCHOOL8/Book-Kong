import {} from 'prop-types';

function TopButton() {
  return (
    <button
      type="button"
      aria-label="웹페이지의 맨위로 이동하기"
      className="fixed right-4 bottom-[66px]"
    >
      <img className="w-4 h-4" src="/images/icons/top-button.svg" alt="" />
    </button>
  );
}

TopButton.propTypes = {};

export default TopButton;
