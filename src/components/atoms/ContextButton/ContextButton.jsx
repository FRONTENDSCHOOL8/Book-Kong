import { string } from 'prop-types';

/**
 *
 * @param { 'horizontal' | 'vertical' } shape 컨텍스트 버튼의 shape 지정
 * @param { string } alt 컨텍스트 버튼의 alt message
 * @returns { JSX.Element } Context button이 포함된 div 요소 반환
 */
function ContextButton(shape, alt) {
  return (
    <div>
      <button type="button">
        <img
          className="w-9 h-9"
          src={`/images/icons/more_${shape}.svg`}
          alt={alt}
        />
      </button>
    </div>
  );
}

ContextButton.propTypes = {
  shape: string.isRequired,
  alt: string.isRequired,
};

export default ContextButton;
