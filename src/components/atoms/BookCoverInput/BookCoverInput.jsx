import { useState } from 'react';
import { string } from 'prop-types';
import convertFileToImgUrl from '../../../utils/convertFileToImgUrl';

function BookCoverInput({ title: bookTitle, cover: aladinBookImgUrl }) {
  const [bookImgUrl, setBookImgUrl] = useState(aladinBookImgUrl);

  const handleChange = async (e) => {
    const file = e.target.files[0];

    try {
      const imageURL = await convertFileToImgUrl(file);
      setBookImgUrl(imageURL);
    } catch (e) {
      console.error(e);
    }
  };

  if (bookImgUrl)
    return (
      <li className="flex justify-center overflow-hidden ">
        <label id="book-cover" className="w-[110px] h-[158px]" htmlFor="cover">
          <img src={bookImgUrl} alt={bookTitle} />
        </label>
        <input
          className="sr-only"
          type="file"
          id="cover"
          name="cover"
          onChange={handleChange}
          accept="image/*"
        />
      </li>
    );

  return (
    <li className="flex justify-center overflow-hidden ">
      <label
        className="contents-xs flex flex-col justify-center items-center pt-[48px] border w-[110px] h-[158px]"
        htmlFor="cover"
      >
        <div className="text-center">
          이미지를
          <br />
          등록해주세요.
        </div>
        <img
          src="/images/characters/7단계.png"
          alt=""
          className="w-[90px] h-[74px] translate-y-[14px]"
        />
      </label>
      <input
        className="sr-only"
        type="file"
        id="cover"
        name="cover"
        onChange={handleChange}
        accept="image/*"
      />
    </li>
  );
}

BookCoverInput.propTypes = {
  title: string,
  cover: string,
};

export default BookCoverInput;
