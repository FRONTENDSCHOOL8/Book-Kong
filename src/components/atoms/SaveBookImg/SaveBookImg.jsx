import {} from 'prop-types';

function SaveBookImg() {
  return (
    <div>
      <button type="button">
        <img
          className="w-[36px] h-[36px]"
          src="/public/images/icons/more_horizontal.svg"
          alt="책나무이미지저장버튼"
        />
      </button>
    </div>
  );
}

SaveBookImg.propTypes = {};

export default SaveBookImg;
