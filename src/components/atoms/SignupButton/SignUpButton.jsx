import { bool, string } from 'prop-types';

function SignUpButton({ disabled, text, className }) {
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

SignUpButton.propTypes = {
  disabled: bool.isRequired,
  text: string.isRequired,
  className: string,
};

export default SignUpButton;
