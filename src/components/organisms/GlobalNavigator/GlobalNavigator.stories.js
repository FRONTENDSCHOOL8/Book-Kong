import GlobalNavigator from './GlobalNavigator';
import { withRouter } from 'storybook-addon-react-router-v6';

const metaConfig = {
  title: 'components/GlobalNavigator',
  component: GlobalNavigator,
  decorators: [withRouter],
  tags: ['autodocs'],
  args: {},
};

export default metaConfig;

export const Base = {
  args: {},
};
Base.storyName = 'GNB';
