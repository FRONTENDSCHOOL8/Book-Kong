import TextInput from './TextInput';

const metaConfig = {
  title: 'components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    id: 'text',
    name: 'text',
    value: '',
    placeholder: '텍스트 인풋입니다.',
  },
};

export default metaConfig;

export const Base = {
  args: {},
};
Base.storyName = '텍스트 인풋';
