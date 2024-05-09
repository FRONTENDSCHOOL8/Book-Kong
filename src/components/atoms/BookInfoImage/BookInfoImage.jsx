import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// 파일 리더를 Promise와 통합한 유틸리티
const file2Image = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    if (!file) {
      reject('파일이 선택되지 않았습니다.');
    }

    reader.onload = (e) => {
      const imageURL = e.target.result;
      resolve(imageURL);
    };
    reader.onerror = () => reject('파일을 읽는 중에 에러가 발생했습니다.');

    reader.readAsDataURL(file);
  })
}

function BookInfoImage() {
  const [searchParams] = useSearchParams();
  const initialImageUrl = searchParams.get('cover');
  const [url, setUrl] = useState(initialImageUrl);

  const handleChange = async (e) => {
    const file = e.target.files[0];

    try {
      const imageURL = await file2Image(file);
      setUrl(imageURL);
    } catch (e) {
      console.error(e);
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
        accept="image/*"
      />
    </li>
  );
}

export default BookInfoImage;
