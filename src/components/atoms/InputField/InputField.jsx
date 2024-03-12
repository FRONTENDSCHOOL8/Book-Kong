import { PropTypes } from 'prop-types';

function InputField({ label, id, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className=" text-sm font-normal">
        {label}
      </label>
      <div>
        <input
          className="w-full h-[42px] border border-[#848484] outline-none pl-2 rounded"
          id={id}
          type={type}
          placeholder={placeholder}
          defaultValue={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
