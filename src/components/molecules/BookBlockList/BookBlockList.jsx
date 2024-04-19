import { arrayOf, number, shape, string } from 'prop-types';
import BookBlock from '../../atoms/BookBlock/BookBlock';
import { useMemo } from 'react';

function BookBlockList({ data }) {
  const bookBlocks = useMemo(() => {
    return data?.map(({ id, title, total_page }, index) => (
      <BookBlock key={id} title={title} page={total_page} index={index} />
    ));
  }, [data]);

  return (
    <ul className="flex flex-col justify-center items-center">{bookBlocks}</ul>
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
