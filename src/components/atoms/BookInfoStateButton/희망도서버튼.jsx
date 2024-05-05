import React from 'react';
import PropTypes from "prop-types";
import 완독버튼 from "./완독버튼.jsx";

const 희망도서버튼 = ({ onClick, isActive }) => {
  return (
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
              <path
                  d="M14.462 2.49337C15.2508 2.16652 16.0963 1.99829 16.9501 1.99829C17.804 1.99829 18.6495 2.16652 19.4383 2.49337C20.2269 2.82015 20.9435 3.2991 21.5471 3.90284C22.1508 4.5064 22.6301 5.2233 22.9569 6.01197C23.2837 6.80078 23.4519 7.64627 23.4519 8.50012C23.4519 9.35397 23.2837 10.1994 22.9569 10.9883C22.6301 11.777 22.1511 12.4936 21.5472 13.0972L12.7072 21.9372C12.3167 22.3277 11.6835 22.3277 11.293 21.9372L2.45301 13.0972C1.23378 11.878 0.548828 10.2244 0.548828 8.50012C0.548828 6.77587 1.23378 5.12224 2.45301 3.90301C3.67224 2.68378 5.32587 1.99883 7.05012 1.99883C8.77437 1.99883 10.428 2.68378 11.6472 3.90301L12.0001 4.2559L12.3528 3.90318C12.9564 3.29935 13.6732 2.82018 14.462 2.49337Z"/>
          </svg>
          <span className="contents-sm-bold">희망 도서</span>
      </button>
  )
}

희망도서버튼.propTypes = {
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default 희망도서버튼
