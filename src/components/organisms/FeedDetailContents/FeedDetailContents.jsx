import {} from 'prop-types';
import FeedDetailPostContents from '../../molecules/FeedDetailPostContents/FeedDetailPostContents';
import FeedDetailCommentContents from './../../molecules/FeedDetailCommentContents/FeedDetailCommentContents';

function FeedDetailContents() {
  return (
    <main className="mb-[100px] bg-background-gray">
      <FeedDetailPostContents />
      <FeedDetailCommentContents />
    </main>
  );
}

FeedDetailContents.propTypes = {};

export default FeedDetailContents;
