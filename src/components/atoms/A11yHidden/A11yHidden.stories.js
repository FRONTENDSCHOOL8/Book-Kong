import A11yHidden from './A11yHidden';

const metaConfig = {
  title: 'components/A11yHidden',
  component: A11yHidden,
  tags: ['autodocs'],
  args: {
    as: 'span',
    focusable: false,
    className: '',
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
    className: 'focus:border focus:border-solid focus:border-primary-500',
  },
};
HiddenH2.storyName = 'Focus 된 button 요소';
