import SmallHeader from './SmallHeader';
import { createArgTypesControl } from '../../../utils/storybook';

const metaConfig = {
  title: 'components/SmallHeader',
  component: SmallHeader,
  tags: ['autodocs'],
  args: { title: '제목' },
  argTypes: {
    title: createArgTypesControl(),
  },
};

export default metaConfig;

export const BookRegistPgHeader = {
  args: {
    title: '직접 입력하기',
    formId: 'book-register',
  },
  argTypes: {
    formId: createArgTypesControl(),
  },
};
BookRegistPgHeader.storyName = '책 등록 페이지 헤더';
