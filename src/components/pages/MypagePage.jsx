import { useNavigate } from 'react-router-dom';
import { clearLoginUserData, withdrawUser } from '../../utils/controlUserData';
import LargeHeader from '/src/components/organisms/Header/LargeHeader/LargeHeader';
import CharacterImg from '../atoms/CharacterImg/CharacterImg';
import { useQuery } from '@tanstack/react-query';
import { getUserLibraryData } from '../../utils/controlBookData';
import CharacterName from '../atoms/CharacterName/CharacterName';
import CharacterLevel from '../atoms/CharacterLevel/CharacterLevel';
import { loginUserData } from './../../utils/controlUserData';
import TotalBookHeight from '../atoms/TotalBookHeight/TotalBookHeight';

export default function MypagePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    const isClearLoginData = clearLoginUserData();
    if (isClearLoginData) {
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

  const { data } = useQuery({
    queryKey: ['book'],
    queryFn: () => getUserLibraryData('완독'),
  });

  // 유저의 다 읽은 책 권수 계산
  const totalBookCount = data?.length;

  // 유저의 다 읽은 책 페이지 합계
  let totalBookHeight = 0;

  if (data) {
    for (const pages of data) {
      totalBookHeight += pages.total_page;
    }
  }

  const loginUserNickName = loginUserData.nickname;
  const loginUserEmail = loginUserData.email;

  return (
    <>
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
          <CharacterImg height={totalBookHeight} />
          <span className="bg-[#FFE0DA] px-3 py-2 rounded-3xl">
            <CharacterName
              className="text-grayscale-900"
              height={totalBookHeight}
            />
          </span>
          <CharacterLevel height={totalBookHeight} />
          <div className="flex bg-grayscale-100 w-[263px] items-center rounded-lg px-8 py-1">
            <span className="text-[#F24822] text-right mr-2 w-[35%]">
              {totalBookCount}권
            </span>
            <TotalBookHeight page={totalBookHeight} />
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
            <a href="#" className=" block">
              자주 묻는 질문
            </a>
          </li>
          <li className=" p-4 border-b">
            <a href="#" className=" block">
              의견 보내기
            </a>
          </li>
          <li className=" p-4 border-b">
            <a href="#" className=" block">
              문의하기
            </a>
          </li>
          <li className=" p-4">
            <a href="#" className=" block">
              서비스 이용약관
            </a>
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
