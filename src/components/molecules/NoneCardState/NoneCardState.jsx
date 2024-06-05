import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function NoneCardState({ data }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (data === 'memo') {
      setMessage('메모');
    } else if (data === 'feed') {
      setMessage('피드');
    }
  }, [data]);

  return (
    <div className="w-full py-[32px] flex flex-col gap-4 items-center text-center contents-md text-grayscale-600">
      <img src="/images/characters/잠금캐릭.png" alt="" width="82" />
      <p>
        등록된 {message}가 없습니다. <br />
        {message}를 등록해보세요!
      </p>
    </div>
  );
}

NoneCardState.propTypes = {
  data: PropTypes.string.isRequired,
};

export default NoneCardState;
