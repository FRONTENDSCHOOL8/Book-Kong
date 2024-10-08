import { useCallback } from 'react';
import {
  loginUserData,
  putUserBookHeight,
  putUserNewLevel,
} from '../../../utils/controlUserData';
import {
  addFormDataProps,
  createLibFormData,
  postLibFormData,
} from '../../../utils/controlBookData';
import pb from '../../../api/pocketbase';
import BookInfoBox from '../BookInfoBox/BookInfoBox';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { calcBookHeight, calcLevel } from '../../../utils/calcLevel';
import ReadingStates from '../../molecules/ReadingStates/ReadingStates';

function BookRegistForm() {
  const aladinBook = useLoaderData();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // 책 등록 페이지에 입력된 정보를 바탕으로 formData 객체를 생성
      const formData = await createLibFormData('book-register');

      if (!formData) return;

      // 책 등록 시 user의 book_height 값을 업데이트하기 위한 변수 선언
      const bookPageNum = formData.get('total_page');
      const bookHeight = calcBookHeight(bookPageNum) * 1;
      const userRecord = await pb.collection('users').getOne(loginUserData.id);
      const totBookHeight = userRecord['book_height'] * 1 + bookHeight;

      // 직접 책을 등록할 경우 작동하는 코드
      if (!aladinBook) {
        await postLibFormData(formData);

        // DB 내 'users' collection의 로그인 한 user record의 'book_height' field 값 업데이트 로직
        const updatedUserRec = await putUserBookHeight(totBookHeight);

        // 더해진 bookHeight 값으로 인해 user의 level이 변동 되었을 경우 DB에 반영하는 로직
        const updatedBookHeight = updatedUserRec['book_height'] * 1;
        const userLevelCur = updatedUserRec.level * 1;

        if (calcLevel(updatedBookHeight) !== userLevelCur) {
          putUserNewLevel(calcLevel(updatedBookHeight));
        }

        // '서재 페이지 - 책장'으로 navigate
        return navigate('/library/bookshelf');
      }

      // 알라딘 DB에서 가져온 책의 정보를 'library' collection에 post 하는 코드 영역
      await addFormDataProps({ formData, aladinBook });

      await postLibFormData(formData);

      // DB 내 'users' collection의 로그인 한 user record의 'book_height' field 값 업데이트 로직
      const updatedUserRec = await putUserBookHeight(totBookHeight);

      // 더해진 bookHeight 값으로 인해 user의 level이 변동 되었을 경우 DB에 반영하는 로직
      const updatedBookHeight = updatedUserRec['book_height'] * 1;
      const userLevelCur = updatedUserRec.level * 1;

      if (calcLevel(updatedBookHeight) !== userLevelCur) {
        putUserNewLevel(calcLevel(updatedBookHeight));
      }

      // 책 등록 과정 완료 시 책장으로 이동
      navigate('/library/bookshelf');
    },
    [aladinBook, navigate]
  );

  return (
    <form id="book-register" onSubmit={handleSubmit}>
      <ReadingStates />
      <hr className="mt-6 mb-6" />
      <BookInfoBox data={aladinBook} />
    </form>
  );
}

export default BookRegistForm;
