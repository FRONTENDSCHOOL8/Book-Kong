import {} from "prop-types";
import DetailTitle from "../../molecules/DetailTitle/DetailTitle";
import DetailBookState from "../../molecules/DetailBookState/DetailBookState";
import TabNavigation from "../TabNavigation/TabNavigation";
import DetailBookInfo from "../../molecules/DetailBookInfo/DetailBookInfo";



function DetailBook() {
  return (
    <>
      <div className="h-[1px]"></div>
      <div className="flex flex-col gap-6 border-t border-b bg-grayscale-white border-grayscale-100 pb-[120px] mt-[68px]">
        <DetailTitle />
        <DetailBookState />
        <TabNavigation page="상세페이지" />
        <DetailBookInfo />
      </div>
    </>
  );
}

DetailBook.propTypes = {  };

export default DetailBook;