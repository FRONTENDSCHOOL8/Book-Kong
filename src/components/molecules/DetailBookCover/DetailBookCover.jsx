import {} from "prop-types";
import DetailBookImage from "../../atoms/DetailBookImage/DetailBookImage";
import MediumBookBadge from "../../atoms/MediumBookBadge/MediumBookBadge";

function DetailBookCover() {
  return (
    <div className="flex justify-center px-6 pt-4 pb-6">
      <div className="relative">
        <DetailBookImage />
        <MediumBookBadge data="완독"/>
      </div>
    </div>
  );
}

DetailBookCover.propTypes = {  };

export default DetailBookCover;