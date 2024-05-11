import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import convertFileToImgUrl from '../../../utils/convertFileToImgUrl';

function BookCoverInput() {
  const [searchParams] = useSearchParams();
  const [url, setUrl] = useState(searchParams.get('cover'));

  const handleChange = async (e) => {
    const file = e.target.files[0];

    try {
      const imageURL = await convertFileToImgUrl(file);
      setUrl(imageURL);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <li className="flex justify-center overflow-hidden ">
      {url && (
        <>
          <label
            id="book-cover"
            className="w-[110px] h-[158px]"
            htmlFor="cover"
          >
            <img src={url} alt={searchParams.get('title')} />
          </label>
        </>
      )}
      {!url && (
        <>
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
        </>
      )}
      <input
        className="hidden"
        type="file"
        id="cover"
        name="cover"
        onChange={handleChange}
        accept="image/*"
      />
    </li>
  );
}

BookCoverInput.propTypes = {};

export default BookCoverInput;
