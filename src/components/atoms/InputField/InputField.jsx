import { PropTypes } from 'prop-types';

// name 속성을 필수값으로 지정해야 form 태그와 상호작용할 수 있습니다.
function InputField({ label, id, type, placeholder, value, onChange, name }) {
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
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
