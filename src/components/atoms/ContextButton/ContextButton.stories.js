import ContextButton from './ContextButton';

const metaConfig = {
  title: 'components/ContextButton',
  component: ContextButton,
  tags: ['autodocs'],
  args: {},
};

export default metaConfig;

export const Horizontal = {
  args: {
    shape: 'horizontal',
    alt: '수평 방향 컨텍스트 버튼',
  },
};
Horizontal.storyName = '수평 방향 컨텍스트 버튼';

export const Vertical = {
  args: {
    shape: 'vertical',
    alt: '수직 방향 컨텍스트 버튼',
  },
};
Vertical.storyName = '수직 방향 컨텍스트 버튼';
