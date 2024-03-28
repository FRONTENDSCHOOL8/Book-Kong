import { useState } from 'react';
import { loginWithEmail } from '../../utils/controlUserData';
import debounce from '../../utils/debounce';
import InputField from '../atoms/InputField/InputField';
import Or from '../atoms/Or/Or';
import SignUpPrompt from '../atoms/SignUpPrompt/SignUpPrompt';
import SignupButton from '../atoms/SignupButton/SignUpButton';
import SnsIcon from '../atoms/SnsIcon/SnsIcon';
import { useNavigate } from 'react-router-dom';
import Link from '../molecules/Link/Link';
import { Helmet } from 'react-helmet-async';

export default function Login() {
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isEmail, setIsEmail] = useState(false);

  const [password, setPassword] = useState('');
  const [PwdMessage, setPwdMessage] = useState('');
  const [isPwd, setIsPwd] = useState(false);

  const navigate = useNavigate();

  const onChangeEmail = debounce(async (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);

    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage('이메일의 형식이 올바르지 않습니다!');
      setIsEmail(false);
    } else {
      setEmailMessage('');
      setIsEmail(true);
    }
  });

  const onChangePwd = (e) => {
    const currentPwd = e.target.value;
    setPassword(currentPwd);
    const PwdRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!PwdRegExp.test(currentPwd)) {
      setPwdMessage('숫자,영문자,특수문자 조합으로 8자리 이상 입력해주세요!');
      setIsPwd(false);
    } else {
      setPwdMessage('');
      setIsPwd(true);
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
        <title>책콩 | 로그인 페이지</title>
      </Helmet>
      <SignUpPrompt
        title="나만의 책나무를 만들어 볼까요?"
        message="책을 읽고, 기록하고, 완독하면 책을 쌓을 수 있어요!"
      />
      <form className="mt-11" onSubmit={handleSubmit}>
        <InputField
          label="이메일"
          id="email"
          type="email"
          value={email}
          placeholder="이메일을 입력해주세요."
          onChange={onChangeEmail}
        />

        <p className={isEmail ? '' : 'text-red-500 mt-2'}>{emailMessage}</p>

        <InputField
          label="비밀번호"
          id="password"
          type="password"
          value={password}
          placeholder="비밀번호를 입력해주세요."
          onChange={onChangePwd}
        />
        <p className={isPwd ? '' : 'text-red-500 mt-2'}>{PwdMessage}</p>

        <SignupButton
          disabled={!(isEmail && isPwd)}
          text="로그인"
          className={`${isEmail && isPwd ? 'bg-[#F24822]' : 'bg-[#CCCCCC]'}`}
        />
      </form>
      <Or text="또는" />
      <SnsIcon />
      <div className="flex items-center justify-center gap-3 mt-20">
        <a className="text-[#848484]">회원가입</a>
        <div className=" bg-[#AAA] w-[1px] h-3"></div>
        <a className="text-[#848484]">비밀번호찾기</a>
      </div>
      <Link />
    </div>
  );
}
