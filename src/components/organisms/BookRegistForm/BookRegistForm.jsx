import {
  addFormDataProps,
  createLibFormData,
  postLibFormData,
} from '../../../utils/controlBookData';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import BookInfoBox from '../BookInfoBox/BookInfoLBox';
import ReadingState from '../../molecules/ReadingState/ReadingState';

function BookRegistForm() {
  const [status, setStatus] = useState('완독');

  const handleClick = useCallback((e) => {
    e.preventDefault();
    const button = e.target.closest('button');
    if (!button) return;

    setStatus(button.innerText);
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
      <ReadingState status={status} onClick={handleClick} />
      <hr className="mt-6 mb-6" />
      <BookInfoBox data={aladinBook} />
    </form>
  );
}

export default BookRegistForm;
