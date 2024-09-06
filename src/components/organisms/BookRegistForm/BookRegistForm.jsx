import {
  addFormDataProps,
  createLibFormData,
  postLibFormData,
} from '../../../utils/controlBookData';
import { useState, useCallback } from 'react';
import BookInfoBox from '../BookInfoBox/BookInfoBox';
import { useNavigate, useLoaderData } from 'react-router-dom';
import ReadingState from '../../molecules/ReadingState/ReadingState';

function BookRegistForm() {
  const [status, setStatus] = useState('완독');

  const handleChange = useCallback((e) => {
    const input = e.target.closest('input');
    if (!input) return;

    setStatus(input.value);
  }, []);

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
      <ReadingState status={status} onChange={handleChange} />
      <hr className="mt-6 mb-6" />
      <BookInfoBox data={aladinBook} />
    </form>
  );
}

export default BookRegistForm;
