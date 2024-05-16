import ReadingButton from './ReadingButton';
import { createArgTypesControl } from '../../../../utils/storybook';

let isChecked = true;

// 현재 작동 안 함. 수정 요.
// const onChange = (e) => {
//   isChecked = !isChecked;
// };

const metaConfig = {
  title: 'components/ReadingButton',
  component: ReadingButton,
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

// Base.storyName = '인터랙티브 독서중 버튼';

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
