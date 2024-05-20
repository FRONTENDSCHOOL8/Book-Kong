import { useState, useCallback } from 'react';
import Label from '../../atoms/Label/Label';
import PageReadInput from '../../atoms/PageReadInput/PageReadInput';

function PageReadBox() {
  const [pageRead, setPageRead] = useState('');

  const handlePageRead = useCallback((e) => {
    setPageRead(e.target.value);
  }, []);

  return (
    <div className="flex items-center mb-3">
      <Label htmlFor="page-read" className="w-16 pr-2">
        읽은 쪽
      </Label>
      <PageReadInput
        id="page-read"
        name="read_page"
        value={pageRead}
        onChange={handlePageRead}
      />
    </div>
  );
}

export default PageReadBox;
