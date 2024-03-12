import { PropTypes } from 'prop-types';

function SignUpPrompt({ title, text }) {
  return (
    <div>
      <h2 className="text-lg font-bold mt-11">{title}</h2>
      <span className="text-xs font-normal text-[#848484] mt-2">{text}</span>
    </div>
  );
}

SignUpPrompt.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default SignUpPrompt;
