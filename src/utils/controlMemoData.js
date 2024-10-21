import pb from '../api/pocketbase';
import { loginUserData } from './controlUserData';

export async function getUserMemoData(sort = '-created') {
  return await pb
    .collection('memos')
    .getFullList({
      filter: `user_id = '${loginUserData.id}'`,
      sort: `${sort}`,
    });
}

export async function getMemoData(memoId, options) {
  return await pb.collection('memos').getOne(memoId, options);
}
