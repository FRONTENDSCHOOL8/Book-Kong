import { getStaticImage } from '../../../utils/getStaticAsset';

// 나중에 수정 필요. 현재는 시간이 없어서 디자인만 구현.
function ReviewInput() {
  const emptyStarImg = getStaticImage('icons/star=default.svg');
  const fullStarImg = getStaticImage('icons/star=selected.svg');

  return (
    <div className="flex gap-1 flex-grow justify-center">
      <img src={fullStarImg} alt="별" />
      <img src={fullStarImg} alt="별" />
      <img src={fullStarImg} alt="별" />
      <img src={emptyStarImg} alt="별" />
      <img src={emptyStarImg} alt="별" />
    </div>
  );
}

export default ReviewInput;
