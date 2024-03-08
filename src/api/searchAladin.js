const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
const URL = `${PROXY}`;

export async function getBookData(
  keyword = '',
  startPage = '1',
  maxResults = '10'
) {
  if (keyword.replace(/\s/g, '') === '') return null;

  const bookData = await (
    await fetch(
      `${URL}${import.meta.env.VITE_PB_SEARCH}/?Query=${keyword}&start=${startPage}&MaxResults=${maxResults}`
    )
  ).json();

  return bookData.response.json;
}
