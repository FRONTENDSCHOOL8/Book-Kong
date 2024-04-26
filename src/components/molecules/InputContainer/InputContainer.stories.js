import { createArgTypesControl } from '../../../utils/StoryBook';
import InputContainer from './InputContainer';

const metaConfig = {
  title: 'components/InputContainer',
  component: InputContainer,
  tags: ['autodocs'],
  args: {
    as: 'div',
    // 다른 스토리에서 쓸 때 이 'flex gap-2' 값 적용하고 싶으면 다른 스토리에서 args.className 값으로 'flex gap-2'을 포함한 string 값을 써줘야 함.
    className: 'flex items-center gap-2',
    labelProps: {
      content: '라벨',
      className: 'contents-md-md text-grayscale-900 w-16',
    },
    inputProps: {
      type: 'text',
      className:
        'px-3 py-2 contents-md text-grayscale-900 bg-grayscale-white border border-grayscale-400 rounded w-[252px] h-[36px]',
    },
    restProps: {},
  },
  argTypes: {
    as: createArgTypesControl('text'),
    className: createArgTypesControl('text'),
    children: createArgTypesControl('array'),
    labelProps: createArgTypesControl('object'),
    inputProps: createArgTypesControl('object'),
    restProps: createArgTypesControl('object'),
  },
};

const defaultInputProps = metaConfig.args.inputProps;
const defaultLabelProps = metaConfig.args.labelProps;

export default metaConfig;

export const Base = {
  args: {
    inputProps: {
      ...defaultInputProps,
      placeholder: 'Placeholder입니다.',
    },
  },
};
Base.storyName = '기본 값';

export const Date = {
  args: {
    inputProps: {
      ...defaultInputProps,
      type: 'date',
      className:
        'px-3 py-2 contents-sm-md text-grayscale-900 bg-grayscale-white border border-grayscale-400 rounded w-[128px] h-[36px]',
    },
    labelProps: {
      ...defaultLabelProps,
      content: '독서 기간',
    },
  },
};
Date.storyName = '독서 기간';
