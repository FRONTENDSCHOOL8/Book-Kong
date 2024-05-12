import { node } from 'prop-types';

function Rate({ children }) {
  return (
    <>
      <span>{children}</span>
    </>
  );
}

Rate.propTypes = {
  children: node.isRequired,
};

export default Rate;
