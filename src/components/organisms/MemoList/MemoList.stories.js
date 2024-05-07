import MemoList from './MemoList';

// 이 레벨의 테스트를 위해선 msw가 필요하겠네요.
// https://mswjs.io/
// https://storybook.js.org/addons/msw-storybook-addon
const metaConfig = {
  title: 'components/MemoList',
  component: MemoList,
  tags: ['autodocs'],
  args: {},
};

export default metaConfig;

export const Base = {
  args: {},
};
Base.storyName = 'MemoList';
