// import {} from "prop-types";

import DetailBookStateRateContent from "../DetailBookStateRateContent/DetailBookStateRateContent";
import DetailBookStateTitle from "../../atoms/DetailBookStateTitle/DetailBookStateTitle";

function DetailBookStateBox({devider}) {
  return (
    
    <div className="flex flex-col items-center gap-3 w-[33.3333%]">
      
      <DetailBookStateRateContent />
      <DetailBookStateTitle title="별점" />
      
    </div>
  );
}

// DetailBookStateBox.propTypes = {  };

export default DetailBookStateBox;