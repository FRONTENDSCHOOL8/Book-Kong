import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function GnbItem({ title, to, src }) {
  const { pathname: currentPage } = useLocation();
  return (
    <li className="nav-listItem">
      <NavLink
        activeclassname="active-link"
        className={({ isActive }) =>
          isActive ? 'text-red-500 nav-button' : 'nav-button'
        }
        to={to}
      >
        <img
          src={currentPage === to ? `${src}=active.svg` : `${src}=default.svg`}
          alt=""
        />
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

GnbItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default GnbItem;
