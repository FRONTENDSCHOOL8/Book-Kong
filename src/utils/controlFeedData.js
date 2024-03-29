import pb from '../api/pocketbase';

async function loadFeedData(sort) {
  return await pb
    .collection('feeds')
    .getFullList({ expand: 'book_id, book_id.user_id', sort: `${sort}` });
}

export async function getUserFeedData(sort = '-created') {
  const list = await loadFeedData(sort);
  return list;
}
