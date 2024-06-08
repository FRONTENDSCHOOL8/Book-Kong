import { string } from 'prop-types';
import { useLocation } from 'react-router-dom';

function LargeHeaderIcon({ title }) {
  const iconDetails = {
    서재: {
      href: '/library/book-search',
      src: '/images/icons/addBook.svg',
      alt: '책 추가',
    },
    기록: {
      href: '/library/booktree',
      src: '/images/icons/newrecord.svg',
      alt: '글 작성',
    },
    피드: {
      href: '/feed/registration',
      src: '/images/icons/newrecord.svg',
      alt: '피드 작성',
    },
  };

  const icon = iconDetails[title];

  const { pathname } = useLocation();

  if (!icon || pathname === '/record/statistics') return null;

  return (
    <a href={icon.href}>
      <img src={icon.src} alt={icon.alt} />
    </a>
  );
}

LargeHeaderIcon.propTypes = {
  title: string.isRequired,
};

export default LargeHeaderIcon;
