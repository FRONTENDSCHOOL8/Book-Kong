import { object } from 'prop-types';
import { useLocation } from 'react-router-dom';
import getPbImage from '../../../utils/getPbImage';

function CardImage({ data }) {
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
      <span
        className={`py-[2px] px-2 ${data.status === '독서중' && 'bg-badge-yellow'} ${data.status === '완독' && 'bg-badge-skyblue'} ${data.status === '희망 도서' && 'bg-badge-purple'} rounded-[4px] text-center text-grayscale-white badge-shadow border border-grayscale-white contents-xs-md absolute bottom-[10px] left-2`}
      >
        {data.status}
      </span>
    </div>
  );
}

CardImage.propTypes = {
  data: object,
};

export default CardImage;
