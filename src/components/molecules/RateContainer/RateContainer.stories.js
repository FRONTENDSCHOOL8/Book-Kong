import { createArgTypesControl } from '../../../utils/StoryBook';
import RatesContainer from './RatesContainer';

const metaConfig = {
  title: 'components/RatesContainer',
  component: RatesContainer,
  tags: ['autodocs'],
  args: {
    as: 'div',
    className: 'flex items-center gap-2',
    labelProps: {
      content: '평점',
      className: 'contents-md-bold text-grayscale-900 w-16',
    },
    selectProps: {
      className:
        'w-[272px] h-[48px] bg-grayscale-white border border-grayscale-400',
    },
    restProps: {},
  },
  argTypes: {
    as: createArgTypesControl('text'),
    className: createArgTypesControl('text'),
    labelProps: createArgTypesControl('object'),
    selectProps: createArgTypesControl('object'),
    restProps: createArgTypesControl('object'),
  },
};

export default metaConfig;

export const Base = {};
Base.storyName = '기본 값';
