import { createArgTypesControl } from '../../../utils/storybook';
import Label from './Label';

const id = crypto.randomUUID;

const metaConfig = {
  title: 'components/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    htmlFor: id,
    isHidden: false,
  },
  argTypes: {
    htmlFor: createArgTypesControl(),
    isHidden: createArgTypesControl('boolean'),
  },
};

export default metaConfig;

export const LabelShown = {
  args: {
    children: '일반 label',
  },
};
LabelShown.storyName = '일반 label';

export const LabelHidden = {
  args: {
    children: '숨겨진 label',
    isHidden: true,
  },
};
LabelHidden.storyName = '숨겨진 label';
