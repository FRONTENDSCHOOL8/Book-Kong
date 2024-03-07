import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
function SearchCard({ data: { title, author, publisher, cover } }) {
  const searchCardVar = {
    start: { y: 20 },
    end: { y: 0 },
  };
  return (
    <motion.li
      variants={searchCardVar}
      whileHover={{ scale: 1.02 }}
      className={' list-shadow bg-grayscale-white'}
    >
      <a className="flex rounded-lg overflow-hidden" href="/">
        <img className="w-[90px] h-[130px]" src={cover} alt="" />
        <div className="flex flex-col justify-between py-4 pr-6 pl-4">
          <div className="flex flex-col gap-1">
            <h3 className="contents-sm-bold clip-text-2">{title}</h3>
            <p className="contents-xs text-grayscale-400 clip-text-1">
              {author}
            </p>
          </div>
          <span className="contents-xs text-grayscale-700 clip-text-1">
            {publisher}
          </span>
        </div>
      </a>
    </motion.li>
  );
}

SearchCard.propTypes = {
  data: PropTypes.object,
};

export default SearchCard;
