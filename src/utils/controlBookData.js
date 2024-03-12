import pb from '/src/api/pocketbase';

/* -------------------------------------------- */
/*                  책 관련 데이터 로딩                 */
/* -------------------------------------------- */

/**
 * 로그인 유저와 관련된 책을 불러오는 함수
 * @param {string} status 기본적으로 all로 설정, 책의 상태에 따라 구분
 * @param {string} sort 기본적으로 created로 설정, 'created'와 '-created' 두개
 */
export async function getUserLibraryData(status = 'all', sort = 'created') {
  if (status === 'all') {
    const resultList = await pb.collection('library').getFullList({
      filter: `user_id = "${pb.authStore.model.id}"`,
      sort: `${sort}`,
    });

    return resultList;
  } else {
    const resultList = await pb.collection('library').getFullList({
      filter: `user_id = "${pb.authStore.model.id}" && status = "${status}"`,
      sort: `${sort}`,
    });

    return resultList;
  }
}

/**
 * 나의 책을 검색하는 함수
 * * 책의 status 별로 검색 가능
 * * 기본적으로는 모든 책을 검색
 * @param {string} keyword 검색 키워드
 */
export async function searchUserLibraryData(keyword, status = 'all') {
  if (status === 'all') {
    const resultList = await pb.collection('library').getFullList({
      filter: `user_id = "${pb.authStore.model.id}" && title ~ "${keyword}"`,
    });

    return resultList;
  } else {
    const resultList = await pb.collection('library').getFullList({
      filter: `user_id = "${pb.authStore.model.id}" && status = "${status}" && title ~ "${keyword}"`,
    });

    return resultList;
  }
}
