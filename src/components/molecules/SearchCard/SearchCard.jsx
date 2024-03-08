import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getRandomNumber } from '../../../utils/getRandomNumber';
function SearchCard({ data }) {
  const searchCardVar = {
    start: { y: 20 },
    end: { y: 0 },
  };

  console.log(data);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      `/library/book-registration?title=${data.title}&author=${data.author}&publisher=${data.publisher}&page=${getRandomNumber(80, 1200)}&isbn=${data.isbn}&cover=${data.cover}`
    );
  };

  console.log(data);

  return (
    <motion.li
      variants={searchCardVar}
      whileHover={{ scale: 1.02 }}
      className={' list-shadow bg-grayscale-white overflow-hidden rounded-lg'}
    >
      <div onClick={handleClick} className="flex  ">
        <img className="w-[90px] h-[130px]" src={data.cover} alt={data.title} />
        <div className="flex flex-col justify-between py-4 pr-6 pl-4">
          <div className="flex flex-col gap-1">
            <h3 className="contents-sm-bold clip-text-2">{data.title}</h3>
            <p className="contents-xs text-grayscale-400 clip-text-1">
              {data.author}
            </p>
          </div>
          <span className="contents-xs text-grayscale-700 clip-text-1">
            {data.publisher}
          </span>
        </div>
      </div>
    </motion.li>
  );
}

SearchCard.propTypes = {
  data: PropTypes.object,
};

export default SearchCard;
