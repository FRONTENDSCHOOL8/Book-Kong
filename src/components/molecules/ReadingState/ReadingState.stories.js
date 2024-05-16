import ReadingState from './ReadingState';
import { createArgTypesControl } from '../../../utils/storybook';

let status = '완독';

// 현재 작동 안 함. 수정 요.
// const onChange = (e) => {
//   const input = e.target.closest('input');

//   if (!input) return;

//   status = input.value;
// };

const metaConfig = {
  title: 'components/ReadingState',
  component: ReadingState,
  tags: ['autodocs'],
  args: {
    status,
    // onChange,
  },
  argTypes: {
    status: createArgTypesControl(),
    // onChange: createArgTypesControl(),
  },
};

export default metaConfig;

export const Base = {
  args: {},
};

Base.storyName = 'ReadingState';
