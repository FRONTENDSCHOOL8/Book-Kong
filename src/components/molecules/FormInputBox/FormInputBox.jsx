import { string, func, bool } from 'prop-types';
import Label from '../../atoms/Label/Label';
import FormInput from '../../atoms/FormInput/FormInput';

function FormInputBox({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  name,
  autoComplete,
  required,
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <div>
        <FormInput
          className="w-full h-[42px] border border-[#848484] outline-none pl-2 rounded"
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required={required}
        />
      </div>
    </div>
  );
}

FormInputBox.propTypes = {
  label: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  placeholder: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  autoComplete: string,
  required: bool,
};

export default FormInputBox;
