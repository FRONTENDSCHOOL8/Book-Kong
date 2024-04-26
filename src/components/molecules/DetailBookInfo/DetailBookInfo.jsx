import {} from 'prop-types';

function DetailBookInfo() {
  return (
    <div className="px-4 mt-4 mb-8 bg-grayscale-white" id="bookInfo">
      <h4 className="mt-10 contents-lg-md text-grayscale-400">책 소개</h4>
      <p className="mt-4 contents-sm -webkit-line-clamp:20 ">
        인간관계는 친구를 만들고 적을 만들지 않는 것에서 시작된다. 『데일 카네기
        인간관계론』은 이런 인간관계의 핵심을 꿰뚫는다. “친구를 만들고, 사람을
        설득하는 법”이라는 제목으로 1936년 출간된 데일 카네기의 책은 80년 넘도록
        전 세계 수많은 사람에게 영향을 끼쳤다. 이후에 나온 모든 자기계발서가 이
        책의 영향을 받았다고 해도 과언이 아니다. <br />
        <br />
        세계적인 투자자 워런 버핏의 인생을 바꾼 책이자, 누구나 꼭 읽어야 할
        책이기도 하다. 『데일 카네기 인간관계론』은 가장 단순하고 실용적인
        원칙들로 복잡한 인간관계에 대한 우리의 고민을 명쾌하게 해결한다.
        <br />
        <br />이 책은 1936년 출간된 초판을 완역해 원전의 맛을 살렸다. 데일
        카네기가 그 당시 무엇을 보고 어떤 생각을 하며 이 책을 썼는지 이해할 수
        있게 된 셈이다. 카네기의 생생한 말과 함께 시대를 초월하고 지역을
        뛰어넘은 세계적인 베스트셀러를 만나보자.
      </p>
      <span className="block mt-12 contents-md-md text-grayscale-400">
        쪽 수
      </span>
      <p className="mt-4 contents-sm">239 쪽</p>
      <span className="block mt-12 contents-md-md text-grayscale-400">
        ISBN
      </span>
      <p className="mt-4 contents-sm">9791187142560</p>
      <span className="block mt-12 contents-md-md text-grayscale-400">
        출간일
      </span>
      <p className="mt-4 contents-sm">2022-02-15</p>
    </div>
  );
}

DetailBookInfo.propTypes = {};

export default DetailBookInfo;
