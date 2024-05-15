import ReadingState from './ReadingState';
import { createArgTypesControl } from '../../../utils/storybook';

let status = '완독';

// 현재 작동 안 함. 수정 요.
// const onClick = (e) => {
//   e.preventDefault();
//   const button = e.target.closest('button');
//   if (!button) return;

//   status = button.innerText;
// };

const metaConfig = {
  title: 'components/ReadingState',
  component: ReadingState,
  tags: ['autodocs'],
  args: {
    status,
    // onClick,
  },
  argTypes: {
    status: createArgTypesControl(),
    // onClick: createArgTypesControl(),
  },
};

export default metaConfig;

export const Base = {
  args: {},
};

Base.storyName = 'ReadingState';
