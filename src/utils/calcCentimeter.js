// cm 계산식
export default function calcCentimeter(page, standard, decimal) {
  if (page >= 240) {
    const centimeters = (page * standard).toFixed(decimal);
    return centimeters;
  } else {
    const centimeters = (page * standard).toFixed(decimal);
    return centimeters;
  }
}
