import { string } from 'prop-types';
import BackButton from '../../../atoms/BackButton/BackButton';
import SmallHeaderTitle from '../../../atoms/SmallHeaderTitle/SmallHeaderTitle';
import AddBookIconButton from '../../../atoms/AddBookIconButton/AddBookIconButton';
import DeleteIconButton from '../../../atoms/DeleteIconButton/DeleteIconButton';
import WriteMemoIconButton from '../../../atoms/WriteMemoIconButton/WriteMemoIconButton';
import SaveButton from '../../../atoms/SaveButton/SaveButton';

function SmallHeader({ title }) {
  // 버튼 그룹을 렌더링하는 함수를 정의
  const renderButtons = () => {
    switch (title) {
      case '검색하기':
        return <AddBookIconButton />;
      case '메모':
      case '피드':
        return (
          <div className="flex gap-5">
            <DeleteIconButton />
            <WriteMemoIconButton />
          </div>
        );
      case '메모 작성':
      case '피드 작성':
      case '직접 입력하기':
        return <SaveButton formId="book-register" />;
      default:
        return null;
    }
  };

  return (
    <header className="relative flex justify-between items-center px-4 py-[16px] border-b border-grayscale-200 bg-grayscale-white">
      <BackButton title={title} />
      <SmallHeaderTitle title={title} />
      {renderButtons()}
    </header>
  );
}

SmallHeader.propTypes = {
  title: string.isRequired,
};

export default SmallHeader;
