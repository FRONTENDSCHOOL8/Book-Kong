import PropTypes from 'prop-types';

function OrderButton({ onClick, order, customClassName }) {
  const defaultClassName =
    'sort-button flex justify-center items-end gap-2 text-gray-700 contents-xs';

  const className = `${defaultClassName} ${customClassName}`;

  return (
    <button onClick={onClick} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.41913 13.6545C9.74766 13.9788 9.74658 14.5095 9.41674 14.8325L6.54161 17.6482C6.15284 18.0289 5.53102 18.0289 5.14225 17.6482L2.26712 14.8325C1.93728 14.5095 1.93621 13.9788 2.26473 13.6545V13.6545C2.58552 13.3378 3.10099 13.3367 3.42305 13.6521L5.00915 15.2054L5.00916 2.66847C5.00916 2.20854 5.382 1.83569 5.84193 1.83569V1.83569C6.30186 1.83569 6.67471 2.20854 6.67471 2.66847L6.67471 15.2054L8.26081 13.6521C8.58288 13.3367 9.09834 13.3378 9.41913 13.6545V13.6545ZM17.7334 5.16755C18.0632 5.49056 18.0643 6.02121 17.7357 6.34556V6.34556C17.415 6.66226 16.8995 6.6633 16.5774 6.3479L14.9913 4.79461L14.9913 17.3316C14.9913 17.7915 14.6185 18.1644 14.1586 18.1644V18.1644C13.6986 18.1644 13.3258 17.7915 13.3258 17.3316L13.3258 4.79461L11.7397 6.3479C11.4176 6.6633 10.9021 6.66226 10.5814 6.34556V6.34556C10.2528 6.02121 10.2539 5.49056 10.5837 5.16755L13.4589 2.35189C13.8476 1.97117 14.4695 1.97117 14.8582 2.35189L17.7334 5.16755Z"
          fill="#5E5E5E"
        />
      </svg>
      <span>{order}</span>
    </button>
  );
}

OrderButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  customClassName: PropTypes.string,
};

export default OrderButton;
