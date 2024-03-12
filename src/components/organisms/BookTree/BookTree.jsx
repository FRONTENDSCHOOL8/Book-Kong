import {} from 'prop-types';
import BookBlockList from './../../molecules/BookBlockList/BookBlockList';
import SaveBookImg from './../../atoms/SaveBookImg/SaveBookImg';
import BookInfo from '../../molecules/BookInfo/BookInfo';
import { useQuery } from '@tanstack/react-query';
import { getUserLibraryData } from '/src/utils/controlBookData';

function BookTree() {
  const { data, isLoading } = useQuery({
    queryKey: ['book'],
    queryFn: async () => getUserLibraryData('done'),
  });

  return (
    <main className="h-screen bg-grayscale-white relative justify-end flex flex-col pt-[166px] pb-[50px] px-4">
      <div className="absolute left-0 flex justify-between w-full px-4 top-[121px]">
        <BookInfo data={data} isLoading={isLoading} />
        <SaveBookImg />
      </div>
      <BookBlockList data={data} />
    </main>
  );
}

BookTree.propTypes = {};

export default BookTree;
