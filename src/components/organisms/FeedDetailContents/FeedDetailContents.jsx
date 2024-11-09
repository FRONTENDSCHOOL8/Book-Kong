import {} from 'prop-types';
import FeedDetailPostContents from '../../molecules/FeedDetailPostContents/FeedDetailPostContents';
import FeedDetailCommentContents from './../../molecules/FeedDetailCommentContents/FeedDetailCommentContents';

function FeedDetailContents() {
  return (
    <main className="pb-[63px] pt-[69px] bg-grayscale-50">
      <FeedDetailPostContents />
      <FeedDetailCommentContents />
    </main>
  );
}

FeedDetailContents.propTypes = {};

export default FeedDetailContents;
