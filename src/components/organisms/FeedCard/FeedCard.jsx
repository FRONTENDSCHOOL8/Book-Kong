import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function FeedCard({ title, content, date }) {
  const cardVar = {
    start: { y: 30 },
    end: { y: 0 },
  };
  return (
    <motion.li variants={cardVar} whileHover={{ scale: 1.03 }}>
      <span>{title}</span>
      <span>{content}</span>
      <span>{date}</span>
    </motion.li>
  );
}

FeedCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default FeedCard;
