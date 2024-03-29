import { any, bool, node, objectOf, string } from 'prop-types';
import A11yHidden from '../A11yHidden/A11yHidden';

function Label({
  children,
  className = 'contents-md-bold text-grayscale-900 w-16',
  htmlFor: id,
  isHidden = false,
  ...restProps
}) {
  if (isHidden) {
    return (
      <A11yHidden as="label" className={className} htmlFor={id} {...restProps}>
        {children}
      </A11yHidden>
    );
  }
  return (
    <label htmlFor={id} className={className}>
      {children}
    </label>
  );
}

Label.propTypes = {
  children: node.isRequired,
  htmlFor: string.isRequired,
  className: string,
  isHidden: bool,
  restProps: objectOf(any),
};

export default Label;
