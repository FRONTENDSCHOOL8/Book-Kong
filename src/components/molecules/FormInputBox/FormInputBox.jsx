import { string, func } from 'prop-types';
import Label from '../../atoms/Label/Label';
import FormInput from '../../atoms/FormInput/FormInput';

function FormInputBox({ label, id, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-sm font-normal">
        {label}
      </Label>
      <div>
        <FormInput
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

FormInputBox.propTypes = {
  label: string.isRequired,
  id: string.isRequired,
  type: string.isRequired,
  placeholder: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
};

export default FormInputBox;
