import propTypes, {} from "prop-types";
import LargeHeader from "../LargeHeader/LargeHeader";
import TabNavigation from "../../TabNavigation/TabNavigation";
import SmallHeader from "../SmallHeader/SmallHeader";

function Header({title}) {
  return (
    <header className="fixed top-0 z-20 left-[50%] translate-x-[-50%] w-full min-w-[320px] max-w-md">
      { title === "기록" &&
      <>
        <LargeHeader title={title} />
        <TabNavigation page={title} />
      </>
      }
      { title === "서재" &&
      <>
        <LargeHeader title={title} />
        <TabNavigation page={title} />
      </>
      }
      { title === "피드" &&
      <>
        <LargeHeader title={title} />
      </>
      }
      { title === "캐릭터" &&
      <>
        <LargeHeader title={title} />
      </>
      }
      { title === "마이페이지" &&
      <>
        <LargeHeader title={title} />
      </>
      }
      
      { title === "검색하기" &&
      <>
        <SmallHeader title={title} />
      </>
      }
      { title === "직접 입력하기" &&
      <>
        <SmallHeader title={title} />
      </>
      }
    </header>
  );
}

Header.propTypes = { 
  title: propTypes.string.isRequired
 };

export default Header;