import { string } from 'prop-types';
// import getCombinedClassName from '../../../utils/getCombinedClassName';

/**
 *
 * @param { 'horizontal' | 'vertical' } shape 컨텍스트 버튼의 shape 지정
 * @param { string } alt 컨텍스트 버튼의 alt message
 * @returns { JSX.Element } Context button이 포함된 div 요소 반환
 */
function ContextButton({ shape, ariaLabel, customClassName = '' }) {
  const defaultClassName =
    'w-11 h-11 flex justify-center items-center absolute z-10';

  // 문제 가능성 이슈로 잠시 사용보류
  // const combinedClassName = getCombinedClassName(
  //   defaultClassName,
  //   customClassName
  // );

  const ClassName = `${defaultClassName} ${customClassName}`;

  return (
    <button type="button" className={ClassName} aria-label={ariaLabel}>
      <img className="w-6 h-6" src={`/images/icons/more_${shape}.svg`} alt="" />
    </button>
  );
}

ContextButton.propTypes = {
  shape: string.isRequired,
  ariaLabel: string.isRequired,
  customClassName: string,
};

export default ContextButton;
