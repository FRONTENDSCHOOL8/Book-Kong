import { createArgTypesControl } from '../../../utils/StoryBook';
import A11yHidden from './A11yHidden';

const metaConfig = {
  title: 'components/A11yHidden',
  component: A11yHidden,
  tags: ['autodocs'],
  args: {
    as: 'span',
    className: '',
    restProps: {},
  },
  argTypes: {
    as: createArgTypesControl('text'),
    className: createArgTypesControl('text'),
    restProps: createArgTypesControl('object'),
  },
};

export default metaConfig;

export const HiddenH2 = {
  args: {
    as: 'h2',
  },
};
HiddenH2.storyName = '감춰진 h2 요소';
