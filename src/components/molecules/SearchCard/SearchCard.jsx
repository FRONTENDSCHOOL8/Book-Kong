import { motion } from 'framer-motion';
function SearchCard() {
  const searchCardVar = {
    start: { y: 20 },
    end: { y: 0 },
  };
  return (
    <motion.li
      variants={searchCardVar}
      className="rounded-lg overflow-hidden list-shadow"
    >
      <a className="flex" href="/">
        <img
          className="w-24 h-full"
          src="/images/etc/44d1489f7c0838c7c5dc153ddbf9235d.jpeg"
          alt=""
        />
        <div className="flex flex-col justify-between bg-grayscale-white py-4 pr-6 pl-4">
          <div className="flex flex-col gap-1">
            <h3 className="contents-sm-bold">
              데일 카네기 인간관계론 : 인간관계 바이블(원본 완역판)
            </h3>
            <p className="contents-xs text-grayscale-400">
              데일 카네기 저자(글) · 이미숙 번역
            </p>
          </div>
          <span className="contents-xs text-grayscale-700 ">현대지성</span>
        </div>
      </a>
    </motion.li>
  );
}

export default SearchCard;
