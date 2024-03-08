export function getRandomNumber(min, max) {
  // min부터 max까지의 랜덤한 정수를 생성합니다.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
