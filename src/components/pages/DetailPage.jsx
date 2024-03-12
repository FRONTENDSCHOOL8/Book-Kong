import {} from "prop-types";

import DetailBook from "../organisms/DetailBook/DetailBook";
import Header from "../organisms/Header/Header/Header";

function DetailPage() {
  return (
    <>
    <Header title="상세페이지"/>
    <DetailBook />
    </>
  )
}

DetailPage.propTypes = {  };

export default DetailPage;