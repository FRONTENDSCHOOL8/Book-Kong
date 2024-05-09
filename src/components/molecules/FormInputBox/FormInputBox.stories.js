import FormInputBox from './FormInputBox';
import { createArgTypesControl } from '../../../utils/storybook';

const onChangeEmail = () => {
  return 'change e-mail';
};

const metaConfig = {
  title: 'components/FormInputBox',
  component: FormInputBox,
  tags: ['autodocs'],
  args: {},
};

export default metaConfig;

export const EmailInputBox = {
  args: {
    label: '이메일',
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: '이메일을 입력해주세요',
    value: 'bookkong@fes8.dev',
    onChange: onChangeEmail,
  },
  argTypes: {
    label: createArgTypesControl(),
    id: createArgTypesControl(),
    name: createArgTypesControl(),
    type: createArgTypesControl(),
    placeholder: createArgTypesControl(),
    value: createArgTypesControl(),
    onChange: createArgTypesControl(),
  },
};
EmailInputBox.storyName = '이메일 인풋 컨테이너';
