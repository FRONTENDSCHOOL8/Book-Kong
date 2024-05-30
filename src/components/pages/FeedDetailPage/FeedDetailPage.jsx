import {} from 'prop-types';
import { Helmet } from 'react-helmet-async';
import Header from '../../organisms/Header/Header/Header';
import FeedDetailContents from './../../organisms/FeedDetailContents/FeedDetailContents';

function FeedDetailPage() {
  return (
    <>
      <Helmet>
        <title>책콩 | 피드 상세페이지</title>
      </Helmet>
      <Header title={'피드 상세'} />
      <FeedDetailContents />
    </>
  );
}

FeedDetailPage.propTypes = {};

export default FeedDetailPage;
