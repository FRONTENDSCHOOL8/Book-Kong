import PropTypes from 'prop-types';
import Back from '../../../atoms/Back/Back';
import SmallHeaderTitle from '../../../atoms/SmallHeaderTitle/SmallHeaderTitle';
import AddBookIconButton from '../../../atoms/AddBookIconButton/AddBookIconButton';
import DeleteIconButton from '../../../atoms/DeleteIconButton/DeleteIconButton';
import WriteMemoIconButton from '../../../atoms/WriteMemoIconButton/WriteMemoIconButton';
import SaveButton from '../../../atoms/SaveButton/SaveButton';

function SmallHeader({ title }) {
  return (
    <header className="relative flex justify-between items-center px-4 py-[16px] border-b border-grayscale-200 bg-grayscale-white">
      <Back title={title} />
      <SmallHeaderTitle title={title} />
      {title === '검색하기' && <AddBookIconButton />}
      {title === '메모' && (
        <div className="flex gap-5">
          <DeleteIconButton />
          <WriteMemoIconButton />
        </div>
      )}
      {title === '메모 작성' && <SaveButton />}
      {title === '피드' && (
        <div className="flex gap-5">
          <DeleteIconButton />
          <WriteMemoIconButton />
        </div>
      )}
      {title === '피드 작성' && <SaveButton />}
      {title === '직접 입력하기' && <SaveButton />}
    </header>
  );
}

SmallHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SmallHeader;
