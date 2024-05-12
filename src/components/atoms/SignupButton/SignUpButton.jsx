import { bool, string, node } from 'prop-types';

function SignUpButton({ disabled, className, children }) {
  return (
    <button
      className={`w-full h-[51px] rounded text-white mt-8 ${className}`}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

SignUpButton.propTypes = {
  disabled: bool.isRequired,
  className: string,
  children: node.isRequired,
};

export default SignUpButton;
