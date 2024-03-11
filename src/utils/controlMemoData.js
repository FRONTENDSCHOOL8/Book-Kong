import pb from '../api/pocketbase';
import { loginUserData } from './controlUserData';

async function loadMemoData(page, sort) {
  return await pb.collection('memos').getList(page, 20, {
    expand: 'book_id',
    sort: `${sort}`,
  });
}

export async function getUserMemoData(page, sort = '-created') {
  const list = await loadMemoData(page, sort);
  return list?.items.filter(
    (memo) => memo.expand.book_id.user_id === loginUserData.id
  );
}
