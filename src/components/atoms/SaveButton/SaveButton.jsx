import { string } from 'prop-types';

function SaveButton({ formId }) {
  return (
    <button
      type="submit"
      form={formId}
      className="contents-md-bold text-primary-500"
    >
      저장
    </button>
  );
}

SaveButton.propTypes = {
  formId: string.isRequired,
};

export default SaveButton;
