import { node } from 'prop-types';

function BookTitle({ children }) {
  return <a className="block">{children}</a>;
}

BookTitle.propTypes = {
  children: node,
};

export default BookTitle;
