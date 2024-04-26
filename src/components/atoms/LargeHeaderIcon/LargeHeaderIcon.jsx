import { string } from 'prop-types';

function LargeHeaderIcon({ title }) {
  return (
    <>
      {title === '서재' && (
        <a href="/library/book-search">
          <img src="/images/icons/addBook.svg" alt="책 추가" />
        </a>
      )}
      {title === '기록' && (
        <a href="/library">
          <img src="/images/icons/newRecord.svg" alt="글 작성" />
        </a>
      )}
    </>
  );
}

LargeHeaderIcon.propTypes = {
  title: string.isRequired,
};

export default LargeHeaderIcon;
