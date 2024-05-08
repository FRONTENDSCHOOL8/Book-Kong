import PropTypes from 'prop-types';

function LargeHeaderIcon({ title }) {
  const iconDetails = {
    서재: {
      href: '/library/search',
      src: '/images/icons/addBook.svg',
      alt: '책 추가',
    },
    기록: {
      href: '/library',
      src: '/images/icons/newrecord.svg',
      alt: '글 작성',
    },
  };

  const icon = iconDetails[title];

  if (!icon) return null;

  return (
    <a href={icon.href}>
      <img src={icon.src} alt={icon.alt} />
    </a>
  );
}

LargeHeaderIcon.propTypes = { title: PropTypes.string.isRequired };

export default LargeHeaderIcon;
