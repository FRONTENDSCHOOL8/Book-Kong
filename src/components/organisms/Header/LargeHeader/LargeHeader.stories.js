import LargeHeader from './LargeHeader';

const metaConfig = {
  title: 'components/LargeHeader',
  component: LargeHeader,
  tags: ['autodocs'],
  args: { title: '제목' },
};

export default metaConfig;

export const Base = {
  args: { title: '서재' },
};
Base.storyName = '서재 헤더';
