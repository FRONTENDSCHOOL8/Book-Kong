import { Link } from 'react-router-dom';

function SnsIcons() {
  return (
    <div className="flex gap-4 justify-center mt-[31px]">
      <Link to="#">
        <img src="/images/icons/kakao_icon.svg" alt="kakao Icon" />
      </Link>
      <Link to="#">
        <img src="/images/icons/naver_icon.svg" alt="naver Icon" />
      </Link>
      <Link to="#">
        <img src="/images/icons/facebook_icon.svg" alt="facebook Icon" />
      </Link>
      <Link to="#">
        <img src="/images/icons/apple_icon.svg" alt="apple Icon" />
      </Link>
    </div>
  );
}

export default SnsIcons;
