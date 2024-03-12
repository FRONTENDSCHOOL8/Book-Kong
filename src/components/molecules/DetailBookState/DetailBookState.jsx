// import propTypes, {} from "prop-types";

import DetailBookStateDays from "../DetailBookStateDays/DetailBookStateDays";
import DetailBookStatePeriod from "../DetailBookStatePeriod/DetailBookStatePeriod";
import DetailBookStateRate from "../DetailBookStateRate/DetailBookStateRate";

function DetailBookState() {
  return (
    <div className="flex py-3 justify-stretch">
      <DetailBookStateRate />
      <DetailBookStateDays />
      <DetailBookStatePeriod />
    </div>
  )
}

// DetailBookState.propTypes = { 
//   title: propTypes.string.isRequired
//  };


export default DetailBookState;