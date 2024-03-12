import {} from "prop-types";
import Star from "../../atoms/Star/Star";
import Rate from "../../atoms/Rate/Rate";

function DetailBookStateRate() {
  return (
    <div className="flex text-grayscale-900">
      <Star />
      <Rate rate="4.5"/>
    </div>
  )
}

DetailBookStateRate.propTypes = {  };

export default DetailBookStateRate;