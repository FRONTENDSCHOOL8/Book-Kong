import { any, bool, node, objectOf, string } from 'prop-types';
import A11yHidden from '../A11yHidden/A11yHidden';
import { memo } from 'react';

const Label = memo(function Label({
  children,
  className: customClassName = '',
  htmlFor: id,
  isHidden = false,
  ...restProps
}) {
  if (isHidden) {
    return (
      <A11yHidden as="label" htmlFor={id} {...restProps}>
        {children}
      </A11yHidden>
    );
  }

  const DEFAULT_CLASSNAME = 'contents-md-bold text-grayscale-900 w-16';
  const className = `${DEFAULT_CLASSNAME} ${customClassName}`;

  return (
    <label htmlFor={id} className={className} {...restProps}>
      {children}
    </label>
  );
});

Label.propTypes = {
  children: node.isRequired,
  htmlFor: string.isRequired,
  className: string,
  isHidden: bool,
  restProps: objectOf(any),
};

export default Label;
