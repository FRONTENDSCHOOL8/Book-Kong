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
export const getAllUserLibRecs = async () =>
  await pb.collection('library').getFullList({
    filter: `user_id = '${loginUserData.id}'`,
    sort: '-created',
  });

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
 * 포켓호스트 DB 내 'library' collection에 post 할 formData 객체를 생성하는 함수
 * @param { string } formId 'form' element에 할당된 id
 * @returns { Object } formData 객체
 */
export async function createLibFormData(formId) {
  const bookCoverLabel = document.getElementById('book-cover');
  const isBookCover = !!bookCoverLabel;

  if (!isBookCover) {
    alert('책 이미지를 등록해주세요.');
    return;
  }

  const formElement = document.getElementById(formId);
  const formData = new FormData(formElement);

  for (const [key, value] of formData) {
    if (!value) {
      switch (key) {
        case 'start_date':
          return alert(`'시작일'을 입력해주세요.`);

        case 'end_date':
          return alert(`'완독일'을 입력해주세요.`);

        case 'title':
          return alert(`'책 제목'을 입력해주세요.`);

        case 'author':
          return alert(`'지은이/옮긴이'를 입력해주세요.`);

        case 'publisher':
          return alert(`'출판사'를 입력해주세요.`);

        case 'total_page':
          return alert(`'총 페이지'를 입력해주세요.`);

        case 'isbn_13':
          return alert(`'ISBN'을 입력해주세요.`);
      }
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
  formData.append('score', 3); // 임시 필드 값
  formData.append('expectation_score', 3); // 임시 필드 값
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

export async function getOneLibraryData(recordId) {
  return await pb.collection('library').getOne(recordId);
}
