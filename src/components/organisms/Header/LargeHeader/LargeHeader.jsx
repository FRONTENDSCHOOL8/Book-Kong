import PropTypes from 'prop-types';

function LargeHeader({ title }) {
  return (
    <header className="flex justify-between items-center px-4 py-3 sticky">
      <h1 className="heading-sm text-primary-500">{title}</h1>

      {title === '서재' && (
        <a href="/record">
          <img src="/images/icons/addBook.svg" alt="책 추가" />
        </a>
      )}
      {title === '기록' && (
        <a href="/library">
          <img src="/images/icons/newrecord.svg" alt="글 작성" />
        </a>
      )}
    </header>
  );
}

LargeHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LargeHeader;
