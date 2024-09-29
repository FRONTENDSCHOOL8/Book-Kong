import { useState } from 'react';
import { string } from 'prop-types';
import { motion } from 'framer-motion';
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
        <motion.label
          id="book-cover"
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
          className="w-[110px] h-[158px] cursor-pointer"
          htmlFor="cover"
        >
          <img src={bookImgUrl} alt={bookTitle} />
        </motion.label>
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
      <motion.label
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.9 }}
        className="contents-xs flex flex-col justify-center items-center pt-[48px] border w-[110px] h-[158px] cursor-pointer"
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
      </motion.label>
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
