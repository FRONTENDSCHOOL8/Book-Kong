import { useCallback } from 'react';
import {
  addFormDataProps,
  createLibFormData,
  postLibFormData,
} from '../../../utils/controlBookData';
import BookInfoBox from '../BookInfoBox/BookInfoBox';
import { useNavigate, useLoaderData } from 'react-router-dom';
import ReadingStates from '../../molecules/ReadingStates/ReadingStates';

function BookRegistForm() {
  const aladinBook = useLoaderData();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const formData = await createLibFormData('book-register');

      if (!formData) return;

      if (!aladinBook) {
        await postLibFormData(formData);

        return navigate('/library/bookshelf');
      }

      await addFormDataProps({ formData, aladinBook });

      await postLibFormData(formData);

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
