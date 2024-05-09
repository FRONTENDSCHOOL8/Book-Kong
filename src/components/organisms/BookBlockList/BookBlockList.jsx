import { arrayOf, number, shape, string } from 'prop-types';
import BookBlock from '../../molecules/BookBlock/BookBlock';

function BookBlockList({ data }) {
  return (
    <ul className="flex flex-col justify-center items-center">
      {data?.map(({ id, title, total_page }, index) => (
        <BookBlock key={id} title={title} page={total_page} index={index} />
      ))}
    </ul>
  );
}

BookBlockList.propTypes = {
  data: arrayOf(
    shape({
      id: string.isRequired,
      title: string.isRequired,
      total_page: number.isRequired,
    })
  ),
};

export default BookBlockList;
