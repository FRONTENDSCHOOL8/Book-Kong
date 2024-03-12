import PropTypes from "prop-types";

function Rate({rate}) {
  return (
    <>
      <span>{rate}</span>
    </>
  );
}

Rate.propTypes = { 
  rate: PropTypes.string.isRequired
 };

export default Rate;