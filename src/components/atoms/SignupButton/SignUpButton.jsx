import { PropTypes } from 'prop-types';

function SignupButton({ disabled, text, className }) {
  return (
    <button
      className={`w-full h-[51px] rounded text-white mt-8 ${className}`}
      type="submit"
      disabled={disabled}
    >
      {text}
    </button>
  );
}

SignupButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SignupButton;
