import TextInputLi from './TextInputLi';

const metaConfig = {
  title: 'components/TextInputLi',
  component: TextInputLi,
  tags: ['autodocs'],
  args: {
    id: 'text',
    label: '라벨',
    name: 'text',
    value: '',
    placeholder: '텍스트 인풋입니다.',
  },
};

export default metaConfig;

export const Base = {
  args: {},
};
Base.storyName = '텍스트 인풋 컨테이너';
