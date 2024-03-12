import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { getRandomNumber } from '../../../utils/getRandomNumber';
import CardImage from '../../atoms/CardImage/CardImage';
import CardInfo from '../CardInfo/CardInfo';
import { useLocation } from 'react-router-dom';
function Card({ data }) {
  const CardVar = {
    start: { y: 20 },
    end: { y: 0 },
  };

  const { pathname } = useLocation();

  return (
    <motion.li
      variants={CardVar}
      whileHover={{ scale: 1.02 }}
      className={' list-shadow bg-grayscale-white overflow-hidden rounded-lg'}
    >
      <a
        href={
          pathname === '/library/search'
            ? `/library/book-registration?title=${data.title}&author=${data.author}&publisher=${data.publisher}&page=${getRandomNumber(80, 1200)}&isbn=${data.isbn}&cover=${data.cover}`
            : '/'
        }
        className="flex  "
      >
        <CardImage data={data} />
        <CardInfo
          title={data.title}
          author={data.author}
          publisher={data.publisher}
        />
      </a>
    </motion.li>
  );
}

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
