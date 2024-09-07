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
 * 포켓호스트 DB 내 'library' collection에 post 할 formData 객체를 생성하는 함수
 * @param { string } formId 'form' element에 할당된 id
 * @returns { Object } formData 객체
 */
export async function createLibFormData(formId) {
  const bookCoverLabel = document.getElementById('book-cover');
  const isBookCover = !!bookCoverLabel;

  if (!isBookCover) {
    alert('책 사진을 등록해주세요.');
    return;
  }

  const formElement = document.getElementById(formId);
  const formData = new FormData(formElement);

  for (const value of formData.values()) {
    if (!value) {
      alert('책 정보를 모두 입력해주세요.');
      return;
    }
  }

  formData.append('user_id', loginUserData.id);

  return formData;
}

/**
 * 포켓호스트 DB 내 'library' collection에 추가로 보낼 field data를 생성한 formData 객체에 추가하는 함수
 * @param { Object }
 * @prop { Object } formData 기존에 만들어진 formData 객체
 * @prop { Object } aladinBook 추가로 삽입 될 formData props
 * @prop { string } aladinBook.cover 알라딘 DB에서 가져온 책 커버 이미지 url
 * @prop { string } aladinBook.description 알라딘 DB에서 가져온 책 소개 글
 * @prop { string } aladinBook.link 알라딘 서비스 내 해당 책의 상세 페이지 url
 * @returns { undefined }
 */
export async function addFormDataProps({
  formData,
  aladinBook: { cover: bookCoverUrl, description, link: productUrl, pubDate },
}) {
  if (!bookCoverUrl) {
    const bookCoverInput = document.getElementById('cover');
    const bookCoverFileName = bookCoverInput.value;
    const bookCoverImgFile = bookCoverInput.files[0];

    formData.set('cover', bookCoverImgFile, bookCoverFileName);
  }

  const bookCoverFileName = bookCoverUrl.split('/').pop();
  const bookCoverImgFile = await convertImgUrlToFile(bookCoverUrl);

  formData.set('cover', bookCoverImgFile, bookCoverFileName);
  formData.append('description', description);
  formData.append('url', productUrl);
  formData.append('publication_date', pubDate);
}

/**
 * 만들어진 formData 객체를 포켓호스트 DB 내 'library' collection에 post하는 함수
 * @param { Object } formData Post 할 formData 객체
 * @returns { undefined }
 */
export async function postLibFormData(formData) {
  try {
    await pb.collection('library').create(formData);
  } catch (e) {
    console.error(e);
  }
}

export async function getLibraryData(recordId) {
  return await pb.collection('library').getOne(recordId);
}
