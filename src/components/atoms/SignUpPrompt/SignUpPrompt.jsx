import { PropTypes } from 'prop-types';

function SignUpPrompt({ title, children }) {
  return (
    <div>
      <h2 className="text-lg font-bold mt-11">{title}</h2>
      <div className="text-xs font-normal text-[#848484] mt-2">{children}</div>
    </div>
  );
}

SignUpPrompt.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default SignUpPrompt;
