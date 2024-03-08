import PropTypes from 'prop-types';

function RecordTitle({ title }) {
  return (
    <div className="flex items-start gap-2 self-stretch pr-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M3.64286 1.5C2.46094 1.5 1.5 2.46094 1.5 3.64286V14.3571C1.5 15.5391 2.46094 16.5 3.64286 16.5H11.1429V12.75C11.1429 11.8627 11.8627 11.1429 12.75 11.1429H16.5V3.64286C16.5 2.46094 15.5391 1.5 14.3571 1.5H3.64286ZM16.5 12.2143H14.9833H12.75C12.4554 12.2143 12.2143 12.4554 12.2143 12.75V14.9833V16.5L13.2857 15.4286L15.4286 13.2857L16.5 12.2143Z"
          fill="#F24822"
        />
      </svg>
      <p className="contents-xs text-primary-500 clip-text-1 flex-1">{title}</p>
    </div>
  );
}

RecordTitle.propTypes = { title: PropTypes.string.isRequired };

export default RecordTitle;
