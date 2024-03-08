import { useState } from 'react';
import PropTypes from 'prop-types';
import { signUpUser } from '../../utils/controlUserData';
import debounce from '../../utils/debounce';
import checkPbDuplication from '../../utils/checkPbDuplication';

function InputField({ label, id, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className=" text-sm font-normal">
        {label}
      </label>
      <div>
        <input
          className="w-full h-[42px] border border-[#848484] outline-none pl-2 rounded"
          id={id}
          type={type}
          placeholder={placeholder}
          defaultValue={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function SignupButton({ disabled }) {
  return (
    <button
      className=" w-full h-[51px] bg-[#F24822] rounded text-white mt-8"
      type="submit"
      disabled={disabled}
    >
      회원가입
    </button>
  );
}

SignupButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default function Register() {
  // 초기값 세팅
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  // 오류메세지 상태
  const [nicknameMessage, setNicknameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [PwdMessage, setPwdMessage] = useState('');
  const [confirmMessage, setConfirmMessage] = useState('');

  // 유효성 검사
  const [isNickname, setIsNickname] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPwd, setIsPwd] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  // onchange 닉네임

  const onChangeNickname = debounce(async (e) => {
    const currentNickname = e.target.value;
    setNickname(currentNickname);
    const nicknameDuplicated = await checkPbDuplication({
      field: 'nickname',
      value: currentNickname,
    });
    if (currentNickname.length < 2 || currentNickname.length > 5) {
      setNicknameMessage('닉네임의 형식이 올바르지 않습니다!');
      setIsNickname(false);
    } else if (nicknameDuplicated) {
      setNicknameMessage('중복된 데이터입니다.');
      setIsNickname(false);
    } else {
      setNicknameMessage('사용가능한 닉네임입니다😊');
      setIsNickname(true);
    }
  });

  // onchange 이메일

  const onChangeEmail = debounce(async (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailDuplicated = await checkPbDuplication({
      field: 'email',
      value: currentEmail,
    });
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage('이메일의 형식이 올바르지 않습니다!');
      setIsEmail(false);
    } else if (emailDuplicated) {
      setEmailMessage('중복된 이메일입니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('사용 가능한 이메일 입니다😊');
      setIsEmail(true);
    }
  });

  // onchange 비밀번호

  const onChangePwd = (e) => {
    const currentPwd = e.target.value;
    setPassword(currentPwd);
    const PwdRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!PwdRegExp.test(currentPwd)) {
      setPwdMessage('숫자,영문자,특수문자 조합으로 8자리 이상 입력해주세요!');
      setIsPwd(false);
    } else {
      setPwdMessage('사용가능한 비밀번호입니다😊');
      setIsPwd(true);
    }
  };

  // onchange 비밀번호 확인

  const onChangeConfirm = (e) => {
    const currentConfirm = e.target.value;
    setConfirm(currentConfirm);

    if (password !== currentConfirm) {
      setConfirmMessage('비밀번호가 다릅니다.');
      setIsConfirm(false);
    } else {
      setConfirmMessage('사용가능한 비밀번호입니다😊');
      setIsConfirm(true);
    }
  };

  // db로 보내기

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpUser(nickname, email, password);
  };

  // 클릭 시 비밀번호 보이게
  const [pwType, setpwType] = useState({
    type: 'password',
    visible: false,
  });

  const handlePasswordType = (e) => {
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
    <div className=" min-w-80 max-w-[448px] h-auto mx-4 text-start flex flex-col">
      <h2 className="text-lg font-bold mt-11">계정이 없다면 회원가입부터!</h2>
      <span className=" text-xs font-normal text-[#848484] mt-2">
        책콩은 회원전용 서비스입니다. <br />
        회원가입 후에 서비스를 이용할 수 있어요!
      </span>
      <form className="mt-11" onSubmit={handleSubmit}>
        <InputField
          label="닉네임"
          id="nickname"
          type="text"
          value={nickname}
          placeholder="닉네임을 입력해주세요"
          onChange={onChangeNickname}
        />
        <p className={isNickname ? 'text-green-500 mt-2' : 'text-red-500 mt-2'}>
          {nicknameMessage}
        </p>

        <div className="flex flex-col mt-11 gap-7">
          <div>
            <InputField
              label="이메일"
              id="email"
              type="email"
              placeholder="예) bookkong@book.com"
              value={email}
              onChange={onChangeEmail}
            />
            <p
              className={isEmail ? 'text-green-500 mt-2' : 'text-red-500 mt-2'}
            >
              {emailMessage}
            </p>
          </div>
          <div className=" relative">
            <div>
              <InputField
                label="비밀번호"
                id="password"
                type={pwType.type}
                value={password}
                placeholder="비밀번호를 입력해주세요"
                onChange={onChangePwd}
              />
              <p
                className={isPwd ? 'text-green-500 mt-2' : 'text-red-500 mt-2'}
              >
                {PwdMessage}
              </p>
            </div>
            <img
              className=" w-4 absolute top-10 right-5"
              src={
                pwType.visible
                  ? '/images/icons/password-eye.svg'
                  : '/images/icons/state=hidden.svg'
              }
              onClick={handlePasswordType}
            ></img>
          </div>
          <div>
            <InputField
              label="비밀번호 확인"
              id="password-repeat"
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요"
              onChange={onChangeConfirm}
              value={confirm}
            />
            <p
              className={
                isConfirm ? 'text-green-500 mt-2' : 'text-red-500 mt-2'
              }
            >
              {confirmMessage}
            </p>
          </div>
        </div>

        <SignupButton disabled={!isEmail} />
      </form>
      <div className=" relative mt-10 border-t-[1px]">
        <span className=" block w-[60px] left-[calc(50%-30px)] text-center top-[-48px] absolute mt-10 text-[10px] text-[#CCC] bg-grayscale-white">
          또는
        </span>
      </div>
      <div className="flex gap-4 justify-center mt-[31px]">
        <a href="#">
          <img src="/images/icons/kakao_icon.svg" alt="Facebook Icon"></img>
        </a>
        <a href="#">
          <img src="/images/icons/naver_icon.svg" alt="Facebook Icon"></img>
        </a>
        <a href="#">
          <img src="/images/icons/facebook_icon.svg" alt="Facebook Icon"></img>
        </a>
        <a href="#">
          <img src="/images/icons/apple_icon.svg" alt="Facebook Icon"></img>
        </a>
      </div>
      <p className="text-center mt-10 text-[#AAA]">
        이미 계정이 있으신가요?{' '}
        <a
          href="#"
          className="text-[#333] font-medium underline tracking-[0.14px]"
        >
          로그인
        </a>
      </p>
      <div className="flex gap-3 justify-center mt-20">
        <a href="#" className="text-[#AAA]">
          개인정보 보호정책
        </a>
        <div className=" bg-[#AAA] w-[1px] h-3 bottom-[50%]"></div>
        <a href="#" className="text-[#AAA]">
          이용약관
        </a>
      </div>
      <span className=" text-[10px] text-center">
        회원가입 시 서비스 이용 약관 및 개인정보 보호정책에 동의하게 됩니다.
      </span>
    </div>
  );
}
