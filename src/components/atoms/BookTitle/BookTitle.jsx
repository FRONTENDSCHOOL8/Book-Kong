import { node } from 'prop-types';
import { memo } from 'react';

const BookTitle = memo(function BookTitle({ children }) {
  return <a className="block bookTree-list">{children}</a>;
});

BookTitle.propTypes = {
  children: node,
};

export default BookTitle;
