import PropTypes from 'prop-types';

function InputBar({ keyword, onChange }) {
  return (
    <input
      value={keyword}
      onChange={onChange}
      className="contents-sm text-grayscale-900 outline-none bg-transparent flex-grow"
      placeholder="책 제목을 입력해주세요"
    ></input>
  );
}

InputBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputBar;
