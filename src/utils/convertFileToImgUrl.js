// 파일 리더를 Promise와 통합한 유틸리티
function convertFileToImgUrl(file) {
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
  });
}

export default convertFileToImgUrl;
