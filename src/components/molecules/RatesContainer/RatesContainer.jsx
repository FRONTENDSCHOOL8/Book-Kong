import {
  any,
  bool,
  elementType,
  node,
  objectOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';
import { useId } from 'react';
import Label from '../../atoms/Label/Label';

function RatesContainer({
  as: Component = 'div',
  className = 'flex items-center gap-2',
  labelProps: {
    content: labelContent,
    className: labelClassName,
    isHidden,
    ...restLabelProps
  },
  selectProps: {
    className:
      selectClassName = 'w-[272px] h-[48px] bg-grayscale-white border border-grayscale-400 rounded',
    ...restSelectProps
  },
  ...restProps
}) {
  const id = useId();

  return (
    <Component className={className} {...restProps}>
      <Label
        htmlFor={id}
        className={labelClassName}
        isHidden={isHidden}
        {...restLabelProps}
      >
        {labelContent}
      </Label>
      <select
        id={id}
        name="rates"
        className={selectClassName}
        {...restSelectProps}
      >
        <option value="default"></option>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5"></option>
      </select>
    </Component>
  );
}

RatesContainer.propTypes = {
  as: oneOfType([string, elementType]),
  className: string,
  selectProps: shape({
    className: string,
    restSelectProps: objectOf(any),
  }),
  labelProps: shape({
    content: node.isRequired,
    className: string,
    isHidden: bool,
    restLabelProps: objectOf(any),
  }),
  restProps: objectOf(any),
};

export default RatesContainer;
