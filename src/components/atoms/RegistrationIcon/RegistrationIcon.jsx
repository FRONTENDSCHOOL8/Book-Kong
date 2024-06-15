import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import { getStaticImage } from '../../../utils/getStaticAsset';

function RegistrationIcon({ page }) {
  return (
    <Link to={`/${page}/registration`}>
      <img src={getStaticImage('icons/newrecord.svg')} alt={`${page}작성`} />
    </Link>
  );
}

RegistrationIcon.propTypes = {
  page: string.isRequired,
};

export default RegistrationIcon;
