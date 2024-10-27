import ReadingStateButtons from './ReadingStateButtons';
import { createArgTypesControl } from '../../../utils/storybook';

let status = '완독';

// 스토리북 내에서 함수 작동 안 함. 나중에 원인 파악하고 해결 필요.
// const onChange = (e) => {
//   const input = e.target.closest('input');

//   if (!input) return;

//   status = input.value;
// };

const metaConfig = {
  title: 'components/ReadingStateButtons',
  component: ReadingStateButtons,
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

Base.storyName = 'ReadingStateButtons';
