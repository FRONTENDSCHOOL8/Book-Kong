import { string, number, oneOfType, func } from 'prop-types';

function TextInput({ id, name, value, placeholder = '', onChange }) {
  return (
    <input
      id={id}
      type="text"
      name={name}
      defaultValue={value}
      className="px-3 py-2 contents-sm-bold text-grayscale-900 bg-grayscale-white border border-grayscale-400 rounded w-full h-[48px]"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

TextInput.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  value: oneOfType([string, number]),
  placeholder: string,
  onChange: func,
};

export default TextInput;
