import BookCoverInput from './BookCoverInput';

const metaConfig = {
  title: 'components/BookCoverInput',
  component: BookCoverInput,
  tags: ['autodocs'],
  args: {},
};

export default metaConfig;

export const Example = {
  args: {
    title: '책만 보는 바보',
    cover: 'https://image.aladin.co.kr/product/59/42/cover200/8943305842_2.jpg',
  },
};
Example.storyName = 'BookCoverInput';
