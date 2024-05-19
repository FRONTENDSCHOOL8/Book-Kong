import { memo } from 'react';
import { node, string } from 'prop-types';

const Label = memo(function Label({
  htmlFor: id,
  children,
  className: customClassName = '',
  ...restProps
}) {
  const defaultClassName = 'contents-md-bold text-grayscale-900 w-full';
  const combinedClassName = `${defaultClassName} ${customClassName}`.trim();

  return (
    <label htmlFor={id} className={combinedClassName} {...restProps}>
      {children}
    </label>
  );
});

Label.propTypes = {
  htmlFor: string.isRequired,
  children: node.isRequired,
  className: string,
};

export default Label;
