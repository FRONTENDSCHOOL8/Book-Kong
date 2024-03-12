import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import getPbImage from '../../../utils/getPbImage';

function CardImage({ data }) {
  const { pathname } = useLocation();
  return (
    <img
      className="w-[90px] h-[130px]"
      src={pathname === '/library/search' ? data.cover : getPbImage(data)}
      alt={data.title}
    />
  );
}

CardImage.propTypes = { data: PropTypes.object };

export default CardImage;
