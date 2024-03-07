export default function convertDayFormat(dayInfo /* y-m-d */) {
  const [year, month, day] = dayInfo.slice(0, 10).split('-'); // ['2022', '1', '21']
  return `${year}년 ${month}월 ${day}일`;
}
