import RatingContainer from './RatingContainer';
import { createArgTypesControl } from '../../../utils/storybook';

const metaConfig = {
  title: 'components/RatingContainer',
  component: RatingContainer,
  tags: ['autodocs'],
  args: {
    label: '별점',
  },
  argTypes: {
    label: createArgTypesControl(),
  },
};

export default metaConfig;

export const Base = {
  args: {},
};

Base.storyName = 'RatingContainer';
