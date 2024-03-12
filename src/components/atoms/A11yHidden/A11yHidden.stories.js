import { createArgTypesControl } from '../../../utils/StoryBook';
import A11yHidden from './A11yHidden';

const metaConfig = {
  title: 'components/A11yHidden',
  component: A11yHidden,
  tags: ['autodocs'],
  args: {
    as: 'span',
    focusable: false,
    className: '',
    restProps: {},
  },
  argTypes: {
    as: createArgTypesControl('text'),
    focusable: createArgTypesControl('boolean'),
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

export const FocusedHiddenButton = {
  args: {
    as: 'button',
    focusable: true,
    className:
      'text-grayscale-white contents-lg focus:border focus:border-grayscale-500 focus:rounded-md focus:bg-primary-500 focus:w-[342px] focus:h-[52px]',
    children: ['버튼'],
  },
};
FocusedHiddenButton.storyName = 'Focus 된 button 요소';
