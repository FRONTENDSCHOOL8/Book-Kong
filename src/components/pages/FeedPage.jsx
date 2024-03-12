import FeedList from '../organisms/FeedList/FeedList';
import Header from '../organisms/Header/Header/Header';

export default function FeedPage() {
  return (
    <>
      <Header title={'피드'} />
      <hr className="bg-grayscale-200" />
      <FeedList />
    </>
  );
}
