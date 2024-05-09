import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import getPbImage from '../../../utils/getPbImage';

function SearchCardImage({ data }) {
  const { pathname } = useLocation();
  return (
    <div className="relative">
      <img
        className="w-[125px] h-[130px]"
        src={
          pathname === '/library/book-search' ? data.cover : getPbImage(data)
        }
        alt={data.title}
      />
    </div>
  );
}

SearchCardImage.propTypes = { data: PropTypes.object };

export default SearchCardImage;
