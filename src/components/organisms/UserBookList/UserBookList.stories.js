import UserBookList from './UserBookList';
import { createArgTypesControl } from '../../../utils/storybook';

const metaConfig = {
  title: 'components/UserBookList',
  component: UserBookList,
  tags: ['autodocs'],
  args: {
    data: [
      {
        id: 'RECORD_ID',
        collectionId: 'msuc2divt2x4pye',
        collectionName: 'library',
        created: '2022-01-01 01:00:00.123Z',
        updated: '2022-01-01 23:59:59.456Z',
        user_id: 'RELATION_RECORD_ID',
        title: 'test',
        cover: 'filename.jpg',
        author: 'test',
        publisher: 'test',
        description: 'test',
        isbn_13: 'test',
        total_page: 123,
        url: 'https://example.com',
        status: '완독',
        start_date: '2022-01-01 10:00:00.123Z',
        end_date: '2022-01-01 10:00:00.123Z',
        score: 123,
        expectation_score: 123,
        read_page: 123,
        expectation_description: 'test',
      },
    ],
    isLoading: false,
  },
  argTypes: {
    data: createArgTypesControl('array'),
    isLoading: createArgTypesControl('boolean'),
  },
};

export default metaConfig;

export const Base = {
  args: {},
};
Base.storyName = 'UserBookList';
