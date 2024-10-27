import { useState } from 'react';
import { loginWithEmail } from '../../utils/controlUserData';
import debounce from '../../utils/debounce';
import SnsDivider from '../atoms/SnsDivider/SnsDivider';
import SignUpPrompt from '../atoms/SignUpPrompt/SignUpPrompt';
import SignUpButton from '../atoms/SignupButton/SignUpButton';
import SnsIcons from '../atoms/SnsIcons/SnsIcons';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FormInputBox from '../molecules/FormInputBox/FormInputBox';
import A11yHidden from '../atoms/A11yHidden/A11yHidden';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [password, setPassword] = useState('');
  const [PwdErrorMsg, setPwdErrorMsg] = useState('');
  const [isPwdValid, setIsPwdValid] = useState(false);

  const navigate = useNavigate();

  const onChangeEmail = debounce(async (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);

    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!emailRegExp.test(currentEmail)) {
      setEmailErrorMsg('이메일의 형식이 올바르지 않습니다!');
      setIsEmailValid(false);
    } else {
      setEmailErrorMsg('');
      setIsEmailValid(true);
    }
  });

  const onChangePwd = (e) => {
    const currentPwd = e.target.value;
    setPassword(currentPwd);
    const PwdRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!PwdRegExp.test(currentPwd)) {
      setPwdErrorMsg('숫자,영문자,특수문자 조합으로 8자리 이상 입력해주세요!');
      setIsPwdValid(false);
    } else {
      setPwdErrorMsg('');
      setIsPwdValid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await loginWithEmail(email, password);
    // loginWithEmail 함수가 false를 반환했을 경우 로그인 실패로 간주
    if (result === false) {
      alert('아이디 또는 비밀번호가 맞지 않습니다!');
    } else {
      // 성공 시 'library/booktree' 경로로 이동
      navigate('/library/booktree');
      location.reload(true);
    }
  };

  return (
    <div className="min-w-80 max-w-[448px] h-screen mx-4 text-start flex flex-col">
      <Helmet>
        <title>책콩 | 로그인</title>
      </Helmet>
      <A11yHidden as="h2">로그인</A11yHidden>
      <SignUpPrompt
        title="나만의 책나무를 만들어 볼까요?"
        message="책을 읽고, 기록하고, 완독하면 책을 쌓을 수 있어요!"
      />
      <form className="mt-11" onSubmit={handleSubmit}>
        <FormInputBox
          label="이메일"
          id="email"
          name="email"
          type="email"
          value={email}
          placeholder="이메일을 입력해주세요."
          onChange={onChangeEmail}
        />
        <p className={isEmailValid ? '' : 'text-red-500 mt-2'}>
          {emailErrorMsg}
        </p>
        <FormInputBox
          label="비밀번호"
          id="password"
          name="password"
          type="password"
          value={password}
          placeholder="비밀번호를 입력해주세요."
          onChange={onChangePwd}
        />
        <p className={isPwdValid ? '' : 'text-red-500 mt-2'}>{PwdErrorMsg}</p>
        <SignUpButton
          disabled={!(isEmailValid && isPwdValid)}
          className={`${isEmailValid && isPwdValid ? 'bg-[#F24822]' : 'bg-[#CCCCCC]'}`}
        >
          로그인
        </SignUpButton>
      </form>
      <SnsDivider />
      <SnsIcons />
      <div className="flex items-center justify-center gap-3 mt-20">
        <Link to="#" className="text-[#848484]">
          회원가입
        </Link>
        <div className=" bg-[#AAA] w-[1px] h-3"></div>
        <Link to="#" className="text-[#848484]">
          아이디 혹은 비밀번호 찾기
        </Link>
      </div>
      <div className="flex gap-3 justify-center items-center mt-20">
        <Link to="#" className="text-[#AAA]">
          개인정보 보호정책
        </Link>
        <div className="bg-[#AAA] w-[1px] h-3"></div>
        <Link to="#" className="text-[#AAA]">
          이용약관
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
