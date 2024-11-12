import { useState } from 'react';
import { signUpUser } from '../../utils/controlUserData';
import debounce from '../../utils/debounce';
import checkPbDuplication from '../../utils/checkPbDuplication';
import SignUpButton from '../atoms/SignupButton/SignUpButton';
import SnsDivider from '../atoms/SnsDivider/SnsDivider';
import SignUpPrompt from '../atoms/SignUpPrompt/SignUpPrompt';
import SnsIcons from '../atoms/SnsIcons/SnsIcons';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FormInputBox from '../molecules/FormInputBox/FormInputBox';
import { Link } from 'react-router-dom';

function RegisterPage() {
  // 초기값 세팅
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  // 오류메세지 상태
  const [nicknameErrorMsg, setNicknameErrorMsg] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [PwdErrorMsg, setPwdErrorMsg] = useState('');
  const [confirmPwdErrorMsg, setConfirmPwdErrorMsg] = useState('');

  // 유효성 검사
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [isConfirmPwdValid, setIsConfirmPwdValid] = useState(false);

  // onchange 닉네임

  const onChangeNickname = debounce(async (e) => {
    const currentNickname = e.target.value;
    setNickname(currentNickname);
    const isNicknameDuplicated = await checkPbDuplication({
      field: 'nickname',
      value: currentNickname,
    });
    if (currentNickname.length < 2 || currentNickname.length > 5) {
      setNicknameErrorMsg('닉네임의 형식이 올바르지 않습니다!');
      setIsNicknameValid(false);
    } else if (isNicknameDuplicated) {
      setNicknameErrorMsg('중복된 데이터입니다.');
      setIsNicknameValid(false);
    } else {
      setNicknameErrorMsg('사용가능한 닉네임입니다😊');
      setIsNicknameValid(true);
    }
  });

  // onchange 이메일

  const onChangeEmail = debounce(async (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const isEmailDuplicated = await checkPbDuplication({
      field: 'email',
      value: currentEmail,
    });
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!emailRegExp.test(currentEmail)) {
      setEmailErrorMsg('이메일의 형식이 올바르지 않습니다!');
      setIsEmailValid(false);
    } else if (isEmailDuplicated) {
      setEmailErrorMsg('중복된 이메일입니다.');
      setIsEmailValid(false);
    } else {
      setEmailErrorMsg('사용 가능한 이메일 입니다😊');
      setIsEmailValid(true);
    }
  });

  // onchange 비밀번호

  const onChangePwd = (e) => {
    const currentPwd = e.target.value;
    setPassword(currentPwd);
    const PwdRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!PwdRegExp.test(currentPwd)) {
      setPwdErrorMsg('숫자,영문자,특수문자 조합으로 8자리 이상 입력해주세요!');
      setIsPwdValid(false);
    } else {
      setPwdErrorMsg('사용가능한 비밀번호입니다😊');
      setIsPwdValid(true);
    }
  };

  // onchange 비밀번호 확인

  const onChangeConfirm = (e) => {
    const currentConfirm = e.target.value;
    setConfirmPwd(currentConfirm);

    if (password !== currentConfirm) {
      setConfirmPwdErrorMsg('비밀번호가 다릅니다.');
      setIsConfirmPwdValid(false);
    } else {
      setConfirmPwdErrorMsg('비밀번호가 일치합니다😊');
      setIsConfirmPwdValid(true);
    }
  };

  // DB로 보내기

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNicknameValid && isEmailValid && isPwdValid && isConfirmPwdValid) {
      alert('정보가 올바르지 않습니다. 입력 값을 확인해주세요.');

      return;
    }

    signUpUser(nickname, email, password).then(
      () => {
        alert('축하합니다! 로그인 페이지로 이동합니다.');

        navigate('/login');
      },
      (err) => {
        alert(err.message);

        return;
      }
    );
  };

  // 클릭 시 비밀번호 보이게
  const [pwType, setpwType] = useState({
    type: 'password',
    visible: false,
  });

  const handlePasswordType = () => {
    setpwType(() => {
      // 만약 현재 pwType.visible이 false 라면
      if (!pwType.visible) {
        return { type: 'text', visible: true };

        //현재 pwType.visible이 true 라면
      } else {
        return { type: 'password', visible: false };
      }
    });
  };

  return (
    <div className=" min-w-80 max-w-[448px] h-auto mx-4 text-start flex flex-col pb-12">
      <Helmet>
        <title>책콩 | 회원가입 페이지</title>
      </Helmet>
      <SignUpPrompt
        title="계정이 없다면 회원가입부터!"
        text={
          <>
            <span>책콩은 회원전용 서비스입니다.</span>
            <br />
            <span>회원가입 후에 서비스를 이용할 수 있어요!</span>
          </>
        }
      />
      <form className="mt-11" onSubmit={handleSubmit}>
        <FormInputBox
          label="닉네임"
          id="nickname"
          name="nickname"
          type="text"
          value={nickname}
          placeholder="닉네임을 입력해주세요"
          onChange={onChangeNickname}
          autoComplete="username"
          required={true}
        />
        <p
          className={
            isNicknameValid ? 'text-green-500 mt-2' : 'text-red-500 mt-2'
          }
        >
          {nicknameErrorMsg}
        </p>
        <div className="flex flex-col mt-11 gap-7">
          <div>
            <FormInputBox
              label="이메일"
              id="email"
              name="email"
              type="email"
              placeholder="예) bookkong@book.com"
              value={email}
              onChange={onChangeEmail}
              autoComplete="email"
              required={true}
            />
            <p
              className={
                isEmailValid ? 'text-green-500 mt-2' : 'text-red-500 mt-2'
              }
            >
              {emailErrorMsg}
            </p>
          </div>
          <div className="relative">
            <div>
              <FormInputBox
                label="비밀번호"
                id="password"
                name="password"
                type={pwType.type}
                value={password}
                placeholder="비밀번호를 입력해주세요"
                onChange={onChangePwd}
                autoComplete="new-password"
                required={true}
              />
              <p
                className={
                  isPwdValid ? 'text-green-500 mt-2' : 'text-red-500 mt-2'
                }
              >
                {PwdErrorMsg}
              </p>
            </div>
            <img
              className="absolute w-4 top-10 right-5"
              src={
                pwType.visible
                  ? '/images/icons/password-eye.svg'
                  : '/images/icons/state=hidden.svg'
              }
              onClick={handlePasswordType}
            ></img>
          </div>
          <div>
            <FormInputBox
              label="비밀번호 확인"
              id="password-repeat"
              name="password-repeat"
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요"
              onChange={onChangeConfirm}
              value={confirmPwd}
              autoComplete="new-password"
              required={true}
            />
            <p
              className={
                isConfirmPwdValid ? 'text-green-500 mt-2' : 'text-red-500 mt-2'
              }
            >
              {confirmPwdErrorMsg}
            </p>
          </div>
        </div>
        <SignUpButton
          disabled={
            !(
              isNicknameValid &&
              isEmailValid &&
              isPwdValid &&
              isConfirmPwdValid
            )
          }
          className={`${
            isNicknameValid && isEmailValid && isPwdValid && isConfirmPwdValid
              ? 'bg-[#F24822]'
              : 'bg-[#CCCCCC]'
          }`}
        >
          회원가입
        </SignUpButton>
      </form>
      <SnsDivider />
      <SnsIcons />
      <p className="text-center mt-10 text-[#AAA]">
        이미 계정이 있으신가요?{' '}
        <Link
          to="/login"
          className="text-[#333] font-medium underline tracking-[0.14px]"
        >
          로그인
        </Link>
      </p>
      <div className="flex gap-3 justify-center items-center mt-20">
        <Link to="#" className="text-[#AAA]">
          개인정보 보호정책
        </Link>
        <span className="block bg-[#AAA] w-[1px] h-3"></span>
        <Link to="#" className="text-[#AAA]">
          이용약관
        </Link>
      </div>
      <span className=" text-[10px] text-center">
        회원가입 시 서비스 이용 약관 및 개인정보 보호정책에 동의하게 됩니다.
      </span>
    </div>
  );
}

export default RegisterPage;
