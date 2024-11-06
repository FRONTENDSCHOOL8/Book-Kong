import pb from '../api/pocketbase';

export const getAllFeedsRec = async (sort = '-created') =>
  await pb
    .collection('feeds')
    .getFullList({ expand: 'user_id', sort: `${sort}` });
