import PropTypes from 'prop-types';
import { useState } from 'react';

function TabLink({ path, title }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  
  return (
    // 클릭 이벤트에 currunt e.target.value가 title과 일치 할 떄 빨간색, 아닐 떄는 회색, -> 3개 가있음. isActive === 1 ? 빨간색 : 회색 --> 3개 만드셈
    <a
      href={path}
      name={path}
      className={
        isActive
          ? 'tab-menu text-primary-500 border-b-[3px] border-primary-500 box-border block h-full leading-[54px]'
          : 'tab-menu text-gray-500 box-border block h-full leading-[54px]'
      }
      onClick={handleClick}
    >
      {title}
    </a>
  );
}

TabLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TabLink;


