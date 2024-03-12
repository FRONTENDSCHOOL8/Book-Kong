import List from '../List/List';
import { useQuery } from '@tanstack/react-query';
import { loginUserData } from '../../../utils/controlUserData';
import { getUserLibraryData } from '../../../utils/controlBookData';

function Bookshelf() {
  const { data } = useQuery({
    queryKey: ['bookshelf', loginUserData.id],
    queryFn: () => getUserLibraryData(),
  });

  console.log(data);
  return (
    <main className="px-4 pt-6 pb-[200px] overflow-scroll h-screen">
      <List data={data} />
    </main>
  );
}

export default Bookshelf;
