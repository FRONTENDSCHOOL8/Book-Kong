import { node, string } from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const BookTitle = memo(function BookTitle({ children, id }) {
  return (
    <Link
      to={`/library/book-detail/${id}`}
      // truncate 적용 필요
      className="flex items-center justify-center w-full h-full bookTree-list"
    >
      {children}
    </Link>
  );
});

BookTitle.propTypes = {
  children: node,
  id: string,
};

export default BookTitle;
