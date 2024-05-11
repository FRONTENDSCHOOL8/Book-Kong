import { loginUserData } from './controlUserData';
import pb from '/src/api/pocketbase';
import convertImgUrlToFile from './convertImgUrlToFile';

/* -------------------------------------------- */
/*              책 관련 데이터 컨트롤             */
/* -------------------------------------------- */

/**
 * 로그인 유저와 관련된 책을 불러오는 함수
 * @param {string} status 기본적으로 all로 설정, 책의 상태에 따라 구분
 * @param {string} sort 기본적으로 created로 설정, 'created'와 '-created' 두개
 */
export async function getUserLibraryData(status = 'all', sort = 'created') {
  if (status === 'all') {
    const resultList = await pb.collection('library').getFullList({
      filter: `user_id = "${pb.authStore.model.id}"`,
      sort: `${sort}`,
    });

    return resultList;
  } else {
    const resultList = await pb.collection('library').getFullList({
      filter: `user_id = "${pb.authStore.model.id}" && status = "${status}"`,
      sort: `${sort}`,
    });

    return resultList;
  }
}

export async function searchUserLibData(query) {
  if (query !== '') {
    const resultList = await pb.collection('library').getFullList({
      filter: `user_id = "${pb.authStore.model.id}" && title ~ "${query}"`,
    });

    return resultList;
  } else {
    const resultList = await pb.collection('library').getFullList({
      filter: `user_id = "${pb.authStore.model.id}"`,
    });

    return resultList;
  }
}

/**
 * 나의 책을 검색하는 함수
 * * 책의 status 별로 검색 가능
 * * 기본적으로는 모든 책을 검색
 * @param {string} keyword 검색 키워드
 */
export async function searchUserLibraryData(keyword, status = 'all') {
  if (status === 'all') {
    const resultList = await pb.collection('library').getFullList({
      filter: `user_id = "${pb.authStore.model.id}" && title ~ "${keyword}"`,
    });

    return resultList;
  } else {
    const resultList = await pb.collection('library').getFullList({
      filter: `user_id = "${pb.authStore.model.id}" && status = "${status}" && title ~ "${keyword}"`,
    });

    return resultList;
  }
}

/**
 * 로그인 한 유저가 등록하고자 하는 책 정보를 포켓호스트 DB 내 'library' collection에 등록하는 함수
 * @param { string } formId 'form' element에 할당된 id
 * @returns { Object } 'library' collection에 create 된 record 객체
 */
export async function createLibRecordByForm(formId) {
  const formElement = document.getElementById(formId);
  const formData = new FormData(formElement);
  const bookCoverLabel = document.getElementById('book-cover');
  const isBookCover = !!bookCoverLabel;

  if (!isBookCover) {
    alert('책 사진을 등록해주세요.');
    return;
  }

  for (const value of formData.values()) {
    if (!value) {
      alert('입력이 필요한 정보를 모두 입력해주세요.');
      return;
    }
  }

  const urlSearchParams = new URLSearchParams(window.location.search);
  const bookCoverInput = document.getElementById('cover');

  if (urlSearchParams && !bookCoverInput.value) {
    const bookCoverFileName = urlSearchParams.get('cover').split('/').pop();
    const bookCoverImgFile = await convertImgUrlToFile(
      urlSearchParams.get('cover')
    );

    formData.set('cover', bookCoverImgFile, bookCoverFileName);
  }

  formData.append('user_id', loginUserData.id);

  try {
    const record = await pb.collection('library').create(formData);
    return record;
  } catch (e) {
    console.error(e);
  }
}
