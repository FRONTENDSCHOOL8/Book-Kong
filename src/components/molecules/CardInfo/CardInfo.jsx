import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function CardInfo({ title, author, publisher }) {
  const { pathname: currentPage } = useLocation();
  return (
    <div className="flex flex-col justify-between py-4 pr-6 pl-4">
      <div className="flex flex-col gap-1">
        <h3 className="contents-sm-bold clip-text-2">{title}</h3>
        <p className="contents-xs text-grayscale-400 clip-text-1">{author}</p>
      </div>
      {currentPage === '/library/search' && (
        <span className="contents-xs text-grayscale-700 clip-text-1">
          {publisher}
        </span>
      )}
      {currentPage === '/library/bookshelf' && (
        <span className="contents-xs text-grayscale-700 clip-text-1">
          {publisher}
        </span>
      )}
    </div>
  );
}

CardInfo.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  publisher: PropTypes.string,
};

export default CardInfo;
