import { memo } from 'react';
import { getStaticImage } from '../../../utils/getStaticAsset';

const SortingIcon = memo(function SortingIcon() {
  return <img src={getStaticImage('icons/sort.svg')} alt="" />;
});

export default SortingIcon;
