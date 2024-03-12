import {} from "prop-types";
import DetailBookStateTitle from "../../atoms/DetailBookStateTitle/DetailBookStateTitle";
import DetailBookStatePeriodContent from "../../atoms/DetailBookStatePeriodContent/DetailBookStatePeriodContent";

function DetailBookStatePeriod() {
  return (
    <div className="flex flex-col items-center gap-3 w-[33.3333%] border-l border-grayscale-100">
      <DetailBookStatePeriodContent />
      <DetailBookStateTitle title="완독일" />
    </div>
  );
}

DetailBookStatePeriod.propTypes = {  };

export default DetailBookStatePeriod;