import ExpectTextarea from './ExpectTextarea';
import { createArgTypesControl } from '../../../utils/storybook';

const metaConfig = {
  title: 'components/ExpectTextarea',
  component: ExpectTextarea,
  tags: ['autodocs'],
  args: {
    id: 'default',
    name: 'default',
    value: '',
  },
  argTypes: {
    id: createArgTypesControl(),
    name: createArgTypesControl(),
    value: createArgTypesControl(),
  },
};

export default metaConfig;

export const Base = {
  args: {},
};

Base.storyName = 'ExpectTextarea';
