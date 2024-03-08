import pb from '/src/api/pocketbase';

/**
 * PocketBase DB 내 특정 collection의 특정 field에 대해 특정 value 값이 DB 내에 이미 있는지 확인하는 함수입니다.
 * 사용법은 async 함수 내에서 await 예약어를 checkPbDuplication 앞에 입력하고 함수를 실행시키면 됩니다.
 * e.g.) async () => await checkPbDuplication();
 * @param {{collection: string; field: string; value: string}} object Parameter로 객체 값을 받음.
 * @returns {boolean} Return 값으로 field 내 value 값과 중복 되는 값이 이미 있을 경우 true를, 없을 경우 false를 반환
 */
export default async function checkPbDuplication({
  collection = 'users',
  field,
  value,
}) {
  try {
    await pb.collection(collection).getFirstListItem(`${field}='${value}'`);
  } catch {
    return false;
  }

  return true;
}
