import ReadingStateFilter from './ReadingStateFilter';
import { createArgTypesControl } from '../../../utils/storybook';

let readingState = '전체';

const metaConfig = {
  title: 'components/ReadingStateFilter',
  component: ReadingStateFilter,
  tags: ['autodocs'],
  args: {
    onClick: (e) => {
      const button = e.target.closest('button');
      if (!button) return;

      readingState = button.innerText;
    },
    readingState,
    isLoading: false,
  },
  argTypes: {
    onClick: createArgTypesControl(),
    readingState: createArgTypesControl(),
    isLoading: createArgTypesControl('boolean'),
  },
};

export default metaConfig;

export const Base = {
  args: {},
};
Base.storyName = 'ReadingStateFilter';
