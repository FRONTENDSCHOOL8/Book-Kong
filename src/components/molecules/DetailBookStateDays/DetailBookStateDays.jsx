// import PropTypes from "prop-types";
import DetailBookStateTitle from "../../atoms/DetailBookStateTitle/DetailBookStateTitle";
import DetailBookStateDaysContent from "../../atoms/DetailBookStateDaysContent/DetailBookStateDaysContent";

function DetailBookStateDays() {
  return (
    <div className="flex flex-col items-center gap-3 w-[33.3333%] border-l border-grayscale-100">
      <DetailBookStateDaysContent />
      <DetailBookStateTitle title="독서 일수"/>
    </div>
  )
}

// DetailBookStateDays.propTypes = { 
//   days: PropTypes.string.isRequired
//  };

export default DetailBookStateDays;