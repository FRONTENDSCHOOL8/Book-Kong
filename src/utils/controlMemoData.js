import pb from '../api/pocketbase';
import { loginUserData } from './controlUserData';

export const getUserMemosRecs = async (sort = '-created') =>
  await pb.collection('memos').getFullList({
    filter: `user_id = '${loginUserData.id}'`,
    sort: `${sort}`,
  });

/**
 * 'memos' collection에서 하나의 record를 불러오는 함수
 * @param { string } recId 'memos' collection record ID
 * @param { Object } [options] PocketBase SDK 내 read를 위한 query options
 * @prop { string } [expand] [PocketBase 공식 문서](https://pocketbase.io/docs/) 참고
 * @prop { string } [fields] [PocketBase 공식 문서](https://pocketbase.io/docs/) 참고
 * @returns 'memos' collection의 record 객체
 */
export const getOneMemosRec = async (recId, options) =>
  await pb.collection('memos').getOne(recId, options);
