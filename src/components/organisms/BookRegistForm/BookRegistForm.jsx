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
  // formData를 DB 내 'library' collection에 post하고, 'users' collection에 관련 내용을 update 하는 함수
  const registFormData = useCallback(async (formData) => {
    // 페이지 내 form 요소 data를 DB의 'library' collection으로 post
    await postLibFormData(formData);

    // DB 내 'users' collection의 book_height 값을 update하기 위한 변수 선언
    const bookPageNum = formData.get('total_page');
    const bookHeight = calcBookHeight(bookPageNum) * 1;
    const userRecord = await pb.collection('users').getOne(loginUserData.id);
    const totBookHeight = userRecord['book_height'] * 1 + bookHeight;

    // DB 내 'users' collection의 book_height 값 update
    const updatedUserRec = await putUserBookHeight(totBookHeight);

    // 더해진 bookHeight 값으로 인해 user의 level이 변동 되었을 경우 DB에 반영하는 로직
    const updatedBookHeight = updatedUserRec['book_height'] * 1;
    const userLevelCur = updatedUserRec.level * 1;

    if (calcLevel(updatedBookHeight) !== userLevelCur) {
      putUserNewLevel(calcLevel(updatedBookHeight));
    }
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const formData = await createLibFormData('book-register');

      if (!formData) return;

      if (!aladinBook) {
        registFormData(formData);

        navigate('/library/bookshelf');
      }

      await addFormDataProps({ formData, aladinBook });

      registFormData(formData);

      navigate('/library/bookshelf');
    },
    [aladinBook, navigate, registFormData]
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
