import pb from '../api/pocketbase';
import { loginUserData } from './controlUserData';

async function loadMemoData() {
  return await pb.collection('memos').getFullList({ expand: 'book_id' });
}

export async function getUserMemoData() {
  const list = await loadMemoData();
  return list?.filter(
    (memo) => memo.expand.book_id.user_id === loginUserData.id
  );
}
