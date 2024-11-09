import { memo } from 'react';
import { node, string } from 'prop-types';
import getCombinedClassName from '../../../utils/getCombinedClassName';

const Label = memo(function Label({
  htmlFor: id,
  children,
  className: customClassName = '',
  ...restProps
}) {
  const defaultClassName = 'contents-md-bold text-grayscale-900 w-full';

  if (customClassName) {
    return (
      <label
        htmlFor={id}
        className={getCombinedClassName(defaultClassName, customClassName)}
        {...restProps}
      >
        {children}
      </label>
    );
  }

  return (
    <label htmlFor={id} className={defaultClassName} {...restProps}>
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
