import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Back({ title }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    if (title === '검색하기') {
      navigate('/library/booktree');
    } else if (title === '직접 입력하기') {
      navigate('/library/search');
    } else if (title === '메모' || title === '메모 작성') {
      navigate('/record');
    } else if (title === '피드' || title === '피드 작성') {
      navigate('/feed');
    }
  };

  return (
    <button onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z"
          fill="#1E1E1E"
        />
      </svg>
    </button>
  );
}

Back.propTypes = {
  title: PropTypes.string,
};

export default Back;
