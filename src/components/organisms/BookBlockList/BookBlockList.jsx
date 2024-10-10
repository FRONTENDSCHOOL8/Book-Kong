import { v4 as uuidv4 } from 'uuid';
import { Skeleton } from '@mui/material';
import BookBlock from '../../molecules/BookBlock/BookBlock';
import { arrayOf, number, shape, string, bool } from 'prop-types';

function BookBlockList({ data, isLoading }) {
  const dummyPgArr = [250, 500, 150, 650, 350, 550];
  const dummyData = dummyPgArr.map((pgNum) => ({
    id: uuidv4(),
    title: '',
    total_page: pgNum,
  }));

  return isLoading ? (
    <ul className="flex flex-col items-center justify-center">
      {dummyData.map(({ id, title, total_page }, index) => (
        <Skeleton key={id} variant="rectangular">
          <BookBlock title={title} page={total_page} index={index} id={id} />
        </Skeleton>
      ))}
    </ul>
  ) : (
    <ul className="flex flex-col items-center justify-center">
      {data?.map(({ id, title, total_page }, index) => (
        <BookBlock
          key={id}
          title={title}
          page={total_page}
          index={index}
          id={id}
        />
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
  isLoading: bool,
};

export default BookBlockList;
