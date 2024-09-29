import StateFilterBtn from './StateFilterBtn';
import { createArgTypesControl } from '../../../utils/storybook';

const metaConfig = {
  title: 'components/StateFilterBtn',
  component: StateFilterBtn,
  tags: ['autodocs'],
  args: {
    onClick: () => {},
    readingState: '전체',
    children: '전체',
  },
  argTypes: {
    onClick: createArgTypesControl(),
    readingState: createArgTypesControl(),
    children: createArgTypesControl(),
  }
};

export default metaConfig;

export const DoneFilterBtn = {
  args: {
    readingState: '완독',
    children: '완독',
  },
};
DoneFilterBtn.storyName = '완독 필터 버튼';

export const ReadingFilterBtn = {
  args: {
    readingState: '독서중',
    children: '독서중',
  },
};
ReadingFilterBtn.storyName = '독서중 필터 버튼';

export const WishFilterBtn = {
  args: {
    readingState: '희망 도서',
    children: '희망 도서',
  },
};
WishFilterBtn.storyName = '희망 도서 필터 버튼';