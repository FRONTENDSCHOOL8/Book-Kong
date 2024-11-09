import DoneButton from './DoneButton';
import { createArgTypesControl } from '../../../../utils/storybook';

let isChecked = true;

// 현재 작동 안 함. 수정 요.
// const onChange = (e) => {
//   isChecked = !isChecked;
// };

const metaConfig = {
  title: 'components/DoneButton',
  component: DoneButton,
  tags: ['autodocs'],
  args: {
    isChecked,
  },
  argTypes: {
    isChecked: createArgTypesControl('boolean'),
  },
};

export default metaConfig;

// export const Base = {
//   args: {
//     onChange,
//   },
//   argTypes: {
//     onChange: createArgTypesControl(),
//   },
// };

// Base.storyName = '인터랙티브 완독 버튼';

export const Inactive = {
  args: {
    isChecked: false,
  },
};

Inactive.storyName = '비활성화 상태';

export const Active = {
  args: {
    isChecked: true,
  },
};

Active.storyName = '활성화 상태';
