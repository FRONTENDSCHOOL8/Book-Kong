import Label from '../../atoms/Label/Label';
import { useState, useCallback } from 'react';
import PageReadBox from '../PageReadBox/PageReadBox';
import DateInput from '../../atoms/DateInput/DateInput';
import A11yHidden from '../../atoms/A11yHidden/A11yHidden';
import DateInputsBox from '../DateInputsBox/DateInputsBox';
import RatingContainer from '../RatingContainer/RatingContainer';
import ReadingStateButtons from '../ReadingStateButtons/ReadingStateButtons';
import ExpectTextareaBox from '../ExpectTextareaBox/ExpectTextareaBox';

function ReadingStates() {
  const [status, setStatus] = useState('완독');

  const handleChange = useCallback((e) => {
    const input = e.target.closest('input');

    if (!input) return;

    setStatus(input.value);
  }, []);

  switch (status) {
    case '완독':
      return (
        <fieldset>
          <A11yHidden as="legend">독서 상태 입력</A11yHidden>
          <ReadingStateButtons status={status} onChange={handleChange} />
          <fieldset>
            <A11yHidden as="legend">완독 도서의 내용 입력</A11yHidden>
            <DateInputsBox />
            <RatingContainer label="평점" />
          </fieldset>
        </fieldset>
      );

    case '독서중':
      return (
        <fieldset>
          <A11yHidden as="legend">독서 상태 입력</A11yHidden>
          <ReadingStateButtons status={status} onChange={handleChange} />
          <fieldset>
            <A11yHidden as="legend">독서중 도서의 내용 입력</A11yHidden>
            <DateInputBox />
            <PageReadBox />
            <RatingContainer label="기대지수" />
          </fieldset>
        </fieldset>
      );

    case '희망 도서':
      return (
        <fieldset>
          <A11yHidden as="legend">독서 상태 입력</A11yHidden>
          <ReadingStateButtons status={status} onChange={handleChange} />
          <fieldset>
            <A11yHidden as="legend">희망 도서의 내용 입력</A11yHidden>
            <ExpectTextareaBox />
            <RatingContainer label="기대지수" />
          </fieldset>
        </fieldset>
      );
  }
}

function DateInputBox() {
  const [startDate, setStartDate] = useState('');

  const handleStartDate = useCallback((e) => {
    setStartDate(e.target.value);
  }, []);

  return (
    <div className="flex items-center mt-6 mb-3">
      <Label htmlFor="start-date" className="w-16 pr-2">
        시작일
      </Label>
      <DateInput
        id="start-date"
        name="start_date"
        value={startDate}
        onChange={handleStartDate}
      />
    </div>
  );
}

export default ReadingStates;
