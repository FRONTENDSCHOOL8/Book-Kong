import PropTypes from 'prop-types';

function BookInfoStateButton({ title, onClick, status }) {
  const isActive = title === status;
  return (
    <>
      {title === '완독' && (
        <>
          <button
            onClick={onClick}
            className={`h-16 flex justify-center flex-col items-center gap-2 border  rounded-[4px] flex-1 ${isActive ? 'border-badge-skyblue text-badge-skyblue' : 'border-grayscale-300 text-grayscale-300'}`}
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M6.75 22C6 22 5.35417 21.7459 4.8125 21.2375C4.27083 20.7292 4 20.1 4 19.35V5.40005C4 4.76672 4.19583 4.20005 4.5875 3.70005C4.97917 3.20005 5.49167 2.88338 6.125 2.75005L16 0.800049V16.8L6.525 18.7C6.375 18.7334 6.25 18.8125 6.15 18.9375C6.05 19.0625 6 19.2 6 19.35C6 19.5334 6.075 19.6875 6.225 19.8125C6.375 19.9375 6.55 20 6.75 20H18V4.00005H20V22H6.75ZM7 16.575L9 16.175V4.22505L7 4.62505V16.575Z" />
            </svg>
            <span className="contents-sm-md">{title}</span>
          </button>
        </>
      )}
      {title === '독서중' && (
        <>
          <button
            onClick={onClick}
            className={`h-16 flex justify-center flex-col items-center gap-2 border  rounded-[4px] flex-1 ${isActive ? 'border-badge-yellow text-badge-yellow ' : 'border-grayscale-300 text-grayscale-300'}`}
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
            >
              <path d="M12.5 20C11.7 19.3667 10.8333 18.875 9.9 18.525C8.96667 18.175 8 18 7 18C6.3 18 5.6125 18.0917 4.9375 18.275C4.2625 18.4583 3.61667 18.7167 3 19.05C2.65 19.2333 2.3125 19.225 1.9875 19.025C1.6625 18.825 1.5 18.5333 1.5 18.15V6.1C1.5 5.91667 1.54583 5.74167 1.6375 5.575C1.72917 5.40833 1.86667 5.28333 2.05 5.2C2.81667 4.8 3.61667 4.5 4.45 4.3C5.28333 4.1 6.13333 4 7 4C7.96667 4 8.9125 4.125 9.8375 4.375C10.7625 4.625 11.65 5 12.5 5.5V17.6C13.35 17.0667 14.2417 16.6667 15.175 16.4C16.1083 16.1333 17.05 16 18 16C18.6 16 19.1875 16.05 19.7625 16.15C20.3375 16.25 20.9167 16.4 21.5 16.6V4.6C21.75 4.68333 21.9958 4.77083 22.2375 4.8625C22.4792 4.95417 22.7167 5.06667 22.95 5.2C23.1333 5.28333 23.2708 5.40833 23.3625 5.575C23.4542 5.74167 23.5 5.91667 23.5 6.1V18.15C23.5 18.5333 23.3375 18.825 23.0125 19.025C22.6875 19.225 22.35 19.2333 22 19.05C21.3833 18.7167 20.7375 18.4583 20.0625 18.275C19.3875 18.0917 18.7 18 18 18C17 18 16.0333 18.175 15.1 18.525C14.1667 18.875 13.3 19.3667 12.5 20ZM14.5 15V5.5L19.5 0.5V10.5L14.5 15Z" />
            </svg>
            <span className="contents-sm-md">{title}</span>
          </button>
        </>
      )}
      {title === '희망 도서' && (
        <>
          <button
            onClick={onClick}
            className={`h-16 flex justify-center flex-col items-center gap-2 border  rounded-[4px] flex-1 ${isActive ? 'border-badge-purple text-badge-purple' : 'border-grayscale-300 text-grayscale-300'}`}
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M14.462 2.49337C15.2508 2.16652 16.0963 1.99829 16.9501 1.99829C17.804 1.99829 18.6495 2.16652 19.4383 2.49337C20.2269 2.82015 20.9435 3.2991 21.5471 3.90284C22.1508 4.5064 22.6301 5.2233 22.9569 6.01197C23.2837 6.80078 23.4519 7.64627 23.4519 8.50012C23.4519 9.35397 23.2837 10.1994 22.9569 10.9883C22.6301 11.777 22.1511 12.4936 21.5472 13.0972L12.7072 21.9372C12.3167 22.3277 11.6835 22.3277 11.293 21.9372L2.45301 13.0972C1.23378 11.878 0.548828 10.2244 0.548828 8.50012C0.548828 6.77587 1.23378 5.12224 2.45301 3.90301C3.67224 2.68378 5.32587 1.99883 7.05012 1.99883C8.77437 1.99883 10.428 2.68378 11.6472 3.90301L12.0001 4.2559L12.3528 3.90318C12.9564 3.29935 13.6732 2.82018 14.462 2.49337Z" />
            </svg>
            <span className="contents-sm-md">{title}</span>
          </button>
        </>
      )}
    </>
  );
}

BookInfoStateButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default BookInfoStateButton;
