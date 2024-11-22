import { bool, func } from 'prop-types';

function PwdVisibleIcon({ isVisible, onClick }) {
  return (
    <img
      className="absolute w-4 top-10 right-5"
      src={
        isVisible
          ? '/images/icons/password-eye.svg'
          : '/images/icons/state=hidden.svg'
      }
      onClick={onClick}
    />
  );
}

PwdVisibleIcon.propTypes = {
  isVisible: bool.isRequired,
  onClick: func.isRequired,
};

export default PwdVisibleIcon;
