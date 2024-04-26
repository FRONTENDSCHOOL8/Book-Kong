// cm 계산식
// page : total_page
// perPageHeight : 장당 페이지(* 0.005)
// decimal : 소수점 자리(2자리까지)

export function calcUserBookHeight(page) {
  // 장당 페이지 높이
  const perPageHeight = 0.005;
  // 소수점 자릿수
  const decimal = 2;

  return (page * perPageHeight).toFixed(decimal);
}

// cm 계산식에서 가져온 height로 level 구분
export function calcUserLevel(height) {
  let level = 1;

  if (height < 35) {
    level = 1;
  } else if (height < 70) {
    level = 2;
  } else if (height < 105) {
    level = 3;
  } else if (height < 140) {
    level = 4;
  } else if (height < 175) {
    level = 5;
  } else if (height < 210) {
    level = 6;
  } else if (height < 245) {
    level = 7;
  } else if (height < 280) {
    level = 8;
  } else if (height < 315) {
    level = 9;
  } else if (height < 350) {
    level = 10;
  } else if (height < 385) {
    level = 11;
  } else {
    level = 12;
  }
  return level;
}
