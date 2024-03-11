import pb from '../api/pocketbase';
import { loginUserData } from './controlUserData';

async function loadFeedData(sort) {
  return await pb
    .collection('feeds')
    .getFullList({ expand: 'book_id', sort: `${sort}` });
}

export async function getUserFeedData(sort = '-created') {
  const list = await loadFeedData(sort);
  return list?.filter(
    (feed) => feed.expand.book_id.user_id === loginUserData.id
  );
}
