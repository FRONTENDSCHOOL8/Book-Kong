import PropTypes from "prop-types";

function DetailBookStateTitle({title}) {
  return <span className="contents-sm text-grayscale-600">{title}</span>
}

DetailBookStateTitle.propTypes = { 
  title: PropTypes.string.isRequired
 };

export default DetailBookStateTitle;