import { func, bool } from 'prop-types';

function ReadingButton({ onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`h-16 flex justify-center flex-col items-center gap-2 border  rounded-[4px] flex-1 ${isActive ? 'border-badge-yellow text-badge-yellow ' : 'border-grayscale-300 text-grayscale-300'}`}
      name="status"
      value="독서중"
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
      <span className="contents-sm-bold">독서중</span>
    </button>
  );
}

ReadingButton.propTypes = {
  onClick: func.isRequired,
  isActive: bool.isRequired,
};

export default ReadingButton;
