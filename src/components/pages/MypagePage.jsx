import { useNavigate } from 'react-router-dom';
import {
  clearLoginUserData,
  withdrawUser,
  loginUserData,
} from '../../utils/controlUserData';
import LargeHeader from '/src/components/organisms/Header/LargeHeader/LargeHeader';
import CharacterImg from '../atoms/CharacterImg/CharacterImg';
import CharacterName from '../atoms/CharacterName/CharacterName';
import CharacterLevel from '../atoms/CharacterLevel/CharacterLevel';
import TotalBookHeight from '../atoms/TotalBookHeight/TotalBookHeight';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function MypagePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    const isLoginDataCleared = clearLoginUserData();
    if (isLoginDataCleared) {
      alert('로그아웃이 되었습니다.');
      // 로그아웃시 로그인페이지로 이동
      navigate('/login');
      location.reload(true);
    }
  };

  const handleWithdrawClick = async () => {
    const isConfirmed = confirm('정말로 탈퇴하시겠습니까?');
    if (isConfirmed) {
      const result = await withdrawUser();
      if (result) {
        alert('회원 탈퇴가 완료되었습니다.');
        navigate('/login');
      } else {
        alert('오류가 발생했습니다. 다시 시도해주세요.');
      }
    }
  };

  const loginUserNickName = loginUserData.nickname;
  const loginUserEmail = loginUserData.email;
  const userRec = useLoaderData();
  const userLevel = userRec?.level * 1 || 1;
  const doneBookNum = userRec?.['done_book'] * 1 || 0;
  const userBookHeight = userRec?.['book_height'] * 1 || 0;

  return (
    <>
      <Helmet>
        <title>책콩 | 마이페이지</title>
      </Helmet>
      <LargeHeader title={'마이페이지'} />
      <div className="min-w-80 max-w-[448px] h-auto mx-4 pb-[120px]">
        <div className="flex flex-col p-4 bg-white mt-2">
          <span className=" text-2xl text-[#F24822] font-medium">
            {loginUserNickName}
          </span>
          <span className=" text-sm font-normal text-[#848484]">
            {loginUserEmail}
          </span>
        </div>
        <div className="flex flex-col items-center bg-white border-t">
          <CharacterImg level={userLevel} />
          <span className="bg-[#FFE0DA] px-3 py-2 rounded-3xl">
            <CharacterName level={userLevel} />
          </span>
          <CharacterLevel level={userLevel} />
          <div className="flex bg-grayscale-100 w-[263px] items-center rounded-lg px-8 py-1">
            <span className="text-[#F24822] text-right mr-2 w-[35%]">
              {doneBookNum}권
            </span>
            <TotalBookHeight height={userBookHeight} />
          </div>
        </div>

        <div className=" border-y bg-white mt-2">
          <p className="className= p-4 border-b text-base text-[#1E1E1E] font-semibold">
            테마 설정
          </p>
          <form className="flex flex-col">
            <label className="className= p-4 text-[#1E1E1E] border-b">
              <input type="radio" name="fruit" value="apple" />
              다크모드
            </label>
            <label className="className= p-4 text-[#1E1E1E] border-b">
              <input type="radio" name="fruit" value="apple" />
              라이트모드
            </label>
            <label className="className= p-4 text-[#1E1E1E]">
              <input type="radio" name="fruit" value="apple" />
              자동 (시스템 초기값)
            </label>
          </form>
        </div>
        <ul className=" mt-2 bg-white">
          <li className=" p-4 border-b">
            <Link to="#" className=" block">
              자주 묻는 질문
            </Link>
          </li>
          <li className=" p-4 border-b">
            <Link to="#" className=" block">
              의견 보내기
            </Link>
          </li>
          <li className=" p-4 border-b">
            <Link to="#" className=" block">
              문의하기
            </Link>
          </li>
          <li className=" p-4">
            <Link to="#" className=" block">
              서비스 이용약관
            </Link>
          </li>
        </ul>
        <div className="flex flex-col bg-white mt-2">
          <button
            onClick={handleClick}
            className=" text-start p-4 border-b text-[#F24822]"
          >
            로그아웃
          </button>
          <button onClick={handleWithdrawClick} className=" text-start p-4">
            회원 탈퇴
          </button>
        </div>
      </div>
    </>
  );
}

export default MypagePage;
