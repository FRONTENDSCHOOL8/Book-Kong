import pb from '../api/pocketbase';
import { loginUserData } from './controlUserData';

async function loadMemoData(sort) {
  return await pb
    .collection('memos')
    .getFullList({ expand: 'book_id', sort: `${sort}` });
}

export async function getUserMemoData(sort = '-created') {
  const list = await loadMemoData(sort);
  return list?.filter(
    (memo) => memo.expand.book_id.user_id === loginUserData.id
  );
}

export async function getMemoData(memoId, options) {
  return await pb.collection('memos').getOne(memoId, options);
}
