import Label from '../../atoms/Label/Label';
import { useId, forwardRef } from 'react';
import {
  any,
  bool,
  elementType,
  func,
  node,
  objectOf,
  oneOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';

// 밖에서도 ref로 내부 input 요소에 접근이 가능한 InputContainer component 선언
const InputContainer = forwardRef(
  /**
   * InputContainer component
   * @param { Object } props props 객체
   * @param { string | elementType } [props.as] InputContainer type 정의: Function | string (ex) 'fieldset') | element-like object (ex) React.Fragment, Suspense)
   * @param { string } [props.className] InputContainer의 'className' props
   * @param { node } props.children label native 요소 이름
   * @param { Object } [props.labelProps] Label 컴포넌트의 props
   * @param { string } [props.labelProps.className] Label 컴포넌트의 'className' props
   * @param { boolean } [props.labelProps.isHidden] Label 컴포넌트의 숨김 처리 여부를 결정하는 props
   * @param { Object.< string, * > } [props.labelProps.restLabelProps] Label 컴포넌트에 추가로 들어갈 props rest 객체
   * @param { Object } [props.inputProps] input 요소에 들어갈 props
   * @param { string } [props.inputProps.name] input 요소의 'name' property
   * @param { ( 'text' | 'range' | 'search' | 'email' | 'password' | 'radio' | 'checkbox' | 'date' | 'file' | 'month') } [props.inputProps.type] input 요소의 'type' property
   * @param { string } [props.inputProps.placeholder] input 요소의 'placeholder' property
   * @param { string } [props.inputProps.value] input 요소의 'value' property
   * @param { string } [props.inputProps.defaultValue] input 요소의 'defaultValue' property
   * @param { function } [props.inputProps.onChange] input 요소의 'onChange' property
   * @param { string } [props.inputProps.className] input 요소의 'className' property
   * @param { Object.< string, * > } [props.inputProps.restInputProps] input 요소에 추가로 들어갈 props rest 객체
   * @param { Object.< string, * > } [restProps] InputContainer 컴포넌트에 추가로 들어갈 props rest 객체
   * @param { { current } } [ref] 상위 컴포넌트에서 useRef를 이용하여 만든 ref 객체
   * @returns { JSX.Element } label과 input native 요소가 들어간 JSX를 반환
   */
  function InputContainer(
    /* props */
    {
      as: Component = 'div',
      className = 'flex items-center gap-2',
      labelProps: {
        content: labelContent,
        className: labelClassName = 'contents-md-bold text-grayscale-900 w-16',
        isHidden,
        ...restLabelProps
      },
      inputProps: {
        name,
        type,
        placeholder,
        value,
        defaultValue,
        onChange,
        className:
          inputClassName = 'border border-grayscale-600 px-1 text-content-small',
        ...restInputProps
      } = {},
      ...restProps
    },
    /* ref */
    ref
  ) {
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
        <input
          ref={ref}
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          className={inputClassName}
          {...restInputProps}
        />
      </Component>
    );
  }
);

InputContainer.propTypes = {
  // as='fieldset' 이런 식으로 쓰시면 됩니다.
  as: oneOfType([string, elementType]),
  className: string,
  labelProps: shape({
    content: node.isRequired,
    className: string,
    isHidden: bool,
    restLabelProps: objectOf(any),
  }),
  inputProps: shape({
    name: string,
    type: oneOf([
      'text',
      'range',
      'search',
      'email',
      'password',
      'radio',
      'checkbox',
      'date',
      'file',
      'month',
    ]),
    placeholder: string,
    value: string,
    defaultValue: string,
    onChange: func,
    className: string,
    restInputProps: objectOf(any),
  }),
  restProps: objectOf(any),
};

export default InputContainer;
