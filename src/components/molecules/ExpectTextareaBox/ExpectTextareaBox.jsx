import Label from '../../atoms/Label/Label';
import { useState, useCallback } from 'react';
import ExpectTextarea from '../../atoms/ExpectTextarea/ExpectTextarea';

function ExpectTextareaBox() {
  const [expectText, setExpectText] = useState('');

  const handleExpectText = useCallback((e) => {
    setExpectText(e.target.value);
  }, []);

  return (
    <div className="flex items-center mt-6 mb-3">
      <Label htmlFor="expect-textarea" className="w-16 pr-2">
        기대평
      </Label>
      <ExpectTextarea
        id="expect-textarea"
        name="expectation_description"
        value={expectText}
        onChange={handleExpectText}
      />
    </div>
  );
}

export default ExpectTextareaBox;
