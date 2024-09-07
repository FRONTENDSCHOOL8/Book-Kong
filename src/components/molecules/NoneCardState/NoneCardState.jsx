import PropTypes from 'prop-types';

function NoneCardState({ data }) {
  return (
    <li className="w-full py-[32px] flex flex-col gap-4 items-center text-center contents-md text-grayscale-600">
      <img src="/images/characters/잠금캐릭.png" alt="" width="82" />
      <p>
        등록된 {data}가 없습니다. <br />
        {data}를 등록해보세요!
      </p>
    </li>
  );
}

NoneCardState.propTypes = {
  data: PropTypes.string.isRequired,
};

export default NoneCardState;
