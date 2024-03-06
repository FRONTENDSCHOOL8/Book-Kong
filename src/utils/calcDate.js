export function calcDate(date) {
  const str = date.slice(0, 10).split('-');
  return `${str[0]}년 ${str[1]}월 ${str[2]}일`;
}
