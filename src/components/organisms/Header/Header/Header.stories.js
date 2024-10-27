import Header from './Header';
import { createArgTypesControl } from '../../../utils/storybook';

const metaConfig = {
  title: 'components/Header',
  component: Header,
  tags: ['autodocs'],
  args: {},
};

export default metaConfig;

export const SmallHeader = {
  args: {
    title: '직접 입력하기',
    formId: 'book-register',
  },
  argTypes: {
    title: createArgTypesControl(),
    formId: createArgTypesControl(),
  },
};
SmallHeader.storyName = 'SmallHeader';
