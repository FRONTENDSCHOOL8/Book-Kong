import Label from './Label';
import { createArgTypesControl } from '../../../utils/storybook';

const id = crypto.randomUUID;

const metaConfig = {
  title: 'components/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    htmlFor: id,
    children: ['라벨'],
    className: '',
  },
  argTypes: {
    htmlFor: createArgTypesControl(),
    children: createArgTypesControl('array'),
    className: createArgTypesControl(),
  },
};

export default metaConfig;

export const Base = {
  args: {},
};
Base.storyName = 'Label';
