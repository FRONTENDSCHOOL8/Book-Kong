import { bool, string, elementType } from 'prop-types';

function A11yHidden({
  as: Component = 'span',
  focusable = false,
  className = '',
  ...restProps
}) {
  const classNames = `sr-only ${
    focusable ? 'focus:not-sr-only' : ''
  } ${className}`.trim();

  return <Component className={classNames} {...restProps} />;
}

A11yHidden.propTypes = {
  as: elementType,
  className: string,
  focusable: bool,
};

export default A11yHidden;
