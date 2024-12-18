import { string } from 'prop-types';
import BackButton from '../../../atoms/BackButton/BackButton';
import SmallHeaderTitle from '../../../atoms/SmallHeaderTitle/SmallHeaderTitle';
import AddBookIconButton from '../../../atoms/AddBookIconButton/AddBookIconButton';
import DeleteIconButton from '../../../atoms/DeleteIconButton/DeleteIconButton';
import SaveButton from '../../../atoms/SaveButton/SaveButton';
import RegistrationIcon from '../../../atoms/RegistrationIcon/RegistrationIcon';

function SmallHeader({ title, formId }) {
  // 버튼 그룹을 렌더링하는 함수를 정의
  const renderButtons = () => {
    switch (title) {
      case '검색하기':
        return <AddBookIconButton />;
      case '메모':
      case '메모 상세':
        return (
          <div className="flex gap-5">
            <DeleteIconButton />
            <RegistrationIcon page="memo" />
          </div>
        );
      case '피드 상세':
        return (
          <div className="flex gap-5">
            <DeleteIconButton />
            <RegistrationIcon page="feed" />
          </div>
        );
      case '메모 작성':
      case '피드 작성':
      case '직접 입력하기':
        return <SaveButton formId={formId} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative flex justify-between items-center px-4 py-[16px] border-b border-grayscale-200 bg-grayscale-white">
      <BackButton />
      <SmallHeaderTitle title={title} />
      {renderButtons()}
    </div>
  );
}

SmallHeader.propTypes = {
  title: string.isRequired,
  formId: string,
};

export default SmallHeader;
