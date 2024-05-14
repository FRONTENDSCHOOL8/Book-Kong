import { node } from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const BookTitle = memo(function BookTitle({ children }) {
  return (
    <Link to="#" className="block bookTree-list">
      {children}
    </Link>
  );
});

BookTitle.propTypes = {
  children: node,
};

export default BookTitle;
