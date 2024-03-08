import PropTypes from 'prop-types';

function LargeHeaderIcon({ title }) {
  return (
    <>
      {title === '서재' && (
        <a href="/library/search">
          <img src="/images/icons/addBook.svg" alt="책 추가" />
        </a>
      )}
      {title === '기록' && (
        <a href="/library">
          <img src="/images/icons/newrecord.svg" alt="글 작성" />
        </a>
      )}
    </>
  );
}

LargeHeaderIcon.propTypes = { title: PropTypes.string.isRequired };

export default LargeHeaderIcon;
