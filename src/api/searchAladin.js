export async function getBookSearchData(keyword = '', pageParam) {
  if (keyword.replace(/\s/g, '') === '') return;

  const bookSearchData = await (
    await fetch(
      `${import.meta.env.VITE_PB_SEARCH}/?Query=${keyword}&start=${pageParam}&MaxResults=10`
    )
  ).json();

  return { current_page: pageParam, page_data: bookSearchData.response.json };
}

export async function getBookData(isbn13) {
  const isbn13Regex =
    /^(?:ISBN(?:-13)?:? )?(?<gs1>\d{3})(?:(?<number>\d{9})|(?=[\d -]{14}$)[ -](?<registrationGroup>\d{1,5})[ -](?<registrant>\d{1,7})[ -](?<publication>\d{1,6})[ -])(?<checkDigit>\d)$/gm;

  if (!isbn13Regex.test(isbn13)) return;

  const bookQueryRes = await fetch(
    `${import.meta.env.VITE_PB_BOOK_INFO}/?ItemId=${isbn13}`
  );
  const bookQueryJson = await bookQueryRes.json();
  const bookData = bookQueryJson.response.json.item[0];

  return bookData;
}
