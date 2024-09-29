/**
 *
 * @param { * } data 모든 type의 data
 * @returns { string } Parameter로 들어간 data의 type을 반환
 */
function getType(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}

export default getType;
