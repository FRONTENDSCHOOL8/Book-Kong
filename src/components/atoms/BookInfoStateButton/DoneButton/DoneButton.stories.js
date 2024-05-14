import { createArgTypesControl } from '../../../../utils/storybook';
import DoneButton from './DoneButton';

let status = '완독';
let isActive = status === '완독';

// 현재 작동 안 함. 수정 요.
// const onClick = (e) => {
//   e.preventDefault();
//   const button = e.target.closest('button');
//   if (!button) return;

//   isActive = !isActive;
// };

const metaConfig = {
  title: 'components/DoneButton',
  component: DoneButton,
  tags: ['autodocs'],
  args: {
    isActive,
  },
  argTypes: {
    isActive: createArgTypesControl('boolean'),
  },
};

export default metaConfig;

// export const Base = {
//   args: {
//     onClick,
//   },
//   argTypes: {
//     onClick: createArgTypesControl(),
//   },
// };

// Base.storyName = '인터랙티브 완독 버튼';

export const Inactive = {
  args: {
    isActive: false,
  },
};

Inactive.storyName = '비활성화 상태';

export const Active = {
  args: {
    isActive: true,
  },
};

Active.storyName = '활성화 상태';
