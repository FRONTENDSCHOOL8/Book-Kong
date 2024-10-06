import { motion } from 'framer-motion';
import { func, bool } from 'prop-types';

function DoneButton({ onChange, isChecked }) {
  return (
    <>
      <motion.label
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.9 }}
        htmlFor="완독"
        className={`h-16 flex justify-center flex-col items-center gap-2 border  rounded-[4px] flex-1 cursor-pointer contents-sm-bold ${isChecked ? 'border-badge-skyblue text-badge-skyblue' : 'border-grayscale-300 text-grayscale-300'}`}
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
        <span id="done-label" className="contents-sm-bold">
          완독
        </span>
      </motion.label>
      <input
        type="radio"
        id="완독"
        className="sr-only"
        name="status"
        value="완독"
        aria-labelledby="done-label"
        onChange={onChange}
        checked={isChecked}
      />
    </>
  );
}

DoneButton.propTypes = {
  onChange: func.isRequired,
  isChecked: bool.isRequired,
};

export default DoneButton;