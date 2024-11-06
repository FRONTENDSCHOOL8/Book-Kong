import { useState, useEffect } from 'react';

export function useAladinDataInit(data) {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    if (data) {
      setBookData((prevData) => {
        const newlyFetchedData = data.pages.flatMap(
          (page) => page.page_data.item
        );
        const mergedMapData = new Map();

        newlyFetchedData.forEach((book) => {
          mergedMapData.set(book.isbn13, book);
        });

        prevData.forEach((book) => {
          if (!mergedMapData.has(book.isbn13)) {
            mergedMapData.set(book.isbn13, book);
          }
        });

        return Array.from(mergedMapData.values());
      });
    }
  }, [data]);

  return bookData;
}
