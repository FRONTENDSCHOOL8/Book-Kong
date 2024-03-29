import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function BookInfoImage() {
  const [searchParams] = useSearchParams();
  const initialImageUrl = searchParams.get('cover');
  const [url, setUrl] = useState(initialImageUrl);

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageURL = e.target.result;
        setUrl(imageURL);
      };

      reader.readAsDataURL(file);
    } else {
      console.log('파일이 선택되지 않았습니다.');
    }
  };

  return (
    <li className="flex justify-center overflow-hidden ">
      {url && (
        <>
          <label className="w-[110px] h-[158px]" htmlFor="cover">
            <img src={url} alt="" className="" />
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
        onChange={handleChange}
      />
    </li>
  );
}

export default BookInfoImage;
