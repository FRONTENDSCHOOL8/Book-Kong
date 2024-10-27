import PageReadInput from './PageReadInput';
import { createArgTypesControl } from '../../../utils/storybook';

const metaConfig = {
  title: 'components/PageReadInput',
  component: PageReadInput,
  tags: ['autodocs'],
  args: {
    id: 'default',
    name: 'default',
    value: 0,
  },
  argTypes: {
    id: createArgTypesControl(),
    name: createArgTypesControl(),
    value: createArgTypesControl('number'),
  },
};

export default metaConfig;

export const Base = {
  args: {},
};

Base.storyName = 'PageReadInput';
