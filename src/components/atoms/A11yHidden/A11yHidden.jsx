import { bool, string, elementType } from 'prop-types';

/**
 * 특정 요소를 감추고 싶을 경우 사용하는 유틸 컴포넌트입니다.
 * @param { React.ElementType } as 숨기고 싶은 React element type의 요소를 넣어주세요. HTML 표준 태그를 넣고 싶을 경우, HTML 표준 태그 이름을 string
 * 값으로 넣어주시면 됩니다.
 * e.g.) 'div', 'h2'
 * @param { boolean } focusable 숨기고 싶은 HTML 표준 태그가 focusable한 요소일 경우, true 값을 넣어주시면 해당 요소가 focus 되었을 때 요소가 보이게 됩니다.
 * Skip to Content와 같은 요소를 구현하고 싶을 경우 사용할 수 있습니다.
 * @param { string } className AllyHidden 컴포넌트에 추가로 사용하고 싶은 className을 string type으로 넣어주시면 됩니다.
 * @returns { JSX.Element } 숨겨진 JSX 컴포넌트를 반환합니다.
 */
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
