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

export const Base = {
  args: {},
};
Base.storyName = '기본 A11yHidden';
