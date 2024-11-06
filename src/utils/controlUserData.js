import pb from '/src/api/pocketbase';

/* -------------------------------------------- */
/*                로그인 및 로그아웃시 사용                */
/* -------------------------------------------- */

/**
 * Login 함수
 * * validation에 통과한 email과 비밀번호로 로그인하는 함수
 * * 로그인 완료될 때를 판별할 때는 컴포넌트에서 tanstack query isLoading과 함께사용 권장
 * @param email validation을 통과한 email
 * @param password validation을 통과한 password
 */
export async function loginWithEmail(email, password) {
  try {
    const loginUserData = await pb
      .collection('users')
      .authWithPassword(email, password);
    return loginUserData.record;
  } catch (error) {
    return false;
  }
}

/**
 * Logout 함수
 * * 현재 저장되어있는 Login User의 정보를 삭제하여 Logout 상태로 바꿔주는 함수
 * TODO 추후 logout에 문제가 없다면 '현재 로그인된 정보가 없습니다.' 제거
 * @param void
 */
export function clearLoginUserData() {
  if (loginUserData) {
    pb.authStore.clear();
  }
}

/* -------------------------------------------- */
/*                 회원가입 및 탈퇴시 사용                */
/* -------------------------------------------- */

/**
 * 회원가입 함수
 * Database에 유저정보를 저장하는 함수
 * ! 회원가입 Form 내부의 Validation이 모두 완료되었을 때 실행
 * * 성공시 회원가입된 정보 리턴
 * * 에러가 발생하면 false 리턴
 * @param {string} nickname 유저가 사용할 닉네임
 * @param {string} email 유저가 로그인할 때 사용할 email
 * @param {string} password 유저가 로그인할 때 사용할 password
 */
export async function signUpUser(nickname, email, password) {
  const data = {
    email: email,
    emailVisibility: true,
    password: password,
    passwordConfirm: password,
    nickname: nickname,
    book_height: 0,
    level: 1,
  };

  try {
    const record = await pb.collection('users').create(data);
    return record;
  } catch (error) {
    return false;
  }
}

/**
 * 회원탈퇴 함수
 * * 로그인된 회원의 id를 가져와 회원탈퇴를 하는 함수
 */
export async function withdrawUser() {
  if (loginUserData) {
    return await pb.collection('users').delete(loginUserData.id);
  }

  return alert('통신 오류입니다. 다시 시도해주시길 바랍니다.');
}

/**
 * 닉네임 중복체크 함수
 * * Validation을 통과한 닉네임이 Database에 존재하는지 확인하는 함수
 * @param {string} nickname
 * TODO 닉네임의 Validation에 대해 생각해봐야 함
 */
export async function searchUserNickname(nickname) {
  const userList = await pb.collection('users').getFullList({
    filter: `nickname = "${nickname}"`,
  });

  if (userList.length === 0) return '사용가능한 닉네임 입니다.';
  else return '이미 존재하는 닉네임 입니다.';
}

/**
 * 이메일 중복체크 함수
 * * Validation을 통과한 이메일이 Database에 존재하는지 확인하는 함수
 * @param {string} email
 */
export async function searchUserEmail(email) {
  const userList = await pb.collection('users').getFullList({
    filter: `email = "${email}"`,
  });

  if (userList.length === 0) return '사용가능한 이메일 입니다.';
  else return '이미 존재하는 이메일 입니다.';
}

/* -------------------------------------------- */
/*              읽은 책 등록 시 사용              */
/* -------------------------------------------- */

/**
 *
 * @param { number } totBookHeight DB 내 user의 기존 'book_height' field 값에 등록한 책의 height 수치를 더한 값
 * @param { number } doneBookNum DB 내 user의 기존 'done_book' field 값
 * @returns Update 된 user의 record
 */
export async function putBookToUser({ totBookHeight, doneBookNum }) {
  if (!(totBookHeight && doneBookNum)) return;

  return await pb.collection('users').update(loginUserData.id, {
    book_height: totBookHeight,
    done_book: doneBookNum + 1,
  });
}

/**
 *
 * @param { number } newUserLevel 책 등록 시 변화 된 user의 level
 * @returns Update 된 user의 record
 */
export async function putUserNewLevel(newUserLevel) {
  if (!newUserLevel) return;

  return await pb
    .collection('users')
    .update(loginUserData.id, { level: newUserLevel });
}

/* -------------------------------------------- */
/*             유저 정보 fetch 함수              */
/* -------------------------------------------- */

/**
 * 'users' collection에서 하나의 record를 불러오는 함수
 * @param { string } recId 'users' collection record ID
 * @param { Object } [options] PocketBase SDK 내 read를 위한 query options
 * @prop { string } [expand] [PocketBase 공식 문서](https://pocketbase.io/docs/) 참고
 * @prop { string } [fields] [PocketBase 공식 문서](https://pocketbase.io/docs/) 참고
 * @returns 'users' collection의 record 객체
 */
export const getOneUsersRec = async (recId, options) =>
  await pb.collection('users').getOne(recId, options);

/* -------------------------------------------- */
/*               인증된 유저 정보                */
/* -------------------------------------------- */

// 현재 로그인된 유저의 정보를 가져오는 변수
// 다른 정보 ( e.g., book_height ) 는 DB data 반영이 제대로 안 되니, loginUserData 객체에서는 id 값만 가져다가 쓸 것
export const loginUserData = pb.authStore.model;
