import { number, string } from 'prop-types';
import BookTitle from '../../subatoms/BookTitle/BookTitle';

// 페이지 별 키(key)에 설정할 높이를 아래처럼 작성합니다.

function BookBlock({ title, page, index }) {
  const pageMap = {
    page: `h-[${Math.max(page * 0.1, 24)}px]`,
  };

  // 공통 클래스 이름
  const commonClassNames =
    'bookTree-list w-[230px] border rounded-sm border-grayscale-white display flex justify-center items-center';

  // 병합할 클래스 이름 (공통 클래스 이름 + 페이지 맵의 클래스 이름)
  let classNames = `${commonClassNames} ${pageMap[page]}`;

  // 조건 처리
  // 케이스 별 클래스 이름 병합
  switch (index % 3) {
    case 0:
      classNames += ' ml-[-24px] bg-primary-500 text-white';
      break;
    case 1:
      classNames += ' ml-6 bg-badge-yellow text-primary-500';
      break;
    case 2:
      classNames += ' bg-badge-yellow-02 text-grayscale-900';
      break;
  }

  // 마크업 반환 (병합된 클래스 이름 설정)
  return (
    <li
      className={classNames}
      style={{ height: `${Math.max(page * 0.1, 24)}px` }}
    >
      <BookTitle>{title}</BookTitle>
    </li>
  );
}

BookBlock.propTypes = {
  title: string,
  page: number,
  index: number,
};

export default BookBlock;
