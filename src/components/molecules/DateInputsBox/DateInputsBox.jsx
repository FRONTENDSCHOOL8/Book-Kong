import { memo, useState, useCallback } from 'react';
import DateInput from '../../atoms/DateInput/DateInput';
import A11yHidden from '../../atoms/A11yHidden/A11yHidden';
import { getStaticImage } from '../../../utils/getStaticAsset';

function DateInputsBox() {
  const [date, setDate] = useState({
    start_date: '',
    end_date: '',
  });

  // 시작일과 완독일 선택 관련 validation 필요
  const handleDate = useCallback(
    (e) => setDate({ ...date, [e.target.name]: e.target.value }),
    [date]
  );

  return (
    <div className="flex items-center mt-6">
      <span className="contents-md-bold text-grayscale-900 pr-2">
        독서 기간
      </span>
      <A11yHidden as="label" htmlFor="시작일">
        시작일
      </A11yHidden>
      <DateInput
        id="시작일"
        name="start_date"
        value={date.start_date}
        onChange={handleDate}
      />
      <Hyphen />
      <A11yHidden as="label" htmlFor="완독일">
        완독일
      </A11yHidden>
      <DateInput
        id="완독일"
        name="end_date"
        value={date.end_date}
        onChange={handleDate}
      />
    </div>
  );
}

const Hyphen = memo(function Hyphen() {
  const imgPath = getStaticImage('icons/hyphen.svg');

  return <img lang="en" src={imgPath} alt="hyphen" />;
});

export default DateInputsBox;
