import { string, func, bool } from 'prop-types';

function FormInput({
  id,
  type,
  placeholder,
  value,
  onChange,
  autoComplete,
  required = false,
}) {
  return (
    <input
      className="w-full h-[42px] border border-[#848484] outline-none pl-2 rounded"
      id={id}
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      onChange={onChange}
      autoComplete={autoComplete}
      required={required}
    />
  );
}

FormInput.propTypes = {
  id: string.isRequired,
  type: string.isRequired,
  placeholder: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  autoComplete: string,
  required: bool,
};

export default FormInput;
