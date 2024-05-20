export default function getCombinedClassName(
  defaultClassName,
  customClassName
) {
  const rawClassName = `${defaultClassName.trim()} ${customClassName.trim()}`;
  const rawClassNameArr = rawClassName.split(' ');

  const finalClassName = rawClassNameArr.reduceRight((acc, cur) => {
    if (acc) {
      const accPrefixArr = acc.split('-');
      const curPrefix = cur.split('-')[0];

      if (accPrefixArr.includes(curPrefix)) return acc;
    }

    return acc + ' ' + cur;
  });

  return finalClassName.trim();
}
