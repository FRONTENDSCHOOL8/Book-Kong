import { string, elementType, objectOf, any, node } from 'prop-types';

/**
 * 특정 요소를 감추고 싶을 경우 사용하는 유틸 컴포넌트입니다.
 * @param { React.ElementType } as 숨기고 싶은 React element type의 요소를 넣어주세요. HTML 표준 태그를 넣고 싶을 경우, HTML 표준 태그 이름을 string
 * 값으로 넣어주시면 됩니다.
 * e.g.) 'div', 'h2'
 * @param { string } className A11yHidden 컴포넌트에 추가로 사용하고 싶은 className을 string type으로 넣어주시면 됩니다.
 * @returns { JSX.Element } 숨겨진 JSX 컴포넌트를 반환합니다.
 */
function A11yHidden({
  as: Component = 'span',
  className = '',
  children,
  ...restProps
}) {
  const classNames = `sr-only ${className}`.trim();

  return (
    <Component className={classNames} {...restProps}>
      {children}
    </Component>
  );
}

A11yHidden.propTypes = {
  as: elementType,
  className: string,
  children: node,
  restProps: objectOf(any),
};

export default A11yHidden;
