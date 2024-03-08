import Label from './Label';

const id = crypto.randomUUID;

const metaConfig = {
  title: 'components/Label',
  component: Label,
  tags: ['autodocs'],
  args: { children: 'Label', id, hiddenLabel: false },
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
