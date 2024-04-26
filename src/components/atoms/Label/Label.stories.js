import { createArgTypesControl } from '../../../utils/StoryBook';
import Label from './Label';

const id = crypto.randomUUID;

const metaConfig = {
  title: 'components/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: ['Label'],
    className: 'contents-md-md text-grayscale-900 w-16',
    htmlFor: id,
    hiddenLabel: false,
    restProps: {},
  },
  argTypes: {
    children: createArgTypesControl('array'),
    className: createArgTypesControl(),
    htmlFor: createArgTypesControl(),
    hiddenLabel: createArgTypesControl('boolean'),
    restProps: createArgTypesControl('object'),
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
    hiddenLabel: true,
  },
};
LabelHidden.storyName = '숨겨진 label';
