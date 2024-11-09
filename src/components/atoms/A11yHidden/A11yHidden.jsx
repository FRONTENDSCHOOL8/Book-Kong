import { elementType, node } from 'prop-types';
import { memo } from 'react';

/**
 * @typedef Props
 * @prop { React.ElementType } [props.as] 숨기고 싶은 React element type의 요소를 넣어주세요. HTML 표준 태그를 넣고 싶을 경우, HTML 표준 태그 이름을 string
 * 값으로 넣어주시면 됩니다.
 * e.g.) 'div', 'h2'
 * @prop { React.ReactNode } props.children 해당 컴포넌트의 children이 들어오는 자리입니다.
 */

/**
 * 화면에서는 보이지 않지만 screen reader 등의 장애 보조 프로그램에서는 읽을 수 있는 숨김 콘텐츠를 만들 수 있습니다. 유틸 컴포넌트입니다.
 * TailwindCSS의 'sr-only' class name을 사용합니다.
 * @param { Props } props A11yHidden 컴포넌트가 받는 props 객체입니다.
 * @returns { JSX.Element } 숨겨진 JSX 컴포넌트를 반환합니다.
 */
const A11yHidden = memo(function A11yHidden({
  as: Component = 'span',
  children,
  ...restProps
}) {
  return (
    <Component className="sr-only" {...restProps}>
      {children}
    </Component>
  );
});

A11yHidden.propTypes = {
  as: elementType,
  children: node.isRequired,
};

export default A11yHidden;
