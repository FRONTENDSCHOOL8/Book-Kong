import Label from '../../atoms/Label/Label';
import { useState, useCallback } from 'react';
import PageReadBox from '../PageReadBox/PageReadBox';
import DateInput from '../../atoms/DateInput/DateInput';
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
        <div>
          <ReadingStateButtons status={status} onChange={handleChange} />
          <DateInputsBox />
          <RatingContainer label="평점" />
        </div>
      );

    case '독서중':
      return (
        <div>
          <ReadingStateButtons status={status} onChange={handleChange} />
          <DateInputBox />
          <PageReadBox />
          <RatingContainer label="기대지수" />
        </div>
      );

    case '희망 도서':
      return (
        <div>
          <ReadingStateButtons status={status} onChange={handleChange} />
          <ExpectTextareaBox />
          <RatingContainer label="기대지수" />
        </div>
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
