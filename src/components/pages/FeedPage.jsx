import { Helmet } from 'react-helmet-async';
import FeedList from '../organisms/FeedList/FeedList';
import Header from '../organisms/Header/Header/Header';

export default function FeedPage() {
  return (
    <>
      <Helmet>
        <title>책콩 | 피드</title>
      </Helmet>
      <Header title={'피드'} />
      <hr className="bg-grayscale-200" />
      <FeedList />
    </>
  );
}
