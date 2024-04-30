import { string, node } from 'prop-types';
import { memo } from 'react';

const SignUpPrompt = memo(function SignUpPrompt({ title, children }) {
  return (
    <div>
      <h2 className="text-lg font-bold mt-11">{title}</h2>
      <div className="text-xs font-normal text-[#848484] mt-2">{children}</div>
    </div>
  );
});

SignUpPrompt.propTypes = {
  title: string.isRequired,
  children: node,
};

export default SignUpPrompt;
