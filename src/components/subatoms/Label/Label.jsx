import { bool, node, string } from 'prop-types';
import A11yHidden from '../../atoms/A11yHidden/A11yHidden';

function Label({ children, htmlFor: id, hiddenLabel = false }) {
  if (hiddenLabel) {
    return (
      <A11yHidden as="label" htmlFor={id}>
        {children}
      </A11yHidden>
    );
  }
  return <label htmlFor={id}>{children}</label>;
}

Label.propTypes = {
  children: node.isRequired,
  htmlFor: string.isRequired,
  hiddenLabel: bool,
};

export default Label;
