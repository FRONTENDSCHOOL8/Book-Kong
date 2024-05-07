export async function getBookData(keyword = '', pageParam) {
  if (keyword.replace(/\s/g, '') === '') return null;

  const bookData = await (
    await fetch(
      `${import.meta.env.VITE_PB_SEARCH}/?Query=${keyword}&start=${pageParam}&MaxResults=10`
    )
  ).json();

  return { current_page: pageParam, page_data: bookData.response.json };
}
