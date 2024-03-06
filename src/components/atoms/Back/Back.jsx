function Back() {
  const handleClick = () => {
    return window.history.back();
  };

  return (
    <button onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z"
          fill="#1E1E1E"
        />
      </svg>
    </button>
  );
}

export default Back;
