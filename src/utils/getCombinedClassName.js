export default function getCombinedClassName(
  defaultClassName,
  customClassName
) {
  const rawClassName = `${defaultClassName.trim()} ${customClassName.trim()}`;
  const rawClassNameArr = rawClassName.split(' ');

  const finalClassName = rawClassNameArr.reduceRight((acc, cur) => {
    if (acc) {
      const accClassNameArr = acc.split(' ');

      for (const accClassName of accClassNameArr) {
        if (accClassName.split('-')[0] === cur.split('-')[0]) return acc;
      }
    }

    return acc + ' ' + cur;
  });

  return finalClassName.trim();
}
