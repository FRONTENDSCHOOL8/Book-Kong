import SmallHeader from './SmallHeader';

const metaConfig = {
  title: 'components/SmallHeader',
  component: SmallHeader,
  tags: ['autodocs'],
  args: { title: '제목' },
};

export default metaConfig;

export const Base = {
  args: { title: '메모' },
};
Base.storyName = '메모';
