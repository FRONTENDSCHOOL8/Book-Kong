import { node, string } from 'prop-types';
import { memo } from 'react';

const BookTitle = memo(function BookTitle({ children, id }) {
  return (
    <a href={`/library/book-detail/${id}`} className="block bookTree-list">
      {children}
    </a>
  );
});

BookTitle.propTypes = {
  children: node,
  id: string,
};

export default BookTitle;
