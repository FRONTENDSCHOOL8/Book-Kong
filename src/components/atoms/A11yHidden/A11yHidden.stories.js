import { createArgTypesControl } from '../../../utils/storybook';
import A11yHidden from './A11yHidden';

const metaConfig = {
  title: 'components/A11yHidden',
  component: A11yHidden,
  tags: ['autodocs'],
  args: {
    as: 'span',
    children: 'A11yHidden 컴포넌트',
  },
  argTypes: {
    as: createArgTypesControl('text'),
    children: createArgTypesControl('array'),
  },
};

export default metaConfig;

export const HiddenH2 = {
  args: {
    as: 'h2',
    children: '감춰진 h2 요소',
  },
};
HiddenH2.storyName = '감춰진 h2 요소';
