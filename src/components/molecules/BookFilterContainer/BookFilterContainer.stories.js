import BookFilterContainer from './BookFilterContainer';
import { createArgTypesControl } from '../../../utils/storybook';

let filterType = '전체';

const metaConfig = {
  title: 'components/BookFilterContainer',
  component: BookFilterContainer,
  tags: ['autodocs'],
  args: {
    onClick: (e) => {
      const button = e.target.closest('button');
      if (!button) return;

      filterType = button.innerText;
    },
    filter: filterType,
    isLoading: false,
  },
  argTypes: {
    onClick: createArgTypesControl(),
    filter: createArgTypesControl(),
    isLoading: createArgTypesControl('boolean'),
  },
};

export default metaConfig;

export const Base = {
  args: {},
};
Base.storyName = 'BookFilterContainer';
