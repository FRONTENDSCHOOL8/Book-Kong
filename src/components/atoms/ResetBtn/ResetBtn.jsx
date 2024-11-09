import { memo } from 'react';
import { func } from 'prop-types';

const ResetBtn = memo(function ResetBtn({ onClick }) {
  return (
    <button type="button" onClick={onClick} aria-label="리셋">
      <img src="/images/icons/reset.svg" alt="" />
    </button>
  );
});

ResetBtn.propTypes = {
  onClick: func.isRequired,
};

export default ResetBtn;
