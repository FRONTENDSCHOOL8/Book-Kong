// 출처: https://velog.io/@ordidxzero/Image-URL%EC%9D%84-File-object%EB%A1%9C-%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0
async function convertImgUrlToFile(url) {
  const response = await fetch(url);
  const data = await response.blob();
  const ext = url.split('.').pop(); // url 구조에 맞게 수정할 것
  const fileName = url.split('/').pop(); // url 구조에 맞게 수정할 것
  const metaData = { type: `image/${ext}` };

  if (!fileName) console.error('파일 이름이 제대로 추출 되지 않았습니다.');

  return new File([data], fileName, metaData);
}

export default convertImgUrlToFile;
