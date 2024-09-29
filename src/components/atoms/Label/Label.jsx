import { bool, node, string } from 'prop-types';
import A11yHidden from '../A11yHidden/A11yHidden';
import { memo } from 'react';

const Label = memo(function Label({ children, htmlFor: id, isHidden = false }) {
  if (isHidden) {
    return (
      <A11yHidden as="label" htmlFor={id}>
        {children}
      </A11yHidden>
    );
  }

  return (
    <label htmlFor={id} className="contents-md-bold text-grayscale-900 w-full">
      {children}
    </label>
  );
});

Label.propTypes = {
  children: node.isRequired,
  htmlFor: string.isRequired,
  isHidden: bool,
};

export default Label;
