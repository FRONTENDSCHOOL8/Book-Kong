import { number, string } from 'prop-types';
import BookTitle from '../../subatoms/BookTitle/BookTitle';

function BookBlock({ title, page, index }) {
  switch (index % 3) {
    case 0:
      return (
        <li
          className={`h-[${page}px] bookTree-list w-[230px] translate-x-[-24px] border rounded-sm border-grayscale-white bg-primary-500 text-white  display flex justify-center items-center`}
        >
          <BookTitle>{title}</BookTitle>
        </li>
      );

    case 1:
      return (
        <li
          className={`h-[${page}px] bookTree-list w-[230px] translate-x-6 border rounded-sm border-grayscale-white bg-badge-yellow text-primary-500 display flex justify-center items-center`}
        >
          <BookTitle>{title}</BookTitle>
        </li>
      );

    case 2:
      return (
        <li
          className={`h-[${page}px] bookTree-list w-[230px] border rounded-sm border-grayscale-white bg-badge-yellow-02 text-grayscale-900  display flex justify-center items-center`}
        >
          <BookTitle>{title}</BookTitle>
        </li>
      );
  }
}

BookBlock.propTypes = {
  title: string,
  page: string,
  index: number,
};

export default BookBlock;
