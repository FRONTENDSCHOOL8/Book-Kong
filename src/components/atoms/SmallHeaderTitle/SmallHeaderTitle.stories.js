import SmallHeaderTitle from './SmallHeaderTitle';

const metaConfig = {
  title: 'components/SmallHeaderTitle',
  component: SmallHeaderTitle,
  tags: ['autodocs'],
  args: { title: '제목' },
};

export default metaConfig;

export const Base = {
  args: { title: '메모' },
};
Base.storyName = '메모';
