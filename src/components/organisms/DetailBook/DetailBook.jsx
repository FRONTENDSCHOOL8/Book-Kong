import {} from "prop-types";
import DetailTitle from "../../molecules/DetailTitle/DetailTitle";
import DetailBookState from "../../molecules/DetailBookState/DetailBookState";
import TabNavigation from "../TabNavigation/TabNavigation";
import DetailBookInfo from "../../molecules/DetailBookInfo/DetailBookInfo";
import DetailBookCover from "../../molecules/DetailBookCover/DetailBookCover";
import DetailBookMemo from "../../molecules/DetailBookMemo/DetailBookMemo";
import DetailBookFeed from "../../molecules/DetailBookFeed/DetailBookFeed";



function DetailBook() {
  return (
    <div className="pb-[56px] pt-[81px]">
        <DetailBookCover />
      <div className="flex flex-col gap-6 border-t border-b bg-grayscale-white border-grayscale-100 pb-[56px] ">
        <DetailTitle />
        <DetailBookState />
        <TabNavigation page="상세페이지" />
        <DetailBookInfo />
        <DetailBookMemo />
        <DetailBookFeed />
      </div>
    </div>
  );
}

DetailBook.propTypes = {  };

export default DetailBook;